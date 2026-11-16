import { NextResponse } from "next/server";
import { COOKIE, adminConfigured, checkPassword, cookieOptions, createToken } from "@/lib/auth";

// Freinage basique des essais répétés (par instance serverless).
const attempts = new Map<string, { n: number; t: number }>();

export async function POST(request: Request) {
  if (!adminConfigured()) {
    return NextResponse.json({ error: "ADMIN_PASSWORD n'est pas défini sur le serveur." }, { status: 503 });
  }
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "inconnu";
  const now = Date.now();
  const rec = attempts.get(ip);
  if (rec && now - rec.t < 15 * 60_000 && rec.n >= 8) {
    return NextResponse.json({ error: "Trop d'essais. Réessayez dans quelques minutes." }, { status: 429 });
  }

  let password = "";
  try {
    password = String((await request.json()).password ?? "");
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  if (!checkPassword(password)) {
    attempts.set(ip, { n: (rec && now - rec.t < 15 * 60_000 ? rec.n : 0) + 1, t: now });
    await new Promise((r) => setTimeout(r, 700));
    return NextResponse.json({ error: "Mot de passe incorrect." }, { status: 401 });
  }

  attempts.delete(ip);
  const res = NextResponse.json({ success: true });
  res.cookies.set(COOKIE, createToken(), cookieOptions);
  return res;
}
