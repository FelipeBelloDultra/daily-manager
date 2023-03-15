// Packages
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    host: "0.0.0.0",
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "~",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
});
