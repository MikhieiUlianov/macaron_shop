// vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  base: "/",

  plugins: [
    react(),

    // 🔁 Automatically import functions from these packages
    AutoImport({
      imports: [
        // ✅ Auto-import all these from "react":
        // useState, useEffect, useContext, useRef, useMemo,
        // useCallback, useReducer, useLayoutEffect, useImperativeHandle,
        // useDebugValue, useId, useSyncExternalStore,
        // Fragment, createElement, cloneElement, isValidElement, Children
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

        // ✅ Auto-import from "react-router-dom":
        // useNavigate, useParams, useLocation, useSearchParams, useMatch,
        // Link, NavLink, Outlet, Navigate, Routes, Route,
        // BrowserRouter, HashRouter, MemoryRouter,
        // createRoutesFromElements, createBrowserRouter, createHashRouter,
        // createMemoryRouter, RouterProvider, useOutlet, useRoutes
        "react-router-dom",

        {
          // ✅ Auto-import Redux hooks
          "react-redux": ["useDispatch", "useSelector"],
          "@reduxjs/toolkit": [
            "createSlice",
            "createEntityAdapter",
            "configureStore",
          ],
          /* FOR NAMED EXPORT ONLY */
          // ✅ Your custom utility functions (in src/utils/formatDate.ts etc.)
          "@/utils": ["formatDate", "capitalize"],
          /* FOR DEFAULT EXPORT ONLY
          "@/utils/someFunc": ["default as someFunc"] */
        },
      ],

      // ✅ Auto-import everything from files inside:
      // src/hooks/*.ts and src/utils/*.ts
      // Both default exports and named exports
      /*    dirs: ["src/hooks", "src/utils", "src/services"], */

      // ✅ Generate auto-import TypeScript declarations for IDE support
      dts: "./auto-imports.d.ts",
    }),
  ],

  resolve: {
    // ✅ Use "@" as alias for "src" folder
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  define: {
    // ✅ Define global constant __APP_VERSION__
    __APP_VERSION__: JSON.stringify("1.0.0"),
  },

  server: {
    // ✅ Dev server settings
    port: 3000, // Start on port 3000
    open: true, // Auto-open browser
    cors: true, // Enable CORS
  },

  css: {
    preprocessorOptions: {
      scss: {
        // ✅ Automatically inject SCSS variables in every file
        additionalData: `@use "@/sass/variables.scss" as *;`,
      },
    },
  },

  build: {
    // ✅ Build output settings
    sourcemap: true, // Generate sourcemaps
    outDir: "dist", // Output directory
    assetsDir: "assets", // Folder for static assets
    chunkSizeWarningLimit: 1000, // Warn if chunk > 1MB
  },
});
