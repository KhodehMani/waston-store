import { createApp, h, reactive, version, type Component } from "vue";
import GiftComposer from "./components/GiftComposer.vue";
import NewsletterForm from "./components/NewsletterForm.vue";
import type {
  GiftComposerProps,
  NewsletterFormProps,
  WidgetHandle,
} from "../types/index";

/**
 * Mounts a Vue component as an independent app on `el`.
 * Props live in a reactive object so the host (React) can push updates
 * without remounting; `on*` props are wired as Vue event listeners.
 */
function mountWidget<P extends object>(
  component: Component,
  el: HTMLElement,
  props: P,
): WidgetHandle<P> {
  const state = reactive({ ...props }) as P;
  const app = createApp({
    name: "WastonVueIsland",
    render: () => h(component, state as Record<string, unknown>),
  });
  app.mount(el);
  return {
    update(next) {
      Object.assign(state, next);
    },
    unmount() {
      app.unmount();
    },
  };
}

export function mountGiftComposer(el: HTMLElement, props: GiftComposerProps) {
  return mountWidget(GiftComposer, el, props);
}

export function mountNewsletterForm(el: HTMLElement, props: NewsletterFormProps) {
  return mountWidget(NewsletterForm, el, props);
}

export const VUE_VERSION = version;
