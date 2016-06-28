'use strict';

module.exports = {

    "env": {
        "node": true,
        "browser": true,
        "mocha": true
    },

    "rules":
    {
    	"no-cond-assign": 2,
    	"no-console": 0,
    	"no-constant-condition": 2,
    	"comma-dangle": [2, "never"],
    	"no-control-regex": 2, 
    	"no-debugger": 0,				// turn this on when preparing for deployment
    	"no-dupe-keys": 2,
    	"no-empty": 0,
    	"no-empty-character-class": 2,
    	"no-ex-assign": 2,
    	"no-extra-boolean-cast": 2,
    	"no-extra-parens": 0,
    	"no-extra-semi": 0,
    	"no-func-assign": 2,
    	"no-inner-declarations": 2,
    	"no-invalid-regexp": 2,
    	"no-negated-in-lhs": 2,
        "no-multi-spaces": 0,

    	"complexity": 0,
    	"consistent-return": 0,
    	"curly": 2,
    	"default-case": 2,
    	"dot-notation": 1,
    	"eqeqeq": 1,

    	"strict": [2, "global"],

    	"brace-style": 0,
    	"camelcase": 0,
    	"func-style": [2, "expression"],
    	"new-cap": 2,
    	"new-parens": 2,
    	"no-spaced-func": 2,
    	"semi-spacing": [2, {"before": false, "after": true}],
    	"no-trailing-spaces": 1,
    	"no-underscore-dangle": 0,
    	"quotes": [1, "single"],
    	"quote-props": [2, "as-needed"],
    	"semi": [2, "always"],
        "object-curly-spacing": [2, "always"],
        "array-bracket-spacing": [2, "always"],
        "computed-property-spacing": [2, "always"],
    	"space-in-parens": [2, "always"],
    	"space-infix-ops": 2,
    	"space-unary-ops": 1,

    	"no-undef": 0,
    	"block-scoped-var": 0,
        "no-unused-vars": 0         // This is off because I'm not sure how to properly setup tests without triggering this error.
    }
}
