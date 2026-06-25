import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

const printUrl = {
  name: "print-url",
  hooks: {
    "astro:server:start": ({ address }) => {
      const host = address.address === "::" || address.address === "0.0.0.0" ? "localhost" : address.address;
      console.log(`\n  ▶  http://${host}:${address.port}\n`);
    },
  },
};

export default defineConfig({
  site: "https://xomenko.com",
  integrations: [sitemap(), printUrl],
  compressHTML: true,
  image: {
    quality: 80,
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: "esbuild",
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name].[hash][extname]",
          chunkFileNames: "assets/[name].[hash].js",
          entryFileNames: "assets/[name].[hash].js",
        },
      },
    },
    server: {
      watch: {
        usePolling: true,
        interval: 500,
      },
    },
  },
});
