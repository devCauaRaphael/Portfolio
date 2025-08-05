import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

// recriando __dirname para ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ⚠️ Removido "lovable-tagger" pois não é reconhecido
// Se quiser adicionar um plugin real depois, coloque ali

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
