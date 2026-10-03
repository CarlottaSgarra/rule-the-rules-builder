// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    define: {
      // Vercel sets VERCEL_ENV ("production" | "preview" | "development") only
      // at build time, server-side. Inline it into the client bundle (without a
      // VITE_ prefix / without touching Vercel project settings) so pages can
      // tell preview deployments apart from production, e.g. to allow a
      // debug-only ?stato= override on /candidati-ambiziosa.
      "import.meta.env.VITE_DEPLOY_ENV": JSON.stringify(process.env.VERCEL_ENV ?? "development"),
    },
  },
});
