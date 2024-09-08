// import eslint from "@eslint/js"; // New ESLint config format
// import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
// import typescriptParser from "@typescript-eslint/parser";
// import globals from "globals";

// export default [
//   {
//     languageOptions: { globals: globals.node },
//     ignores: ["src/**/*.test.ts"], // Ignore all .test.ts files
//   },
//   eslint.configs.recommended,
//   {
//     files: ["src/**/*.ts", "src/**/*.tsx"],
//     languageOptions: {
//       parser: typescriptParser,
//       ecmaVersion: 2021,
//       sourceType: "module"
//     },
//     plugins: {
//       "@typescript-eslint": typescriptEslintPlugin
//     },
//     env: {
//       jest: true,  // Enable Jest environment
//     },
//     rules: {
//       semi: ["error", "always"]
//     }
//   }
// ];

import eslint from "@eslint/js"; // New ESLint config format
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import globals from "globals";

export default [
  {
    languageOptions: { 
      globals: globals.node,
    },
    ignores: ["src/**/*.test.ts"], // Global ignore for test files
  },
  eslint.configs.recommended,
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
    },
    rules: {
      semi: ["error", "always"],
    },
  },
  {
    // Specific config for Jest test files
    files: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    languageOptions: {
      parser: typescriptParser,
      globals: {
        ...globals.jest,  // Adding Jest globals explicitly
        jest: "readonly",
        test: "readonly",
        expect: "readonly",
      },
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      // You can add any Jest-specific rules here if needed
    },
  },
];
