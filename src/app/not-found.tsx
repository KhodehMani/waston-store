import { Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";

export default function NotFound() {
  return (
    <div className="container" style={{ paddingTop: 48 }}>
      <EmptyState icon={<Compass size={28} aria-hidden />} title="صفحه‌ای که دنبالش بودید پیدا نشد" text="ممکن است نشانی اشتباه باشد یا صفحه جابه‌جا شده باشد.">
        <Button href="/" variant="primary">
          بازگشت به خانه
        </Button>
        <Button href="/shop" variant="outline">
          مشاهده محصولات
        </Button>
      </EmptyState>
    </div>
  );
}
