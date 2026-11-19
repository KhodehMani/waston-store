"use client";

import type { WidgetHandle } from "@vue-widgets";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Mount<P> = (el: HTMLElement, props: P) => WidgetHandle<P>;

interface Props<P> {
  /** Lazily imports the Vue bundle and returns the widget's mount function. */
  load: () => Promise<Mount<P>>;
  props: P;
  fallback?: ReactNode;
  className?: string;
  label?: string;
}

/**
 * React ⇄ Vue bridge.
 * React owns an empty <div>; once the (code-split) Vue module loads, a Vue app
 * is mounted inside it. Prop changes are pushed into the Vue app reactively,
 * and the Vue app is unmounted when the React component unmounts.
 * React never renders children into the mount node, so the two runtimes never
 * fight over the same DOM.
 */
export function VueIsland<P extends object>({ load, props, fallback, className, label }: Props<P>) {
  const hostRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<WidgetHandle<P> | null>(null);
  const latestProps = useRef(props);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    latestProps.current = props;
    handleRef.current?.update(props);
  }, [props]);

  useEffect(() => {
    let cancelled = false;
    load()
      .then((mount) => {
        if (cancelled || !hostRef.current) return;
        handleRef.current = mount(hostRef.current, latestProps.current);
        setStatus("ready");
      })
      .catch((error: unknown) => {
        console.error("[VueIsland] failed to load Vue widget", error);
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
      handleRef.current?.unmount();
      handleRef.current = null;
    };
  }, [load]);

  return (
    <div className={className} data-island="vue" aria-busy={status === "loading"} aria-label={label}>
      {status === "loading" && fallback}
      {status === "error" && (
        <p role="alert" style={{ fontSize: 13, color: "var(--accent-ink)" }}>
          بارگذاری این بخش انجام نشد؛ صفحه را دوباره بارگذاری کنید.
        </p>
      )}
      <div ref={hostRef} />
    </div>
  );
}
