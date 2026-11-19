<script setup lang="ts">
import { ref } from "vue";
import { toAsciiDigits } from "../utils";

const emit = defineEmits<{ subscribe: [contact: string, kind: "email" | "mobile"] }>();

type Status = "idle" | "pending" | "done";

const uid = Math.random().toString(36).slice(2, 8);
const value = ref("");
const error = ref("");
const status = ref<Status>("idle");
const subscribed = ref("");

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MOBILE = /^(\+98|0098|0)?9\d{9}$/;

function classify(raw: string): "email" | "mobile" | null {
  const v = toAsciiDigits(raw.trim()).replace(/[\s-]/g, "");
  if (EMAIL.test(v)) return "email";
  if (MOBILE.test(v)) return "mobile";
  return null;
}

function submit() {
  const raw = value.value.trim();
  if (!raw) {
    error.value = "لطفاً ایمیل یا شماره موبایل خود را وارد کنید.";
    return;
  }
  const kind = classify(raw);
  if (!kind) {
    error.value = "ایمیل یا شماره موبایل معتبر نیست؛ مثلاً example@mail.com یا ۰۹۱۲۳۴۵۶۷۸۹";
    return;
  }
  error.value = "";
  status.value = "pending";
  // Mock request — this demo stores the subscription locally only.
  window.setTimeout(() => {
    try {
      localStorage.setItem("waston:newsletter", JSON.stringify({ contact: raw, kind, at: Date.now() }));
    } catch {
      /* storage unavailable: still show success for the demo */
    }
    subscribed.value = raw;
    status.value = "done";
    emit("subscribe", raw, kind);
  }, 650);
}

function reset() {
  status.value = "idle";
  value.value = "";
}
</script>

<template>
  <div class="nl" data-framework="vue">
    <div v-if="status === 'done'" class="nl__done" role="status">
      <span class="nl__done-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
      </span>
      <div>
        <strong>عضویت شما ثبت شد</strong>
        <p><bdi>{{ subscribed }}</bdi> به فهرست خبرنامه اضافه شد.</p>
      </div>
      <button type="button" class="nl__link" @click="reset">ثبت مورد دیگر</button>
    </div>

    <form v-else class="nl__form" novalidate @submit.prevent="submit">
      <label class="nl__label" :for="`nl-${uid}`">ایمیل یا شماره موبایل</label>
      <div class="nl__row">
        <input
          :id="`nl-${uid}`"
          v-model="value"
          class="nl__input"
          :class="{ 'nl__input--error': error }"
          type="text"
          inputmode="email"
          autocomplete="email"
          dir="ltr"
          placeholder="example@mail.com"
          :aria-invalid="!!error"
          :aria-describedby="error ? `nl-err-${uid}` : undefined"
          @input="error = ''"
        />
        <button class="nl__btn" type="submit" :disabled="status === 'pending'">
          <span v-if="status === 'pending'" class="nl__spinner" aria-hidden="true" />
          {{ status === "pending" ? "در حال ثبت" : "عضویت" }}
        </button>
      </div>
      <p v-if="error" :id="`nl-err-${uid}`" class="nl__error" role="alert">{{ error }}</p>
    </form>
  </div>
</template>

<style scoped>
.nl {
  width: 100%;
}
.nl__form {
  display: grid;
  gap: 8px;
}
.nl__label {
  font-size: 12px;
  font-weight: 700;
  color: var(--text);
}
.nl__row {
  display: flex;
  gap: 8px;
}
.nl__input {
  flex: 1;
  min-width: 0;
  min-height: 44px;
  font: inherit;
  font-size: 14px;
  color: var(--text);
  background: var(--input-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-control);
  padding: 0 14px;
  text-align: left;
}
.nl__input::placeholder {
  color: var(--muted);
}
.nl__input:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: 1px;
  border-color: transparent;
}
.nl__input--error {
  border-color: var(--accent);
}
.nl__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 22px;
  font: inherit;
  font-size: 15px;
  font-weight: 600;
  color: var(--on-primary);
  background: var(--primary);
  border: 0;
  border-radius: var(--radius-control);
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;
}
.nl__btn:hover {
  opacity: 0.92;
}
.nl__btn:active {
  transform: scale(0.97);
}
.nl__btn:disabled {
  opacity: 0.7;
  cursor: progress;
}
.nl__btn:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: 2px;
}
.nl__spinner {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid currentColor;
  border-inline-start-color: transparent;
  animation: nl-spin 0.7s linear infinite;
}
.nl__error {
  margin: 0;
  font-size: 12px;
  color: var(--accent-ink);
}
.nl__done {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: var(--radius-control);
  background: var(--tint-teal);
}
.nl__done strong {
  font-size: 14px;
}
.nl__done p {
  margin: 2px 0 0;
  font-size: 12px;
  color: var(--muted);
}
.nl__done-icon {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--secondary);
  color: var(--on-secondary);
  flex-shrink: 0;
}
.nl__link {
  margin-inline-start: auto;
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  color: var(--text);
  background: none;
  border: 0;
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;
  min-height: 44px;
}
@keyframes nl-spin {
  to {
    transform: rotate(360deg);
  }
}
@media (max-width: 480px) {
  .nl__row {
    flex-direction: column;
  }
  .nl__btn {
    justify-content: center;
  }
}
</style>
