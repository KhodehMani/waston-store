/**
 * Builds the isolated Vue 3 module (Single File Components) into a small ES
 * library at vue-modules/dist. The Next.js app never compiles .vue files
 * itself: it lazily imports this pre-built bundle through the `@vue-widgets`
 * alias and mounts each widget into a DOM node owned by a React "island".
 */
import { defineConfig, type Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const root = fileURLToPath(new URL(".", import.meta.url));

/** Ships the hand-written public contract next to the bundle as index.d.ts. */
function emitPublicTypes(): Plugin {
  return {
    name: "waston-emit-public-types",
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "index.d.ts",
        source: readFileSync(resolve(root, "types/index.d.ts"), "utf8"),
      });
    },
  };
}

export default defineConfig({
  root,
  publicDir: false,
  plugins: [vue(), emitPublicTypes()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    __VUE_OPTIONS_API__: "false",
    __VUE_PROD_DEVTOOLS__: "false",
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
  },
  build: {
    outDir: resolve(root, "dist"),
    // Fixed output names: never empty the folder, so Next.js never sees it missing during watch rebuilds.
    emptyOutDir: false,
    target: "es2020",
    sourcemap: false,
    lib: {
      entry: resolve(root, "src/index.ts"),
      formats: ["es"],
      fileName: () => "index.js",
      cssFileName: "index",
    },
  },
});
