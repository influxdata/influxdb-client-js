import { defineConfig } from "eslint/config";

export default defineConfig([{
    files: ["src/generated/*.ts"],
    ignores: ["**/*.test.js"],

    rules: {
        "tsdoc/syntax": "warn",
    },
}]);