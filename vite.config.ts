import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// runtime-error overlay removed (Replit-specific). Keep Vite and React plugins only.

// Compute filesystem paths from import.meta.url in a cross-platform safe way
const __filename = fileURLToPath(import.meta.url);
const projectRoot = path.dirname(__filename);
const clientRoot = path.resolve(projectRoot, "client");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(clientRoot, "src"),
      "@shared": path.resolve(projectRoot, "shared"),
      "@assets": path.resolve(projectRoot, "attached_assets"),
    },
  },
  root: clientRoot,
  build: {
    outDir: path.resolve(projectRoot, "dist"),
    emptyOutDir: true,
  },
server: {
  fs: {
    strict: true,
    deny: ["**/.*"],
  },
  proxy:
    process.env.NODE_ENV === "development"
      ? {
          "/submit": {
            target: "http://127.0.0.1:3000", // local backend for dev
            changeOrigin: true,
            secure: false,
          },
        }
      : {}, // no proxy in production
  },
});
