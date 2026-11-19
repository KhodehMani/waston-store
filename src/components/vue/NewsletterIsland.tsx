"use client";

import type { NewsletterFormProps } from "@vue-widgets";
import { useMemo } from "react";
import { useToast } from "@/components/ui/Toast";
import { VueIsland } from "./VueIsland";

const loadNewsletter = () => import("@vue-widgets").then((m) => m.mountNewsletterForm);

/** Newsletter sign-up form (Vue component) with a React toast on success. */
export function NewsletterIsland() {
  const toast = useToast();
  const props = useMemo<NewsletterFormProps>(
    () => ({
      onSubscribe: (_contact, kind) =>
        toast(kind === "email" ? "ایمیل شما در خبرنامه ثبت شد" : "شماره شما در خبرنامه ثبت شد"),
    }),
    [toast],
  );
  return (
    <VueIsland
      load={loadNewsletter}
      props={props}
      label="فرم عضویت خبرنامه"
      fallback={
        <div style={{ display: "grid", gap: 8 }}>
          <div className="skeleton" style={{ height: 14, width: 120 }} />
          <div className="skeleton" style={{ height: 44 }} />
        </div>
      }
    />
  );
}
