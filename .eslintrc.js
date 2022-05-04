module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended',
        '@nuxtjs/eslint-config-typescript'
    ],
    rules: {
        // Vue rules
        'vue/component-name-in-template-casing': [
            'error',
            'PascalCase',
            {
                registeredComponentsOnly: true
            }
        ],
        'vue/singleline-html-element-content-newline': [0],
        'vue/multiline-html-element-content-newline': [0],
        'vue/multi-word-component-names': [0],
        'vue/html-self-closing': [0],
        'vue/no-v-html': [0],
        'vue/max-attributes-per-line': [0],
        'vue/html-closing-bracket-newline': [0],
        'vue/html-indent': [0],
        'vue/require-component-is': [0],
        // Pettier rules
        'max-len': [0, 120],
        code: [0, 120],
        'print-width': [0, 120],
        'no-console': [1],
        'space-before-function-paren': [0],
        'arrow-parens': [0],
        curly: [0],
        'keyword-spacing': [0],
        indent: ['error', 4],
        'prettier/prettier': [
            'off',
            {
                printWidth: 120,
                tabWidth: 4,
                semi: false,
                singleQuote: true,
                trailingComma: 'none',
                arrowParens: 'avoid',
                endOfLine: 'lf'
            }
        ]
    }
}
