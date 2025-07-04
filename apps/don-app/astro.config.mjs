import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";

// @ts-check
import { defineConfig } from "astro/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"), // Maps '~' to the src directory
      },
    },
  },

  integrations: [solidJs()],
});
