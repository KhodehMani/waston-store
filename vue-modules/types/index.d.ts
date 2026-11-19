/**
 * Public contract of the WASTON Vue module.
 * Consumed by the Next.js app (see src/components/vue/*) via the `@vue-widgets` alias.
 */

export interface WidgetHandle<P> {
  /** Push new props into the mounted Vue widget (reactive update, no remount). */
  update(next: Partial<P>): void;
  /** Tear down the Vue app and release the DOM node. */
  unmount(): void;
}

export interface GiftOptions {
  enabled: boolean;
  recipientName: string;
  message: string;
}

export interface GiftComposerProps {
  modelValue: GiftOptions;
  /** "product" = shown on a product page, "cart" = shown in the cart summary. */
  variant?: "product" | "cart";
  maxLength?: number;
  onChange?: (value: GiftOptions) => void;
}

export interface NewsletterFormProps {
  onSubscribe?: (contact: string, kind: "email" | "mobile") => void;
}

export declare function mountGiftComposer(
  el: HTMLElement,
  props: GiftComposerProps,
): WidgetHandle<GiftComposerProps>;

export declare function mountNewsletterForm(
  el: HTMLElement,
  props: NewsletterFormProps,
): WidgetHandle<NewsletterFormProps>;

export declare const VUE_VERSION: string;
