// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: path.join(__dirname, "tsconfig.json"),
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  plugins: ["@typescript-eslint",'react', 'react-hooks', 'jsx-a11y', 'import', 'prettier'],
  extends: [
  "next/core-web-vitals", 
  "plugin:@typescript-eslint/recommended",
  "eslint:recommended",
  "plugin:react/recommended",
  "plugin:react-hooks/recommended",
  "plugin:jsx-a11y/recommended",
  "plugin:import/errors",
  "plugin:import/warnings",
  "plugin:prettier/recommended",
  "plugin:@typescript-eslint/recommended",
  "plugin:@typescript-eslint/eslint-recommended",
  "prettier/@typescript-eslint"],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off', // Puedes activar esta regla si quieres usar PropTypes
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

module.exports = config;
