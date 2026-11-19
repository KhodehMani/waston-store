module.exports = [
"[project]/vue-modules/dist/index.js [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/vue-modules_dist_index_14as8jk627re3.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/vue-modules/dist/index.js [app-ssr] (ecmascript)");
    });
});
}),
];