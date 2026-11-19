"use client";

import { UserRound } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Sheet } from "@/components/ui/Sheet";
import { toAsciiDigits } from "@/lib/format";
import styles from "./Header.module.css";

/** Sign-in entry point. Authentication is out of scope for this demo UI. */
export function AccountButton() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState("");
  const [state, setState] = useState<"idle" | "error" | "sent">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = toAsciiDigits(mobile).replace(/\s/g, "");
    setState(/^09\d{9}$/.test(v) ? "sent" : "error");
  };

  return (
    <>
      <button type="button" className={styles.iconBtn} onClick={() => setOpen(true)} aria-label="حساب کاربری">
        <UserRound size={19} aria-hidden />
      </button>
      <Sheet open={open} onClose={() => setOpen(false)} title="ورود یا ثبت‌نام" side="center">
        <form className={styles.authForm} onSubmit={submit} noValidate>
          <p className={styles.authLead}>برای ورود یا ساخت حساب، شماره موبایل خود را وارد کنید.</p>
          <label htmlFor="auth-mobile" className={styles.authLabel}>
            شماره موبایل
          </label>
          <input
            id="auth-mobile"
            className={styles.authInput}
            inputMode="tel"
            dir="ltr"
            placeholder="۰۹۱۲ ••• ••••"
            value={mobile}
            aria-invalid={state === "error"}
            onChange={(e) => {
              setMobile(e.target.value);
              setState("idle");
            }}
          />
          {state === "error" && (
            <p className={styles.authError} role="alert">
              شماره موبایل باید ۱۱ رقم و با ۰۹ شروع شود.
            </p>
          )}
          {state === "sent" && (
            <p className={styles.authNote} role="status">
              این نسخه نمایشی است؛ کد تأیید ارسال نمی‌شود و ورود پس از راه‌اندازی فعال خواهد شد.
            </p>
          )}
          <Button type="submit" variant="primary" block>
            دریافت کد تأیید
          </Button>
        </form>
      </Sheet>
    </>
  );
}
