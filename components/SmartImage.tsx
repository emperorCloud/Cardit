import Image from "next/image";

/**
 * Image à remplir son conteneur (le parent doit être `relative`).
 * Les fichiers du site et de Vercel Blob passent par l'optimiseur Next ;
 * une URL externe collée dans l'admin est affichée telle quelle.
 */
export default function SmartImage({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const optimizable = src.startsWith("/") || src.includes(".public.blob.vercel-storage.com");
  if (optimizable) {
    return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={className} />;
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} loading="lazy" className={`absolute inset-0 h-full w-full ${className}`} />;
}
