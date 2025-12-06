import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    strictPort: false,
  },
  plugins: [react({ fastRefresh: true }), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "./components"),
      "@": path.resolve(__dirname, "./src"),
      // allow editing top-level `components/` and see changes without copying
      "components": path.resolve(__dirname, "./components"),
    },
  },
}));
