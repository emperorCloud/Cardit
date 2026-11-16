import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { isAdmin } from "@/lib/auth";
import { blobConfigured, blobToken } from "@/lib/blob";

const MAX = 4 * 1024 * 1024; // limite de corps des fonctions Vercel : 4,5 Mo
const TYPES = ["image/png", "image/jpeg", "image/webp", "image/svg+xml", "image/gif", "image/avif"];

export async function POST(request: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  if (!blobConfigured()) {
    return NextResponse.json({ error: "Vercel Blob n'est pas connecté à ce projet." }, { status: 503 });
  }

  const form = await request.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof File)) return NextResponse.json({ error: "Aucun fichier reçu." }, { status: 400 });
  if (!TYPES.includes(file.type)) return NextResponse.json({ error: "Format non pris en charge (PNG, JPG, WebP, SVG, GIF, AVIF)." }, { status: 400 });
  if (file.size > MAX) return NextResponse.json({ error: "Image trop lourde (4 Mo maximum). Compressez-la d'abord." }, { status: 413 });

  const safe = file.name.replace(/[^a-zA-Z0-9._-]+/g, "-").slice(-80);
  try {
    const blob = await put(`cardit/${safe}`, file, { access: "public", addRandomSuffix: true, ...(blobToken() ? { token: blobToken() } : {}) });
    return NextResponse.json({ url: blob.url });
  } catch (e) {
    console.error("[upload]", e);
    return NextResponse.json({ error: "Échec de l'envoi vers Vercel Blob. Vérifiez que le store est en accès Public." }, { status: 502 });
  }
}
