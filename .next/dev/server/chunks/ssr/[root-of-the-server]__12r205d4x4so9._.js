module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/src/components/icons/ProductIllustration.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductIllustration",
    ()=>ProductIllustration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
/**
 * Line-art product illustrations (the mockup uses these instead of photos).
 * 64×64 grid, stroke = currentColor so tone classes control the colour.
 */ const paths = {
    toaster: [
        "M14 24h34a8 8 0 0 1 8 8v12a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6V32a8 8 0 0 1 6-8z",
        "M19 32h9",
        "M33 32h9",
        "M16 50v4",
        "M48 50v4",
        "M56 37h3",
        "M25 18c-1.5-2-1-4.5 1-7",
        "M35 18c-1.5-2-1-4.5 1-7"
    ],
    "food-processor": [
        "M21 10h19l-2 24H23z",
        "M40 14h6v11h-7",
        "M30.5 18v8",
        "M19 34h26v18a3 3 0 0 1-3 3H22a3 3 0 0 1-3-3z",
        "M27 45h10"
    ],
    blender: [
        "M23 8h18l-3 30H26z",
        "M21 38h22v15a3 3 0 0 1-3 3H24a3 3 0 0 1-3-3z",
        "M29 47h6",
        "M25 18h14"
    ],
    kettle: [
        "M22 24h20l4 26H18z",
        "M25 24a7 7 0 0 1 14 0",
        "M32 15v2",
        "M18 32l-8-6",
        "M46 30h2a6 6 0 0 1 0 12h-4",
        "M24 56h16"
    ],
    "coffee-maker": [
        "M18 12h28v8H18z",
        "M22 20v8",
        "M42 20v8",
        "M27 32h14v8a7 7 0 0 1-14 0z",
        "M41 34h2a3.5 3.5 0 0 1 0 7h-2",
        "M14 54h36"
    ],
    pot: [
        "M14 28h36v12a12 12 0 0 1-12 12H26a12 12 0 0 1-12-12z",
        "M10 28h44",
        "M20 23h24",
        "M32 18v5",
        "M28 18h8",
        "M8 32h6",
        "M50 32h6"
    ],
    mug: [
        "M14 22h28v18a12 12 0 0 1-12 12h-4a12 12 0 0 1-12-12z",
        "M42 27h3a7 7 0 0 1 0 14h-3",
        "M23 15c-1.5-2-1-4.5 1-7",
        "M32 15c-1.5-2-1-4.5 1-7"
    ],
    bowl: [
        "M10 30h44c0 12-10 20-22 20S10 42 10 30z",
        "M24 54h16",
        "M20 21a5 5 0 0 1 9 0",
        "M35 21a5 5 0 0 1 9 0"
    ],
    vase: [
        "M25 8h14",
        "M27 8c0 7-10 10-10 24s7 22 15 22 15-8 15-22-10-17-10-24",
        "M17.5 32h29"
    ],
    glasses: [
        "M12 12h16l-2 40H14z",
        "M36 12h16l-2 40H38z",
        "M13 24h14",
        "M37 24h14"
    ],
    cutlery: [
        "M18 10v14a5 5 0 0 0 10 0V10",
        "M23 10v14",
        "M23 29v25",
        "M44 10c-6 4-8 14-3 20h3v24"
    ],
    pan: [
        "M6 26h34v6a10 10 0 0 1-10 10H16A10 10 0 0 1 6 32z",
        "M40 28h18"
    ],
    tray: [
        "M14 40a18 18 0 0 1 36 0",
        "M32 18v4",
        "M8 40h48l-5 8H13z"
    ],
    plate: [
        "M32 10a22 22 0 1 1 0 44 22 22 0 0 1 0-44z",
        "M32 19a13 13 0 1 1 0 26 13 13 0 0 1 0-26z"
    ],
    vacuum: [
        "M10 50a11 11 0 0 1 22 0z",
        "M21 39v-9c0-12 7-18 17-18h6v38",
        "M38 50h20"
    ],
    "stick-vacuum": [
        "M32 8v40",
        "M27 8h10",
        "M26 22h12v12H26z",
        "M20 48h24l3 6H17z"
    ],
    "steam-mop": [
        "M32 8v38",
        "M26 8h12",
        "M27 26h10v10H27z",
        "M16 46h32v8H16z"
    ],
    gift: [
        "M10 24h44v9H10z",
        "M14 33h36v21H14z",
        "M32 24v30",
        "M32 24c-3-8-13-10-13-4 0 3 4 4 13 4",
        "M32 24c3-8 13-10 13-4 0 3-4 4-13 4"
    ]
};
function ProductIllustration({ name, size = 96, strokeWidth = 2.6, className, title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 64 64",
        width: size,
        height: size,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        role: title ? "img" : undefined,
        "aria-hidden": title ? undefined : true,
        "aria-label": title,
        children: paths[name].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: d
            }, d, false, {
                fileName: "[project]/src/components/icons/ProductIllustration.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/icons/ProductIllustration.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/AccountButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccountButton",
    ()=>AccountButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-round.mjs [app-ssr] (ecmascript) <export default as UserRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Sheet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/layout/Header.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
function AccountButton() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobile, setMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const submit = (e)=>{
        e.preventDefault();
        const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toAsciiDigits"])(mobile).replace(/\s/g, "");
        setState(/^09\d{9}$/.test(v) ? "sent" : "error");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconBtn,
                onClick: ()=>setOpen(true),
                "aria-label": "حساب کاربری",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"], {
                    size: 19,
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/AccountButton.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/AccountButton.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sheet"], {
                open: open,
                onClose: ()=>setOpen(false),
                title: "ورود یا ثبت‌نام",
                side: "center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authForm,
                    onSubmit: submit,
                    noValidate: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authLead,
                            children: "برای ورود یا ساخت حساب، شماره موبایل خود را وارد کنید."
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/AccountButton.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "auth-mobile",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authLabel,
                            children: "شماره موبایل"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/AccountButton.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "auth-mobile",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authInput,
                            inputMode: "tel",
                            dir: "ltr",
                            placeholder: "۰۹۱۲ ••• ••••",
                            value: mobile,
                            "aria-invalid": state === "error",
                            onChange: (e)=>{
                                setMobile(e.target.value);
                                setState("idle");
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/AccountButton.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        state === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authError,
                            role: "alert",
                            children: "شماره موبایل باید ۱۱ رقم و با ۰۹ شروع شود."
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/AccountButton.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this),
                        state === "sent" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authNote,
                            role: "status",
                            children: "این نسخه نمایشی است؛ کد تأیید ارسال نمی‌شود و ورود پس از راه‌اندازی فعال خواهد شد."
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/AccountButton.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            variant: "primary",
                            block: true,
                            children: "دریافت کد تأیید"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/AccountButton.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/AccountButton.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/AccountButton.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/AccountButton.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/Header.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "Header-module__lnUIdW__actions",
  "authError": "Header-module__lnUIdW__authError",
  "authForm": "Header-module__lnUIdW__authForm",
  "authInput": "Header-module__lnUIdW__authInput",
  "authLabel": "Header-module__lnUIdW__authLabel",
  "authLead": "Header-module__lnUIdW__authLead",
  "authNote": "Header-module__lnUIdW__authNote",
  "cartBtn": "Header-module__lnUIdW__cartBtn",
  "cartCount": "Header-module__lnUIdW__cartCount",
  "cartLabel": "Header-module__lnUIdW__cartLabel",
  "desktopOnly": "Header-module__lnUIdW__desktopOnly",
  "dot": "Header-module__lnUIdW__dot",
  "header": "Header-module__lnUIdW__header",
  "iconBtn": "Header-module__lnUIdW__iconBtn",
  "menuBtn": "Header-module__lnUIdW__menuBtn",
  "moon": "Header-module__lnUIdW__moon",
  "nav": "Header-module__lnUIdW__nav",
  "navActive": "Header-module__lnUIdW__navActive",
  "navLink": "Header-module__lnUIdW__navLink",
  "navList": "Header-module__lnUIdW__navList",
  "searchDesktop": "Header-module__lnUIdW__searchDesktop",
  "searchFallback": "Header-module__lnUIdW__searchFallback",
  "searchMobile": "Header-module__lnUIdW__searchMobile",
  "sun": "Header-module__lnUIdW__sun",
  "top": "Header-module__lnUIdW__top",
});
}),
"[project]/src/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nav$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nav.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AccountButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/AccountButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MobileMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/MobileMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SearchBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/SearchBox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/ThemeToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/layout/Header.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function SearchFallback() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchFallback,
        "aria-hidden": true
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
function Header() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { totals, ready } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const wishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWishlist"])();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const count = ready ? totals.itemsCount : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("container", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].top),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconBtn, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuBtn),
                        onClick: ()=>setMenuOpen(true),
                        "aria-label": "منوی اصلی",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 20,
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchDesktop,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchFallback, {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 39,
                                columnNumber: 31
                            }, this),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SearchBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchBox"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].desktopOnly,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AccountButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountButton"], {}, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/wishlist",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconBtn, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].desktopOnly),
                                "aria-label": "علاقه‌مندی‌ها",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        size: 19,
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    wishlist.ready && wishlist.ids.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dot,
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fa"])(wishlist.ids.length)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 51,
                                        columnNumber: 59
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/cart",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cartBtn,
                                "aria-label": `سبد خرید، ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fa"])(count)} کالا`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                        size: 18,
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cartLabel,
                                        children: "سبد خرید"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cartCount,
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fa"])(count)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 56,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("container", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchMobile),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchFallback, {}, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 62,
                        columnNumber: 29
                    }, this),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SearchBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchBox"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nav,
                "aria-label": "دسته‌بندی‌های اصلی",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("container", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navList),
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mainNav"].map((item)=>{
                        const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nav$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isActive"])(pathname, item.href);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLink, active && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navActive),
                                "aria-current": active ? "page" : undefined,
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 73,
                                columnNumber: 17
                            }, this)
                        }, item.href, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 72,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MobileMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileMenu"], {
                open: menuOpen,
                onClose: ()=>setMenuOpen(false),
                pathname: pathname
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/Logo.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "logo": "Logo-module__WIRVka__logo",
  "mark": "Logo-module__WIRVka__mark",
  "tag": "Logo-module__WIRVka__tag",
  "text": "Logo-module__WIRVka__text",
  "word": "Logo-module__WIRVka__word",
});
}),
"[project]/src/components/layout/Logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__House$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.mjs [app-ssr] (ecmascript) <export default as House>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Logo$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/layout/Logo.module.css [app-ssr] (css module)");
;
;
;
;
;
function Logo({ compact = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: "/",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Logo$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
        "aria-label": `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].name} — صفحه اصلی`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Logo$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mark,
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__House$3e$__["House"], {
                    size: 18,
                    strokeWidth: 2.2
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Logo.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Logo.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Logo$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].text,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Logo$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].word,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].name
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Logo.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Logo$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tag,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].tagline
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Logo.tsx",
                        lineNumber: 14,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Logo.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Logo.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/MobileMenu.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "MobileMenu-module__dvw3PW__active",
  "extra": "MobileMenu-module__dvw3PW__extra",
  "extraLink": "MobileMenu-module__dvw3PW__extraLink",
  "link": "MobileMenu-module__dvw3PW__link",
  "list": "MobileMenu-module__dvw3PW__list",
});
}),
"[project]/src/components/layout/MobileMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileMenu",
    ()=>MobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Sheet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nav$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nav.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MobileMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/layout/MobileMenu.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
;
;
function MobileMenu({ open, onClose, pathname }) {
    // Close the drawer after navigation.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sheet"], {
        open: open,
        onClose: onClose,
        title: "منو",
        side: "right",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            "aria-label": "منوی موبایل",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MobileMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].list,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mainNav"].map((item)=>{
                        const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nav$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isActive"])(pathname, item.href);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MobileMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link, active && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MobileMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active),
                                "aria-current": active ? "page" : undefined,
                                children: [
                                    item.label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        size: 16,
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/MobileMenu.tsx",
                                        lineNumber: 29,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/MobileMenu.tsx",
                                lineNumber: 27,
                                columnNumber: 17
                            }, this)
                        }, item.href, false, {
                            fileName: "[project]/src/components/layout/MobileMenu.tsx",
                            lineNumber: 26,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/MobileMenu.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MobileMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].extra,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/wishlist",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MobileMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].extraLink,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    size: 18,
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/MobileMenu.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                " علاقه‌مندی‌ها"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/MobileMenu.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/info/faq",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MobileMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].extraLink,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                    size: 18,
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/MobileMenu.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                " سوالات متداول"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/MobileMenu.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/MobileMenu.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/MobileMenu.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/MobileMenu.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/MobileTabBar.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "MobileTabBar-module__ygATFW__active",
  "badge": "MobileTabBar-module__ygATFW__badge",
  "bar": "MobileTabBar-module__ygATFW__bar",
  "iconWrap": "MobileTabBar-module__ygATFW__iconWrap",
  "tab": "MobileTabBar-module__ygATFW__tab",
});
}),
"[project]/src/components/layout/MobileTabBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileTabBar",
    ()=>MobileTabBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__House$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.mjs [app-ssr] (ecmascript) <export default as House>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.mjs [app-ssr] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MobileTabBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/layout/MobileTabBar.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
const tabs = [
    {
        href: "/",
        label: "خانه",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__House$3e$__["House"]
    },
    {
        href: "/shop",
        label: "دسته‌ها",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"]
    },
    {
        href: "/search",
        label: "جستجو",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"]
    },
    {
        href: "/wishlist",
        label: "علاقه‌مندی",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"]
    },
    {
        href: "/cart",
        label: "سبد",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"]
    }
];
function MobileTabBar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { totals, ready } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MobileTabBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bar,
        "aria-label": "ناوبری پایین",
        children: tabs.map(({ href, label, icon: Icon })=>{
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MobileTabBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tab, active && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MobileTabBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active),
                "aria-current": active ? "page" : undefined,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MobileTabBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconWrap,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                size: 22,
                                strokeWidth: 1.8,
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/MobileTabBar.tsx",
                                lineNumber: 29,
                                columnNumber: 15
                            }, this),
                            href === "/cart" && ready && totals.itemsCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MobileTabBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fa"])(totals.itemsCount)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/MobileTabBar.tsx",
                                lineNumber: 30,
                                columnNumber: 70
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/MobileTabBar.tsx",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this),
                    label
                ]
            }, href, true, {
                fileName: "[project]/src/components/layout/MobileTabBar.tsx",
                lineNumber: 27,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/layout/MobileTabBar.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/Providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Toast.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Providers.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/layout/SearchBox.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "all": "SearchBox-module__CXd4tG__all",
  "drop": "SearchBox-module__CXd4tG__drop",
  "field": "SearchBox-module__CXd4tG__field",
  "form": "SearchBox-module__CXd4tG__form",
  "icon": "SearchBox-module__CXd4tG__icon",
  "input": "SearchBox-module__CXd4tG__input",
  "list": "SearchBox-module__CXd4tG__list",
  "optText": "SearchBox-module__CXd4tG__optText",
  "option": "SearchBox-module__CXd4tG__option",
  "optionActive": "SearchBox-module__CXd4tG__optionActive",
  "thumb": "SearchBox-module__CXd4tG__thumb",
});
}),
"[project]/src/components/layout/SearchBox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchBox",
    ()=>SearchBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$ProductIllustration$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/ProductIllustration.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/search.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SearchBox$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/layout/SearchBox.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
;
;
function SearchBox({ className, autoFocus }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>params.get("q") ?? "");
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const listId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const suggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>query.trim().length > 1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["searchProducts"])(query, 5) : [], [
        query
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onDown = (e)=>{
            if (!wrapRef.current?.contains(e.target)) setOpen(false);
        };
        document.addEventListener("pointerdown", onDown);
        return ()=>document.removeEventListener("pointerdown", onDown);
    }, []);
    const go = (q)=>{
        setOpen(false);
        router.push(`/search?q=${encodeURIComponent(q.trim())}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        ref: wrapRef,
        role: "search",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SearchBox$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form, className),
        onSubmit: (e)=>{
            e.preventDefault();
            if (active >= 0 && suggestions[active]) {
                setOpen(false);
                router.push(`/product/${suggestions[active].slug}`);
            } else if (query.trim()) go(query);
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SearchBox$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "visually-hidden",
                        children: "جستجوی محصولات"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/SearchBox.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        size: 18,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SearchBox$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].icon,
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/SearchBox.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "search",
                        value: query,
                        autoFocus: autoFocus,
                        placeholder: "جستجو در توستر، غذاساز، ظروف سفالی…",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SearchBox$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                        role: "combobox",
                        "aria-expanded": open && suggestions.length > 0,
                        "aria-controls": listId,
                        "aria-autocomplete": "list",
                        "aria-activedescendant": active >= 0 ? `${listId}-${active}` : undefined,
                        onChange: (e)=>{
                            setQuery(e.target.value);
                            setActive(-1);
                            setOpen(true);
                        },
                        onFocus: ()=>setOpen(true),
                        onKeyDown: (e)=>{
                            if (e.key === "ArrowDown") {
                                e.preventDefault();
                                setActive((i)=>Math.min(i + 1, suggestions.length - 1));
                            } else if (e.key === "ArrowUp") {
                                e.preventDefault();
                                setActive((i)=>Math.max(i - 1, -1));
                            } else if (e.key === "Escape") {
                                setOpen(false);
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/SearchBox.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/SearchBox.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            open && suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                id: listId,
                role: "listbox",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SearchBox$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].list,
                "aria-label": "پیشنهادهای جستجو",
                children: [
                    suggestions.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            id: `${listId}-${i}`,
                            role: "option",
                            "aria-selected": i === active,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/product/${p.slug}`,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SearchBox$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].option, i === active && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SearchBox$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].optionActive),
                                onClick: ()=>setOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SearchBox$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].thumb, `tone-${p.tone}`),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$ProductIllustration$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductIllustration"], {
                                            name: p.illustration,
                                            size: 26,
                                            strokeWidth: 3.4
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/SearchBox.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/SearchBox.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SearchBox$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].optText,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: p.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/SearchBox.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["price"])(p.price),
                                                    " تومان"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/SearchBox.tsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/SearchBox.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/SearchBox.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this)
                        }, p.id, false, {
                            fileName: "[project]/src/components/layout/SearchBox.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        role: "presentation",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SearchBox$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].all,
                            children: [
                                "نمایش همه نتایج «",
                                query.trim(),
                                "»"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/SearchBox.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/SearchBox.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/SearchBox.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/SearchBox.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/ThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "THEME_KEY",
    ()=>THEME_KEY,
    "ThemeToggle",
    ()=>ThemeToggle,
    "themeScript",
    ()=>themeScript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/layout/Header.module.css [app-ssr] (css module)");
"use client";
;
;
;
const THEME_KEY = "waston:theme";
const themeScript = `(function(){try{var t=localStorage.getItem('${THEME_KEY}');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='light'}})();`;
function ThemeToggle({ className }) {
    const toggle = ()=>{
        const root = document.documentElement;
        const next = root.dataset.theme === "dark" ? "light" : "dark";
        root.dataset.theme = next;
        try {
            localStorage.setItem(THEME_KEY, next);
        } catch  {
        /* ignore */ }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: className ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconBtn,
        onClick: toggle,
        "aria-label": "تغییر تم روشن و تاریک",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                size: 19,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].moon,
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                size: 19,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sun,
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/ThemeToggle.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Button.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "block": "Button-module__8RiFmG__block",
  "btn": "Button-module__8RiFmG__btn",
  "ghost": "Button-module__8RiFmG__ghost",
  "lg": "Button-module__8RiFmG__lg",
  "on-dark": "Button-module__8RiFmG__on-dark",
  "outline": "Button-module__8RiFmG__outline",
  "primary": "Button-module__8RiFmG__primary",
  "secondary": "Button-module__8RiFmG__secondary",
  "sm": "Button-module__8RiFmG__sm",
});
}),
"[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.module.css [app-ssr] (css module)");
;
;
;
;
function Button(props) {
    const { variant = "primary", size = "md", block, icon, className, children } = props;
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btn, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][variant], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][size], block && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].block, className);
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            icon,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Button.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
    if (props.href !== undefined) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: props.href,
            className: classes,
            onClick: props.onClick,
            "aria-label": props["aria-label"],
            children: content
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { variant: _v, size: _s, block: _b, icon: _i, className: _c, children: _ch, type = "button", ...rest } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        className: classes,
        ...rest,
        children: content
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Sheet.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "Sheet-module__7Yhcpq__body",
  "bottom": "Sheet-module__7Yhcpq__bottom",
  "center": "Sheet-module__7Yhcpq__center",
  "close": "Sheet-module__7Yhcpq__close",
  "dialog": "Sheet-module__7Yhcpq__dialog",
  "fade": "Sheet-module__7Yhcpq__fade",
  "footer": "Sheet-module__7Yhcpq__footer",
  "header": "Sheet-module__7Yhcpq__header",
  "panel": "Sheet-module__7Yhcpq__panel",
  "pop": "Sheet-module__7Yhcpq__pop",
  "right": "Sheet-module__7Yhcpq__right",
  "rise": "Sheet-module__7Yhcpq__rise",
  "slide-in": "Sheet-module__7Yhcpq__slide-in",
  "title": "Sheet-module__7Yhcpq__title",
});
}),
"[project]/src/components/ui/Sheet.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Sheet$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/Sheet.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
function Sheet({ open, onClose, title, side = "right", children, footer }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const dialog = ref.current;
        if (!dialog) return;
        if (open && !dialog.open) dialog.showModal();
        if (!open && dialog.open) dialog.close();
    }, [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Sheet$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dialog, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Sheet$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][side]),
        "aria-label": title,
        onClose: onClose,
        onCancel: (e)=>{
            e.preventDefault();
            onClose();
        },
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Sheet$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Sheet$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Sheet$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Sheet.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Sheet$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].close,
                            onClick: onClose,
                            "aria-label": "بستن",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20,
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Sheet.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Sheet.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Sheet.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Sheet$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].body,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Sheet.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Sheet$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
                    children: footer
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Sheet.tsx",
                    lineNumber: 50,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Sheet.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Sheet.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Toast.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "action": "Toast-module__dpyMdW__action",
  "iconInfo": "Toast-module__dpyMdW__iconInfo",
  "iconOk": "Toast-module__dpyMdW__iconOk",
  "msg": "Toast-module__dpyMdW__msg",
  "region": "Toast-module__dpyMdW__region",
  "toast": "Toast-module__dpyMdW__toast",
  "toast-in": "Toast-module__dpyMdW__toast-in",
});
}),
"[project]/src/components/ui/Toast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/Toast.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(()=>{});
const useToast = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
function ToastProvider({ children }) {
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const nextId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(1);
    const dismiss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>setItems((list)=>list.filter((t)=>t.id !== id)), []);
    const show = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message, options)=>{
        const id = nextId.current++;
        setItems((list)=>[
                ...list.slice(-2),
                {
                    id,
                    message,
                    tone: options?.tone ?? "success",
                    action: options?.action
                }
            ]);
        window.setTimeout(()=>dismiss(id), 3200);
    }, [
        dismiss
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>show, [
        show
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: value,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].region,
                "aria-live": "polite",
                "aria-atomic": "false",
                children: items.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toast,
                        role: "status",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: t.tone === "success" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconOk : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconInfo,
                                children: t.tone === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    size: 16,
                                    strokeWidth: 2.6,
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Toast.tsx",
                                    lineNumber: 45,
                                    columnNumber: 39
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                    size: 16,
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Toast.tsx",
                                    lineNumber: 45,
                                    columnNumber: 91
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Toast.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].msg,
                                children: t.message
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Toast.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            t.action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: t.action.href,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].action,
                                onClick: ()=>dismiss(t.id),
                                children: t.action.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Toast.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this)
                        ]
                    }, t.id, true, {
                        fileName: "[project]/src/components/ui/Toast.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Toast.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Toast.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/products.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "catalog",
    ()=>catalog,
    "discountPercent",
    ()=>discountPercent,
    "getProduct",
    ()=>getProduct,
    "giftPacks",
    ()=>giftPacks,
    "isInStock",
    ()=>isInStock,
    "pickProducts",
    ()=>pickProducts,
    "products",
    ()=>products
]);
const products = [
    // ── لوازم برقی آشپزخانه ───────────────────────────────────────────
    {
        id: "t-210",
        slug: "t-210",
        model: "T-210",
        title: "توستر دو اسلایس استیل",
        brand: "WASTON",
        category: "kitchen-appliances",
        tags: [],
        illustration: "toaster",
        tone: "teal",
        price: 2_450_000,
        compareAt: 2_890_000,
        rating: 4.6,
        reviews: 38,
        stock: null,
        giftWrap: true,
        occasions: [
            "birthday",
            "housewarming"
        ],
        salesRank: 1,
        facets: {
            power: 900
        },
        summary: "توستر دو اسلایس با بدنه استیل، ۷ درجه برشته‌کردن و سینی جمع‌کننده خرده نان؛ مناسب صبحانه‌های سریع روزانه.",
        highlights: [
            "۷ سطح برشته‌کردن",
            "دکمه گرم‌کردن مجدد و یخ‌زدایی",
            "سینی خرده نان کشویی"
        ],
        specs: [
            {
                label: "توان مصرفی",
                value: "۹۰۰ وات"
            },
            {
                label: "ظرفیت",
                value: "۲ اسلایس"
            },
            {
                label: "جنس بدنه",
                value: "استیل ضدزنگ"
            },
            {
                label: "گارانتی",
                value: "۱۸ ماه (داده نمونه)"
            }
        ]
    },
    {
        id: "fp-1200",
        slug: "fp-1200",
        model: "FP-1200",
        title: "غذاساز چندکاره ۱۲ کاره",
        brand: "WASTON",
        category: "kitchen-appliances",
        tags: [],
        illustration: "food-processor",
        tone: "navy",
        price: 7_850_000,
        rating: 4.7,
        reviews: 52,
        stock: null,
        giftWrap: true,
        occasions: [
            "housewarming"
        ],
        salesRank: 3,
        facets: {
            power: 1200
        },
        summary: "غذاساز ۱۲ کاره با کاسه ۳ لیتری، تیغه‌های خردکن و رنده و همزن؛ یک دستگاه برای بیشتر کارهای آشپزخانه.",
        highlights: [
            "۱۲ کاربرد با لوازم جانبی کامل",
            "کاسه ۳ لیتری بدون BPA",
            "قفل ایمنی درب"
        ],
        specs: [
            {
                label: "توان مصرفی",
                value: "۱۲۰۰ وات"
            },
            {
                label: "ظرفیت کاسه",
                value: "۳ لیتر"
            },
            {
                label: "تعداد سرعت",
                value: "۲ سرعت + پالس"
            },
            {
                label: "گارانتی",
                value: "۱۸ ماه (داده نمونه)"
            }
        ]
    },
    {
        id: "k-17",
        slug: "k-17",
        model: "K-17",
        title: "کتری برقی ۱٫۷ لیتری",
        brand: "برند نمونه الف",
        category: "kitchen-appliances",
        tags: [],
        illustration: "kettle",
        tone: "coral",
        price: 1_680_000,
        compareAt: 1_990_000,
        rating: 4.4,
        reviews: 27,
        stock: null,
        giftWrap: true,
        occasions: [
            "housewarming",
            "yalda-nowruz"
        ],
        salesRank: 5,
        facets: {
            power: 2200
        },
        summary: "کتری برقی ۱٫۷ لیتری با خاموشی خودکار و پایه چرخان ۳۶۰ درجه.",
        highlights: [
            "خاموشی خودکار پس از جوش",
            "پایه چرخان ۳۶۰ درجه",
            "نشانگر سطح آب"
        ],
        specs: [
            {
                label: "توان مصرفی",
                value: "۲۲۰۰ وات"
            },
            {
                label: "ظرفیت",
                value: "۱٫۷ لیتر"
            },
            {
                label: "جنس بدنه",
                value: "استیل و پلاستیک مقاوم"
            },
            {
                label: "گارانتی",
                value: "۱۲ ماه (داده نمونه)"
            }
        ]
    },
    {
        id: "cm-06",
        slug: "cm-06",
        model: "CM-06",
        title: "قهوه‌ساز قطره‌ای",
        brand: "WASTON",
        category: "kitchen-appliances",
        tags: [],
        illustration: "coffee-maker",
        tone: "coral",
        price: 4_150_000,
        compareAt: 4_790_000,
        rating: 4.5,
        reviews: 31,
        stock: 3,
        limited: true,
        giftWrap: true,
        occasions: [
            "birthday",
            "anniversary"
        ],
        salesRank: 8,
        facets: {
            power: 1300
        },
        summary: "قهوه‌ساز قطره‌ای ۶ فنجانه با صفحه گرم‌نگه‌دار و فیلتر دائمی قابل شست‌وشو.",
        highlights: [
            "ظرفیت ۶ فنجان",
            "صفحه گرم‌نگه‌دار ۴۰ دقیقه‌ای",
            "فیلتر دائمی"
        ],
        specs: [
            {
                label: "توان مصرفی",
                value: "۱۳۰۰ وات"
            },
            {
                label: "ظرفیت",
                value: "۰٫۷۵ لیتر"
            },
            {
                label: "نوع فیلتر",
                value: "دائمی، قابل شست‌وشو"
            },
            {
                label: "گارانتی",
                value: "۱۸ ماه (داده نمونه)"
            }
        ]
    },
    {
        id: "bl-15",
        slug: "bl-15",
        model: "BL-15",
        title: "مخلوط‌کن شیشه‌ای ۱٫۵ لیتری",
        brand: "برند نمونه ب",
        category: "kitchen-appliances",
        tags: [],
        illustration: "blender",
        tone: "teal",
        price: 3_290_000,
        rating: 4.3,
        reviews: 19,
        stock: null,
        newRank: 5,
        salesRank: 12,
        facets: {
            power: 700
        },
        summary: "مخلوط‌کن با پارچ شیشه‌ای ۱٫۵ لیتری و تیغه ۶ پر استیل برای اسموتی و سوپ.",
        highlights: [
            "پارچ شیشه‌ای مقاوم به حرارت",
            "تیغه ۶ پر استیل",
            "حالت خردکردن یخ"
        ],
        specs: [
            {
                label: "توان مصرفی",
                value: "۷۰۰ وات"
            },
            {
                label: "ظرفیت",
                value: "۱٫۵ لیتر"
            },
            {
                label: "جنس پارچ",
                value: "شیشه"
            },
            {
                label: "گارانتی",
                value: "۱۲ ماه (داده نمونه)"
            }
        ]
    },
    {
        id: "t-420",
        slug: "t-420",
        model: "T-420",
        title: "توستر چهار اسلایس",
        brand: "WASTON",
        category: "kitchen-appliances",
        tags: [],
        illustration: "toaster",
        tone: "navy",
        price: 3_640_000,
        rating: 4.2,
        reviews: 14,
        stock: 0,
        facets: {
            power: 1600
        },
        summary: "توستر چهار اسلایس با کنترل مستقل دو طرف؛ مناسب خانواده‌های پرجمعیت.",
        highlights: [
            "کنترل مستقل دو جفت شکاف",
            "شکاف‌های عریض",
            "خاموشی خودکار"
        ],
        specs: [
            {
                label: "توان مصرفی",
                value: "۱۶۰۰ وات"
            },
            {
                label: "ظرفیت",
                value: "۴ اسلایس"
            },
            {
                label: "جنس بدنه",
                value: "استیل"
            },
            {
                label: "گارانتی",
                value: "۱۸ ماه (داده نمونه)"
            }
        ]
    },
    {
        id: "fp-600",
        slug: "fp-600",
        model: "FP-600",
        title: "غذاساز کامپکت",
        brand: "برند نمونه الف",
        category: "kitchen-appliances",
        tags: [],
        illustration: "food-processor",
        tone: "teal",
        price: 4_980_000,
        reviews: 0,
        stock: null,
        newRank: 1,
        giftWrap: true,
        occasions: [
            "birthday"
        ],
        facets: {
            power: 600
        },
        summary: "غذاساز جمع‌وجور برای آشپزخانه‌های کوچک، با کاسه ۱٫۵ لیتری و دو تیغه.",
        highlights: [
            "ابعاد کوچک",
            "کاسه ۱٫۵ لیتری",
            "شست‌وشوی آسان قطعات"
        ],
        specs: [
            {
                label: "توان مصرفی",
                value: "۶۰۰ وات"
            },
            {
                label: "ظرفیت کاسه",
                value: "۱٫۵ لیتر"
            },
            {
                label: "تعداد سرعت",
                value: "۱ سرعت + پالس"
            },
            {
                label: "گارانتی",
                value: "۱۲ ماه (داده نمونه)"
            }
        ]
    },
    // ── ظروف آشپزخانه (شامل سفال و سرامیک) ──────────────────────────────
    {
        id: "ck-8",
        slug: "ck-8",
        model: "CK-8",
        title: "سرویس قابلمه ۸ پارچه استیل",
        brand: "WASTON",
        category: "kitchenware",
        tags: [
            "cooking"
        ],
        illustration: "pot",
        tone: "coral",
        price: 8_900_000,
        compareAt: 10_400_000,
        rating: 4.7,
        reviews: 61,
        stock: null,
        giftWrap: true,
        occasions: [
            "housewarming",
            "anniversary"
        ],
        salesRank: 2,
        facets: {
            material: "steel"
        },
        summary: "سرویس ۸ پارچه استیل با کف سه‌لایه، مناسب همه اجاق‌ها از جمله القایی.",
        highlights: [
            "کف سه‌لایه برای پخش یکنواخت حرارت",
            "سازگار با اجاق القایی",
            "درب شیشه‌ای با سوپاپ بخار"
        ],
        specs: [
            {
                label: "تعداد قطعات",
                value: "۸ پارچه"
            },
            {
                label: "جنس",
                value: "استیل ۱۸/۱۰"
            },
            {
                label: "اجاق مناسب",
                value: "گاز، برقی، القایی"
            },
            {
                label: "ضمانت",
                value: "اصالت کالا"
            }
        ]
    },
    {
        id: "cr-m2",
        slug: "cr-m2",
        model: "CR-M2",
        title: "ماگ سرامیکی دوتایی",
        brand: "WASTON",
        category: "kitchenware",
        tags: [
            "cups",
            "ceramic"
        ],
        illustration: "mug",
        tone: "teal",
        price: 860_000,
        rating: 4.8,
        reviews: 40,
        stock: null,
        newRank: 4,
        giftWrap: true,
        occasions: [
            "birthday",
            "anniversary",
            "yalda-nowruz"
        ],
        salesRank: 7,
        facets: {
            material: "ceramic"
        },
        summary: "دو ماگ سرامیکی لعاب‌دار ۳۵۰ میلی‌لیتری؛ هدیه‌ای ساده برای دو نفر.",
        highlights: [
            "ظرفیت ۳۵۰ میلی‌لیتر",
            "قابل استفاده در مایکروویو",
            "لعاب مات"
        ],
        specs: [
            {
                label: "تعداد",
                value: "۲ عدد"
            },
            {
                label: "جنس",
                value: "سرامیک لعاب‌دار"
            },
            {
                label: "ظرفیت",
                value: "۳۵۰ میلی‌لیتر"
            },
            {
                label: "ماشین ظرفشویی",
                value: "مناسب"
            }
        ]
    },
    {
        id: "pn-28",
        slug: "pn-28",
        model: "PN-28",
        title: "تابه گرانیتی ۲۸ سانتی‌متر",
        brand: "برند نمونه الف",
        category: "kitchenware",
        tags: [
            "cooking"
        ],
        illustration: "pan",
        tone: "teal",
        price: 1_450_000,
        rating: 4.4,
        reviews: 35,
        stock: null,
        salesRank: 6,
        facets: {
            material: "granite"
        },
        summary: "تابه گرانیتی نچسب ۲۸ سانتی‌متری برای پخت کم‌روغن.",
        highlights: [
            "پوشش نچسب گرانیتی",
            "دسته ضد حرارت",
            "مناسب پخت کم‌روغن"
        ],
        specs: [
            {
                label: "قطر",
                value: "۲۸ سانتی‌متر"
            },
            {
                label: "جنس",
                value: "آلومینیوم با پوشش گرانیت"
            },
            {
                label: "اجاق مناسب",
                value: "گاز و برقی"
            },
            {
                label: "ضمانت",
                value: "اصالت کالا"
            }
        ]
    },
    {
        id: "ct-30",
        slug: "ct-30",
        model: "CT-30",
        title: "سرویس قاشق و چنگال ۳۰ پارچه",
        brand: "WASTON",
        category: "kitchenware",
        tags: [
            "serving"
        ],
        illustration: "cutlery",
        tone: "teal",
        price: 3_450_000,
        rating: 4.5,
        reviews: 29,
        stock: null,
        giftWrap: true,
        occasions: [
            "housewarming",
            "yalda-nowruz"
        ],
        salesRank: 9,
        facets: {
            material: "steel"
        },
        summary: "سرویس ۳۰ پارچه استیل برای ۶ نفر، با جعبه نگهداری.",
        highlights: [
            "مناسب ۶ نفر",
            "استیل براق ضدزنگ",
            "جعبه نگهداری"
        ],
        specs: [
            {
                label: "تعداد قطعات",
                value: "۳۰ پارچه"
            },
            {
                label: "جنس",
                value: "استیل ۱۸/۱۰"
            },
            {
                label: "تعداد نفرات",
                value: "۶ نفر"
            },
            {
                label: "ماشین ظرفشویی",
                value: "مناسب"
            }
        ]
    },
    {
        id: "gl-6",
        slug: "gl-6",
        model: "GL-6",
        title: "سرویس لیوان شیشه‌ای ۶ عددی",
        brand: "برند نمونه ب",
        category: "kitchenware",
        tags: [
            "cups"
        ],
        illustration: "glasses",
        tone: "navy",
        price: 980_000,
        compareAt: 1_150_000,
        rating: 4.2,
        reviews: 23,
        stock: null,
        giftWrap: true,
        occasions: [
            "housewarming",
            "yalda-nowruz"
        ],
        salesRank: 11,
        facets: {
            material: "glass"
        },
        summary: "شش لیوان شیشه‌ای ۳۰۰ میلی‌لیتری با دیواره ضخیم.",
        highlights: [
            "۶ عدد لیوان",
            "دیواره ضخیم و مقاوم",
            "قابل شست‌وشو در ماشین"
        ],
        specs: [
            {
                label: "تعداد",
                value: "۶ عدد"
            },
            {
                label: "جنس",
                value: "شیشه"
            },
            {
                label: "ظرفیت",
                value: "۳۰۰ میلی‌لیتر"
            },
            {
                label: "ماشین ظرفشویی",
                value: "مناسب"
            }
        ]
    },
    {
        id: "cr-v2",
        slug: "cr-v2",
        model: "CR-V2",
        title: "گلدان سرامیکی لعاب‌دار",
        brand: "برند نمونه الف",
        category: "ceramics",
        tags: [
            "ceramic"
        ],
        illustration: "vase",
        tone: "navy",
        price: 1_890_000,
        compareAt: 2_200_000,
        rating: 4.6,
        reviews: 12,
        stock: 3,
        limited: true,
        giftWrap: true,
        occasions: [
            "birthday",
            "anniversary",
            "housewarming"
        ],
        facets: {
            material: "ceramic"
        },
        summary: "گلدان سرامیکی دست‌ساز با لعاب براق؛ هر قطعه کمی با دیگری متفاوت است.",
        highlights: [
            "دست‌ساز",
            "لعاب براق",
            "ارتفاع ۲۸ سانتی‌متر"
        ],
        specs: [
            {
                label: "ارتفاع",
                value: "۲۸ سانتی‌متر"
            },
            {
                label: "جنس",
                value: "سرامیک لعاب‌دار"
            },
            {
                label: "نوع ساخت",
                value: "دست‌ساز"
            },
            {
                label: "ضمانت",
                value: "اصالت کالا"
            }
        ]
    },
    {
        id: "cr-p6",
        slug: "cr-p6",
        model: "CR-P6",
        title: "سرویس بشقاب سرامیکی ۶ عددی",
        brand: "برند نمونه ب",
        category: "kitchenware",
        tags: [
            "serving",
            "ceramic"
        ],
        illustration: "plate",
        tone: "coral",
        price: 2_750_000,
        rating: 4.3,
        reviews: 16,
        stock: 0,
        giftWrap: true,
        occasions: [
            "housewarming",
            "yalda-nowruz"
        ],
        facets: {
            material: "ceramic"
        },
        summary: "شش بشقاب تخت سرامیکی ۲۷ سانتی‌متری با لبه لعاب‌دار.",
        highlights: [
            "۶ عدد بشقاب تخت",
            "قطر ۲۷ سانتی‌متر",
            "مناسب مایکروویو"
        ],
        specs: [
            {
                label: "تعداد",
                value: "۶ عدد"
            },
            {
                label: "جنس",
                value: "سرامیک"
            },
            {
                label: "قطر",
                value: "۲۷ سانتی‌متر"
            },
            {
                label: "ماشین ظرفشویی",
                value: "مناسب"
            }
        ]
    },
    {
        id: "tr-40",
        slug: "tr-40",
        model: "TR-40",
        title: "سینی پذیرایی استیل",
        brand: "WASTON",
        category: "kitchenware",
        tags: [
            "serving"
        ],
        illustration: "tray",
        tone: "coral",
        price: 1_250_000,
        rating: 4,
        reviews: 8,
        stock: null,
        newRank: 6,
        giftWrap: true,
        occasions: [
            "yalda-nowruz",
            "housewarming"
        ],
        facets: {
            material: "steel"
        },
        summary: "سینی پذیرایی استیل ۴۰ سانتی‌متری با دسته‌های یکپارچه.",
        highlights: [
            "طول ۴۰ سانتی‌متر",
            "دسته‌های یکپارچه",
            "سطح براق ضدلک"
        ],
        specs: [
            {
                label: "ابعاد",
                value: "۴۰ × ۲۸ سانتی‌متر"
            },
            {
                label: "جنس",
                value: "استیل"
            },
            {
                label: "کاربرد",
                value: "پذیرایی"
            },
            {
                label: "ضمانت",
                value: "اصالت کالا"
            }
        ]
    },
    {
        id: "pt-b1",
        slug: "pt-b1",
        model: "PT-B1",
        title: "کاسه سفالی دست‌ساز",
        brand: "WASTON",
        category: "ceramics",
        tags: [
            "serving",
            "ceramic"
        ],
        illustration: "bowl",
        tone: "coral",
        price: 720_000,
        reviews: 0,
        stock: null,
        newRank: 2,
        giftWrap: true,
        occasions: [
            "birthday",
            "yalda-nowruz"
        ],
        facets: {
            material: "pottery"
        },
        summary: "کاسه سفالی دست‌ساز با لعاب خوراکی؛ مناسب سالاد، آش و پذیرایی.",
        highlights: [
            "لعاب خوراکی",
            "دست‌ساز",
            "قطر ۱۸ سانتی‌متر"
        ],
        specs: [
            {
                label: "قطر",
                value: "۱۸ سانتی‌متر"
            },
            {
                label: "جنس",
                value: "سفال لعاب‌دار"
            },
            {
                label: "نوع ساخت",
                value: "دست‌ساز"
            },
            {
                label: "نگهداری",
                value: "شست‌وشو با دست"
            }
        ]
    },
    // ── لوازم نظافت خانه ─────────────────────────────────────────────
    {
        id: "v-2000",
        slug: "v-2000",
        model: "V-2000",
        title: "جاروبرقی سطلی ۲۰۰۰ وات",
        brand: "WASTON",
        category: "cleaning",
        tags: [],
        illustration: "vacuum",
        tone: "navy",
        price: 9_850_000,
        compareAt: 11_200_000,
        rating: 4.5,
        reviews: 44,
        stock: null,
        salesRank: 4,
        facets: {
            deviceType: "canister",
            power: 2000
        },
        summary: "جاروبرقی سطلی ۲۰۰۰ وات با فیلتر HEPA و مخزن ۴ لیتری؛ مناسب فرش و فضاهای بزرگ.",
        highlights: [
            "فیلتر HEPA",
            "مخزن ۴ لیتری",
            "۳ برس همراه"
        ],
        specs: [
            {
                label: "توان مصرفی",
                value: "۲۰۰۰ وات"
            },
            {
                label: "نوع فیلتر",
                value: "HEPA"
            },
            {
                label: "ظرفیت مخزن",
                value: "۴ لیتر"
            },
            {
                label: "گارانتی",
                value: "۱۸ ماه (داده نمونه)"
            }
        ]
    },
    {
        id: "sv-30",
        slug: "sv-30",
        model: "SV-30",
        title: "جاروبرقی عصایی شارژی",
        brand: "WASTON",
        category: "cleaning",
        tags: [],
        illustration: "stick-vacuum",
        tone: "teal",
        price: 12_400_000,
        rating: 4.6,
        reviews: 22,
        stock: null,
        newRank: 3,
        giftWrap: true,
        occasions: [
            "housewarming"
        ],
        salesRank: 10,
        facets: {
            deviceType: "stick"
        },
        summary: "جاروبرقی عصایی شارژی با ۴۵ دقیقه کارکرد و قابلیت تبدیل به جاروی دستی.",
        highlights: [
            "۴۵ دقیقه کارکرد با هر شارژ",
            "قابل تبدیل به جاروی دستی",
            "برس مخصوص موی حیوانات"
        ],
        specs: [
            {
                label: "زمان کارکرد",
                value: "۴۵ دقیقه"
            },
            {
                label: "نوع فیلتر",
                value: "چندمرحله‌ای قابل شست‌وشو"
            },
            {
                label: "ظرفیت مخزن",
                value: "۰٫۶ لیتر"
            },
            {
                label: "گارانتی",
                value: "۱۸ ماه (داده نمونه)"
            }
        ]
    },
    {
        id: "hv-8",
        slug: "hv-8",
        model: "HV-8",
        title: "جاروشارژی دستی",
        brand: "برند نمونه ب",
        category: "cleaning",
        tags: [],
        illustration: "stick-vacuum",
        tone: "coral",
        price: 2_350_000,
        compareAt: 2_690_000,
        rating: 4.1,
        reviews: 17,
        stock: null,
        facets: {
            deviceType: "handheld"
        },
        summary: "جاروشارژی دستی سبک برای مبلمان، خودرو و نظافت سریع.",
        highlights: [
            "وزن ۱٫۲ کیلوگرم",
            "۲۰ دقیقه کارکرد",
            "سری شکاف‌گیر"
        ],
        specs: [
            {
                label: "زمان کارکرد",
                value: "۲۰ دقیقه"
            },
            {
                label: "وزن",
                value: "۱٫۲ کیلوگرم"
            },
            {
                label: "ظرفیت مخزن",
                value: "۰٫۳ لیتر"
            },
            {
                label: "گارانتی",
                value: "۱۲ ماه (داده نمونه)"
            }
        ]
    },
    {
        id: "sm-12",
        slug: "sm-12",
        model: "SM-12",
        title: "بخارشوی زمین",
        brand: "برند نمونه الف",
        category: "cleaning",
        tags: [],
        illustration: "steam-mop",
        tone: "navy",
        price: 5_600_000,
        rating: 4.3,
        reviews: 11,
        stock: 2,
        limited: true,
        facets: {
            deviceType: "steam"
        },
        summary: "بخارشوی زمین برای سرامیک و سنگ؛ نظافت بهداشتی بدون مواد شوینده.",
        highlights: [
            "گرم‌شدن در ۳۰ ثانیه",
            "مخزن ۴۰۰ میلی‌لیتری",
            "۲ پد قابل شست‌وشو"
        ],
        specs: [
            {
                label: "توان مصرفی",
                value: "۱۳۰۰ وات"
            },
            {
                label: "ظرفیت مخزن",
                value: "۴۰۰ میلی‌لیتر"
            },
            {
                label: "سطوح مناسب",
                value: "سرامیک، سنگ، پارکت مهروموم‌شده"
            },
            {
                label: "گارانتی",
                value: "۱۲ ماه (داده نمونه)"
            }
        ]
    },
    {
        id: "v-1800q",
        slug: "v-1800q",
        model: "V-1800Q",
        title: "جاروبرقی سطلی کم‌صدا",
        brand: "WASTON",
        category: "cleaning",
        tags: [],
        illustration: "vacuum",
        tone: "teal",
        price: 10_900_000,
        rating: 4.4,
        reviews: 9,
        stock: 0,
        facets: {
            deviceType: "canister",
            power: 1800
        },
        summary: "جاروبرقی سطلی ۱۸۰۰ وات با موتور کم‌صدا؛ مناسب آپارتمان.",
        highlights: [
            "صدای کمتر از ۶۸ دسی‌بل",
            "فیلتر HEPA",
            "سیم ۸ متری"
        ],
        specs: [
            {
                label: "توان مصرفی",
                value: "۱۸۰۰ وات"
            },
            {
                label: "سطح صدا",
                value: "۶۸ دسی‌بل"
            },
            {
                label: "ظرفیت مخزن",
                value: "۳٫۵ لیتر"
            },
            {
                label: "گارانتی",
                value: "۱۸ ماه (داده نمونه)"
            }
        ]
    },
    // ── پک‌های هدیه آماده (bundle) ─────────────────────────────────────
    {
        id: "pack-housewarming",
        slug: "pack-housewarming",
        model: "GIFT-H",
        title: "پک هدیه خانه‌نو",
        brand: "WASTON",
        category: "kitchenware",
        tags: [],
        illustration: "gift",
        tone: "coral",
        bundle: true,
        price: 5_100_000,
        reviews: 0,
        stock: null,
        giftWrap: true,
        occasions: [
            "housewarming"
        ],
        summary: "سرویس قاشق و چنگال، گلدان سرامیکی و کارت تبریک (ترکیب نمونه)",
        highlights: [
            "سرویس قاشق و چنگال ۳۰ پارچه",
            "گلدان سرامیکی لعاب‌دار",
            "کارت تبریک با متن دلخواه"
        ],
        specs: [
            {
                label: "نوع",
                value: "پک هدیه آماده"
            },
            {
                label: "بسته‌بندی",
                value: "جعبه و روبان ویژه"
            }
        ]
    },
    {
        id: "pack-breakfast",
        slug: "pack-breakfast",
        model: "GIFT-B",
        title: "پک هدیه صبحانه",
        brand: "WASTON",
        category: "kitchen-appliances",
        tags: [],
        illustration: "toaster",
        tone: "teal",
        bundle: true,
        price: 3_190_000,
        reviews: 0,
        stock: null,
        giftWrap: true,
        occasions: [
            "birthday",
            "anniversary"
        ],
        summary: "توستر دو اسلایس و ماگ سرامیکی دوتایی (ترکیب نمونه)",
        highlights: [
            "توستر دو اسلایس استیل",
            "ماگ سرامیکی دوتایی",
            "کارت تبریک"
        ],
        specs: [
            {
                label: "نوع",
                value: "پک هدیه آماده"
            },
            {
                label: "بسته‌بندی",
                value: "جعبه و روبان ویژه"
            }
        ]
    },
    {
        id: "pack-tea",
        slug: "pack-tea",
        model: "GIFT-T",
        title: "پک هدیه سفال و چای",
        brand: "WASTON",
        category: "ceramics",
        tags: [],
        illustration: "bowl",
        tone: "navy",
        bundle: true,
        price: 2_790_000,
        reviews: 0,
        stock: null,
        giftWrap: true,
        occasions: [
            "yalda-nowruz"
        ],
        summary: "کاسه سفالی دست‌ساز، سرویس لیوان و سینی پذیرایی (ترکیب نمونه)",
        highlights: [
            "کاسه سفالی دست‌ساز",
            "سرویس لیوان شیشه‌ای",
            "سینی پذیرایی استیل"
        ],
        specs: [
            {
                label: "نوع",
                value: "پک هدیه آماده"
            },
            {
                label: "بسته‌بندی",
                value: "جعبه و روبان ویژه"
            }
        ]
    }
];
const byId = new Map(products.map((p)=>[
        p.id,
        p
    ]));
const catalog = products.filter((p)=>!p.bundle);
const giftPacks = products.filter((p)=>p.bundle);
function getProduct(id) {
    return byId.get(id);
}
function pickProducts(ids) {
    return ids.map((id)=>byId.get(id)).filter((p)=>Boolean(p));
}
const isInStock = (p)=>p.stock !== 0;
const discountPercent = (p)=>p.compareAt && p.compareAt > p.price ? Math.round((p.compareAt - p.price) / p.compareAt * 100) : 0;
}),
"[project]/src/data/site.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contactLines",
    ()=>contactLines,
    "footerColumns",
    ()=>footerColumns,
    "homeCategories",
    ()=>homeCategories,
    "howToBuy",
    ()=>howToBuy,
    "mainNav",
    ()=>mainNav,
    "serviceHighlights",
    ()=>serviceHighlights,
    "site",
    ()=>site
]);
const site = {
    name: "WASTON",
    tagline: "حسی بهتر از خانه",
    taglineEn: "A Better Feeling of Home",
    mockNotice: "نسخه نمایشی (Mock) — نام محصولات، قیمت‌ها، تخفیف‌ها و امتیازها داده آزمایشی‌اند و اطلاعات واقعی فروشگاه نیستند.",
    description: "فروشگاه تخصصی محصولات کاربردی و زیبای خانه و آشپزخانه. A Better Feeling of Home."
};
const mainNav = [
    {
        href: "/",
        label: "خانه"
    },
    {
        href: "/shop/kitchen-appliances",
        label: "لوازم برقی آشپزخانه"
    },
    {
        href: "/shop/kitchenware",
        label: "ظروف آشپزخانه"
    },
    {
        href: "/shop/cleaning",
        label: "لوازم نظافت خانه"
    },
    {
        href: "/shop/gifts",
        label: "هدیه"
    },
    {
        href: "/shop/best-sellers",
        label: "پرفروش‌ها"
    },
    {
        href: "/shop/new",
        label: "جدیدترین‌ها"
    },
    {
        href: "/shop/offers",
        label: "پیشنهادهای ویژه"
    }
];
const homeCategories = [
    {
        href: "/shop/kitchen-appliances",
        title: "لوازم برقی آشپزخانه",
        meta: "۷ محصول",
        illustration: "food-processor",
        tone: "teal"
    },
    {
        href: "/shop/kitchenware",
        title: "ظروف آشپزخانه",
        meta: "۷ محصول",
        illustration: "pot",
        tone: "navy"
    },
    {
        href: "/shop/ceramics",
        title: "سفال و سرامیک",
        meta: "۲ محصول",
        illustration: "vase",
        tone: "coral"
    },
    {
        href: "/shop/cleaning",
        title: "لوازم نظافت خانه",
        meta: "۵ محصول",
        illustration: "vacuum",
        tone: "teal"
    },
    {
        href: "/shop/gifts",
        title: "هدیه",
        meta: "پک‌ها و بسته‌بندی ویژه",
        illustration: "gift",
        tone: "coral"
    }
];
const serviceHighlights = [
    {
        icon: "truck",
        title: "ارسال روز بعد*",
        text: "برای سفارش تا ساعت [—]"
    },
    {
        icon: "gift",
        title: "بسته‌بندی هدیه",
        text: "آماده تقدیم، با کارت تبریک"
    },
    {
        icon: "shield",
        title: "ضمانت اصالت",
        text: "کیفیت و اصالت تضمین‌شده"
    },
    {
        icon: "undo",
        title: "ضمانت بازگشت",
        text: "طبق شرایط مرجوعی"
    },
    {
        icon: "headset",
        title: "پشتیبانی ۲۴/۷",
        text: "هر روز هفته"
    },
    {
        icon: "pin",
        title: "ارسال سراسری",
        text: "با پست پیشتاز"
    }
];
const howToBuy = [
    {
        title: "انتخاب آسان",
        text: "دسته‌بندی روشن، فیلتر دقیق و مشخصات شفاف برای هر محصول."
    },
    {
        title: "بسته‌بندی با دقت",
        text: "هر سفارش با ضربه‌گیر بسته می‌شود؛ هدیه‌ها با جعبه و کارت ویژه."
    },
    {
        title: "ارسال سریع",
        text: "ارسال روز کاری بعد برای سفارش‌های ثبت‌شده تا ساعت [—]، به سراسر کشور."
    },
    {
        title: "پشتیبانی همیشگی",
        text: "پاسخ‌گویی هر روز هفته و پیگیری مرجوعی طبق شرایط."
    }
];
const footerColumns = [
    {
        title: "فروشگاه",
        links: mainNav.slice(1).map((l)=>({
                href: l.href,
                label: l.label
            }))
    },
    {
        title: "خدمات مشتریان",
        links: [
            {
                href: "/info/order-tracking",
                label: "پیگیری سفارش"
            },
            {
                href: "/info/shipping",
                label: "شرایط ارسال"
            },
            {
                href: "/info/returns",
                label: "شرایط مرجوعی"
            },
            {
                href: "/info/warranty",
                label: "گارانتی"
            },
            {
                href: "/info/faq",
                label: "سوالات متداول"
            },
            {
                href: "/info/terms",
                label: "قوانین و مقررات"
            },
            {
                href: "/info/privacy",
                label: "حریم خصوصی"
            }
        ]
    }
];
const contactLines = [
    "تلفن پشتیبانی: [شماره تماس]",
    "ایمیل: [ایمیل پشتیبانی]",
    "نشانی: [آدرس فروشگاه یا انبار]",
    "ساعات پاسخ‌گویی: [طبق ظرفیت تیم پشتیبانی]"
];
}),
"[project]/src/lib/format.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cx",
    ()=>cx,
    "fa",
    ()=>fa,
    "price",
    ()=>price,
    "toAsciiDigits",
    ()=>toAsciiDigits,
    "toman",
    ()=>toman
]);
/** Persian number formatting helpers (digits + separators follow fa-IR). */ const faNumber = new Intl.NumberFormat("fa-IR");
const fa = (n)=>faNumber.format(n);
const price = (toman)=>fa(toman);
const toman = (value)=>`${fa(value)} تومان`;
function toAsciiDigits(value) {
    return value.replace(/[۰-۹]/g, (d)=>String(d.charCodeAt(0) - 0x06f0)).replace(/[٠-٩]/g, (d)=>String(d.charCodeAt(0) - 0x0660));
}
function cx(...classes) {
    return classes.filter(Boolean).join(" ");
}
}),
"[project]/src/lib/hooks/use-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCart",
    ()=>useCart,
    "useRestock",
    ()=>useRestock,
    "useStore",
    ()=>useStore,
    "useWishlist",
    ()=>useWishlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pricing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$cart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store/cart.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$saved$2d$lists$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store/saved-lists.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function useStore(store) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(store.subscribe, store.getState, store.getServerState);
}
function useCart() {
    const state = useStore(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$cart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cartStore"]);
    const lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveLines"])(state.lines), [
        state.lines
    ]);
    const totals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["summarize"])(lines), [
        lines
    ]);
    return {
        ...state,
        resolved: lines,
        totals
    };
}
function useWishlist() {
    return useStore(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$saved$2d$lists$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wishlistStore"]);
}
function useRestock() {
    return useStore(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$saved$2d$lists$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["restockStore"]);
}
}),
"[project]/src/lib/nav.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** True when `href` is the current page or one of its parents. */ __turbopack_context__.s([
    "isActive",
    ()=>isActive
]);
function isActive(pathname, href) {
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
}),
"[project]/src/lib/pricing.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FREE_SHIPPING_FROM",
    ()=>FREE_SHIPPING_FROM,
    "resolveLines",
    ()=>resolveLines,
    "shippingMethods",
    ()=>shippingMethods,
    "summarize",
    ()=>summarize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-ssr] (ecmascript)");
;
const shippingMethods = [
    {
        id: "express",
        title: "ارسال روز بعد*",
        text: "برای سفارش تا ساعت [—] — تهران و کرج",
        cost: 120_000
    },
    {
        id: "post",
        title: "پست پیشتاز",
        text: "ارسال سراسری، ۲ تا ۵ روز کاری",
        cost: 85_000
    }
];
const FREE_SHIPPING_FROM = 5_000_000;
function resolveLines(lines) {
    return lines.flatMap((line)=>{
        const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProduct"])(line.productId);
        if (!product) return [];
        return [
            {
                product,
                qty: line.qty,
                lineTotal: product.price * line.qty,
                lineCompareAt: (product.compareAt ?? product.price) * line.qty
            }
        ];
    });
}
function summarize(lines, shipping) {
    const itemsCount = lines.reduce((s, l)=>s + l.qty, 0);
    const subtotal = lines.reduce((s, l)=>s + l.lineCompareAt, 0);
    const total = lines.reduce((s, l)=>s + l.lineTotal, 0);
    const savings = subtotal - total;
    const method = shippingMethods.find((m)=>m.id === shipping);
    const shippingCost = !method ? 0 : total >= FREE_SHIPPING_FROM ? 0 : method.cost;
    return {
        itemsCount,
        subtotal,
        savings,
        total,
        shippingCost,
        payable: total + shippingCost
    };
}
}),
"[project]/src/lib/search.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalize",
    ()=>normalize,
    "searchProducts",
    ()=>searchProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-ssr] (ecmascript)");
;
;
function normalize(text) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toAsciiDigits"])(text).toLowerCase().replace(/ي/g, "ی").replace(/ك/g, "ک").replace(/[‌‍‎‏]/g, " ").replace(/[ًٌٍَُِّْ]/g, "").replace(/\s+/g, " ").trim();
}
const categoryWords = {
    "kitchen-appliances": "لوازم برقی آشپزخانه",
    kitchenware: "ظروف آشپزخانه",
    ceramics: "سفال سرامیک ظروف",
    cleaning: "لوازم نظافت خانه جارو"
};
const index = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catalog"].map((p)=>({
        product: p,
        haystack: normalize([
            p.title,
            p.model,
            p.brand,
            categoryWords[p.category],
            p.summary
        ].join(" ")),
        title: normalize(p.title)
    }));
function searchProducts(query, limit) {
    const words = normalize(query).split(" ").filter(Boolean);
    if (!words.length) return [];
    const hits = index.filter((entry)=>words.every((w)=>entry.haystack.includes(w))).map((entry)=>({
            product: entry.product,
            score: words.reduce((s, w)=>s + (entry.title.includes(w) ? 2 : 1), 0)
        })).sort((a, b)=>b.score - a.score);
    const products = hits.map((h)=>h.product);
    return limit ? products.slice(0, limit) : products;
}
}),
"[project]/src/lib/store/cart.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_QTY",
    ()=>MAX_QTY,
    "cartActions",
    ()=>cartActions,
    "cartStore",
    ()=>cartStore,
    "emptyGift",
    ()=>emptyGift
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$create$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store/create-store.ts [app-ssr] (ecmascript)");
;
const emptyGift = {
    enabled: false,
    recipientName: "",
    message: ""
};
const MAX_QTY = 10;
const cartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$create$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPersistentStore"])("waston:cart", {
    ready: false,
    lines: [],
    gift: emptyGift
});
const clampQty = (qty)=>Math.max(1, Math.min(MAX_QTY, Math.round(qty)));
const cartActions = {
    add (productId, qty = 1) {
        cartStore.setState((s)=>{
            const existing = s.lines.find((l)=>l.productId === productId);
            const lines = existing ? s.lines.map((l)=>l.productId === productId ? {
                    ...l,
                    qty: clampQty(l.qty + qty)
                } : l) : [
                ...s.lines,
                {
                    productId,
                    qty: clampQty(qty)
                }
            ];
            return {
                ...s,
                lines
            };
        });
    },
    setQty (productId, qty) {
        cartStore.setState((s)=>({
                ...s,
                lines: s.lines.map((l)=>l.productId === productId ? {
                        ...l,
                        qty: clampQty(qty)
                    } : l)
            }));
    },
    remove (productId) {
        cartStore.setState((s)=>({
                ...s,
                lines: s.lines.filter((l)=>l.productId !== productId)
            }));
    },
    setGift (gift) {
        cartStore.setState((s)=>({
                ...s,
                gift: {
                    ...gift
                }
            }));
    },
    clear () {
        cartStore.setState((s)=>({
                ...s,
                lines: [],
                gift: emptyGift
            }));
    }
};
}),
"[project]/src/lib/store/create-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Tiny framework-agnostic persistent store (localStorage).
 * React subscribes via useSyncExternalStore; the Vue islands receive values
 * and report changes through props/callbacks, so both UIs share one source of truth.
 */ __turbopack_context__.s([
    "createPersistentStore",
    ()=>createPersistentStore
]);
function createPersistentStore(key, initial) {
    const serverState = {
        ...initial,
        ready: false
    };
    let state = null;
    const listeners = new Set();
    const read = ()=>{
        try {
            const raw = window.localStorage.getItem(key);
            if (raw) return {
                ...initial,
                ...JSON.parse(raw),
                ready: true
            };
        } catch  {
        /* corrupted or blocked storage: fall back to the initial state */ }
        return {
            ...initial,
            ready: true
        };
    };
    const emit = ()=>listeners.forEach((l)=>l());
    const store = {
        getState () {
            if ("TURBOPACK compile-time truthy", 1) return serverState;
            //TURBOPACK unreachable
            ;
        },
        getServerState: ()=>serverState,
        setState (updater) {
            const next = updater(store.getState());
            state = next;
            try {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { ready, ...persisted } = next;
                window.localStorage.setItem(key, JSON.stringify(persisted));
            } catch  {
            /* storage full or blocked: keep in-memory state */ }
            emit();
        },
        subscribe (listener) {
            listeners.add(listener);
            const onStorage = (e)=>{
                if (e.key === key) {
                    state = read();
                    emit();
                }
            };
            window.addEventListener("storage", onStorage);
            return ()=>{
                listeners.delete(listener);
                window.removeEventListener("storage", onStorage);
            };
        }
    };
    return store;
}
}),
"[project]/src/lib/store/saved-lists.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "restockStore",
    ()=>restockStore,
    "toggleId",
    ()=>toggleId,
    "wishlistStore",
    ()=>wishlistStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$create$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store/create-store.ts [app-ssr] (ecmascript)");
;
const wishlistStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$create$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPersistentStore"])("waston:wishlist", {
    ready: false,
    ids: []
});
const restockStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$create$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPersistentStore"])("waston:restock", {
    ready: false,
    ids: []
});
function toggleId(store, id) {
    let added = false;
    store.setState((s)=>{
        added = !s.ids.includes(id);
        return {
            ...s,
            ids: added ? [
                ...s.ids,
                id
            ] : s.ids.filter((x)=>x !== id)
        };
    });
    return added;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__12r205d4x4so9._.js.map