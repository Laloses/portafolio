module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: '@mui/material', //https://mui.com/material-ui/guides/minimizing-bundle-size/#option-one-use-path-imports
            message: 'Use imports from @mui/material/<component>',
          },
        ],
        patterns: [
          {
            group: ['@mui/*/*/*'], //https://mui.com/material-ui/guides/minimizing-bundle-size/#option-one-use-path-imports
            message: 'Material UI only support first and second-level imports. Use imports from @mui/material/<component>',
          },
        ],
      },
    ],
  },
};
