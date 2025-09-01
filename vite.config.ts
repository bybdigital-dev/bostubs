import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// If you need the Cartographer plugin only in Replit dev, use the async form:
export default defineConfig(async () => {
  const replitPlugins =
    process.env.NODE_ENV !== "production" && process.env.REPL_ID
      ? [(await import("@replit/vite-plugin-cartographer")).cartographer()]
      : [];

  return {
    plugins: [react(), runtimeErrorOverlay(), ...replitPlugins],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    // Your source index.html lives in /client
    root: path.resolve(import.meta.dirname, "client"),

    // 👇 IMPORTANT for GitHub Pages (set to your repo name)
    base: "/<BosTubs>/",

    build: {
      // Put the compiled site at repo-root /dist
      outDir: path.resolve(import.meta.dirname, "dist"),
      emptyOutDir: true,
    },
    server: {
      fs: { strict: true, deny: ["**/.*"] },
    },
  };
});
