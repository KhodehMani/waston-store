import type { Metadata } from "next";
import { CollectionPage } from "@/components/listing/CollectionPage";
import { allProductsCollection } from "@/data/collections";

export const metadata: Metadata = {
  title: allProductsCollection.title,
  description: allProductsCollection.description,
};

export default function ShopPage() {
  return <CollectionPage config={allProductsCollection} />;
}
