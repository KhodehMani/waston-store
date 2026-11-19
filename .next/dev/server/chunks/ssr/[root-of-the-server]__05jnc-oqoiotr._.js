module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/search/page.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "chip": "page-module__n5O0Ma__chip",
  "chips": "page-module__n5O0Ma__chips",
  "popular": "page-module__n5O0Ma__popular",
  "popularTitle": "page-module__n5O0Ma__popularTitle",
});
}),
"[project]/src/app/search/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2d$x$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search-x.mjs [app-rsc] (ecmascript) <export default as SearchX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$ProductGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/ProductGrid.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Breadcrumb$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Breadcrumb.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EmptyState$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/EmptyState.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PageHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/PageHeading.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$search$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/search/page.module.css [app-rsc] (css module)");
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
const metadata = {
    title: "جستجو"
};
const popular = [
    "توستر",
    "غذاساز",
    "سفالی",
    "قابلمه",
    "جاروبرقی",
    "ماگ"
];
async function SearchPage({ searchParams }) {
    const raw = (await searchParams).q;
    const q = (Array.isArray(raw) ? raw[0] : raw)?.trim() ?? "";
    const results = q ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["searchProducts"])(q) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Breadcrumb$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Breadcrumb"], {
                items: [
                    {
                        href: "/",
                        label: "خانه"
                    },
                    {
                        label: "جستجو"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/search/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PageHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PageHeading"], {
                title: q ? `نتایج جستجو برای «${q}»` : "جستجو در محصولات",
                subtitle: q ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fa"])(results.length)} محصول پیدا شد` : "نام محصول، مدل یا دسته‌بندی را در کادر جستجو بنویسید."
            }, void 0, false, {
                fileName: "[project]/src/app/search/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            q && results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$ProductGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductGrid"], {
                products: results
            }, void 0, false, {
                fileName: "[project]/src/app/search/page.tsx",
                lineNumber: 30,
                columnNumber: 35
            }, this),
            q && results.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EmptyState$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EmptyState"], {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2d$x$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchX$3e$__["SearchX"], {
                    size: 28,
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/app/search/page.tsx",
                    lineNumber: 33,
                    columnNumber: 27
                }, this),
                title: "نتیجه‌ای پیدا نشد",
                text: "املای کلمه را بررسی کنید یا از جستجوهای پرتکرار زیر استفاده کنید.",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                    href: "/shop",
                    variant: "outline",
                    children: "مشاهده همه محصولات"
                }, void 0, false, {
                    fileName: "[project]/src/app/search/page.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/search/page.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$search$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].popular,
                "aria-labelledby": "popular-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "popular-title",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$search$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].popularTitle,
                        children: "جستجوهای پرتکرار"
                    }, void 0, false, {
                        fileName: "[project]/src/app/search/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$search$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].chips,
                        children: popular.map((term)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/search?q=${encodeURIComponent(term)}`,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$search$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].chip,
                                    children: term
                                }, void 0, false, {
                                    fileName: "[project]/src/app/search/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            }, term, false, {
                                fileName: "[project]/src/app/search/page.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/search/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/search/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/search/page.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/search/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/search/page.tsx [app-rsc] (ecmascript)"));
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
"[project]/src/components/ui/PageHeading.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "subtitle": "PageHeading-module__9lq8_a__subtitle",
  "title": "PageHeading-module__9lq8_a__title",
  "wrap": "PageHeading-module__9lq8_a__wrap",
});
}),
"[project]/src/components/ui/PageHeading.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageHeading",
    ()=>PageHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PageHeading$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/PageHeading.module.css [app-rsc] (css module)");
;
;
function PageHeading({ title, subtitle, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PageHeading$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].wrap,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PageHeading$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/PageHeading.tsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PageHeading$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].subtitle,
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/PageHeading.tsx",
                        lineNumber: 9,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/PageHeading.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/PageHeading.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
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
"[project]/src/lib/search.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalize",
    ()=>normalize,
    "searchProducts",
    ()=>searchProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-rsc] (ecmascript)");
;
;
function normalize(text) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toAsciiDigits"])(text).toLowerCase().replace(/ي/g, "ی").replace(/ك/g, "ک").replace(/[‌‍‎‏]/g, " ").replace(/[ًٌٍَُِّْ]/g, "").replace(/\s+/g, " ").trim();
}
const categoryWords = {
    "kitchen-appliances": "لوازم برقی آشپزخانه",
    kitchenware: "ظروف آشپزخانه",
    ceramics: "سفال سرامیک ظروف",
    cleaning: "لوازم نظافت خانه جارو"
};
const index = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["catalog"].map((p)=>({
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__05jnc-oqoiotr._.js.map