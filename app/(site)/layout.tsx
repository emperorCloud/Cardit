import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileQuickBar from "@/components/MobileQuickBar";
import { LanguageProvider } from "@/components/LanguageProvider";
import { getPosts, getProducts, getServices } from "@/lib/content";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const [services, products, posts] = await Promise.all([getServices(), getProducts(), getPosts()]);
  const hasProducts = products.length > 0;
  const hasBlog = posts.length > 0;

  return (
    <LanguageProvider>
      <Header hasProducts={hasProducts} hasBlog={hasBlog} />
      <main className="pb-16 md:pb-0">{children}</main>
      <Footer
        services={services.slice(0, 6).map((s) => ({ slug: s.slug, title: s.title }))}
        hasProducts={hasProducts}
        hasBlog={hasBlog}
      />
      <MobileQuickBar />
    </LanguageProvider>
  );
}
