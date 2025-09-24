import { defineConfig } from "vitest/config";
// Adição necessária: Plugin para suporte a React no Vite/Vitest
import react from "@vitejs/plugin-react";

export default defineConfig({
  test: {
    environment: "jsdom", // Para testes com React
    globals: true,
    setupFiles: "./src/setupTests.ts", // Opcional, para configurações globais
  },
  // Adição necessária: Plugins para transpilar React
  plugins: [react()],
});
