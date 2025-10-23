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
    outDir: path.resolve(projectRoot, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
    // Dev proxy: forward API calls to a local backend to avoid CORS and 404s
    // This ensures requests from the Vite dev server to `/submit` are proxied
    // to http://localhost:3000 during development. Remove or adjust in production.
    proxy: {
      '/submit': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
