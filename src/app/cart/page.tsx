import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageHeading } from "@/components/ui/PageHeading";

export const metadata: Metadata = { title: "سبد خرید" };

export default function CartPage() {
  return (
    <div className="container">
      <Breadcrumb items={[{ href: "/", label: "خانه" }, { label: "سبد خرید" }]} />
      <PageHeading title="سبد خرید" subtitle="کالاها را بررسی کنید؛ گزینه هدیه را هم می‌توانید همین‌جا فعال کنید." />
      <CartView />
    </div>
  );
}
