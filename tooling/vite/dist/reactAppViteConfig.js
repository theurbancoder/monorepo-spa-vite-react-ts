"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactAppViteConfig = void 0;
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
const vite_1 = require("vite");
const vite_plugin_externalize_dependencies_1 = __importDefault(require("vite-plugin-externalize-dependencies"));
const externalDependencies_1 = require("./externalDependencies");
const reactAppViteConfig = (0, vite_1.defineConfig)(({ mode }) => {
    const isStandalone = mode === "standalone";
    return {
        build: {
            rollupOptions: {
                input: isStandalone ? "src/standalone.tsx" : "src/main.tsx",
                output: {
                    format: "esm",
                },
                external: isStandalone ? [] : externalDependencies_1.externalDependencies,
            },
        },
        plugins: [
            (0, plugin_react_1.default)(),
            ...(!isStandalone
                ? [(0, vite_plugin_externalize_dependencies_1.default)({ externals: externalDependencies_1.externalDependencies })]
                : []),
        ],
    };
});
exports.reactAppViteConfig = reactAppViteConfig;
//# sourceMappingURL=reactAppViteConfig.js.map