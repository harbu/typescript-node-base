module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json"
    },
    env: {
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "plugin:import/recommended",
        "plugin:import/typescript",
    ],
    rules: {
        // purely style
        "indent": ["error"],
        "max-len": ["error", {
            code: 100
        }],
        "semi": ["error", "never"],
        "quotes": ["error"],
        "arrow-parens": ["error"],
        "eol-last": ["error"],
        "@typescript-eslint/comma-spacing": ["error"],
        "@typescript-eslint/brace-style": ["error", "1tbs", {
            "allowSingleLine": true
        }],
        "@typescript-eslint/func-call-spacing": ["error"],
        "@typescript-eslint/keyword-spacing": ["error"],
        "@typescript-eslint/member-delimiter-style": ["error", {
            "multiline": {
                "delimiter": "none"
            }
        }],
        "@typescript-eslint/object-curly-spacing": ["error", "always"],
        "@typescript-eslint/space-before-blocks": ["error"],
        "@typescript-eslint/space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always"
        }],

        // rest
        "@typescript-eslint/default-param-last": ["error"],
        "@typescript-eslint/no-invalid-this": ["error"],
        "@typescript-eslint/no-useless-constructor": ["error"],
        "import/order": ["error", {
            "alphabetize": {
                "order": "asc"
            },
            "newlines-between": "never"
        }],
        "sort-imports": ["error", {
            "ignoreDeclarationSort": true
        }]
    }
}
