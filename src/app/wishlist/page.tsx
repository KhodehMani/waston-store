import type { Metadata } from "next";
import { WishlistView } from "@/components/cart/WishlistView";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageHeading } from "@/components/ui/PageHeading";

export const metadata: Metadata = { title: "علاقه‌مندی‌ها" };

export default function WishlistPage() {
  return (
    <div className="container">
      <Breadcrumb items={[{ href: "/", label: "خانه" }, { label: "علاقه‌مندی‌ها" }]} />
      <PageHeading title="علاقه‌مندی‌ها" subtitle="محصولاتی که پسندیده‌اید در این مرورگر ذخیره می‌شوند." />
      <WishlistView />
    </div>
  );
}
