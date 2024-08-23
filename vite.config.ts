import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src/*" },
      { find: "@components", replacement: "/src/components" },
      { find: "@modals", replacement: "/src/components/modals/index.ts" },
      { find: "@ui", replacement: "/src/components/ui" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@layout", replacement: "/src/layout" },

      { find: "@service", replacement: "/src/service/index.ts" },
      { find: "@cookie", replacement: "/src/utils/token-service.ts" },
      { find: "@dark-mode", replacement: "/src/utils/dark-mode.tsx" },

      { find: "@router", replacement: "/src/router" },
      { find: "@routes", replacement: "/src/router/routes.tsx" },
      { find: "@router-files", replacement: "/src/router/router.tsx" },

      { find: "@assets", replacement: "/src/assets" },

      // ------------------- interface -------------------
      { find: "@global-interface", replacement: "/src/interfaces/global.ts" },
      {
        find: "@auth-interface",
        replacement: "/src/interfaces/auth/register.ts",
      },
      {
        find: "@category-interface",
        replacement: "/src/interfaces/category.ts",
      },
      { find: "@brands-interface", replacement: "/src/interfaces/brands.ts" },
      {
        find: "@products-interface",
        replacement: "/src/interfaces/products.ts",
      },
      {
        find: "@product-detail-interface",
        replacement: "/src/interfaces/product-detail.ts",
      },

      // ------------------- icons -------------------
      {
        find: "@global-icons",
        replacement: "/src/assets/icons/global-icons.tsx",
      },
      {
        find: "@drawer-icons",
        replacement: "/src/assets/icons/drawer-icons.tsx",
      },

      // -------------------------------------------
      { find: "@validations", replacement: "/src/validations" },

      // -------------------------------------------
      { find: "@store", replacement: "/src/store/index.ts" },
    ],
  },
});
