import {
  Box,
  Gift,
  Headphones,
  ListChecks,
  MapPin,
  RotateCcw,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  type LucideIcon,
} from "lucide-react";

/** Maps the data-layer icon names to Lucide icons (matching the mockup's line icons). */
const map: Record<string, LucideIcon> = {
  truck: Truck,
  gift: Gift,
  shield: ShieldCheck,
  undo: RotateCcw,
  headset: Headphones,
  pin: MapPin,
  list: ListChecks,
  box: Box,
  sliders: SlidersHorizontal,
};

export function UiIcon({ name, size = 18 }: { name: string; size?: number }) {
  const Icon = map[name] ?? Box;
  return <Icon size={size} strokeWidth={1.8} aria-hidden />;
}
