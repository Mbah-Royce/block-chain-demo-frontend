module.exports = {
    root: true,
    env: {
        node: true,
        "es2020": true,
    },
    extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
    parserOptions: {
        parser: "babel-eslint",

    },
    "plugins": ["prettier"],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "prettier/prettier": [
            "warn",
            {
                "endOfLine": "auto"
            },
            { "singleQuote": true, "parser": "flow" }
        ],
    },
}