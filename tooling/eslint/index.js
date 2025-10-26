import js from "@eslint/js";
import react from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

const config = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
    },
  },
];

export { config };
