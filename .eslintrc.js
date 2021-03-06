{
  "extends": "wesbos",
  "rules": {
    "import/no-extraneous-dependencies": "off",
    "no-shadow": "off",
    "react/no-unused-prop-types": "off",
    "no-use-before-define": "off",
    "react/default-props-match-prop-types": "off",
    "react-hooks/exhaustive-deps": "off",
    "import/no-unresolved": "off"
  },
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  }
}