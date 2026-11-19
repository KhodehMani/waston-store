"use client";

import Link from "next/link";
import { CircleCheck, CreditCard, Gift, ShoppingBag, TriangleAlert } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { OrderSummary } from "@/components/cart/OrderSummary";
import { ProductTile } from "@/components/product/ProductTile";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { useCart } from "@/lib/hooks/use-store";
import { cx, fa, price, toAsciiDigits } from "@/lib/format";
import { FREE_SHIPPING_FROM, shippingMethods, summarize, type ShippingMethodId } from "@/lib/pricing";
import { cartActions } from "@/lib/store/cart";
import styles from "./CheckoutView.module.css";

const provinces = ["تهران", "البرز", "اصفهان", "فارس", "خراسان رضوی", "آذربایجان شرقی", "گیلان", "مازندران", "خوزستان", "سایر استان‌ها"];

interface FormValues {
  fullName: string;
  mobile: string;
  province: string;
  city: string;
  address: string;
  postalCode: string;
  note: string;
}

type Errors = Partial<Record<keyof FormValues, string>>;

const empty: FormValues = { fullName: "", mobile: "", province: "", city: "", address: "", postalCode: "", note: "" };

function validate(v: FormValues): Errors {
  const e: Errors = {};
  const mobile = toAsciiDigits(v.mobile).replace(/[\s-]/g, "");
  const postal = toAsciiDigits(v.postalCode).replace(/[\s-]/g, "");
  if (v.fullName.trim().length < 3) e.fullName = "نام و نام خانوادگی را کامل وارد کنید.";
  if (!/^09\d{9}$/.test(mobile)) e.mobile = "شماره موبایل باید ۱۱ رقم و با ۰۹ شروع شود.";
  if (!v.province) e.province = "استان را انتخاب کنید.";
  if (v.city.trim().length < 2) e.city = "شهر را وارد کنید.";
  if (v.address.trim().length < 10) e.address = "نشانی را با جزئیات (خیابان، پلاک، واحد) وارد کنید.";
  if (!/^\d{10}$/.test(postal)) e.postalCode = "کد پستی باید ۱۰ رقم باشد.";
  return e;
}

export function CheckoutView() {
  const { ready, resolved, gift } = useCart();
  const [values, setValues] = useState<FormValues>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [shipping, setShipping] = useState<ShippingMethodId>("post");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [orderId, setOrderId] = useState("");
  const errorRef = useRef<HTMLDivElement>(null);

  const totals = useMemo(() => summarize(resolved, shipping), [resolved, shipping]);

  const set = (key: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      requestAnimationFrame(() => {
        errorRef.current?.focus();
        const first = document.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`);
        first?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      return;
    }
    setStatus("submitting");
    // Simulated order submission — this demo has no backend or payment gateway.
    window.setTimeout(() => {
      const id = `WS-${Math.floor(100000 + Math.random() * 900000)}`;
      try {
        localStorage.setItem("waston:last-order", JSON.stringify({ id, at: Date.now(), total: totals.payable }));
      } catch {
        /* ignore */
      }
      cartActions.clear();
      setOrderId(id);
      setStatus("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1100);
  };

  if (status === "done") {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon}>
          <CircleCheck size={36} aria-hidden />
        </span>
        <h2>سفارش شما ثبت شد</h2>
        <p>
          شماره سفارش: <strong className="ltr">{orderId}</strong>
        </p>
        <p className={styles.successNote}>این نسخه نمایشی است؛ هیچ پرداخت یا ارسال واقعی انجام نمی‌شود.</p>
        <div className={styles.successActions}>
          <Button href="/" variant="primary">
            بازگشت به خانه
          </Button>
          <Button href="/shop" variant="outline">
            ادامه خرید
          </Button>
        </div>
      </div>
    );
  }

  if (!ready) {
    return <div className="skeleton" style={{ height: 420, borderRadius: 18 }} aria-busy />;
  }

  if (resolved.length === 0) {
    return (
      <EmptyState icon={<ShoppingBag size={28} aria-hidden />} title="سبد خرید شما خالی است" text="برای ثبت سفارش، ابتدا محصولی به سبد اضافه کنید.">
        <Button href="/shop" variant="primary">
          مشاهده محصولات
        </Button>
      </EmptyState>
    );
  }

  const errorCount = Object.values(errors).filter(Boolean).length;
  const field = (key: keyof FormValues, label: string, input: React.ReactNode, hint?: string) => (
    <div className={cx(styles.field, errors[key] && styles.invalid)}>
      <label htmlFor={`co-${key}`}>{label}</label>
      {input}
      {errors[key] ? (
        <p id={`co-${key}-err`} className={styles.error}>
          {errors[key]}
        </p>
      ) : (
        hint && <p className={styles.hint}>{hint}</p>
      )}
    </div>
  );
  const aria = (key: keyof FormValues) => ({
    id: `co-${key}`,
    name: key,
    "aria-invalid": Boolean(errors[key]),
    "aria-describedby": errors[key] ? `co-${key}-err` : undefined,
  });

  return (
    <form className={styles.layout} onSubmit={submit} noValidate>
      <div className={styles.main}>
        {errorCount > 0 && (
          <div ref={errorRef} tabIndex={-1} className={styles.alert} role="alert">
            <TriangleAlert size={18} aria-hidden />
            {fa(errorCount)} مورد نیاز به اصلاح دارد؛ فیلدهای مشخص‌شده را بررسی کنید.
          </div>
        )}

        <fieldset className={styles.card}>
          <legend className={styles.cardTitle}>{gift.enabled ? "اطلاعات گیرنده هدیه" : "اطلاعات گیرنده"}</legend>
          {gift.enabled && (
            <p className={styles.giftNote}>
              <Gift size={16} aria-hidden /> این سفارش با بسته‌بندی هدیه و بدون درج قیمت برای گیرنده ارسال می‌شود.
            </p>
          )}
          <div className={styles.row2}>
            {field("fullName", "نام و نام خانوادگی", <input {...aria("fullName")} value={values.fullName} onChange={set("fullName")} autoComplete="name" placeholder={gift.enabled && gift.recipientName ? gift.recipientName : ""} />)}
            {field("mobile", "شماره موبایل", <input {...aria("mobile")} value={values.mobile} onChange={set("mobile")} inputMode="tel" dir="ltr" autoComplete="tel" placeholder="09xx xxx xxxx" />)}
          </div>
          <div className={styles.row2}>
            {field(
              "province",
              "استان",
              <select {...aria("province")} value={values.province} onChange={set("province")}>
                <option value="">انتخاب کنید</option>
                {provinces.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>,
            )}
            {field("city", "شهر", <input {...aria("city")} value={values.city} onChange={set("city")} autoComplete="address-level2" />)}
          </div>
          {field("address", "نشانی کامل", <textarea {...aria("address")} value={values.address} onChange={set("address")} rows={3} autoComplete="street-address" placeholder="خیابان، کوچه، پلاک، واحد" />)}
          <div className={styles.row2}>
            {field("postalCode", "کد پستی", <input {...aria("postalCode")} value={values.postalCode} onChange={set("postalCode")} inputMode="numeric" dir="ltr" autoComplete="postal-code" placeholder="۱۰ رقم بدون خط تیره" />)}
            {field("note", "توضیحات (اختیاری)", <input {...aria("note")} value={values.note} onChange={set("note")} />)}
          </div>
        </fieldset>

        <fieldset className={styles.card}>
          <legend className={styles.cardTitle}>روش ارسال</legend>
          <div className={styles.methods}>
            {shippingMethods.map((m) => {
              const free = totals.total >= FREE_SHIPPING_FROM;
              return (
                <label key={m.id} className={cx(styles.method, shipping === m.id && styles.methodOn)}>
                  <input type="radio" name="shipping" value={m.id} checked={shipping === m.id} onChange={() => setShipping(m.id)} />
                  <span className={styles.radio} aria-hidden />
                  <span className={styles.methodText}>
                    <strong>{m.title}</strong>
                    <small>{m.text}</small>
                  </span>
                  <span className={styles.methodCost}>{free ? "رایگان" : `${price(m.cost)} تومان`}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <fieldset className={styles.card}>
          <legend className={styles.cardTitle}>روش پرداخت</legend>
          <label className={cx(styles.method, styles.methodOn)}>
            <input type="radio" name="payment" defaultChecked />
            <span className={styles.radio} aria-hidden />
            <CreditCard size={20} aria-hidden className={styles.payIcon} />
            <span className={styles.methodText}>
              <strong>پرداخت اینترنتی (آزمایشی)</strong>
              <small>در نسخه نمایشی به درگاه بانکی متصل نمی‌شود.</small>
            </span>
          </label>
        </fieldset>
      </div>

      <aside className={styles.aside}>
        <OrderSummary
          itemsCount={totals.itemsCount}
          subtotal={totals.subtotal}
          savings={totals.savings}
          shipping={totals.shippingCost}
          payable={totals.payable}
        >
          <ul className={styles.items}>
            {resolved.map(({ product, qty }) => (
              <li key={product.id}>
                <ProductTile product={product} size="thumb" />
                <span>
                  {product.title}
                  <small>× {fa(qty)}</small>
                </span>
              </li>
            ))}
          </ul>
          {gift.enabled && (
            <div className={styles.giftSummary}>
              <strong>
                <Gift size={15} aria-hidden /> بسته‌بندی هدیه
              </strong>
              {gift.recipientName && <span>گیرنده: {gift.recipientName}</span>}
              {gift.message && <q>{gift.message}</q>}
              <Link href="/cart">ویرایش در سبد خرید</Link>
            </div>
          )}
          <Button type="submit" variant="primary" size="lg" block disabled={status === "submitting"}>
            {status === "submitting" ? "در حال ثبت سفارش…" : `ثبت سفارش و پرداخت ${price(totals.payable)} تومان`}
          </Button>
          <p className={styles.terms}>
            ثبت سفارش به معنی پذیرش <Link href="/info/terms">قوانین و مقررات</Link> است.
          </p>
        </OrderSummary>
      </aside>
    </form>
  );
}
