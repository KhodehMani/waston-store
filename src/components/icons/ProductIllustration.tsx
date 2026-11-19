import type { IllustrationKey } from "@/types/product";

/**
 * Line-art product illustrations (the mockup uses these instead of photos).
 * 64×64 grid, stroke = currentColor so tone classes control the colour.
 */
const paths: Record<IllustrationKey, string[]> = {
  toaster: [
    "M14 24h34a8 8 0 0 1 8 8v12a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6V32a8 8 0 0 1 6-8z",
    "M19 32h9",
    "M33 32h9",
    "M16 50v4",
    "M48 50v4",
    "M56 37h3",
    "M25 18c-1.5-2-1-4.5 1-7",
    "M35 18c-1.5-2-1-4.5 1-7",
  ],
  "food-processor": [
    "M21 10h19l-2 24H23z",
    "M40 14h6v11h-7",
    "M30.5 18v8",
    "M19 34h26v18a3 3 0 0 1-3 3H22a3 3 0 0 1-3-3z",
    "M27 45h10",
  ],
  blender: ["M23 8h18l-3 30H26z", "M21 38h22v15a3 3 0 0 1-3 3H24a3 3 0 0 1-3-3z", "M29 47h6", "M25 18h14"],
  kettle: [
    "M22 24h20l4 26H18z",
    "M25 24a7 7 0 0 1 14 0",
    "M32 15v2",
    "M18 32l-8-6",
    "M46 30h2a6 6 0 0 1 0 12h-4",
    "M24 56h16",
  ],
  "coffee-maker": [
    "M18 12h28v8H18z",
    "M22 20v8",
    "M42 20v8",
    "M27 32h14v8a7 7 0 0 1-14 0z",
    "M41 34h2a3.5 3.5 0 0 1 0 7h-2",
    "M14 54h36",
  ],
  pot: [
    "M14 28h36v12a12 12 0 0 1-12 12H26a12 12 0 0 1-12-12z",
    "M10 28h44",
    "M20 23h24",
    "M32 18v5",
    "M28 18h8",
    "M8 32h6",
    "M50 32h6",
  ],
  mug: [
    "M14 22h28v18a12 12 0 0 1-12 12h-4a12 12 0 0 1-12-12z",
    "M42 27h3a7 7 0 0 1 0 14h-3",
    "M23 15c-1.5-2-1-4.5 1-7",
    "M32 15c-1.5-2-1-4.5 1-7",
  ],
  bowl: ["M10 30h44c0 12-10 20-22 20S10 42 10 30z", "M24 54h16", "M20 21a5 5 0 0 1 9 0", "M35 21a5 5 0 0 1 9 0"],
  vase: [
    "M25 8h14",
    "M27 8c0 7-10 10-10 24s7 22 15 22 15-8 15-22-10-17-10-24",
    "M17.5 32h29",
  ],
  glasses: ["M12 12h16l-2 40H14z", "M36 12h16l-2 40H38z", "M13 24h14", "M37 24h14"],
  cutlery: [
    "M18 10v14a5 5 0 0 0 10 0V10",
    "M23 10v14",
    "M23 29v25",
    "M44 10c-6 4-8 14-3 20h3v24",
  ],
  pan: ["M6 26h34v6a10 10 0 0 1-10 10H16A10 10 0 0 1 6 32z", "M40 28h18"],
  tray: ["M14 40a18 18 0 0 1 36 0", "M32 18v4", "M8 40h48l-5 8H13z"],
  plate: ["M32 10a22 22 0 1 1 0 44 22 22 0 0 1 0-44z", "M32 19a13 13 0 1 1 0 26 13 13 0 0 1 0-26z"],
  vacuum: ["M10 50a11 11 0 0 1 22 0z", "M21 39v-9c0-12 7-18 17-18h6v38", "M38 50h20"],
  "stick-vacuum": ["M32 8v40", "M27 8h10", "M26 22h12v12H26z", "M20 48h24l3 6H17z"],
  "steam-mop": ["M32 8v38", "M26 8h12", "M27 26h10v10H27z", "M16 46h32v8H16z"],
  gift: [
    "M10 24h44v9H10z",
    "M14 33h36v21H14z",
    "M32 24v30",
    "M32 24c-3-8-13-10-13-4 0 3 4 4 13 4",
    "M32 24c3-8 13-10 13-4 0 3-4 4-13 4",
  ],
};

interface Props {
  name: IllustrationKey;
  size?: number | string;
  strokeWidth?: number;
  className?: string;
  title?: string;
}

export function ProductIllustration({ name, size = 96, strokeWidth = 2.6, className, title }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {paths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
