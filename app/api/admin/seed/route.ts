// cardit/app/api/admin/seed/route.ts
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { isAdmin } from "@/lib/auth";
import { adminSql, ensureSchema, SEEDED_KEY } from "@/lib/db";
import { seedServiceRows, seedTeamRows } from "@/lib/content";

type Row = Record<string, unknown>;

async function insertAll(sql: NonNullable<ReturnType<typeof adminSql>>, table: string, rows: Row[]) {
  for (const row of rows) {
    const cols = Object.keys(row);
    await sql.query(
      `INSERT INTO ${table} (${cols.join(",")}) VALUES (${cols.map((_, i) => "$" + (i + 1)).join(",")}) ON CONFLICT DO NOTHING`,
      cols.map((c) => row[c])
    );
  }
}

/** Copie les 12 pôles et l'équipe du code vers la base (une seule fois). */
export async function POST() {
  if (!(await isAdmin())) return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  const sql = adminSql();
  if (!sql) return NextResponse.json({ error: "DATABASE_URL manquante." }, { status: 503 });

  try {
    await ensureSchema(sql);
    const done = (await sql.query(`SELECT 1 FROM cardit_settings WHERE key = $1`, [SEEDED_KEY])) as Row[];
    if (done.length) return NextResponse.json({ error: "Le contenu par défaut a déjà été importé." }, { status: 409 });

    await insertAll(sql, "cardit_services", seedServiceRows());
    await insertAll(sql, "cardit_team", seedTeamRows());
    await sql.query(`INSERT INTO cardit_settings (key, value) VALUES ($1, '1') ON CONFLICT DO NOTHING`, [SEEDED_KEY]);
    revalidateTag("content", "max");
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[seed]", e);
    return NextResponse.json(
      { error: "Import impossible.", detail: e instanceof Error ? e.message.slice(0, 240) : undefined },
      { status: 500 }
    );
  }
}
