import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import externalize from "vite-plugin-externalize-dependencies";
import { externalDependencies } from "./externalDependencies";

const reactAppViteConfig = defineConfig(({ mode }) => {
  const isStandalone = mode === "standalone";

  return {
    build: {
      rollupOptions: {
        input: isStandalone ? "src/standalone.tsx" : "src/main.tsx",
        output: {
          format: "esm",
        },
        external: isStandalone ? [] : externalDependencies,
      },
    },
    plugins: [
      react(),
      ...(!isStandalone
        ? [externalize({ externals: externalDependencies })]
        : []),
    ],
  };
});

export { reactAppViteConfig };
