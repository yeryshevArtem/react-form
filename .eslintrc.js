module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "import/no-extraneous-dependencies": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react/jsx-no-useless-fragment": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "react/button-has-type": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
