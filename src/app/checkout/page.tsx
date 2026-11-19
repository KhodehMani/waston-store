import type { Metadata } from "next";
import { CheckoutView } from "@/components/checkout/CheckoutView";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageHeading } from "@/components/ui/PageHeading";

export const metadata: Metadata = { title: "تکمیل خرید" };

export default function CheckoutPage() {
  return (
    <div className="container">
      <Breadcrumb items={[{ href: "/", label: "خانه" }, { href: "/cart", label: "سبد خرید" }, { label: "تکمیل خرید" }]} />
      <PageHeading title="تکمیل خرید" subtitle="اطلاعات ارسال را وارد کنید و سفارش را ثبت کنید." />
      <CheckoutView />
    </div>
  );
}
