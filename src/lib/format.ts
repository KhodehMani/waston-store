/** Persian number formatting helpers (digits + separators follow fa-IR). */

const faNumber = new Intl.NumberFormat("fa-IR");

/** 2450000 -> "۲٬۴۵۰٬۰۰۰" ; 4.6 -> "۴٫۶" */
export const fa = (n: number) => faNumber.format(n);

/** Price without the currency word. */
export const price = (toman: number) => fa(toman);

/** Price with currency. */
export const toman = (value: number) => `${fa(value)} تومان`;

/** Converts Persian / Arabic-Indic digits to ASCII digits. */
export function toAsciiDigits(value: string): string {
  return value
    .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660));
}

export function cx(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
