# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Path Aliasing

This project uses the `@/` path alias to reference files from the `src` directory, making imports cleaner and more maintainable.

### Configuration

The path alias is configured in `vite.config.js`:

```javascript
import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

```javascript
// Instead of relative paths
import Component from "../../../components/Component";

// Use @ alias
import Component from "@/components/Component";
import Logo from "@/assets/icons/logo.svg";
```
