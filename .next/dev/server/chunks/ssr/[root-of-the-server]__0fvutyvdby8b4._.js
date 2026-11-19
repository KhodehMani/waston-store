module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/magazine/[slug]/page.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "article": "page-module__W0GfLW__article",
  "aside": "page-module__W0GfLW__aside",
  "asideTitle": "page-module__W0GfLW__asideTitle",
  "block": "page-module__W0GfLW__block",
  "cover": "page-module__W0GfLW__cover",
  "layout": "page-module__W0GfLW__layout",
  "lead": "page-module__W0GfLW__lead",
  "note": "page-module__W0GfLW__note",
  "other": "page-module__W0GfLW__other",
  "otherArt": "page-module__W0GfLW__otherArt",
  "tag": "page-module__W0GfLW__tag",
  "title": "page-module__W0GfLW__title",
});
}),
"[project]/src/app/magazine/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArticlePage,
    "dynamicParams",
    ()=>dynamicParams,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$ProductIllustration$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/ProductIllustration.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Breadcrumb$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Breadcrumb.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$articles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/articles.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$magazine$2f5b$slug$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/magazine/[slug]/page.module.css [app-rsc] (css module)");
;
;
;
;
;
;
;
;
;
const dynamicParams = false;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$articles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["articles"].map((a)=>({
            slug: a.slug
        }));
}
async function generateMetadata({ params }) {
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$articles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getArticle"])((await params).slug);
    return a ? {
        title: a.title,
        description: a.excerpt
    } : {};
}
async function ArticlePage({ params }) {
    const article = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$articles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getArticle"])((await params).slug);
    if (!article) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const others = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$articles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["articles"].filter((a)=>a.slug !== article.slug);
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
                        label: "مجله WASTON"
                    },
                    {
                        label: article.title
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$magazine$2f5b$slug$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].layout,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$magazine$2f5b$slug$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].article,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cx"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$magazine$2f5b$slug$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].cover, `tone-${article.tone}`),
                                "aria-hidden": true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$ProductIllustration$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductIllustration"], {
                                    name: article.illustration,
                                    size: 110,
                                    strokeWidth: 2.2
                                }, void 0, false, {
                                    fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$magazine$2f5b$slug$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].tag,
                                children: article.tag
                            }, void 0, false, {
                                fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$magazine$2f5b$slug$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                                children: article.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$magazine$2f5b$slug$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].lead,
                                children: article.excerpt
                            }, void 0, false, {
                                fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            article.body.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$magazine$2f5b$slug$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].block,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: b.heading
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: b.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, b.heading, true, {
                                    fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$magazine$2f5b$slug$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].note,
                                children: "محتوای این مقاله نمونه است."
                            }, void 0, false, {
                                fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                href: article.relatedCollection.href,
                                variant: "secondary",
                                children: article.relatedCollection.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$magazine$2f5b$slug$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].aside,
                        "aria-label": "مقاله‌های دیگر",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$magazine$2f5b$slug$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].asideTitle,
                                children: "مقاله‌های دیگر"
                            }, void 0, false, {
                                fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: others.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/magazine/${a.slug}`,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$magazine$2f5b$slug$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].other,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cx"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$magazine$2f5b$slug$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].otherArt, `tone-${a.tone}`),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$ProductIllustration$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductIllustration"], {
                                                        name: a.illustration,
                                                        size: 30,
                                                        strokeWidth: 3
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: a.tag
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: a.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                                                            lineNumber: 62,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this)
                                    }, a.slug, false, {
                                        fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/magazine/[slug]/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/magazine/[slug]/page.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/magazine/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/magazine/[slug]/page.tsx [app-rsc] (ecmascript)"));
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
"[project]/src/data/articles.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "articles",
    ()=>articles,
    "getArticle",
    ()=>getArticle
]);
const articles = [
    {
        slug: "choose-food-processor",
        tag: "راهنمای خرید",
        title: "غذاساز مناسب آشپزخانه شما کدام است؟",
        excerpt: "توان موتور، ظرفیت کاسه و لوازم جانبی را چطور مقایسه کنیم.",
        illustration: "food-processor",
        tone: "teal",
        body: [
            {
                heading: "اول ظرفیت را مشخص کنید",
                text: "برای یک یا دو نفر، کاسه ۱٫۵ لیتری کافی است. اگر برای خانواده چهارنفره یا مهمانی آشپزی می‌کنید، کاسه ۳ لیتری زمان کار را نصف می‌کند."
            },
            {
                heading: "توان موتور؛ عدد بزرگ‌تر همیشه بهتر نیست",
                text: "برای خردکردن سبزی و رنده‌کردن، ۶۰۰ تا ۸۰۰ وات کافی است. ورز دادن خمیر و خردکردن یخ به توان بیشتر نیاز دارد."
            },
            {
                heading: "لوازم جانبی را بشمارید",
                text: "تعداد کاربردهای هر مدل در مشخصات آمده است؛ فقط لوازمی را بخرید که واقعاً استفاده می‌کنید تا کابینت شلوغ نشود."
            }
        ],
        relatedCollection: {
            href: "/shop/kitchen-appliances",
            label: "مشاهده لوازم برقی آشپزخانه"
        }
    },
    {
        slug: "pottery-care",
        tag: "نگهداری",
        title: "چطور از ظروف سفالی مراقبت کنیم",
        excerpt: "نکته‌هایی برای شست‌وشو و ماندگاری لعاب ظروف دست‌ساز.",
        illustration: "bowl",
        tone: "coral",
        body: [
            {
                heading: "پیش از اولین استفاده",
                text: "ظرف را با آب ولرم بشویید و بگذارید کاملاً خشک شود. از مواد شوینده قوی و سیم ظرفشویی استفاده نکنید."
            },
            {
                heading: "شوک حرارتی ممنوع",
                text: "ظرف داغ را مستقیم زیر آب سرد یا روی سنگ سرد نگذارید؛ تغییر ناگهانی دما مهم‌ترین دلیل ترک‌خوردن سفال است."
            },
            {
                heading: "نگهداری",
                text: "ظروف را روی هم فشار ندهید و بین آن‌ها دستمال نرم بگذارید تا لعاب خط نیفتد."
            }
        ],
        relatedCollection: {
            href: "/shop/ceramics",
            label: "مشاهده سفال و سرامیک"
        }
    },
    {
        slug: "housewarming-gifts",
        tag: "ایده هدیه",
        title: "برای خانه‌نو چه هدیه‌ای بخریم؟",
        excerpt: "هدیه‌هایی که هر روز استفاده می‌شوند و به یاد می‌مانند.",
        illustration: "gift",
        tone: "navy",
        body: [
            {
                heading: "چیزی که هر روز دیده شود",
                text: "ماگ سرامیکی، سینی پذیرایی یا سرویس لیوان، هدیه‌هایی‌اند که در روزهای اول زندگی در خانه جدید بیشترین استفاده را دارند."
            },
            {
                heading: "اگر بودجه بیشتری دارید",
                text: "سرویس قابلمه یا یک دستگاه کاربردی مثل توستر یا کتری برقی، هدیه‌ای ماندگار برای آشپزخانه تازه است."
            },
            {
                heading: "بسته‌بندی را به ما بسپارید",
                text: "گزینه «هدیه می‌دهم» را فعال کنید؛ جعبه و روبان، کارت تبریک با متن شما و ارسال بدون درج قیمت."
            }
        ],
        relatedCollection: {
            href: "/shop/gifts",
            label: "مشاهده هدیه‌ها"
        }
    }
];
const getArticle = (slug)=>articles.find((a)=>a.slug === slug);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0fvutyvdby8b4._.js.map