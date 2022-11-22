module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'standard-with-typescript',
        'prettier',
        'plugin:i18next/recommended',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: ['react', 'i18next'],
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        indent: ['error', 4],
        'comma-dangle': ['error', 'only-multiline'],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/no-floating-promises': 'warn',
        'i18next/no-literal-string': 2,
    },
};
