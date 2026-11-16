import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { isAdmin } from "@/lib/auth";
import { adminSql, ensureSchema } from "@/lib/db";
import { ENTITIES, type EntityKey } from "@/lib/entities";
import { cleanValues } from "@/lib/admin-values";

type Ctx = { params: { entity: string } };

function setup(entity: string) {
  if (!isAdmin()) return { ok: false as const, res: NextResponse.json({ error: "Non autorisé." }, { status: 401 }) };
  const cfg = ENTITIES[entity as EntityKey];
  if (!cfg) return { ok: false as const, res: NextResponse.json({ error: "Type inconnu." }, { status: 404 }) };
  const sql = adminSql();
  if (!sql) return { ok: false as const, res: NextResponse.json({ error: "DATABASE_URL manquante : connectez Neon au projet." }, { status: 503 }) };
  return { ok: true as const, cfg, sql };
}

export async function GET(_req: Request, { params }: Ctx) {
  const s = setup(params.entity);
  if (!s.ok) return s.res;
  await ensureSchema(s.sql);
  const rows = await s.sql.query(`SELECT * FROM ${s.cfg.table} ORDER BY ${s.cfg.orderBy ?? "position, id"}`);
  return NextResponse.json({ rows });
}

export async function POST(request: Request, { params }: Ctx) {
  const s = setup(params.entity);
  if (!s.ok) return s.res;
  await ensureSchema(s.sql);

  const body = await request.json().catch(() => null);
  const result = cleanValues(s.cfg, body);
  if ("error" in result) return NextResponse.json({ error: result.error }, { status: 400 });

  const cols = Object.keys(result.values);
  try {
    const rows = await s.sql.query(
      `INSERT INTO ${s.cfg.table} (${cols.join(",")}) VALUES (${cols.map((_, i) => "$" + (i + 1)).join(",")}) RETURNING *`,
      cols.map((c) => result.values[c])
    );
    revalidateTag("content");
    return NextResponse.json({ row: rows[0] });
  } catch (e) {
    const msg = String((e as Error).message ?? "");
    if (msg.includes("duplicate key")) return NextResponse.json({ error: "Cette adresse de page existe déjà." }, { status: 409 });
    console.error("[admin:create]", e);
    return NextResponse.json({ error: "Enregistrement impossible." }, { status: 500 });
  }
}
