import { Fragment, type ReactNode } from "react";
import SmartImage from "./SmartImage";

// Mini-syntaxe sûre : aucun HTML brut n'est jamais injecté.
const safeUrl = (u: string) => (/^(https?:\/\/|\/|mailto:)/.test(u) ? u : "#");

function inline(text: string, key: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let n = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("**")) {
      out.push(<strong key={`${key}-${n++}`} className="font-semibold text-graphite">{tok.slice(2, -2)}</strong>);
    } else {
      const parts = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(tok);
      if (parts) {
        const ext = parts[2].startsWith("http");
        out.push(
          <a
            key={`${key}-${n++}`}
            href={safeUrl(parts[2])}
            className="font-medium text-cyan-dim underline underline-offset-4"
            {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {parts[1]}
          </a>
        );
      }
    }
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export default function RichText({ source }: { source: string }) {
  const blocks = (source ?? "").replace(/\r\n/g, "\n").split(/\n{2,}/);

  return (
    <div className="space-y-5 text-base leading-relaxed text-graphite/85">
      {blocks.map((raw, i) => {
        const t = raw.trim();
        if (!t) return null;
        const k = `b${i}`;

        if (t.startsWith("### "))
          return <h3 key={k} className="pt-2 font-display text-xl font-semibold tracking-[-0.01em] text-graphite">{inline(t.slice(4), k)}</h3>;
        if (t.startsWith("## "))
          return <h2 key={k} className="pt-4 font-display text-2xl font-semibold tracking-[-0.02em] text-graphite">{inline(t.slice(3), k)}</h2>;

        const img = /^!\[([^\]]*)\]\(([^)]+)\)$/.exec(t);
        if (img && /^(https:\/\/|\/)/.test(img[2])) {
          return (
            <figure key={k}>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-mist">
                <SmartImage src={img[2]} alt={img[1]} className="object-cover" sizes="(min-width: 768px) 720px, 100vw" />
              </div>
              {img[1] && <figcaption className="mt-2 text-sm text-steel">{img[1]}</figcaption>}
            </figure>
          );
        }

        const lines = t.split("\n");
        if (lines.every((l) => /^[-*] /.test(l)))
          return (
            <ul key={k} className="list-disc space-y-2 pl-5 marker:text-cyan">
              {lines.map((l, j) => <li key={j}>{inline(l.slice(2), `${k}-${j}`)}</li>)}
            </ul>
          );
        if (lines.every((l) => /^\d+\. /.test(l)))
          return (
            <ol key={k} className="list-decimal space-y-2 pl-5 marker:text-cyan-dim">
              {lines.map((l, j) => <li key={j}>{inline(l.replace(/^\d+\. /, ""), `${k}-${j}`)}</li>)}
            </ol>
          );

        return (
          <p key={k}>
            {lines.map((l, j) => (
              <Fragment key={j}>
                {j > 0 && <br />}
                {inline(l, `${k}-${j}`)}
              </Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}
