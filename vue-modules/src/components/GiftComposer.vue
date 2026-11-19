<script setup lang="ts">
import { computed, reactive, watch } from "vue";
import type { GiftOptions } from "../../types/index";
import { fa } from "../utils";

const props = withDefaults(
  defineProps<{
    modelValue: GiftOptions;
    variant?: "product" | "cart";
    maxLength?: number;
  }>(),
  { variant: "product", maxLength: 150 },
);

const emit = defineEmits<{ change: [value: GiftOptions] }>();

const draft = reactive<GiftOptions>({ ...props.modelValue });

// Keep the local draft in sync when the host store changes (e.g. another tab).
watch(
  () => props.modelValue,
  (next) => Object.assign(draft, next),
  { deep: true },
);

const uid = Math.random().toString(36).slice(2, 8);
const perks = [
  "جعبه و روبان ویژه هدیه",
  "کارت تبریک با متن دلخواه شما",
  "ارسال مستقیم برای گیرنده، بدون درج قیمت",
];
const templates = [
  { label: "خانه‌نو", text: "خانه‌ی نو مبارک! آرزوی روزهای گرم و پر از آرامش در خانه‌ی تازه‌تان." },
  { label: "تولد", text: "تولدت مبارک! امیدوارم این هدیه هر روز لبخند به خانه‌ات بیاورد." },
  { label: "سالگرد", text: "سالگردمان مبارک؛ برای همه‌ی روزهای خوبی که با هم ساختیم." },
  { label: "یلدا و نوروز", text: "با بهترین آرزوها برای روزهای روشن و سال پربرکت." },
];

const remaining = computed(() => props.maxLength - draft.message.length);
const title = computed(() =>
  props.variant === "cart" ? "این سفارش را هدیه می‌دهم" : "این محصول را هدیه می‌دهم",
);

function commit() {
  emit("change", { ...draft });
}

function toggle(event: Event) {
  draft.enabled = (event.target as HTMLInputElement).checked;
  commit();
}

function applyTemplate(text: string) {
  draft.message = text.slice(0, props.maxLength);
  commit();
}
</script>

<template>
  <section class="gift" :class="{ 'gift--on': draft.enabled }" data-framework="vue">
    <label class="gift__head" :for="`gift-toggle-${uid}`">
      <span class="gift__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13" /><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
          <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
        </svg>
      </span>
      <span class="gift__text">
        <strong>{{ title }}</strong>
        <small>بسته‌بندی ویژه، کارت تبریک و ارسال برای گیرنده</small>
      </span>
      <input
        :id="`gift-toggle-${uid}`"
        class="gift__switch-input"
        type="checkbox"
        role="switch"
        :checked="draft.enabled"
        @change="toggle"
      />
      <span class="gift__switch" aria-hidden="true"><span /></span>
    </label>

    <Transition name="gift-body">
      <div v-if="draft.enabled" class="gift__body">
        <ul class="gift__perks">
          <li v-for="perk in perks" :key="perk">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
            {{ perk }}
          </li>
        </ul>

        <div class="gift__field">
          <label :for="`gift-name-${uid}`">نام گیرنده</label>
          <input
            :id="`gift-name-${uid}`"
            v-model="draft.recipientName"
            type="text"
            autocomplete="off"
            placeholder="مثلاً: سارا"
            maxlength="40"
            @input="commit"
          />
        </div>

        <div class="gift__field">
          <div class="gift__label-row">
            <label :for="`gift-msg-${uid}`">متن کارت تبریک</label>
            <span class="gift__counter" :class="{ 'gift__counter--low': remaining < 20 }" aria-live="polite">
              {{ fa(remaining) }} کاراکتر باقی‌مانده
            </span>
          </div>
          <div class="gift__templates" role="group" aria-label="متن‌های پیشنهادی">
            <button
              v-for="t in templates"
              :key="t.label"
              type="button"
              class="gift__chip"
              @click="applyTemplate(t.text)"
            >
              {{ t.label }}
            </button>
          </div>
          <textarea
            :id="`gift-msg-${uid}`"
            v-model="draft.message"
            rows="3"
            :maxlength="maxLength"
            placeholder="پیام شما روی کارت تبریک WASTON چاپ می‌شود…"
            @input="commit"
          />
        </div>

        <figure class="gift__preview" aria-label="پیش‌نمایش کارت تبریک">
          <span class="gift__preview-brand">WASTON</span>
          <p v-if="draft.recipientName" class="gift__preview-to">{{ draft.recipientName }} عزیز،</p>
          <p class="gift__preview-msg">{{ draft.message || "متن کارت تبریک شما این‌جا نمایش داده می‌شود." }}</p>
        </figure>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.gift {
  border: 1px solid var(--border);
  border-radius: var(--radius-card);
  background: var(--surface);
  color: var(--text);
  transition: border-color 0.2s ease;
}
.gift--on {
  border-color: var(--secondary);
}
.gift__head {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  cursor: pointer;
  min-height: 44px;
}
.gift__icon {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--tint-coral);
  color: var(--accent);
  flex-shrink: 0;
}
.gift__text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}
.gift__text strong {
  font-size: 15px;
  font-weight: 700;
}
.gift__text small {
  font-size: 12px;
  color: var(--muted);
}
.gift__switch-input {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
}
.gift__switch {
  position: relative;
  width: 44px;
  height: 26px;
  border-radius: 999px;
  background: var(--border-strong);
  transition: background 0.2s ease;
  flex-shrink: 0;
}
.gift__switch span {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.2);
  transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.gift__switch-input:checked + .gift__switch {
  background: var(--secondary);
}
.gift__switch-input:checked + .gift__switch span {
  transform: translateX(-18px);
}
.gift__switch-input:focus-visible + .gift__switch {
  outline: 2px solid var(--focus);
  outline-offset: 2px;
}
.gift__body {
  display: grid;
  gap: 14px;
  padding: 4px 16px 16px;
}
.gift__perks {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 6px;
  font-size: 13px;
}
.gift__perks li {
  display: flex;
  align-items: center;
  gap: 8px;
}
.gift__perks svg {
  color: var(--secondary);
  flex-shrink: 0;
}
.gift__field {
  display: grid;
  gap: 6px;
}
.gift__field label {
  font-size: 13px;
  font-weight: 600;
}
.gift__label-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.gift__counter {
  font-size: 12px;
  color: var(--muted);
}
.gift__counter--low {
  color: var(--accent);
}
.gift__field input,
.gift__field textarea {
  width: 100%;
  font: inherit;
  font-size: 14px;
  color: var(--text);
  background: var(--input-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-control);
  padding: 10px 12px;
  min-height: 44px;
  resize: vertical;
}
.gift__field input:focus-visible,
.gift__field textarea:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: 1px;
  border-color: transparent;
}
.gift__templates {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.gift__chip {
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  color: var(--text);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 6px 12px;
  min-height: 32px;
  cursor: pointer;
}
.gift__chip:hover {
  border-color: var(--secondary);
  color: var(--secondary-ink);
}
.gift__preview {
  margin: 0;
  border-radius: 14px;
  padding: 16px;
  background: var(--primary);
  color: var(--on-primary);
  position: relative;
  overflow: hidden;
}
.gift__preview::after {
  content: "";
  position: absolute;
  inset-inline-start: -30px;
  bottom: -30px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: rgb(255 255 255 / 0.07);
}
.gift__preview-brand {
  display: block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.2em;
  opacity: 0.75;
  margin-bottom: 8px;
  direction: ltr;
  text-align: right;
}
.gift__preview-to {
  margin: 0 0 4px;
  font-weight: 700;
}
.gift__preview-msg {
  margin: 0;
  font-size: 14px;
  line-height: 1.8;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.gift-body-enter-active,
.gift-body-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.gift-body-enter-from,
.gift-body-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
@media (prefers-reduced-motion: reduce) {
  .gift-body-enter-active,
  .gift-body-leave-active,
  .gift__switch span {
    transition: none;
  }
}
</style>
