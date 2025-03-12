import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { 
      globals: {
        ...globals.browser,
        process: "readonly" // Add process as a global variable
      }
    },
    rules: {
      eqeqeq: "off",
      "no-unused-vars": "error",
      "prefer-const": ["error", { "ignoreReadBeforeAssign": true }]
    }
  },
  pluginJs.configs.recommended,
];