import { NumberedSteps } from "@/components/ui/NumberedSteps";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { howToBuy } from "@/data/site";

export function HowToBuy() {
  return (
    <section className="container section" aria-labelledby="how-title">
      <SectionHeader id="how-title" eyebrow="خدمات WASTON" title="خرید از WASTON چطور است؟" />
      <NumberedSteps items={howToBuy} variant="badge" />
    </section>
  );
}
