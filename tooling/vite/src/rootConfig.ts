import { defineConfig } from "vite";
import externalize from "vite-plugin-externalize-dependencies";
import { externalDependencies } from "./externalDependencies";

const rootAppViteConfig = defineConfig({
  build: {
    rollupOptions: {
      input: "src/main.ts",
      output: {
        format: "esm",
      },
      external: externalDependencies,
    },
  },
  plugins: [externalize({ externals: externalDependencies })],
  server: {
    open: "http://localhost:3005/",
  },
});

export { rootAppViteConfig };
