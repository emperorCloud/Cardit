import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { isAdmin } from "@/lib/auth";
import { adminSql, ensureSchema } from "@/lib/db";
import { STARTER_POSTS, STARTER_PRODUCTS } from "@/lib/starter-content";

type Row = Record<string, unknown>;
const MARKER = "starter_content";

/** Importe les articles et offres d'exemple en brouillon (masqués) — une seule fois. */
export async function POST() {
  if (!isAdmin()) return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  const sql = adminSql();
  if (!sql) return NextResponse.json({ error: "DATABASE_URL manquante." }, { status: 503 });

  try {
    await ensureSchema(sql);
    const done = (await sql.query(`SELECT 1 FROM cardit_settings WHERE key = $1`, [MARKER])) as Row[];
    if (done.length) return NextResponse.json({ error: "Le contenu d'exemple a déjà été importé." }, { status: 409 });

    const today = new Date().toISOString().slice(0, 10);
    const insert = async (table: string, row: Row) => {
      const cols = Object.keys(row);
      await sql.query(
        `INSERT INTO ${table} (${cols.join(",")}) VALUES (${cols.map((_, i) => "$" + (i + 1)).join(",")}) ON CONFLICT DO NOTHING`,
        cols.map((c) => row[c])
      );
    };

    for (const p of STARTER_POSTS) await insert("cardit_posts", { ...p, image: "", published_at: today, visible: false });
    for (const [i, p] of STARTER_PRODUCTS.entries()) await insert("cardit_products", { ...p, image: "", url: "", position: (i + 1) * 10, visible: false });

    await sql.query(`INSERT INTO cardit_settings (key, value) VALUES ($1, '1') ON CONFLICT DO NOTHING`, [MARKER]);
    revalidateTag("content");
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[starter]", e);
    return NextResponse.json({ error: "Import impossible." }, { status: 500 });
  }
}
