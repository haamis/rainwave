module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2015,
    project: "static/typescript/tsconfig.json",
  },

  plugins: ["@typescript-eslint", "import"],

  env: {
    browser: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier/@typescript-eslint",
  ],

  rules: {
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
      },

      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },

      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
      {
        selector: "typeLike",
        format: ["PascalCase", "snake_case"],
      },
      {
        selector: "typeParameter",
        format: ["camelCase", "snake_case", "UPPER_CASE"],
      },
      {
        selector: "typeProperty",
        format: ["camelCase", "snake_case", "UPPER_CASE"],
      },
      {
        selector: "objectLiteralProperty",
        format: null,
      },
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/restrict-template-expressions": "error",
    "@typescript-eslint/unbound-method": "error",
    "@typescript-eslint/unified-signatures": "error",
    camelcase: "off",
    curly: "error",
    eqeqeq: "error",
    "import/first": "error",
    "import/group-exports": "off",
    "import/no-default-export": "off",
    "import/no-duplicates": "error",
    "import/no-named-default": "error",
    "import/order": "error",
    "no-array-constructor": "error",
    "no-console": "error",
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-else-return": "error",
    "no-loop-func": "error",
    "no-plusplus": "error",
    "no-redeclare": "error",
    "no-undef-init": "error",
    "no-undef": "error",
    "no-unused-expressions": "error",
    "no-use-before-define": "error",
    "no-var": "error",
    "prefer-const": "error",
    "quote-props": ["error", "consistent-as-needed"],
    radix: "error",
    "require-await": "error",
    yoda: "error",
  },

  overrides: [
    {
      files: ["*.template.ts"],
      rules: {
        "prefer-const": "off",
      },
    },
  ],
};