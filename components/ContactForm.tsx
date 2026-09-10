"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "./LanguageProvider";

const DOMAINS = {
  fr: [
    "Développement logiciel",
    "Solutions Entreprise",
    "Cloud & Infrastructure",
    "Réseaux & Systèmes",
    "Cybersécurité",
    "Data & Intelligence Artificielle",
    "Marketing Digital",
    "SEO & Visibilité",
    "Conseil & Audit",
    "Robotique & Systèmes Autonomes",
    "Formation",
    "Recherche & Innovation",
    "Autre / plusieurs pôles",
  ],
  en: [
    "Software Development",
    "Enterprise Solutions",
    "Cloud & Infrastructure",
    "Networks & Systems",
    "Cybersecurity",
    "Data & Artificial Intelligence",
    "Digital Marketing",
    "SEO & Visibility",
    "Consulting & Audit",
    "Robotics & Autonomous Systems",
    "Training",
    "Research & Innovation",
    "Other / multiple pillars",
  ],
} as const;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const { lang, t } = useLanguage();
  const f = t.contact.form;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      company: formData.get("company")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      domain: formData.get("domain")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Envoi échoué");

      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-cyan/30 bg-cyan/10 p-8 text-center">
        <p className="font-display text-lg font-bold text-charcoal">
          {f.sentTitle}
        </p>
        <p className="mt-2 text-sm text-charcoal/70">
          {f.sentDesc}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="rounded-sm border border-red-300 bg-red-50 p-4 text-sm text-red-700">
          {f.errorMessage}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={f.name} name="name" required />
        <Field label={f.email} name="email" type="email" required />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={f.company} name="company" />
        <Field label={f.phone} name="phone" type="tel" />
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-wide text-charcoal/60">
          {f.domain}
        </label>
        <select
          name="domain"
          className="w-full border-b border-charcoal/25 bg-transparent py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-cyan"
        >
          {DOMAINS[lang].map((domain) => (
            <option key={domain} value={domain}>
              {domain}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-wide text-charcoal/60">
          {f.message}
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full border-b border-charcoal/25 bg-transparent py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-cyan"
        />
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-primary">
        {status === "sending" ? f.sending : f.submit}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-wide text-charcoal/60">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border-b border-charcoal/25 bg-transparent py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-cyan"
      />
    </div>
  );
}
