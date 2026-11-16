"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ExternalLink, LogOut, Pencil, Plus, Trash2, Upload, X } from "lucide-react";
import { ENTITIES, ENTITY_KEYS, type EntityConfig, type EntityKey, type Field } from "@/lib/entities";

type Row = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

export default function AdminDashboard({ dbReady, blobReady }: { dbReady: boolean; blobReady: boolean }) {
  const router = useRouter();
  const [tab, setTab] = useState<EntityKey>("blocks");
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Row | "new" | null>(null);
  const [notice, setNotice] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  const cfg = ENTITIES[tab];

  const flash = (type: "ok" | "err", text: string) => {
    setNotice({ type, text });
    setTimeout(() => setNotice(null), 4000);
  };

  const load = useCallback(async () => {
    if (!dbReady) return setLoading(false);
    setLoading(true);
    const res = await fetch(`/api/admin/${tab}`);
    if (res.status === 401) return router.refresh();
    const data = await res.json().catch(() => ({}));
    setRows(data.rows ?? []);
    if (!res.ok) flash("err", data.error ?? "Chargement impossible.");
    setLoading(false);
  }, [tab, dbReady, router]);

  useEffect(() => { load(); }, [load]);

  async function remove(row: Row) {
    if (!confirm(`Supprimer « ${row[cfg.titleField] || cfg.singular} » ? Cette action est définitive.`)) return;
    const res = await fetch(`/api/admin/${tab}/${row.id}`, { method: "DELETE" });
    if (res.ok) { flash("ok", "Supprimé."); load(); } else flash("err", "Suppression impossible.");
  }

  async function toggle(row: Row) {
    const res = await fetch(`/api/admin/${tab}/${row.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...row, visible: !row.visible }),
    });
    if (res.ok) load(); else flash("err", "Modification impossible.");
  }

  async function seed() {
    const res = await fetch("/api/admin/seed", { method: "POST" });
    const data = await res.json().catch(() => ({}));
    if (res.ok) { flash("ok", "Contenu importé : vous pouvez maintenant tout modifier."); load(); }
    else flash("err", data.error ?? "Import impossible.");
  }

  async function importStarter() {
    const res = await fetch("/api/admin/starter", { method: "POST" });
    const data = await res.json().catch(() => ({}));
    if (res.ok) { flash("ok", "Brouillons importés : relisez-les, puis cliquez sur l'œil pour publier."); load(); }
    else flash("err", data.error ?? "Import impossible.");
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-6 sm:px-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-xl font-semibold">Administration CARDIT</h1>
          <p className="text-sm text-steel">Les changements apparaissent sur le site en quelques secondes.</p>
        </div>
        <div className="flex gap-2">
          <a href="/" target="_blank" rel="noopener noreferrer" className="btn-secondary !min-h-[40px] !px-4 !py-2">
            Voir le site <ExternalLink className="h-4 w-4" />
          </a>
          <button onClick={logout} className="btn-secondary !min-h-[40px] !px-4 !py-2">
            <LogOut className="h-4 w-4" /> Quitter
          </button>
        </div>
      </header>

      {!dbReady && (
        <p className="mt-5 rounded-lg bg-amber-50 p-4 text-sm text-amber-800">
          La base de données n&apos;est pas connectée. Dans Vercel : Storage → connectez Neon au projet (variable <code>DATABASE_URL</code>), puis redéployez.
        </p>
      )}
      {dbReady && !blobReady && (
        <p className="mt-5 rounded-lg bg-amber-50 p-4 text-sm text-amber-800">
          Vercel Blob n&apos;est pas connecté : l&apos;envoi d&apos;images est désactivé (vous pouvez coller un lien d&apos;image).
        </p>
      )}

      <nav className="mt-6 flex gap-1 overflow-x-auto border-b border-line" aria-label="Sections">
        {ENTITY_KEYS.map((k) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            aria-current={tab === k}
            className={`whitespace-nowrap border-b-2 px-4 py-2.5 text-sm font-medium transition-colors ${
              tab === k ? "border-cyan text-graphite" : "border-transparent text-steel hover:text-graphite"
            }`}
          >
            {ENTITIES[k].label}
          </button>
        ))}
      </nav>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm text-steel">{rows.length} {rows.length > 1 ? "éléments" : "élément"}</p>
        <button disabled={!dbReady} onClick={() => setEditing("new")} className="btn-primary !min-h-[40px] !px-5 !py-2 disabled:opacity-50">
          <Plus className="h-4 w-4" /> Ajouter un {cfg.singular}
        </button>
      </div>

      {notice && (
        <p role="status" className={`mt-4 rounded-lg p-3 text-sm ${notice.type === "ok" ? "bg-cyan-soft text-cyan-dim" : "bg-red-50 text-red-700"}`}>
          {notice.text}
        </p>
      )}

      {dbReady && !loading && rows.length === 0 && (tab === "services" || tab === "team") && (
        <div className="mt-5 rounded-xl border border-dashed border-cyan/40 bg-white p-6">
          <p className="font-medium">Cette liste est vide pour l&apos;instant.</p>
          <p className="mt-1 text-sm text-steel">
            Le site affiche actuellement les 12 pôles et l&apos;équipe écrits dans le code. Importez-les pour pouvoir les modifier ici.
          </p>
          <button onClick={seed} className="btn-primary mt-4 !min-h-[40px] !py-2">Importer le contenu actuel</button>
        </div>
      )}

      {dbReady && !loading && rows.length === 0 && (tab === "posts" || tab === "products") && (
        <div className="mt-5 rounded-xl border border-dashed border-cyan/40 bg-white p-6">
          <p className="font-medium">Besoin d&apos;un point de départ ?</p>
          <p className="mt-1 text-sm text-steel">
            Importez 3 articles de blog et 5 offres rédigés pour CARDIT. Ils arrivent en <strong>brouillon (masqués)</strong> : relisez-les, modifiez-les, puis publiez avec l&apos;icône œil.
          </p>
          <button onClick={importStarter} className="btn-primary mt-4 !min-h-[40px] !py-2">Importer les brouillons d&apos;exemple</button>
        </div>
      )}

      <ul className="mt-4 space-y-2.5">
        {loading && <li className="py-10 text-center text-sm text-steel">Chargement…</li>}
        {!loading && dbReady && rows.length === 0 && tab !== "services" && tab !== "team" && (
          <li className="rounded-xl border border-dashed border-line bg-white py-10 text-center text-sm text-steel">
            Aucun {cfg.singular} pour l&apos;instant. Ajoutez le premier avec le bouton ci-dessus.
          </li>
        )}
        {rows.map((row) => (
          <li key={row.id} className={`flex items-center gap-3 rounded-xl border border-line bg-white p-3 sm:p-4 ${row.visible ? "" : "opacity-60"}`}>
            {cfg.imageField && (
              // eslint-disable-next-line @next/next/no-img-element
              row[cfg.imageField] ? <img src={row[cfg.imageField]} alt="" className="h-12 w-12 shrink-0 rounded-lg border border-line bg-mist object-cover" />
              : <span className="h-12 w-12 shrink-0 rounded-lg border border-dashed border-line bg-mist" />
            )}
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium">{row[cfg.titleField] || "(sans titre)"}</p>
              {cfg.subtitleField && <p className="truncate text-sm text-steel">{row[cfg.subtitleField]}</p>}
            </div>
            {cfg.fields.some((f) => f.name === "position") && <span className="hidden text-xs text-steel sm:block">Ordre {row.position}</span>}
            <button onClick={() => toggle(row)} title={row.visible ? "Masquer" : "Afficher"} aria-label={row.visible ? "Masquer" : "Afficher"} className="rounded-lg p-2 text-steel hover:bg-mist hover:text-graphite">
              {row.visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            </button>
            <button onClick={() => setEditing(row)} title="Modifier" aria-label="Modifier" className="rounded-lg p-2 text-steel hover:bg-mist hover:text-graphite">
              <Pencil className="h-4 w-4" />
            </button>
            <button onClick={() => remove(row)} title="Supprimer" aria-label="Supprimer" className="rounded-lg p-2 text-steel hover:bg-red-50 hover:text-red-600">
              <Trash2 className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>

      {editing && (
        <Editor
          cfg={cfg}
          row={editing === "new" ? null : editing}
          nextPosition={(rows.reduce((m, r) => Math.max(m, r.position ?? 0), 0) || 0) + 10}
          blobReady={blobReady}
          onClose={() => setEditing(null)}
          onSaved={() => { setEditing(null); flash("ok", "Enregistré."); load(); }}
        />
      )}
    </div>
  );
}

function Editor({ cfg, row, nextPosition, blobReady, onClose, onSaved }: {
  cfg: EntityConfig; row: Row | null; nextPosition: number; blobReady: boolean; onClose: () => void; onSaved: () => void;
}) {
  const [form, setForm] = useState<Row>(() => {
    if (row) return { ...row };
    const init: Row = {};
    for (const f of cfg.fields) init[f.name] = f.kind === "bool" ? true : f.kind === "number" ? nextPosition : "";
    return init;
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function save() {
    setSaving(true);
    setError("");
    const res = await fetch(row ? `/api/admin/${cfg.key}/${row.id}` : `/api/admin/${cfg.key}`, {
      method: row ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json().catch(() => ({}));
    setSaving(false);
    if (res.ok) onSaved(); else setError(data.error ?? "Enregistrement impossible.");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-graphite/40 sm:items-center sm:p-6" role="dialog" aria-modal="true">
      <div className="flex max-h-[92vh] w-full max-w-3xl flex-col rounded-t-2xl bg-white shadow-card sm:rounded-2xl">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="font-display text-lg font-semibold">{row ? "Modifier" : "Ajouter"} : {cfg.singular}</h2>
          <button onClick={onClose} aria-label="Fermer" className="rounded-lg p-2 text-steel hover:bg-mist"><X className="h-5 w-5" /></button>
        </div>

        <div className="grid gap-4 overflow-y-auto px-5 py-5 sm:grid-cols-2">
          {cfg.fields.map((f) => (
            <FieldInput key={f.name} field={f} value={form[f.name]} blobReady={blobReady} onChange={(v) => setForm((s) => ({ ...s, [f.name]: v }))} />
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-line px-5 py-4">
          <p className="text-sm text-red-600">{error}</p>
          <div className="flex gap-2">
            <button onClick={onClose} className="btn-secondary !min-h-[40px] !py-2">Annuler</button>
            <button onClick={save} disabled={saving} className="btn-primary !min-h-[40px] !py-2 disabled:opacity-60">
              {saving ? "Enregistrement…" : "Enregistrer"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldInput({ field, value, blobReady, onChange }: {
  field: Field; value: any; blobReady: boolean; onChange: (v: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
}) {
  const span = field.half ? "" : "sm:col-span-2";
  const base = "mt-1.5 w-full rounded-lg border border-line px-3.5 py-2.5 text-sm outline-none focus:border-cyan";
  const label = (
    <>
      <span className="text-sm font-medium">{field.label}{field.required && <span className="text-red-500"> *</span>}</span>
      {field.hint && <span className="mt-0.5 block text-xs text-steel">{field.hint}</span>}
    </>
  );

  if (field.kind === "bool") {
    return (
      <label className={`flex items-center gap-3 ${span}`}>
        <input type="checkbox" checked={!!value} onChange={(e) => onChange(e.target.checked)} className="h-4 w-4 accent-[#0FB4C4]" />
        <span className="text-sm font-medium">{field.label}</span>
      </label>
    );
  }
  if (field.kind === "image") return <ImageInput field={field} value={value} blobReady={blobReady} onChange={onChange} />;

  return (
    <label className={`block ${span}`}>
      {label}
      {field.kind === "textarea" ? (
        <textarea rows={field.long ? 14 : 4} value={value ?? ""} onChange={(e) => onChange(e.target.value)} className={base} />
      ) : (
        <input type={field.kind === "number" ? "number" : "text"} value={value ?? ""} onChange={(e) => onChange(e.target.value)} className={base} />
      )}
    </label>
  );
}

function ImageInput({ field, value, blobReady, onChange }: {
  field: Field; value: string; blobReady: boolean; onChange: (v: string) => void;
}) {
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function upload(file: File) {
    setBusy(true);
    setError("");
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (res.ok) onChange(data.url); else setError(data.error ?? "Envoi impossible.");
  }

  return (
    <div className="sm:col-span-2">
      <span className="text-sm font-medium">{field.label}</span>
      <div className="mt-1.5 flex items-center gap-3">
        {value ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={value} alt="" className="h-16 w-16 shrink-0 rounded-lg border border-line bg-mist object-cover" />
        ) : (
          <span className="h-16 w-16 shrink-0 rounded-lg border border-dashed border-line bg-mist" />
        )}
        <div className="min-w-0 flex-1">
          <input
            type="text"
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder="https://…"
            className="w-full rounded-lg border border-line px-3.5 py-2 text-sm outline-none focus:border-cyan"
          />
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <input ref={input} type="file" accept="image/*" hidden onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])} />
            <button type="button" disabled={!blobReady || busy} onClick={() => input.current?.click()} className="btn-secondary !min-h-[36px] !px-4 !py-1.5 !text-xs disabled:opacity-50">
              <Upload className="h-3.5 w-3.5" /> {busy ? "Envoi…" : "Envoyer une image"}
            </button>
            {value && <button type="button" onClick={() => onChange("")} className="text-xs text-steel hover:text-red-600">Retirer</button>}
            {error && <span className="text-xs text-red-600">{error}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
