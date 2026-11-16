import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { isAdmin } from "@/lib/auth";
import { adminSql } from "@/lib/db";
import { ENTITIES, type EntityKey } from "@/lib/entities";
import { cleanValues } from "@/lib/admin-values";

type Ctx = { params: { entity: string; id: string } };

function setup(params: Ctx["params"]) {
  if (!isAdmin()) return { ok: false as const, res: NextResponse.json({ error: "Non autorisé." }, { status: 401 }) };
  const cfg = ENTITIES[params.entity as EntityKey];
  const id = Number(params.id);
  if (!cfg || !Number.isInteger(id)) return { ok: false as const, res: NextResponse.json({ error: "Requête invalide." }, { status: 400 }) };
  const sql = adminSql();
  if (!sql) return { ok: false as const, res: NextResponse.json({ error: "DATABASE_URL manquante." }, { status: 503 }) };
  return { ok: true as const, cfg, sql, id };
}

export async function PUT(request: Request, { params }: Ctx) {
  const s = setup(params);
  if (!s.ok) return s.res;

  const body = await request.json().catch(() => null);
  const result = cleanValues(s.cfg, body);
  if ("error" in result) return NextResponse.json({ error: result.error }, { status: 400 });

  const cols = Object.keys(result.values);
  try {
    const rows = await s.sql.query(
      `UPDATE ${s.cfg.table} SET ${cols.map((c, i) => `${c} = $${i + 1}`).join(", ")} WHERE id = $${cols.length + 1} RETURNING *`,
      [...cols.map((c) => result.values[c]), s.id]
    );
    if (!rows.length) return NextResponse.json({ error: "Élément introuvable." }, { status: 404 });
    revalidateTag("content");
    return NextResponse.json({ row: rows[0] });
  } catch (e) {
    const msg = String((e as Error).message ?? "");
    if (msg.includes("duplicate key")) return NextResponse.json({ error: "Cette adresse de page existe déjà." }, { status: 409 });
    console.error("[admin:update]", e);
    return NextResponse.json({ error: "Enregistrement impossible." }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: Ctx) {
  const s = setup(params);
  if (!s.ok) return s.res;
  await s.sql.query(`DELETE FROM ${s.cfg.table} WHERE id = $1`, [s.id]);
  revalidateTag("content");
  return NextResponse.json({ success: true });
}
