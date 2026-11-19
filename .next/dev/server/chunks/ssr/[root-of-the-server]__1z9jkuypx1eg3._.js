module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/shop/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CollectionRoute,
    "dynamicParams",
    ()=>dynamicParams,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$CollectionPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/listing/CollectionPage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$collections$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/collections.ts [app-rsc] (ecmascript)");
;
;
;
;
const dynamicParams = false;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$collections$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collections"].map((c)=>({
            slug: c.slug
        }));
}
async function generateMetadata({ params }) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$collections$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCollection"])((await params).slug);
    return config ? {
        title: config.title,
        description: config.description
    } : {};
}
async function CollectionRoute({ params }) {
    const { slug } = await params;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$collections$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCollection"])(slug);
    if (!config || !slug) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$CollectionPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionPage"], {
        config: config
    }, void 0, false, {
        fileName: "[project]/src/app/shop/[slug]/page.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/shop/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/shop/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/home/PromoBanner.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "art": "PromoBanner-module__KjUMNq__art",
  "banner": "PromoBanner-module__KjUMNq__banner",
  "circle": "PromoBanner-module__KjUMNq__circle",
  "copy": "PromoBanner-module__KjUMNq__copy",
  "eyebrow": "PromoBanner-module__KjUMNq__eyebrow",
  "list": "PromoBanner-module__KjUMNq__list",
  "slim": "PromoBanner-module__KjUMNq__slim",
  "slimText": "PromoBanner-module__KjUMNq__slimText",
  "slimTitle": "PromoBanner-module__KjUMNq__slimTitle",
  "title": "PromoBanner-module__KjUMNq__title",
});
}),
"[project]/src/components/home/PromoBanner.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CtaBanner",
    ()=>CtaBanner,
    "GiftBanner",
    ()=>GiftBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-rsc] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.mjs [app-rsc] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PromoBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/home/PromoBanner.module.css [app-rsc] (css module)");
;
;
;
;
;
function GiftBanner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "container section",
        "aria-labelledby": "gift-banner-title",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PromoBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].banner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PromoBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].copy,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PromoBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].eyebrow,
                            children: "هدیه‌ای که با حوصله آماده شده"
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/PromoBanner.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "gift-banner-title",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PromoBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                            children: [
                                "برای خانه‌نو، تولد یا سالگرد؛",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/components/home/PromoBanner.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                "ما بسته‌بندی‌اش می‌کنیم."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/PromoBanner.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PromoBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].list,
                            children: [
                                "جعبه و روبان ویژه هدیه",
                                "کارت تبریک با متن دلخواه شما",
                                "ارسال مستقیم برای گیرنده، بدون درج قیمت"
                            ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            size: 16,
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/PromoBanner.tsx",
                                            lineNumber: 21,
                                            columnNumber: 17
                                        }, this),
                                        t
                                    ]
                                }, t, true, {
                                    fileName: "[project]/src/components/home/PromoBanner.tsx",
                                    lineNumber: 20,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/PromoBanner.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                            href: "/shop/gifts",
                            variant: "on-dark",
                            children: "انتخاب هدیه"
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/PromoBanner.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/PromoBanner.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PromoBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].art,
                    "aria-hidden": true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PromoBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].circle,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                            size: 72,
                            strokeWidth: 1.4
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/PromoBanner.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/PromoBanner.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/PromoBanner.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/PromoBanner.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/home/PromoBanner.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
function CtaBanner({ title, text, href, action }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "container section",
        "aria-label": title,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cx"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PromoBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].banner, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PromoBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].slim),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PromoBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].slimTitle,
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/PromoBanner.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PromoBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].slimText,
                            children: text
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/PromoBanner.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/PromoBanner.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                    href: href,
                    variant: "on-dark",
                    children: action
                }, void 0, false, {
                    fileName: "[project]/src/components/home/PromoBanner.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/PromoBanner.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/home/PromoBanner.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/icons/ProductIllustration.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductIllustration",
    ()=>ProductIllustration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
        children: paths[name].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
"[project]/src/components/icons/UiIcon.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UiIcon",
    ()=>UiIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.mjs [app-rsc] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.mjs [app-rsc] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.mjs [app-rsc] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-checks.mjs [app-rsc] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-rsc] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-rsc] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-rsc] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs [app-rsc] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.mjs [app-rsc] (ecmascript) <export default as Truck>");
;
;
/** Maps the data-layer icon names to Lucide icons (matching the mockup's line icons). */ const map = {
    truck: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
    gift: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"],
    shield: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
    undo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"],
    headset: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"],
    pin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
    list: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"],
    box: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"],
    sliders: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"]
};
function UiIcon({ name, size = 18 }) {
    const Icon = map[name] ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        size: size,
        strokeWidth: 1.8,
        "aria-hidden": true
    }, void 0, false, {
        fileName: "[project]/src/components/icons/UiIcon.tsx",
        lineNumber: 29,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/listing/CollectionPage.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CollectionPage",
    ()=>CollectionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Breadcrumb$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Breadcrumb.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$CollectionSections$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/listing/CollectionSections.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$ListingHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/listing/ListingHero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$ListingView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/listing/ListingView.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
function CollectionPage({ config }) {
    const crumbs = config.slug ? [
        {
            href: "/",
            label: "خانه"
        },
        {
            href: "/shop",
            label: "فروشگاه"
        },
        {
            label: config.label
        }
    ] : [
        {
            href: "/",
            label: "خانه"
        },
        {
            label: "فروشگاه"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Breadcrumb$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Breadcrumb"], {
                        items: crumbs
                    }, void 0, false, {
                        fileName: "[project]/src/components/listing/CollectionPage.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$ListingHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingHero"], {
                        config: config
                    }, void 0, false, {
                        fileName: "[project]/src/components/listing/CollectionPage.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/listing/CollectionPage.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            config.before && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$CollectionSections$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionSections"], {
                sections: config.before
            }, void 0, false, {
                fileName: "[project]/src/components/listing/CollectionPage.tsx",
                lineNumber: 18,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: config.before ? "container section" : "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$ListingView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingView"], {
                    slug: config.slug
                }, void 0, false, {
                    fileName: "[project]/src/components/listing/CollectionPage.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/listing/CollectionPage.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            config.after && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$CollectionSections$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionSections"], {
                sections: config.after
            }, void 0, false, {
                fileName: "[project]/src/components/listing/CollectionPage.tsx",
                lineNumber: 22,
                columnNumber: 24
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/listing/CollectionPage.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/listing/CollectionSections.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "faq": "CollectionSections-module__zKaQqW__faq",
  "faqHead": "CollectionSections-module__zKaQqW__faqHead",
  "faqSub": "CollectionSections-module__zKaQqW__faqSub",
  "faqTitle": "CollectionSections-module__zKaQqW__faqTitle",
  "feature": "CollectionSections-module__zKaQqW__feature",
  "featureIcon": "CollectionSections-module__zKaQqW__featureIcon",
  "featureList": "CollectionSections-module__zKaQqW__featureList",
  "features": "CollectionSections-module__zKaQqW__features",
  "featuresTitle": "CollectionSections-module__zKaQqW__featuresTitle",
  "review": "CollectionSections-module__zKaQqW__review",
  "reviews": "CollectionSections-module__zKaQqW__reviews",
  "stars": "CollectionSections-module__zKaQqW__stars",
});
}),
"[project]/src/components/listing/CollectionSections.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CollectionSections",
    ()=>CollectionSections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-rsc] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-rsc] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PromoBanner$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/PromoBanner.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$UiIcon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/UiIcon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$ProductGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/ProductGrid.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Accordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Accordion.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NumberedSteps$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/NumberedSteps.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeader.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$GiftPacks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/listing/GiftPacks.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$CollectionSections$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/listing/CollectionSections.module.css [app-rsc] (css module)");
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
function CollectionSections({ sections }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: sections.map((s, i)=>{
            const key = `${s.type}-${i}`;
            switch(s.type){
                case "features":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "container section",
                        "aria-label": s.title,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$CollectionSections$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].features,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$CollectionSections$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].featuresTitle,
                                    children: s.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                    lineNumber: 25,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$CollectionSections$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].featureList,
                                    children: s.items.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$CollectionSections$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].feature,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$CollectionSections$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].featureIcon,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$UiIcon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UiIcon"], {
                                                        name: f.icon,
                                                        size: 19
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                                    lineNumber: 29,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: f.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                                            lineNumber: 33,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: f.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                                            lineNumber: 34,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, f.title, true, {
                                            fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                            lineNumber: 28,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                    lineNumber: 26,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/listing/CollectionSections.tsx",
                            lineNumber: 24,
                            columnNumber: 17
                        }, this)
                    }, key, false, {
                        fileName: "[project]/src/components/listing/CollectionSections.tsx",
                        lineNumber: 23,
                        columnNumber: 15
                    }, this);
                case "rail":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "container section",
                        "aria-label": s.title,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeader"], {
                                title: s.title,
                                subtitle: s.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                lineNumber: 45,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$ProductGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductGrid"], {
                                products: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pickProducts"])(s.productIds),
                                railOnMobile: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                lineNumber: 46,
                                columnNumber: 17
                            }, this)
                        ]
                    }, key, true, {
                        fileName: "[project]/src/components/listing/CollectionSections.tsx",
                        lineNumber: 44,
                        columnNumber: 15
                    }, this);
                case "guide":
                case "gift-steps":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "container section",
                        "aria-label": s.title,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeader"], {
                                title: s.title,
                                subtitle: s.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                lineNumber: 53,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NumberedSteps$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NumberedSteps"], {
                                items: s.items,
                                variant: s.type === "guide" ? "large" : "badge"
                            }, void 0, false, {
                                fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                lineNumber: 54,
                                columnNumber: 17
                            }, this)
                        ]
                    }, key, true, {
                        fileName: "[project]/src/components/listing/CollectionSections.tsx",
                        lineNumber: 52,
                        columnNumber: 15
                    }, this);
                case "gift-packs":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "container section",
                        "aria-label": s.title,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeader"], {
                                title: s.title,
                                subtitle: s.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                lineNumber: 60,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$GiftPacks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GiftPacks"], {}, void 0, false, {
                                fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                lineNumber: 61,
                                columnNumber: 17
                            }, this)
                        ]
                    }, key, true, {
                        fileName: "[project]/src/components/listing/CollectionSections.tsx",
                        lineNumber: 59,
                        columnNumber: 15
                    }, this);
                case "faq":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "container section",
                        "aria-label": s.title,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$CollectionSections$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].faq,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$CollectionSections$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].faqHead,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$CollectionSections$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].faqTitle,
                                            children: s.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                            lineNumber: 69,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$CollectionSections$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].faqSub,
                                            children: s.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                            lineNumber: 70,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                            href: "/info/faq",
                                            variant: "outline",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                size: 17,
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                                lineNumber: 71,
                                                columnNumber: 70
                                            }, this),
                                            children: "گفتگو با پشتیبانی"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                            lineNumber: 71,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                    lineNumber: 68,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Accordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Accordion"], {
                                    items: s.items
                                }, void 0, false, {
                                    fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                    lineNumber: 75,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/listing/CollectionSections.tsx",
                            lineNumber: 67,
                            columnNumber: 17
                        }, this)
                    }, key, false, {
                        fileName: "[project]/src/components/listing/CollectionSections.tsx",
                        lineNumber: 66,
                        columnNumber: 15
                    }, this);
                case "reviews":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "container section",
                        "aria-label": s.title,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeader"], {
                                title: s.title,
                                subtitle: s.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                lineNumber: 82,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$CollectionSections$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].reviews,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pickProducts"])(s.productIds).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$CollectionSections$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].review,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$CollectionSections$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].stars,
                                                "aria-label": "امتیاز ثبت نشده",
                                                children: Array.from({
                                                    length: 5
                                                }, (_, n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                        size: 15,
                                                        "aria-hidden": true
                                                    }, n, false, {
                                                        fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                                lineNumber: 86,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "[متن نظر تأییدشده خریدار]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                                lineNumber: 91,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: [
                                                    "[نام خریدار] · خریدار ",
                                                    p.title
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                                lineNumber: 92,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                        lineNumber: 85,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/listing/CollectionSections.tsx",
                                lineNumber: 83,
                                columnNumber: 17
                            }, this)
                        ]
                    }, key, true, {
                        fileName: "[project]/src/components/listing/CollectionSections.tsx",
                        lineNumber: 81,
                        columnNumber: 15
                    }, this);
                case "cta":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$PromoBanner$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CtaBanner"], {
                        title: s.title,
                        text: s.text,
                        href: s.href,
                        action: s.action
                    }, key, false, {
                        fileName: "[project]/src/components/listing/CollectionSections.tsx",
                        lineNumber: 99,
                        columnNumber: 20
                    }, this);
                default:
                    return null;
            }
        })
    }, void 0, false, {
        fileName: "[project]/src/components/listing/CollectionSections.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/listing/GiftPacks.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GiftPacks",
    ()=>GiftPacks
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const GiftPacks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call GiftPacks() from the server but GiftPacks is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/listing/GiftPacks.tsx", "GiftPacks");
}),
"[project]/src/components/listing/GiftPacks.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$GiftPacks$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/listing/GiftPacks.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$GiftPacks$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/listing/ListingHero.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "circle": "ListingHero-module__N2vYpG__circle",
  "copy": "ListingHero-module__N2vYpG__copy",
  "eyebrow": "ListingHero-module__N2vYpG__eyebrow",
  "hero": "ListingHero-module__N2vYpG__hero",
  "text": "ListingHero-module__N2vYpG__text",
  "title": "ListingHero-module__N2vYpG__title",
});
}),
"[project]/src/components/listing/ListingHero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListingHero",
    ()=>ListingHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$ProductIllustration$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/ProductIllustration.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TrustChips$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TrustChips.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$ListingHero$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/listing/ListingHero.module.css [app-rsc] (css module)");
;
;
;
;
;
function ListingHero({ config }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$ListingHero$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].hero,
        "aria-labelledby": "listing-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$ListingHero$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].copy,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$ListingHero$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].eyebrow,
                        children: config.eyebrow
                    }, void 0, false, {
                        fileName: "[project]/src/components/listing/ListingHero.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        id: "listing-title",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$ListingHero$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                        children: config.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/listing/ListingHero.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$ListingHero$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].text,
                        children: config.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/listing/ListingHero.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TrustChips$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TrustChips"], {}, void 0, false, {
                        fileName: "[project]/src/components/listing/ListingHero.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/listing/ListingHero.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cx"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$ListingHero$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].circle, `tone-${config.tone}`),
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$ProductIllustration$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductIllustration"], {
                    name: config.illustration,
                    size: "42%",
                    strokeWidth: 2.4
                }, void 0, false, {
                    fileName: "[project]/src/components/listing/ListingHero.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/listing/ListingHero.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/listing/ListingHero.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/listing/ListingView.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListingView",
    ()=>ListingView
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ListingView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ListingView() from the server but ListingView is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/listing/ListingView.tsx", "ListingView");
}),
"[project]/src/components/listing/ListingView.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$ListingView$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/listing/ListingView.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$listing$2f$ListingView$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/product/ProductCard.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProductCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductCard() from the server but ProductCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/product/ProductCard.tsx", "ProductCard");
}),
"[project]/src/components/product/ProductCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/product/ProductCard.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/product/ProductGrid.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cols3": "ProductGrid-module__Wp7uPq__cols3",
  "cols4": "ProductGrid-module__Wp7uPq__cols4",
  "grid": "ProductGrid-module__Wp7uPq__grid",
});
}),
"[project]/src/components/product/ProductGrid.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductGrid",
    ()=>ProductGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/ProductCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/product/ProductGrid.module.css [app-rsc] (css module)");
;
;
;
;
function ProductGrid({ products, columns = 4, railOnMobile = false, showGiftBadge }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cx"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].grid, columns === 3 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].cols3 : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].cols4, railOnMobile && "scroll-rail"),
        children: products.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductCard"], {
                product: p,
                showGiftBadge: showGiftBadge
            }, p.id, false, {
                fileName: "[project]/src/components/product/ProductGrid.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/product/ProductGrid.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Accordion.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Accordion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Accordion() from the server but Accordion is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/Accordion.tsx", "Accordion");
}),
"[project]/src/components/ui/Accordion.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Accordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ui/Accordion.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Accordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/ui/Breadcrumb.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "current": "Breadcrumb-module__3e-AXW__current",
  "home": "Breadcrumb-module__3e-AXW__home",
  "item": "Breadcrumb-module__3e-AXW__item",
  "link": "Breadcrumb-module__3e-AXW__link",
  "list": "Breadcrumb-module__3e-AXW__list",
  "nav": "Breadcrumb-module__3e-AXW__nav",
  "sep": "Breadcrumb-module__3e-AXW__sep",
});
}),
"[project]/src/components/ui/Breadcrumb.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumb",
    ()=>Breadcrumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Breadcrumb$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/Breadcrumb.module.css [app-rsc] (css module)");
;
;
;
function Breadcrumb({ items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "مسیر صفحه",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Breadcrumb$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].nav,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Breadcrumb$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].list,
            children: items.map((item, i)=>{
                const last = i === items.length - 1;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Breadcrumb$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].item,
                    children: [
                        item.href && !last ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: i === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Breadcrumb$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].home : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Breadcrumb$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].link,
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Breadcrumb.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-current": last ? "page" : undefined,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Breadcrumb$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].current,
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Breadcrumb.tsx",
                            lineNumber: 22,
                            columnNumber: 17
                        }, this),
                        !last && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Breadcrumb$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].sep,
                            "aria-hidden": true,
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Breadcrumb.tsx",
                            lineNumber: 27,
                            columnNumber: 17
                        }, this)
                    ]
                }, item.label, true, {
                    fileName: "[project]/src/components/ui/Breadcrumb.tsx",
                    lineNumber: 16,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Breadcrumb.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Breadcrumb.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/NumberedSteps.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badge": "NumberedSteps-module__rM5dVa__badge",
  "card": "NumberedSteps-module__rM5dVa__card",
  "four": "NumberedSteps-module__rM5dVa__four",
  "grid": "NumberedSteps-module__rM5dVa__grid",
  "large": "NumberedSteps-module__rM5dVa__large",
  "text": "NumberedSteps-module__rM5dVa__text",
  "three": "NumberedSteps-module__rM5dVa__three",
  "title": "NumberedSteps-module__rM5dVa__title",
});
}),
"[project]/src/components/ui/NumberedSteps.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NumberedSteps",
    ()=>NumberedSteps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NumberedSteps$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/NumberedSteps.module.css [app-rsc] (css module)");
;
;
;
function NumberedSteps({ items, variant = "badge" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cx"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NumberedSteps$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].grid, items.length === 3 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NumberedSteps$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].three : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NumberedSteps$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].four),
        children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NumberedSteps$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].card,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: variant === "badge" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NumberedSteps$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].badge : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NumberedSteps$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].large,
                        "aria-hidden": true,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fa"])(i + 1)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NumberedSteps.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NumberedSteps$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NumberedSteps.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NumberedSteps$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].text,
                        children: item.text
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NumberedSteps.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                ]
            }, item.title, true, {
                fileName: "[project]/src/components/ui/NumberedSteps.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/NumberedSteps.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/SectionHeader.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "eyebrow": "SectionHeader-module__1WsNmG__eyebrow",
  "head": "SectionHeader-module__1WsNmG__head",
  "link": "SectionHeader-module__1WsNmG__link",
  "subtitle": "SectionHeader-module__1WsNmG__subtitle",
  "title": "SectionHeader-module__1WsNmG__title",
});
}),
"[project]/src/components/ui/SectionHeader.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeader",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-rsc] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeader.module.css [app-rsc] (css module)");
;
;
;
;
function SectionHeader({ title, subtitle, eyebrow, link, id }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].head,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    eyebrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].eyebrow,
                        children: eyebrow
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SectionHeader.tsx",
                        lineNumber: 17,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                        id: id,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SectionHeader.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].subtitle,
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SectionHeader.tsx",
                        lineNumber: 21,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/SectionHeader.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: link.href,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].link,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: link.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SectionHeader.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                        size: 16,
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SectionHeader.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/SectionHeader.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/SectionHeader.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/TrustChips.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "chip": "TrustChips-module__U6xzpa__chip",
  "chips": "TrustChips-module__U6xzpa__chips",
  "plain": "TrustChips-module__U6xzpa__plain",
});
}),
"[project]/src/components/ui/TrustChips.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrustChips",
    ()=>TrustChips
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-rsc] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-rsc] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.mjs [app-rsc] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TrustChips$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/TrustChips.module.css [app-rsc] (css module)");
;
;
;
const items = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
        label: "ارسال روز بعد*"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        label: "ضمانت اصالت"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"],
        label: "ضمانت بازگشت"
    }
];
function TrustChips({ plain = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: plain ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TrustChips$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].plain : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TrustChips$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].chips,
        children: items.map(({ icon: Icon, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TrustChips$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].chip,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        size: 15,
                        strokeWidth: 1.9,
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/TrustChips.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this),
                    label
                ]
            }, label, true, {
                fileName: "[project]/src/components/ui/TrustChips.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/TrustChips.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/collections.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allProductsCollection",
    ()=>allProductsCollection,
    "collectionForCategory",
    ()=>collectionForCategory,
    "collections",
    ()=>collections,
    "getCollection",
    ()=>getCollection,
    "sortOptions",
    ()=>sortOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-rsc] (ecmascript)");
;
const sortOptions = [
    {
        value: "recommended",
        label: "پیشنهاد WASTON"
    },
    {
        value: "bestselling",
        label: "پرفروش‌ترین"
    },
    {
        value: "newest",
        label: "جدیدترین"
    },
    {
        value: "discount",
        label: "بیشترین تخفیف"
    },
    {
        value: "price-asc",
        label: "ارزان‌ترین"
    },
    {
        value: "price-desc",
        label: "گران‌ترین"
    }
];
const priceCategoryChips = [
    {
        id: "appliances",
        label: "لوازم برقی",
        test: (p)=>p.category === "kitchen-appliances"
    },
    {
        id: "kitchenware",
        label: "ظروف",
        test: (p)=>p.category === "kitchenware" || p.category === "ceramics"
    },
    {
        id: "cleaning",
        label: "نظافت",
        test: (p)=>p.category === "cleaning"
    }
];
const power = (p)=>p.facets?.power ?? 0;
const collections = [
    {
        slug: "kitchen-appliances",
        title: "لوازم برقی آشپزخانه",
        label: "لوازم برقی آشپزخانه",
        eyebrow: "KITCHEN APPLIANCES",
        description: "توستر، غذاساز، کتری و قهوه‌ساز؛ انتخاب‌شده برای آشپزخانه‌ای سریع‌تر و مرتب‌تر. مشخصات فنی هر دستگاه کنار قیمت آمده تا مقایسه آسان باشد.",
        illustration: "food-processor",
        tone: "teal",
        includes: (p)=>p.category === "kitchen-appliances",
        defaultSort: "recommended",
        facet: {
            key: "power",
            label: "توان مصرفی",
            options: [
                {
                    value: "800-1200",
                    label: "۸۰۰ تا ۱۲۰۰ وات",
                    test: (p)=>power(p) >= 800 && power(p) <= 1200
                },
                {
                    value: "1200+",
                    label: "بیش از ۱۲۰۰ وات",
                    test: (p)=>power(p) > 1200
                },
                {
                    value: "-800",
                    label: "تا ۸۰۰ وات",
                    test: (p)=>power(p) > 0 && power(p) < 800
                }
            ]
        },
        after: [
            {
                type: "features",
                title: "چرا لوازم برقی WASTON؟",
                items: [
                    {
                        icon: "shield",
                        title: "گارانتی و اصالت",
                        text: "هر دستگاه با برگه ضمانت و کد اصالت کالا ارسال می‌شود."
                    },
                    {
                        icon: "list",
                        title: "مشخصات شفاف",
                        text: "توان، ظرفیت و لوازم جانبی هر محصول دقیق و یکسان نوشته شده است."
                    },
                    {
                        icon: "box",
                        title: "بسته‌بندی ایمن",
                        text: "دستگاه‌ها با ضربه‌گیر و کارتن مقاوم بسته‌بندی می‌شوند."
                    }
                ]
            },
            {
                type: "rail",
                title: "پیشنهاد WASTON برای شروع",
                subtitle: "محبوب‌ترین دستگاه‌های این دسته",
                productIds: [
                    "fp-1200",
                    "t-210",
                    "cm-06",
                    "k-17"
                ]
            },
            {
                type: "faq",
                title: "سوالات متداول",
                subtitle: "درباره خرید لوازم برقی آشپزخانه",
                items: [
                    {
                        q: "لوازم برقی گارانتی دارند؟",
                        a: "بله. همه دستگاه‌ها با برگه ضمانت و کد اصالت ارسال می‌شوند؛ مدت گارانتی هر مدل در جدول مشخصات همان محصول آمده است."
                    },
                    {
                        q: "چه غذاسازی برای خانواده من مناسب است؟",
                        a: "برای خانواده‌های ۱ تا ۲ نفره غذاساز کامپکت (کاسه ۱٫۵ لیتری) کافی است؛ برای ۴ نفر و بیشتر، مدل‌های ۱۲ کاره با کاسه ۳ لیتری را پیشنهاد می‌کنیم."
                    },
                    {
                        q: "اگر دستگاه آسیب‌دیده برسد چه می‌شود؟",
                        a: "تا ۷ روز پس از تحویل، با ارسال عکس بسته‌بندی به پشتیبانی، کالا بدون هزینه تعویض یا مرجوع می‌شود."
                    },
                    {
                        q: "سفارش چه زمانی ارسال می‌شود؟",
                        a: "سفارش‌های ثبت‌شده تا ساعت [—] روز کاری بعد ارسال می‌شوند؛ زمان دقیق تحویل در مرحله ثبت سفارش نمایش داده می‌شود."
                    }
                ]
            }
        ]
    },
    {
        slug: "kitchenware",
        title: "ظروف آشپزخانه",
        label: "ظروف آشپزخانه",
        eyebrow: "KITCHENWARE & CERAMICS",
        description: "از قابلمه و تابه روزمره تا سفال دست‌ساز و سرویس پذیرایی؛ ظرف‌هایی که هم خوب کار می‌کنند و هم روی میز زیبا هستند.",
        illustration: "pot",
        tone: "navy",
        includes: (p)=>p.category === "kitchenware" || p.category === "ceramics",
        order: [
            "ck-8",
            "cr-m2",
            "pn-28",
            "ct-30",
            "gl-6",
            "cr-v2",
            "cr-p6",
            "tr-40",
            "pt-b1"
        ],
        defaultSort: "recommended",
        chips: {
            allLabel: "همه ظروف",
            options: [
                {
                    id: "cooking",
                    label: "پخت‌وپز",
                    test: (p)=>p.tags.includes("cooking")
                },
                {
                    id: "serving",
                    label: "پذیرایی",
                    test: (p)=>p.tags.includes("serving")
                },
                {
                    id: "ceramic",
                    label: "سفال و سرامیک",
                    test: (p)=>p.tags.includes("ceramic")
                },
                {
                    id: "cups",
                    label: "لیوان و ماگ",
                    test: (p)=>p.tags.includes("cups")
                }
            ]
        },
        facet: {
            key: "material",
            label: "جنس",
            options: [
                {
                    value: "steel",
                    label: "استیل",
                    test: (p)=>p.facets?.material === "steel"
                },
                {
                    value: "granite",
                    label: "گرانیت",
                    test: (p)=>p.facets?.material === "granite"
                },
                {
                    value: "glass",
                    label: "شیشه",
                    test: (p)=>p.facets?.material === "glass"
                },
                {
                    value: "pottery",
                    label: "سفال",
                    test: (p)=>p.facets?.material === "pottery"
                },
                {
                    value: "ceramic",
                    label: "سرامیک",
                    test: (p)=>p.facets?.material === "ceramic"
                }
            ]
        },
        after: [
            {
                type: "rail",
                title: "منتخب ظروف پذیرایی",
                subtitle: "برای میزی که دوست دارید دورش جمع شوید",
                productIds: [
                    "cr-v2",
                    "ct-30",
                    "cr-p6",
                    "tr-40"
                ]
            },
            {
                type: "guide",
                title: "راهنمای انتخاب ظروف",
                subtitle: "چند نکته کوتاه قبل از خرید",
                items: [
                    {
                        title: "جنس را با نوع پخت هماهنگ کنید",
                        text: "استیل برای حرارت بالا و شست‌وشوی مکرر مناسب است و گرانیت برای پخت کم‌روغن."
                    },
                    {
                        title: "ابعاد و تعداد قطعات را ببینید",
                        text: "ابعاد، ظرفیت و تعداد قطعات هر سرویس در مشخصات محصول آمده است."
                    },
                    {
                        title: "روش نگهداری را بخوانید",
                        text: "برای سفال و سرامیک دست‌ساز، راهنمای شست‌وشو و استفاده در فر را پیش از خرید بخوانید."
                    }
                ]
            },
            {
                type: "faq",
                title: "سوالات متداول",
                subtitle: "درباره ظروف، سفال و سرامیک",
                items: [
                    {
                        q: "ظروف سفالی برای غذا مناسب‌اند؟",
                        a: "بله؛ سفال‌های این فروشگاه لعاب خوراکی دارند. پیش از اولین استفاده، ظرف را با آب ولرم بشویید و از تغییر ناگهانی دما پرهیز کنید."
                    },
                    {
                        q: "اگر ظرف شکسته برسد چه می‌شود؟",
                        a: "ظروف با ضربه‌گیر بسته‌بندی می‌شوند. اگر ظرفی آسیب‌دیده رسید، تا ۷ روز با ارسال عکس، بدون هزینه تعویض می‌شود."
                    },
                    {
                        q: "امکان خرید تکی از سرویس‌ها هست؟",
                        a: "در حال حاضر سرویس‌ها به‌صورت کامل عرضه می‌شوند؛ برای قطعات تکی با پشتیبانی هماهنگ کنید."
                    }
                ]
            }
        ]
    },
    {
        slug: "ceramics",
        title: "سفال و سرامیک",
        label: "سفال و سرامیک",
        eyebrow: "POTTERY & CERAMICS",
        description: "کاسه و گلدان دست‌ساز با لعاب خوراکی و براق؛ هر قطعه کمی با دیگری متفاوت است.",
        illustration: "vase",
        tone: "coral",
        includes: (p)=>p.category === "ceramics",
        defaultSort: "recommended",
        after: [
            {
                type: "guide",
                title: "نگهداری از سفال و سرامیک",
                subtitle: "چند نکته کوتاه قبل از خرید",
                items: [
                    {
                        title: "اولین استفاده",
                        text: "پیش از اولین استفاده، ظرف سفالی را با آب ولرم بشویید و کاملاً خشک کنید."
                    },
                    {
                        title: "تغییر دما",
                        text: "ظرف داغ را مستقیم روی سطح سرد یا زیر آب سرد قرار ندهید."
                    },
                    {
                        title: "شست‌وشو",
                        text: "برای حفظ لعاب دست‌ساز، شست‌وشو با دست و اسفنج نرم را پیشنهاد می‌کنیم."
                    }
                ]
            },
            {
                type: "cta",
                title: "همه ظروف آشپزخانه",
                text: "قابلمه، تابه، سرویس پذیرایی و لیوان و ماگ.",
                href: "/shop/kitchenware",
                action: "مشاهده ظروف"
            }
        ]
    },
    {
        slug: "cleaning",
        title: "لوازم نظافت خانه",
        label: "لوازم نظافت خانه",
        eyebrow: "HOME CLEANING",
        description: "جاروبرقی سطلی و عصایی، جاروشارژی و بخارشو؛ برای خانه‌ای تمیز با زحمت کمتر.",
        illustration: "vacuum",
        tone: "teal",
        includes: (p)=>p.category === "cleaning",
        defaultSort: "recommended",
        facet: {
            key: "deviceType",
            label: "نوع دستگاه",
            options: [
                {
                    value: "canister",
                    label: "سطلی",
                    test: (p)=>p.facets?.deviceType === "canister"
                },
                {
                    value: "stick",
                    label: "عصایی شارژی",
                    test: (p)=>p.facets?.deviceType === "stick"
                },
                {
                    value: "handheld",
                    label: "دستی",
                    test: (p)=>p.facets?.deviceType === "handheld"
                },
                {
                    value: "steam",
                    label: "بخارشو",
                    test: (p)=>p.facets?.deviceType === "steam"
                }
            ]
        },
        after: [
            {
                type: "features",
                title: "به چه چیزهایی توجه کنیم؟",
                items: [
                    {
                        icon: "sliders",
                        title: "توان مکش و فیلتر",
                        text: "توان، نوع فیلتر و ظرفیت مخزن هر مدل در مشخصات آمده است."
                    },
                    {
                        icon: "list",
                        title: "لوازم جانبی",
                        text: "برس‌ها و سری‌های همراه هر دستگاه دقیق فهرست شده‌اند."
                    },
                    {
                        icon: "shield",
                        title: "گارانتی و خدمات",
                        text: "شرایط گارانتی و خدمات پس از فروش کنار هر محصول نوشته می‌شود."
                    }
                ]
            },
            {
                type: "guide",
                title: "راهنمای خرید لوازم نظافت",
                subtitle: "چند نکته کوتاه قبل از خرید",
                items: [
                    {
                        title: "خانه بزرگ یا کوچک؟",
                        text: "برای فضای بزرگ و فرش، جاروبرقی سطلی؛ برای نظافت سریع روزانه، مدل عصایی شارژی."
                    },
                    {
                        title: "حیوان خانگی دارید؟",
                        text: "به نوع فیلتر و برس مخصوص مو در مشخصات دستگاه توجه کنید."
                    },
                    {
                        title: "سطوح سخت",
                        text: "برای سرامیک و سنگ، بخارشو بدون مواد شوینده هم نتیجه خوبی می‌دهد."
                    }
                ]
            },
            {
                type: "faq",
                title: "سوالات متداول",
                subtitle: "درباره خرید جاروبرقی و بخارشو",
                items: [
                    {
                        q: "جاروبرقی عصایی جای جاروبرقی سطلی را می‌گیرد؟",
                        a: "برای آپارتمان‌های کوچک و نظافت روزانه بله؛ برای فرش‌های ضخیم و فضاهای بزرگ، توان مکش مدل سطلی بیشتر است."
                    },
                    {
                        q: "کیسه و فیلتر یدکی دارید؟",
                        a: "فیلتر و قطعات یدکی مدل‌های WASTON از طریق پشتیبانی قابل سفارش است."
                    },
                    {
                        q: "شرایط مرجوعی چیست؟",
                        a: "تا ۷ روز پس از تحویل، در صورت سالم بودن کالا و بسته‌بندی، امکان مرجوعی طبق شرایط مرجوعی فروشگاه وجود دارد."
                    }
                ]
            }
        ]
    },
    {
        slug: "gifts",
        title: "هدیه‌ای برای خانه",
        label: "هدیه",
        eyebrow: "GIFTS",
        description: "محصولات منتخب WASTON با بسته‌بندی ویژه هدیه، کارت تبریک و ارسال مستقیم برای گیرنده.",
        illustration: "gift",
        tone: "coral",
        includes: (p)=>Boolean(p.giftWrap),
        order: [
            "t-210",
            "ck-8",
            "fp-1200",
            "k-17",
            "cr-m2",
            "cm-06",
            "ct-30",
            "sv-30",
            "gl-6",
            "cr-v2",
            "cr-p6",
            "tr-40",
            "fp-600",
            "pt-b1"
        ],
        defaultSort: "recommended",
        chips: {
            allLabel: "همه مناسبت‌ها",
            options: [
                {
                    id: "housewarming",
                    label: "خانه‌نو",
                    test: (p)=>Boolean(p.occasions?.includes("housewarming"))
                },
                {
                    id: "birthday",
                    label: "تولد",
                    test: (p)=>Boolean(p.occasions?.includes("birthday"))
                },
                {
                    id: "anniversary",
                    label: "سالگرد",
                    test: (p)=>Boolean(p.occasions?.includes("anniversary"))
                },
                {
                    id: "yalda-nowruz",
                    label: "یلدا و نوروز",
                    test: (p)=>Boolean(p.occasions?.includes("yalda-nowruz"))
                }
            ]
        },
        before: [
            {
                type: "gift-steps",
                title: "سرویس بسته‌بندی و ارسال هدیه",
                subtitle: "در صفحه هر محصول گزینه «این محصول را هدیه می‌دهم» را فعال کنید.",
                items: [
                    {
                        title: "محصول را انتخاب کنید",
                        text: "محصولات این صفحه همه قابلیت بسته‌بندی هدیه دارند."
                    },
                    {
                        title: "«هدیه می‌دهم» را بزنید",
                        text: "در سبد خرید یا صفحه محصول، گزینه هدیه را فعال کنید."
                    },
                    {
                        title: "پیام تبریک بنویسید",
                        text: "متن شما روی کارت تبریک WASTON چاپ می‌شود."
                    },
                    {
                        title: "آدرس گیرنده را وارد کنید",
                        text: "بسته مستقیم برای گیرنده ارسال می‌شود؛ بدون درج قیمت."
                    }
                ]
            },
            {
                type: "gift-packs",
                title: "پک‌های هدیه آماده",
                subtitle: "ترکیب‌های پیشنهادی WASTON، بسته‌بندی‌شده و آماده ارسال."
            }
        ],
        after: [
            {
                type: "cta",
                title: "هنوز مطمئن نیستید چه هدیه‌ای بدهید؟",
                text: "پرفروش‌ترین محصولات WASTON انتخاب مطمئنی برای شروع است.",
                href: "/shop/best-sellers",
                action: "مشاهده پرفروش‌ها"
            }
        ]
    },
    {
        slug: "best-sellers",
        title: "پرفروش‌ترین‌ها",
        label: "پرفروش‌ها",
        eyebrow: "BEST SELLERS",
        description: "محصولاتی که بیشترین سفارش را داشته‌اند. این فهرست پس از راه‌اندازی از داده واقعی فروش ساخته می‌شود.",
        illustration: "food-processor",
        tone: "navy",
        includes: (p)=>p.salesRank !== undefined,
        defaultSort: "bestselling",
        after: [
            {
                type: "reviews",
                title: "نظر خریداران",
                subtitle: "پس از راه‌اندازی، فقط نظرهای تأییدشده خریداران واقعی این‌جا نمایش داده می‌شود.",
                productIds: [
                    "t-210",
                    "ck-8",
                    "fp-1200"
                ]
            }
        ]
    },
    {
        slug: "new",
        title: "محصولات جدید",
        label: "جدیدترین‌ها",
        eyebrow: "NEW ARRIVALS",
        description: "آخرین محصولاتی که به فروشگاه WASTON اضافه شده‌اند.",
        illustration: "vase",
        tone: "teal",
        includes: (p)=>p.newRank !== undefined,
        defaultSort: "newest",
        chips: {
            allLabel: "همه",
            options: priceCategoryChips
        },
        after: [
            {
                type: "cta",
                title: "همه دسته‌بندی‌ها",
                text: "لوازم برقی، ظروف، سفال، لوازم نظافت و هدیه.",
                href: "/shop",
                action: "بازگشت به فروشگاه"
            }
        ]
    },
    {
        slug: "offers",
        title: "پیشنهادهای ویژه",
        label: "پیشنهادهای ویژه",
        eyebrow: "SPECIAL OFFERS",
        description: "تخفیف‌های فعلی فروشگاه. قیمت قبل و بعد از تخفیف کنار هم آمده تا تصمیم شما شفاف باشد.",
        illustration: "gift",
        tone: "coral",
        includes: (p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["discountPercent"])(p) > 0,
        defaultSort: "discount",
        chips: {
            allLabel: "همه",
            options: priceCategoryChips
        },
        after: [
            {
                type: "cta",
                title: "تازه‌های WASTON را دیده‌اید؟",
                text: "محصولاتی که به‌تازگی به فروشگاه اضافه شده‌اند.",
                href: "/shop/new",
                action: "مشاهده محصولات جدید"
            }
        ]
    }
];
const allProductsCollection = {
    slug: "",
    title: "همه محصولات",
    label: "فروشگاه",
    eyebrow: "ALL PRODUCTS",
    description: "لوازم برقی آشپزخانه، ظروف و سفال‌های منتخب و لوازم نظافت خانه؛ همه در یک‌جا.",
    illustration: "pot",
    tone: "navy",
    includes: ()=>true,
    defaultSort: "recommended",
    chips: {
        allLabel: "همه دسته‌ها",
        options: priceCategoryChips
    },
    after: [
        {
            type: "cta",
            title: "هدیه‌ای برای خانه",
            text: "بسته‌بندی ویژه هدیه، کارت تبریک و ارسال مستقیم برای گیرنده.",
            href: "/shop/gifts",
            action: "انتخاب هدیه"
        }
    ]
};
function getCollection(slug) {
    if (!slug) return allProductsCollection;
    return collections.find((c)=>c.slug === slug);
}
function collectionForCategory(category) {
    return collections.find((c)=>c.slug === category) ?? allProductsCollection;
}
}),
"[project]/src/data/products.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1z9jkuypx1eg3._.js.map