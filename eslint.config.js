import tsESlint from 'typescript-eslint';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactHooks from 'eslint-plugin-react-hooks';
import eslint from '@eslint/js';

// New Flat configs of ESlint
export default tsESlint.config({
  files: ['src/**/*.ts', 'src/**/*.tsx'],
  extends: [eslint.configs.recommended, ...tsESlint.configs.recommended],
  languageOptions: {
    ecmaVersion: 'latest',
    globals: {
      browser: true,
    },
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: import.meta.dirname,
    },
  },
  plugins: {
    'react-refresh': reactRefresh,
    'react-hooks': reactHooks,
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@mui/material', //https://mui.com/material-ui/guides/minimizing-bundle-size/#option-one-use-path-imports
            message: 'Use imports from @mui/material/<component>',
          },
          {
            name: '@mui/icons-material', //https://mui.com/material-ui/guides/minimizing-bundle-size/#option-one-use-path-imports
            message: 'Use imports from @mui/icons-material/<icon>',
          },
        ],
        patterns: [
          {
            group: ['@mui/*/*/*'], //https://mui.com/material-ui/guides/minimizing-bundle-size/#option-one-use-path-imports
            message:
              'Material UI only support first and second-level imports. Use imports from @mui/material/<component>',
          },
          {
            group: ['@mui/icons-material/*/*'], //https://mui.com/material-ui/guides/minimizing-bundle-size/#option-one-use-path-imports
            message:
              'Material UI only support first and second-level imports. Use imports from @mui/icons-material/<icon>',
          },
        ],
      },
    ],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
});
