// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//       "@components": path.resolve(__dirname, "./src/components"),
//       "@pages": path.resolve(__dirname, "./pages"),
//       "@assets": path.resolve(__dirname, "./src/assets"),
//     },
//   },
// });

import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // "@components": path.resolve(__dirname, "./src/components"),
      // "@pages": path.resolve(__dirname, "./pages"),
      // "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
