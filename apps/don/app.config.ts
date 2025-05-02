import path from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"), // Maps '~' to the src directory
        "~public": path.resolve(__dirname, "public"), // Maps '~public' to the public directory
      },
    },
  },
});
