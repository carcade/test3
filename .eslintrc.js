module.exports = {
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:vue/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        parser: "@typescript-eslint/parser",
        ecmaFeatures: {
            jsx: false,
        },
    },
    rules: {
        'vue/html-self-closing': ['error', {
            html: {
                void: 'never',
                normal: 'never',
                component: 'never',
            },
        }],
        'vue/html-indent': ['error', 4, {
            'attribute': 2,
            'baseIndent': 1,
        }],
        'vue/script-indent': ['error', 4, {
            baseIndent: 1,
            switchCase: 1,
        }],
        'func-call-spacing': ['error', 'never'],
        'space-before-function-paren': ['error', {
            'anonymous': 'always',
            'named': 'never',
            'asyncArrow': 'always',
        }],
        'no-multiple-empty-lines': ['error', {
            max: 1,
            maxBOF: 0,
            maxEOF: 1,
        }],
        'quotes': ['error', 'single', {
            allowTemplateLiterals: true,
        }],
        'comma-dangle': ['error', 'always-multiline'],
        'no-console': ['error'],
        'no-debugger': ['error'],
        'no-trailing-spaces': ['error'],
        'eol-last': ['error', 'always'],
        'indent': ['error', 4, {
            'SwitchCase': 1,
            'FunctionDeclaration': {'body': 1, 'parameters': 'first'},
            'FunctionExpression': {'body': 1, 'parameters': 'first'},
            'VariableDeclarator': 'first',
            'MemberExpression': 1,
            'CallExpression': {'arguments': 1},
        }],
        '@typescript-eslint/explicit-member-accessibility': ['error', {accessibility: 'explicit'}],
        '@typescript-eslint/interface-name-prefix': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'angle-bracket',
                objectLiteralTypeAssertions: 'allow-as-parameter',
            },
        ],
        '@typescript-eslint/no-inferrable-types': ['off'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
            'vars': 'all',
            'args': 'none',
            'ignoreRestSiblings': true,
        }],
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/no-use-before-define': ['off', {
            functions: false,
            classes: false,
            variables: true,
            typedefs: false,
        }],
    },
    'overrides': [
        {
            'files': ['*.vue'],
            'rules': {
                'indent': 'off',
            },
        },
    ],
};
