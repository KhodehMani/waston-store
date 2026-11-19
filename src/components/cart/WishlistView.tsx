"use client";

import { Heart } from "lucide-react";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { pickProducts } from "@/data/products";
import { useWishlist } from "@/lib/hooks/use-store";

export function WishlistView() {
  const { ready, ids } = useWishlist();
  if (!ready) return <div className="skeleton" style={{ height: 320, borderRadius: 18 }} aria-busy />;
  const items = pickProducts(ids);
  if (items.length === 0) {
    return (
      <EmptyState
        icon={<Heart size={28} aria-hidden />}
        title="هنوز محصولی را نپسندیده‌اید"
        text="روی آیکون قلب هر محصول بزنید تا این‌جا ذخیره شود."
      >
        <Button href="/shop" variant="primary">
          مشاهده محصولات
        </Button>
      </EmptyState>
    );
  }
  return <ProductGrid products={items} />;
}
