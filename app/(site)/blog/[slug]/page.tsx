import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { getPosts } from "@/lib/content";
import { siteUrl } from "@/lib/site";
import { clip, pageMeta } from "@/lib/seo";
import PostContent from "./PostContent";

export async function generateStaticParams() {
  return (await getPosts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = (await getPosts()).find((p) => p.slug === params.slug);
  if (!post) return {};
  return pageMeta({
    title: post.seoTitle || post.title.fr,
    description: post.seoDesc || post.excerpt.fr || clip(post.body.fr),
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const url = `${siteUrl}/blog/${post.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.fr,
    description: post.seoDesc || post.excerpt.fr || clip(post.body.fr),
    image: post.image ? [post.image.startsWith("/") ? `${siteUrl}${post.image}` : post.image] : [`${siteUrl}/images/og-cover.png`],
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "fr-FR",
    mainEntityOfPage: url,
    author: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "CARDIT" },
    publisher: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "CARDIT" },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title.fr, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <PostContent post={post} />
    </>
  );
}
