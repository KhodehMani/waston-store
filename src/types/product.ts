export type CategorySlug = "kitchen-appliances" | "kitchenware" | "ceramics" | "cleaning";

/** Line-art illustration used in place of product photography (as in the mockup). */
export type IllustrationKey =
  | "toaster"
  | "food-processor"
  | "blender"
  | "kettle"
  | "coffee-maker"
  | "pot"
  | "mug"
  | "bowl"
  | "vase"
  | "glasses"
  | "cutlery"
  | "pan"
  | "tray"
  | "plate"
  | "vacuum"
  | "stick-vacuum"
  | "steam-mop"
  | "gift";

/** Colour pairing of the illustration and its tile background. */
export type Tone = "teal" | "coral" | "navy";

export type Brand = "WASTON" | "برند نمونه الف" | "برند نمونه ب";

export type Occasion = "housewarming" | "birthday" | "anniversary" | "yalda-nowruz";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  model: string;
  title: string;
  brand: Brand;
  category: CategorySlug;
  /** Sub-groups used by listing chips (e.g. پخت‌وپز / پذیرایی). */
  tags: string[];
  illustration: IllustrationKey;
  tone: Tone;
  /** Final price in Toman. */
  price: number;
  /** Price before discount in Toman (only when discounted). */
  compareAt?: number;
  rating?: number;
  reviews: number;
  /** null = unlimited / in stock, 0 = out of stock, n = "only n left". */
  stock: number | null;
  /** Position in the "new arrivals" list (1 = newest). Undefined = not new. */
  newRank?: number;
  limited?: boolean;
  giftWrap?: boolean;
  occasions?: Occasion[];
  /** Lower = more sales. Undefined = not in the best-seller list. */
  salesRank?: number;
  /** Facet values used by category-specific filters. */
  facets?: { power?: number; material?: string; deviceType?: string };
  summary: string;
  highlights: string[];
  specs: ProductSpec[];
  /** Ready-made gift packs are sold as bundles and hidden from product grids. */
  bundle?: boolean;
}
