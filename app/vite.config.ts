import devtools from "solid-devtools/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [
    devtools({
      autoname: true,
      locator: {
        targetIDE: "vscode",
        key: "Alt",
        jsxLocation: true,
        componentLocation: true,
      },
    }),
    solid(),
  ],
  css: {
    postcss: "./app/postcss.config.js",
  },

  preview: {
    port: 1313,
  },
  server: {
    port: 1313,
  },
});
