// vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  base: "/",

  plugins: [
    react(),

    AutoImport({
      imports: [
        {
          react: [
            "useState",
            "useEffect",
            "useContext",
            "useRef",
            "useMemo",
            "useCallback",
            "useReducer",
            "useLayoutEffect",
            "useImperativeHandle",
            "useDebugValue",
            "useId",
            "useSyncExternalStore",
            "Fragment",
            "createElement",
            "cloneElement",
            "isValidElement",
            "Children",
            "Suspense",
            "lazy",
          ],
        },

        "react-router-dom",

        {
          // ✅ Auto-import Redux hooks
          "react-redux": ["useDispatch", "useSelector"],
          "@reduxjs/toolkit": [
            "createSlice",
            "createEntityAdapter",
            "configureStore",
          ],
          "@/utils": ["formatDate", "capitalize"],
        },
      ],
      dts: "./auto-imports.d.ts",
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  define: {
    // ✅ Define global constant __APP_VERSION__
    __APP_VERSION__: JSON.stringify("1.0.0"),
  },

  server: {
    port: 3000,
    open: true,
    cors: true,
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/sass/variables.scss" as *;`,
      },
    },
  },

  build: {
    sourcemap: true,
    outDir: "dist",
    assetsDir: "assets",
    chunkSizeWarningLimit: 1000,
  },
});
