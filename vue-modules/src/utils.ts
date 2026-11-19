/** Formats a number with Persian digits (e.g. 150 -> ۱۵۰). */
export const fa = (n: number) => n.toLocaleString("fa-IR");

/** Converts Persian / Arabic-Indic digits to ASCII digits. */
export function toAsciiDigits(value: string): string {
  return value
    .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660));
}
