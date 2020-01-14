//@typescript-eslint/parser
module.exports = {
    parser: "babel-eslint", // Specifies the ESLint parser
    extends: [
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:react/recommended',
        "airbnb-base"
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: "module" // Allows for the use of imports
    },
    rules: {
        "react/prop-types": 0,
        "@typescript-eslint/explicit-function-return-type": "off"
    }
};
