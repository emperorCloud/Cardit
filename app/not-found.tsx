import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-sand px-6 text-center">
      <p className="eyebrow mb-4">Erreur 404</p>
      <h1 className="font-display text-4xl font-bold text-charcoal">
        Cette page n&apos;existe pas chez CARDIT
      </h1>
      <p className="mt-4 max-w-sm text-sm text-charcoal/60">
        La page que vous cherchez a été déplacée ou n&apos;existe plus.
      </p>
      <Link href="/" className="btn-secondary-dark mt-8">
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}
