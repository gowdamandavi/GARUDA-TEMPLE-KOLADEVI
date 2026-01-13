import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Vite config for garuda-temple-koladevi
 * - Uses Vite React plugin
 * - Sets a safe base URL fallback
 */
export default defineConfig(({ mode }) => {
    // Fallback for base URL: prefer VITE_BASE_URL, then BASE_URL, else '/'
    const base =
        process.env.VITE_BASE_URL ||
        process.env.BASE_URL ||
        "/";

    return {
        base,
        plugins: [react()],
        server: {
            port: 5173,
            open: true
        },
        build: {
            // useful defaults; adjust if deploying to sub-path
            outDir: "dist",
            sourcemap: mode === "development"
        }
    };
});