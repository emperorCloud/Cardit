import { icons, Sparkles, type LucideProps } from "lucide-react";

/**
 * Affiche l'icône Lucide dont le nom correspond à `name` (voir iconName dans
 * lib/data.ts, ex. "Code2", "Cloud", "ShieldCheck"...). Si le nom n'existe
 * pas dans la bibliothèque, une icône de repli est utilisée pour ne jamais
 * casser le rendu.
 */
export default function ServiceIcon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Icon = icons[name as keyof typeof icons] ?? Sparkles;
  return <Icon {...props} />;
}
