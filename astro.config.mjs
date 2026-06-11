import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

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
  integrations: [printUrl],
  vite: {
    plugins: [tailwindcss()],
  },
});
