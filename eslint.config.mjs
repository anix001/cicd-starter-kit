import pluginJs from "@eslint/js"; // New ESLint config format
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import globals from "globals";

export default [
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2021,
      sourceType: "module"
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin
    },
    rules: {
      semi: ["error", "always"]
    },
    ignores: ["src/**/*.test.ts"], // Ignore all .test.ts files
  }
];
