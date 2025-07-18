import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    outDir: "dist",
    sourcemap: false,
  },
  server: {
    port: 5173,
    host: true,
    watch: {
      usePolling: true,
    },
  },
});
