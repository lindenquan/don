import path from "node:path";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "es2024",
    ssr: false,
    polyfillModulePreload: false,
    modulePreload: true,
    chunkSizeWarningLimit: 600, // kb
    rollupOptions: {},
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname), // Maps '~' to the root directory
    },
  },
});
