import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        portfolio: "index.html",
        projects: "projects.html",
        semiconductorProject: "semiconductor-packaging-sourcing.html"
      }
    }
  }
});
