import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // Target backend server
        changeOrigin: true, // Changes the origin header to match the target
        secure: false, // Disable SSL verification for self-signed certificates
      },
    },
  },
});
