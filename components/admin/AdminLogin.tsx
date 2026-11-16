"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";

export default function AdminLogin({ configured }: { configured: boolean }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setBusy(false);
    if (res.ok) return router.refresh();
    const data = await res.json().catch(() => ({}));
    setError(data.error ?? "Connexion impossible.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-5">
      <form onSubmit={submit} className="w-full max-w-sm rounded-2xl border border-line bg-white p-7 shadow-card">
        <Logo />
        <h1 className="mt-6 font-display text-xl font-semibold">Espace administration</h1>
        <p className="mt-1 text-sm text-steel">Saisissez le mot de passe pour modifier le contenu du site.</p>

        {!configured && (
          <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
            Aucun mot de passe n&apos;est défini. Ajoutez la variable <code>ADMIN_PASSWORD</code> dans Vercel, puis redéployez.
          </p>
        )}

        <label className="mt-6 block text-sm font-medium" htmlFor="pw">Mot de passe</label>
        <input
          id="pw"
          type="password"
          autoFocus
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-line px-3.5 py-2.5 text-sm outline-none focus:border-cyan"
        />
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        <button disabled={busy || !password} className="btn-primary mt-6 w-full disabled:opacity-50">
          {busy ? "Vérification…" : "Ouvrir l'administration"}
        </button>
      </form>
    </main>
  );
}
