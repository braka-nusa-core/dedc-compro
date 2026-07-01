import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";
import { articles } from "@/data/articles";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return generatePageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/resources/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const a = article!;

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Phase 3 — Article detail assembled here */}
      <p className="text-[var(--color-text-secondary)] font-body">
        {a.title} — Phase 3 placeholder
      </p>
    </div>
  );
}
