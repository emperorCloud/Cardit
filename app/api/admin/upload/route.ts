import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { isAdmin } from "@/lib/auth";

const MAX = 4 * 1024 * 1024; // limite de corps des fonctions Vercel : 4,5 Mo
const TYPES = ["image/png", "image/jpeg", "image/webp", "image/svg+xml", "image/gif", "image/avif"];

export async function POST(request: Request) {
  if (!isAdmin()) return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ error: "Vercel Blob n'est pas connecté (BLOB_READ_WRITE_TOKEN manquant)." }, { status: 503 });
  }

  const form = await request.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof File)) return NextResponse.json({ error: "Aucun fichier reçu." }, { status: 400 });
  if (!TYPES.includes(file.type)) return NextResponse.json({ error: "Format non pris en charge (PNG, JPG, WebP, SVG, GIF, AVIF)." }, { status: 400 });
  if (file.size > MAX) return NextResponse.json({ error: "Image trop lourde (4 Mo maximum). Compressez-la d'abord." }, { status: 413 });

  const safe = file.name.replace(/[^a-zA-Z0-9._-]+/g, "-").slice(-80);
  try {
    const blob = await put(`cardit/${safe}`, file, { access: "public", addRandomSuffix: true });
    return NextResponse.json({ url: blob.url });
  } catch (e) {
    console.error("[upload]", e);
    return NextResponse.json({ error: "Échec de l'envoi vers Vercel Blob." }, { status: 502 });
  }
}
