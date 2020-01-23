//@typescript-eslint/parser
module.exports = {
    parser: "babel-eslint",
    extends: [
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:react/recommended',
        "airbnb-base"
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module" // Allows for the use of imports
    },
    rules: {
        "react/prop-types": 0,
        "@typescript-eslint/explicit-function-return-type": "off",
        "no-use-before-define":["error", { "variables": false }],
        "@typescript-eslint/no-use-before-define": "off"
    },
    env: {
        "browser": true,
        "es6": true,
        "jest": true,
        "node": true
      }
};
