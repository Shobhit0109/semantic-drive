/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const prettierConfig = {
    plugins: [
        "prettier-plugin-organize-imports",
        "prettier-plugin-organize-attributes",
        "prettier-plugin-jsdoc",
        "prettier-plugin-style-order",
        "prettier-plugin-sort-imports",
        "prettier-plugin-css-order",
        "prettier-plugin-tailwindcss", // MUST come last
    ],
};

export default prettierConfig;
