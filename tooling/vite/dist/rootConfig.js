"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootAppViteConfig = void 0;
const vite_1 = require("vite");
const vite_plugin_externalize_dependencies_1 = __importDefault(require("vite-plugin-externalize-dependencies"));
const externalDependencies_1 = require("./externalDependencies");
const rootAppViteConfig = (0, vite_1.defineConfig)({
    build: {
        rollupOptions: {
            input: "src/main.ts",
            output: {
                format: "esm",
            },
            external: externalDependencies_1.externalDependencies,
        },
    },
    plugins: [(0, vite_plugin_externalize_dependencies_1.default)({ externals: externalDependencies_1.externalDependencies })],
    server: {
        open: "http://localhost:3005/",
    },
});
exports.rootAppViteConfig = rootAppViteConfig;
//# sourceMappingURL=rootConfig.js.map