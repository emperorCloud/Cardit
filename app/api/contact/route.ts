import { NextResponse } from "next/server";
import { Resend } from "resend";

// ⚠️ Tant que vous n'avez pas de domaine vérifié dans Resend :
//   - l'envoi doit se faire depuis onboarding@resend.dev
//   - le destinataire doit être l'adresse de votre compte Resend
const RECIPIENT_EMAIL = "emperordev706@gmail.com";
const SENDER_EMAIL = "CARDIT <onboarding@resend.dev>";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_CarditKEY;

  if (!apiKey) {
    console.error("RESEND_API_CarditKEY manquante dans les variables d'environnement.");
    return NextResponse.json({ error: "Configuration serveur manquante." }, { status: 500 });
  }

  let body: {
    name?: string;
    email?: string;
    company?: string;
    phone?: string;
    domain?: string;
    message?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { name, email, company, phone, domain, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Nom, email et message sont requis." }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family: sans-serif; line-height: 1.6; color: #12161C;">
      <h2 style="margin-bottom: 4px;">Nouveau message — site CARDIT</h2>
      <p style="color: #5B6774; margin-top: 0;">Reçu via le formulaire de contact du site.</p>
      <table style="margin-top: 16px; border-collapse: collapse;">
        <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Nom</td><td style="padding: 4px 0;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Email</td><td style="padding: 4px 0;">${escapeHtml(email)}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Entreprise</td><td style="padding: 4px 0;">${escapeHtml(company || "—")}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Téléphone</td><td style="padding: 4px 0;">${escapeHtml(phone || "—")}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Domaine</td><td style="padding: 4px 0;">${escapeHtml(domain || "—")}</td></tr>
      </table>
      <p style="margin-top: 16px; font-weight: bold;">Message :</p>
      <p style="white-space: pre-wrap; border-left: 3px solid #0FB4C4; padding-left: 12px;">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: email, // pour pouvoir répondre au visiteur en un clic
      subject: `Nouveau contact CARDIT — ${name}`,
      html,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json({ error: "Échec de l'envoi de l'email." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erreur inattendue lors de l'envoi:", err);
    return NextResponse.json({ error: "Erreur serveur inattendue." }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}