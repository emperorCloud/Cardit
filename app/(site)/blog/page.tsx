import { pageMeta } from "@/lib/seo";
import BlogContent from "./BlogContent";
import { getPosts } from "@/lib/content";

export const metadata = pageMeta({
  title: "Blog",
  description: "Actualités, analyses et retours d'expérience de CARDIT sur le numérique, l'IA, le cloud et l'innovation en Afrique.",
  path: "/blog",
});

export default async function BlogPage() {
  return <BlogContent posts={await getPosts()} />;
}
