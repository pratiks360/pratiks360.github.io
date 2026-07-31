import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

// GitHub Pages serves static files only — no SSR runtime. `bun run build:pages`
// sets PAGES_BUILD=1, which prerenders every route to HTML and drops nitro
// entirely. Unset (the default build) leaves behaviour untouched.
const isPagesBuild = process.env.PAGES_BUILD === "1";

export default defineConfig({
  server: { port: 8080, strictPort: true },
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts
      // (our SSR error wrapper). nitro/vite builds from this.
      server: { entry: "server" },
      ...(isPagesBuild
        ? {
            prerender: { enabled: true, crawlLinks: true, failOnError: true },
            pages: [{ path: "/" }, { path: "/sitemap.xml" }],
          }
        : {}),
    }),
    // viteReact must come after tanstackStart so it transforms the routes
    // the Start plugin generates.
    viteReact(),
    ...(isPagesBuild ? [] : [nitro()]),
  ],
});
