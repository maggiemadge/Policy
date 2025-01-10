import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  base: "/", // Keep as '/' since it's a single page hosted at the root.
});
