import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionPage } from "@/components/listing/CollectionPage";
import { collections, getCollection } from "@/data/collections";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const config = getCollection((await params).slug);
  return config ? { title: config.title, description: config.description } : {};
}

export default async function CollectionRoute({ params }: { params: Params }) {
  const { slug } = await params;
  const config = getCollection(slug);
  if (!config || !slug) notFound();
  return <CollectionPage config={config} />;
}
