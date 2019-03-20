/* eslint quote-props: 0 */
const styleRules = require('./styleRules')

module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: [
    'jsx-a11y',
    'import',
    'extra-rules',
    'babel',
  ],
  rules: {
    ...styleRules,
    /**
     * Prevents for loops with unmeetable conditions
     *
     * Obviously a good thing to enforce.
     */
    'for-direction': 2,

    /**
     * Ensures getter functions have a return value.
     *
     * Obsviously a good thing to enforce.
     */
    'getter-return': 2,

    /**
     * Prevents async functions being passed as executor
     * functions in new promises.
     *
     * 1) Ensures errors aren't lost
     * 2) If you have an await, you probably don't need
     *    a new promise.
     */
    'no-async-promise-executor': 2,

    /**
     * Disallows await in loops
     * https://eslint.org/docs/rules/no-await-in-loop
     *
     * You should use await on Promise.all instead of
     * on promises within a loop. See link for details
     */
    'no-await-in-loop': 2,

    /**
     * Disallows comparing against -0
     * https://eslint.org/docs/rules/no-compare-neg-zero
     *
     * x === -0 is true for both x=-0 and x=+0
     */
    'no-compare-neg-zero': 2,

    /**
     * Prevents the use of assignment in conditional
     * statements
     * https://eslint.org/docs/rules/no-cond-assign
     *
     * It's hard to tell whether you meant = or ===
     */
    'no-cond-assign': 2,

    /**
     * Bans console logs
     * https://eslint.org/docs/rules/no-console
     *
     * You shoudln't have any console logs in production
     * but for debugging this is okay (although dev tools
     * are often a better bet).
     *
     * This is fine if developing for node.js and should
     * be removed for node environmnets
     */
    'no-console': 1,

    /**
     * Disallows constant expressions in conditions
     * https://eslint.org/docs/rules/no-constant-condition
     *
     * Fine for debugging, but a no-no for production
     */
    'no-constant-condition': 1,

    /**
     * Prevents ascii control chars accidentally being added
     * to regular expressions
     * https://eslint.org/docs/rules/no-control-regex
     *
     * You probably don't want this.
     */
    'no-control-regex': 2,

    /**
     * Prevent debugger statements
     * https://eslint.org/docs/rules/no-debugger
     *
     * We don't use debugger
     */
    'no-debugger': 2,

    /**
     * Disallow duplicate arguments in functions
     * https://eslint.org/docs/rules/no-dupe-args
     *
     * Obviously bad
     */
    'no-dupe-args': 2,

    /**
     * Disallow duplicate keys in objects
     * https://eslint.org/docs/rules/no-dupe-keys
     *
     * Obviously bad
     */
    'no-dupe-keys': 2,

    /**
     * Disallow duplicate cases in switch statements
     * https://eslint.org/docs/rules/no-duplicate-case
     *
     * Obviously bad
     */
    'no-duplicate-case': 2,

    /**
     * Disallow empty blocks
     * https://eslint.org/docs/rules/no-empty
     *
     * Obviously bad
     */
    'no-empty': 2,

    /**
     * Disallow empty character classes in regex
     * https://eslint.org/docs/rules/no-empty-character-class
     *
     * Empty character classes do not match anything so you
     * should never have them
     */
    'no-empty-character-class': 2,

    /**
     * Disallow reassignment of exceptions in catch clauses
     * https://eslint.org/docs/rules/no-ex-assign
     *
     * Don't let that error escape!
     */
    'no-ex-assign': 2,

    /**
     * Disallow unnecessary boolean casts
     * https://eslint.org/docs/rules/no-extra-boolean-cast
     *
     * Some casting is useful for making the fact that something is
     * being used as a boolean explicit. However, other cases should
     * cause warnings as they are unecessary in certain contexts e.g.
     * in if statements.
     */
    'no-extra-boolean-cast': 1,

    /**
     * Disallow extra parentheses
     * https://eslint.org/docs/rules/no-extra-parens
     *
     * Extra parents are generally a bad idea, however, they often
     * help make things more explicit (hence the rules below).
     */
    'no-extra-parens': ['error', 'all', {
      returnAssign: false,
      nestedBinaryExpressions: false,
      ignoreJSX: 'multi-line',
      enforceForArrowConditionals: false,
    }],

    /**
     * Disallow extra semi-colons
     * https://eslint.org/docs/rules/no-extra-semi
     *
     * Obviously bad (to me)
     */
    'no-extra-semi': 2,

    /**
     * Disallows reassigning function declarations
     * https://eslint.org/docs/rules/no-func-assign
     *
     * Obviously bad
     */
    'no-func-assign': 2,

    /**
     * Disallow variable or function declarations in nested blocks
     * https://eslint.org/docs/rules/no-inner-declarations
     *
     * Irrelevant with ES6
     */
    'no-inner-declarations': 0,

    /**
     * Disallow invalid regex
     * https://eslint.org/docs/rules/no-invalid-regexp
     *
     * Obvs bad
     */
    'no-invalid-regexp': 0,

    /**
     * Disallow irregular whitespace outside strings and comments
     * https://eslint.org/docs/rules/no-irregular-whitespace
     *
     * Obvs bad
     */
    'no-irregular-whitespace': 2,

    /**
     * Disallows regex with symbols made of multiple code points
     * https://eslint.org/docs/rules/no-misleading-character-class
     *
     * Having this on prevents some regex erros and is therefore
     * a good idea.
     */
    'no-misleading-character-class': 2,

    /**
     * Disallows calling global objects as functions
     * https://eslint.org/docs/rules/no-obj-calls
     *
     * Some global objects should just be used as-is
     */
    'no-obj-calls': 2,

    /**
     * https://eslint.org/docs/rules/no-prototype-builtins
     *
     * Unsure so off for now
     */
    'no-prototype-builtins': 0,

    /**
     * Disallows multiple spaces in regex
     * https://eslint.org/docs/rules/no-regex-spaces
     *
     * It's difficult to tell how many spaces there are
     * when there's more than one. Use  {3} or similar
     * instead
     */
    'no-regex-spaces': 2,

    /**
     * Disallows arrays with empty slots
     * https://eslint.org/docs/rules/no-sparse-arrays
     *
     * We don't use sparse arrays
     */
    'no-sparse-arrays': 2,

    /**
     * Ensure you use ` instead of ' or " when using
     * ${variable} syntax
     * https://eslint.org/docs/rules/no-template-curly-in-string
     *
     * Obviously good
     */
    'no-template-curly-in-string': 2,

    /**
     * Disallows confusing multiline expressions
     * https://eslint.org/docs/rules/no-unexpected-multiline
     *
     * Obviously bad, even though we use semis
     */
    'no-unexpected-multiline': 2,

    /**
     * Disallow unreachable code
     * https://eslint.org/docs/rules/no-unreachable
     *
     * Obvs bad
     */
    'no-unreachable': 2,

    /**
     * Disallow control flow statements in finally blocks
     * https://eslint.org/docs/rules/no-unsafe-finally
     *
     * Control flow statements cause unexpected behaviour
     * in try and catch blocks.
     */
    'no-unsafe-finally': 2,

    /**
     * Disallow negation of the left operand with in and
     * instanceof operators
     * https://eslint.org/docs/rules/no-unsafe-negation
     *
     * You probably didn't mean to do this and instead
     * meant to add brackets
     */
    'no-unsafe-negation': 1,

    /**
     * Prevents race conditions from await and yield
     * https://eslint.org/docs/rules/require-atomic-updates
     *
     * This causes bugs.
     */
    'require-atomic-updates': 2,

    /**
     * Require isNaN() instead of === NaN
     * https://eslint.org/docs/rules/use-isnan
     *
     * NaN is not equal to anything, including itself. Use
     * isNaN() instead
     */
    'use-isnan': 2,

    /**
     * Enforces valid jsdoc
     * https://eslint.org/docs/rules/valid-jsdoc
     *
     * We don't use JSDoc (yet)
     */
    'valid-jsdoc': 0,

    /**
     * Enforce typeof expressions against only certain strings
     * https://eslint.org/docs/rules/valid-typeof
     *
     * We use flow so want this off
     */
    'valid-typeof': 0,

    /**
     * Disallows setters without getters
     * https://eslint.org/docs/rules/accessor-pairs
     *
     * Why would you write without ever wanting to read?
     */
    'accessor-pairs': 2,

    /**
     * Enforce return statements in array method
     * callbacks
     * https://eslint.org/docs/rules/array-callback-return
     *
     * If you're using map, you want to return. If not, use
     * forEach
     */
    'array-callback-return': 2,

    /**
     * Enforce variable use within the defined scope
     * 'https://eslint.org/docs/rules/block-scoped-var'
     *
     * We don't use var
     */
    'block-scoped-var': 0,

    /**
     * Enforce class methods use this
     * https://eslint.org/docs/rules/class-methods-use-this
     *
     * Make it static if you get this error.
     */
    'class-methods-use-this': ['error', {
      'exceptMethods': [
        'render',
        'componentDidMount',
        'shouldComponentUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        'componentDidCatch',
      ],
    }],

    /**
     * Prevents overly complex branching
     * https://eslint.org/docs/rules/complexity
     *
     * I [heart] parsimony
     */
    complexity: ['error', { max: 10 }],

    /**
     * Functions must always return a value, or never
     * https://eslint.org/docs/rules/consistent-return
     *
     * You don't want inconsistent function returns.
     */
    'consistent-return': 2,

    /**
     * Enforce consistent use of curly braces for blocks
     * https://eslint.org/docs/rules/curly
     *
     * Single lines are okay with no braces,
     * multi-lines are not.
     */
    curly: ['error', 'multi-line'],

    /**
     * Require default case in switch statements
     * https://eslint.org/docs/rules/default-case
     *
     * Ensures you account for errors
     */
    'default-case': 2,

    /**
     * Consistent position of dot with newlines
     * https://eslint.org/docs/rules/dot-location
     *
     * Consistency is key
     */
    'dot-location': ['error', 'property'],

    /**
     * Require dot notation instead of [] notation
     * https://eslint.org/docs/rules/dot-notation
     *
     * dot notation is less error-prone, easier to read
     * and more minimisable.
     */
    'dot-notation': 2,

    /**
     * Enforce === and !== instead of ==
     * https://eslint.org/docs/rules/eqeqeq
     *
     * Bad things might happen if you use ==
     */
    'eqeqeq': 2,

    /**
     * Prevents looping over all properties with for in
     * loops
     * https://eslint.org/docs/rules/guard-for-in
     *
     * It's not that big a deal to loop over properties
     * inherited from the prototype
     */
    'guard-for-in': 0,

    /**
     * Disallows more than 1 class per file
     * https://eslint.org/docs/rules/max-classes-per-file
     *
     * 1 class per file is a good practice but we won't
     * scream at you if you don't refactor straight away
     */
    'max-classes-per-file': ['warn', 1],

    /**
     * Disallows alert, confirm and prompt
     * https://eslint.org/docs/rules/no-alert
     *
     * This is fine if you're just getting things rolling
     * but you shouldn't have this in production
     */
    'no-alert': 1,

    /**
     * Disallow Use of caller/callee
     * https://eslint.org/docs/rules/no-caller
     *
     * This code is deprecated
     */
    'no-caller': 2,

    /**
     * Disallows declaring variables in switch statements
     * https://eslint.org/docs/rules/no-case-declarations
     *
     * Declarations in case/default clauses are available
     * throughout the entire switch statement.
     */
    'no-case-declarations': 2,

    /**
     * Disallows regex that looks like division
     * https://eslint.org/docs/rules/no-div-regex
     *
     * Avoids confusing regex with division operator.
     * Prefer /\=foo/ syntax to /foo/
     */
    'no-div-regex': 1,

    /**
     * Disallow return statements before else
     * https://eslint.org/docs/rules/no-else-return
     *
     * Removes excess code.
     */
    'no-else-return': 2,

    /**
     * Disallows empty functions
     * https://eslint.org/docs/rules/no-empty-function
     *
     * Functions should do something. Comments are allowed
     * to ensure you will come back to implement later
     */
    'no-empty-function': 1,

    /**
     * Disallow destructuring with no effect
     * https://eslint.org/docs/rules/no-empty-pattern
     *
     * Destructuring should do something.
     */
    'no-empty-pattern': 2,

    /**
     * Disallows comparisons to null with == or !=
     * https://eslint.org/docs/rules/no-eq-null
     *
     * Ensures only null is matched, not undefined
     */
    'no-eq-null': 2,

    /**
     * Disallow eval()
     * https://eslint.org/docs/rules/no-eval
     *
     * Prevents injection attacks
     */
    'no-eval': 2,

    /**
     * Disallow extending native types
     * https://eslint.org/docs/rules/no-extend-native
     *
     * This might cause problems in other parts of the
     * code which have assumed things about native
     * types
     */
    'no-extend-native': 2,

    /**
     * Prevents uneccessary use of bind
     * https://eslint.org/docs/rules/no-extra-bind
     *
     * Self-explanatory
     */
    'no-extra-bind': 2,

    /**
     * Disallow unnecessary labels for loops
     * https://eslint.org/docs/rules/no-extra-label
     *
     * I [heart] parsimony
     */
    'no-extra-label': 2,

    /**
     * Disallow case statement fallthrough
     * https://eslint.org/docs/rules/no-fallthrough
     *
     * Avoids triggering multiple cases by enforcing
     * the use of throw, return or break.
     */
    'no-fallthrough': 2,

    /**
     * Enforce an integer before decimal points
     * https://eslint.org/docs/rules/no-floating-decimal
     *
     * Aesthetics
     */
    'no-floating-decimal': 2,

    /**
     * Prevent assignment to global variables
     * https://eslint.org/docs/rules/no-global-assign
     *
     * You will loose access to these assignments easily.
     */
    'no-global-assign': 2,

    /**
     * Disallows unclear type conversions
     * https://eslint.org/docs/rules/no-implicit-coercion
     *
     * Clear code is good code. Boolean conversions are
     * common enough to be understood.
     */
    'no-implicit-coercion': ['error', { boolean: false }],

    /**
     * Disallow declarations in the global scope
     * https://eslint.org/docs/rules/no-implicit-globals
     *
     * Scoped code is safer code.
     */
    'no-implicit-globals': 2,

    /**
     * No implicit eval()
     * https://eslint.org/docs/rules/no-implied-eval
     *
     * This prevents overly implicit code
     */
    'no-implied-eval': 2,

    /**
     * Disallow this outside of class & class-like objects
     * https://eslint.org/docs/rules/no-invalid-this
     *
     * It's useful to be warned about where you might be
     * using this incorrectly.
     *
     * It's giving false positives so disabled for now
     * but this is a good feature to have. See issue #16.
     */
    'no-invalid-this': 0,

    /**
     * Disallow iterator
     * https://eslint.org/docs/rules/no-iterator
     *
     * Iterator is obsolete
     */
    'no-iterator': 2,

    /**
     * Disallows labelled statements
     * https://eslint.org/docs/rules/no-labels
     *
     * Aesthetic. Find a cleaner way
     */
    'no-labels': 2,

    /**
     * Prevents redundant lone blocks
     * https://eslint.org/docs/rules/no-lone-blocks
     *
     * Self-explanatory
     */
    'no-lone-blocks': 2,

    /**
     * Prevents function creation in loops
     * https://eslint.org/docs/rules/no-loop-func
     *
     * We disallow var so this is okay
     */
    'no-loop-func': 0,

    /**
     * Disallow ambiguous 'magic nunbers'
     * https://eslint.org/docs/rules/no-magic-numbers
     *
     * Explicit is better than implicit
     */
    'no-magic-numbers': [
      'error',
      {
        'ignore': [0, 1, 2, 3, 4, 5, -1],
        'ignoreArrayIndexes': true,
        'enforceConst': true
      }
    ],

    /**
     * Disallow multiple spaces
     * https://eslint.org/docs/rules/no-multi-spaces
     *
     * Self-explanatory
     */
    'no-multi-spaces': 2,

    /**
     * Disallows multiline strings
     * https://eslint.org/docs/rules/no-multi-str
     *
     * This is okay.
     */
    'no-multi-str': 0,

    /**
     * Enforce assignment when using `New`
     * https://eslint.org/docs/rules/no-new
     *
     * New implies construction.
     */
    'no-new': 2,

    /**
     * Disallow new functions with `New Function()`
     * https://eslint.org/docs/rules/no-new-func
     *
     * Just use function instead
     */
    'no-new-func': 2,

    /**
     * Prevent new String() etc
     * https://eslint.org/docs/rules/no-new-wrappers
     *
     * New is unnecessary here.
     */
    'no-new-wrappers': 2,

    /**
     * Disallow numbers beginning with 0
     * https://eslint.org/docs/rules/no-octal
     *
     * Simple is better.
     */
    'no-octal': 2,

    /**
     * Disallows octal escape sequences
     * https://eslint.org/docs/rules/no-octal-escape
     *
     * You should use unicode escape sequences instead
     */
    'no-octal-escape': 2,

    /**
     * Disallow reassignment of function params
     * https://eslint.org/docs/rules/no-param-reassign
     *
     * Obvs bad
     */
    'no-param-reassign': 2,

    /**
     * Disallow __proto__
     * https://eslint.org/docs/rules/no-proto
     *
     * Use getPrototypeOf instead
     */
    'no-proto': 2,

    /**
     * disallow variable redeclaration
     * https://eslint.org/docs/rules/no-redeclare
     *
     * We don't use var
     */
    'no-redeclare': 0,

    /**
     * https://eslint.org/docs/rules/no-restricted-properties  ommitted
     */

    /**
     * Disallow assignment in return statements
     * https://eslint.org/docs/rules/no-return-assign
     *
     * This code is hard to read
     */
    'no-return-assign': 2,

    /**
     * disallow unnecessary return await
     * https://eslint.org/docs/rules/no-return-await
     *
     * Unnecessary is bad
     */
    'no-return-await': 2,

    /**
     * Prevent javascript: urls
     * https://eslint.org/docs/rules/no-script-url
     *
     * Same as banning eval.
     */
    'no-script-url': 2,

    /**
     * Disallow assigning to itself
     * https://eslint.org/docs/rules/no-self-assign
     *
     * Obvs bad
     */
    'no-self-assign': 2,

    /**
     * Disallow self comparison
     * https://eslint.org/docs/rules/no-self-compare
     *
     * Obvs bad
     */
    'no-self-compare': 2,

    /**
     * Disallows comma operator
     * https://eslint.org/docs/rules/no-sequences
     *
     * Aesthetics
     */
    'no-sequences': 2,

    /**
     * Enforce throwing errors, not other objects
     * https://eslint.org/docs/rules/no-throw-literal
     *
     * Errors are more traceable
     */
    'no-throw-literal': 2,

    /**
     * Disallows while loops which don't modify the condition
     * https://eslint.org/docs/rules/no-unmodified-loop-condition
     *
     * Obvs bad
     */
    'no-unmodified-loop-condition': 2,

    /**
     * Disallows unused expressions
     * https://eslint.org/docs/rules/no-unused-expressions
     *
     * This is obviously bad, but it's too much of a pain to deal
     * with whilst writing code.
     */
    'no-unused-expressions': 2,

    /**
     * Disallow Unused Labels
     * https://eslint.org/docs/rules/no-unused-labels
     *
     * Simple is better
     */
    'no-unused-labels': 2,

    /**
     * Disallows unnecessary calls to .call() and .apply()
     * https://eslint.org/docs/rules/no-useless-call
     *
     * Simple is better
     */
    'no-useless-call': 2,

    /**
     * Disallows concatination of string literals
     * https://eslint.org/docs/rules/no-useless-concat
     *
     * Just write as one string literal
     */
    'no-useless-concat': 2,

    /**
     * Don't escape unecessarily
     * https://eslint.org/docs/rules/no-useless-escape
     *
     * Simple is better
     */
    'no-useless-escape': 2,

    /**
     * Disallow redundant return statements
     * https://eslint.org/docs/rules/no-useless-return
     *
     * Obvs bad
     */
    'no-useless-return': 2,

    /**
     * Disallow void
     * https://eslint.org/docs/rules/no-void
     *
     * Void is unclear. ES5+ solves some of the problems it
     * solved. However, void is sometimes useful in ignoring
     * side effects of the expression it voids.
     */
    'no-void': 1,

    /**
     * Disallow TODO, FIXME etc
     * https://eslint.org/docs/rules/no-warning-comments
     *
     * Don't forget these! Make some issues in github like
     * a good developer.
     */
    'no-warning-comments': 1,

    /**
     * Disallow `with`
     * https://eslint.org/docs/rules/no-with
     *
     * Causes scoping issues
     */
    'no-with': 2,

    /**
     * Reject promises using errors
     * https://eslint.org/docs/rules/prefer-promise-reject-errors
     *
     * Error objects give you more info
     */
    'prefer-promise-reject-errors': 2,

    /**
     * Enforce specifying the base in parseInt()
     * https://eslint.org/docs/rules/radix
     *
     * ES6 makes this OK
     */
    'radix': 0,

    /**
     * Require await in async funcs
     * https://eslint.org/docs/rules/require-await
     *
     * Obvs good
     */
    'require-await': 2,

    /**
     * Enforce unicode regex
     * https://eslint.org/docs/rules/require-unicode-regexp
     *
     * Catches regex bugs
     */
    'require-unicode-regexp': 2,

    /**
     * Require var declarations be placed at the top of
     * their containing scope
     * https://eslint.org/docs/rules/vars-on-top
     *
     * We don't use var so ignore
     */
    'vars-on-top': 0,

    /**
     * Require immeadiately invoced function expressions to
     * be wrapped
     * https://eslint.org/docs/rules/wrap-iife
     *
     * Causes contained function to be parsed as an
     * expression, rather than a declaration. This means
     * you don't have to unwrap it.
     */
    'wrap-iife': 2,

    /**
     * Don't sound like Yoda
     * https://eslint.org/docs/rules/yoda
     *
     * Obey this rule you must.
     */
    'yoda': 2,

    /**
     * Enforce strict mode
     * https://eslint.org/docs/rules/strict
     *
     * Strict mode catches lots of errors. Use it.
     */
    'strict': 2,

    /**
     * Disallow `let bar;`
     * https://eslint.org/docs/rules/init-declarations
     *
     * This aesthetically offends me but will require too
     * much fixing to generate an error. Just be careful
     */
    'init-declarations': ['warn', 'always'],

    /**
     * https://eslint.org/docs/rules/no-delete-var
     * Covered by strict mode
     */

    /**
     * Disallow lables that share names with variables
     * https://eslint.org/docs/rules/no-label-var
     *
     * We don't like labels generally
     */
    'no-label-var': 2,

    /**
     * Disallow certiain global variables
     * https://eslint.org/docs/rules/no-restricted-globals
     *
     * Bad practice to use global variables anyway.
     */
    'no-restricted-globals': 0,

    /**
     * Disallow variables in innner blocks with the same
     * name as variables in outer block.
     * https://eslint.org/docs/rules/no-shadow
     *
     * Watch out for this, especially when mapping,
     * filtering etc.
    */
    'no-shadow': 1,

    /**
     * Disallow certain variable names that are already in
     * use e.g. undefined
     * https://eslint.org/docs/rules/no-shadow-restricted-names
     *
     * Obs bad
     */
    'no-shadow-restricted-names': 2,

    /**
     * Disallow undeclared variables
     * https://eslint.org/docs/rules/no-undef
     *
     * Helps locate ref errors and accidental implicit globals
     */
    'no-undef': 2,

    /**
     * Disallow initializing to undefined
     * https://eslint.org/docs/rules/no-undef-init
     *
     * var foo = undefined;
     * can be simplified to:
     * var foo;
     *
     * If you mean to be explicit about this value being
     * empty, use null instead.
     *
     * See no-init-declarations also
     */
    'no-undef-init': 2,

    /**
     * Disallows the use of undefined
     * https://eslint.org/docs/rules/no-undefined
     *
     * Sometimes undefined is ok. We don't re-assign it.
     */
    'no-undefined': 0,

    /**
     * Disallows unused vars
     * https://eslint.org/docs/rules/no-unused-vars
     *
     * vars are bad. Unused vars are worse.
     *
     * "ignoreRestSiblings" lets you pluck off unwanted
     * properties e.g.:
     *
     * ```
     * persons.map(({ name, ...namelessPerson }) =>
     *  namelessPerson
     * );
     * ```
     */
    'no-unused-vars': [2, { "ignoreRestSiblings": true } ],

    /**
     * Disallows use of vars and funcs before definition
     * through hoisting.
     *
     *
     * If your variables and functions are well named,
     * hoisting is okay and can lead to cleaner code.
     */
    'no-use-before-define': 0,

    // TODO add node. Not necessary for now as we don't use it yet.
    // https://eslint.org/docs/rules/#nodejs-and-commonjs

    /**
     * Require braces in arrow function body
     * https://eslint.org/docs/rules/arrow-body-style
     *
     * Cleaner is better, but sometimes you need clarity in
     * multi-line funcs.
     */
    'arrow-body-style': ['error', 'as-needed'],

    /**
     * Require parens in arrow func args
     * https://eslint.org/docs/rules/arrow-parens
     *
     * Cleaner is better, but dont' make mistaeks
     */
    'arrow-parens': ['error', 'as-needed', { 'requireForBlockBody': false }],

    /**
     * Verify calls of super() in constructors
     * https://eslint.org/docs/rules/constructor-super
     *
     * Generally a good reminder to have.
     */
    'constructor-super': 2,

    /**
     * Enforce consistent spacing around * in generators
     * https://eslint.org/docs/rules/generator-star-spacing
     *
     * Aribitrary, but consistent.
     */
    'generator-star-spacing': ['error', 'both'],

    /**
     * Disallow reassigning class declarations
     * https://eslint.org/docs/rules/no-class-assign
     *
     * If you're doing this, it's a mistake.
     */
    'no-class-assign': 2,

    /**
     * Clarifies whether you meant => or <=
     * https://eslint.org/docs/rules/no-confusing-arrow
     *
     * Ligatures in your fonts make this a very unlikely
     * problem
     */
    'no-confusing-arrow': 0,

    /**
     * Disallow reassigning constants
     * https://eslint.org/docs/rules/no-const-assign
     *
     * Consts are constant!
     */
    'no-const-assign': 2,

    /**
     * Disallow duplicate names in classe members
     * https://eslint.org/docs/rules/no-dupe-class-members
     *
     * Obvs bad
     */
    'no-dupe-class-members': 2,

    /**
     * Enforce all imports from same module in one line
     * https://eslint.org/docs/rules/no-duplicate-imports
     *
     * Simple is better.
     */
    'no-duplicate-imports': 2,

    /**
     * Disallow new wiht Symbol
     * https://eslint.org/docs/rules/no-new-symbol
     *
     * Symbol should be called as a function.
     */
    'no-new-symbol': 2,

    /**
     * Disallow specfiic imports
     * https://eslint.org/docs/rules/no-restricted-imports
     *
     * Lodash > ramda > undercsore
     */
    'no-restricted-imports': ['error', 'underscore', 'ramda'],

    /**
     * Enforce super before this
     * https://eslint.org/docs/rules/no-this-before-super
     *
     * Prevents reference erros
     */
    'no-this-before-super': 2,

    /**
     * Disallow unecessary computed properties
     * https://eslint.org/docs/rules/no-useless-computed-key
     *
     * Simple is better
     */
    'no-useless-computed-key': 2,

    /**
     * Disallows useless constructors
     * https://eslint.org/docs/rules/no-useless-constructor
     *
     * ES6 gives default constructors so you don't always
     * need to specify one.
     */
    'no-useless-constructor': 2,

    /**
     * Prevents renaming to the same name
     * https://eslint.org/docs/rules/no-useless-rename
     *
     * Chocolate teapot
     */
    'no-useless-rename': 2,

    /**
     * No vars
     * https://eslint.org/docs/rules/no-var
     *
     * What is this, 2005?
     */
    'no-var': 2,

    /**
     * Require object literal shorthand syntax
     * https://eslint.org/docs/rules/object-
     *
     * Cleaner is better. This might be new or confusing,
     * but it's a good excuse to brush up on new JS.
     */
    'object-shorthand': 2,

    /**
     * Prefer arrow funcs in callbacks
     * https://eslint.org/docs/rules/prefer-arrow-callback
     *
     * We maintain an aesthetic preference of arrows
     */
    'prefer-arrow-callback': 2,

    /**
     * Prefer const when not re-assigning
     * https://eslint.org/docs/rules/prefer-const
     *
     * Immutability is a good concept to adhere to where
     * possible
     */
    'prefer-const': 2,

    /**
     * Prefer destructuring
     * https://eslint.org/docs/rules/prefer-destructuring
     *
     * Always enforcing this can sometimes add an extra
     * line of unecessary code. However, destructuring is
     * usually a good thing. Additionally, accessing large
     * indices is difficult with destructuring.
     */
    'prefer-destructuring': 0,

    /**
     * We don't write code like this (yet)
     * https://eslint.org/docs/rules/prefer-numeric-literals
     */
    'prefer-numeric-literals': 0,

    /**
     * Prefer rest over args
     * https://eslint.org/docs/rules/prefer-rest-params
     *
     * Keep it clean and ES2015
     */
    'prefer-rest-params': 2,

    /**
     * Prefer spread over .apply()
     * https://eslint.org/docs/rules/prefer-spread
     *
     * Keep it clean and ES2015
     */
    'prefer-spread': 2,

    /**
     * Require template literals instead of string concat
     * https://eslint.org/docs/rules/prefer-template
     *
     * Keep it clean and ES2015
     */
    'prefer-template': 2,

    /**
     * Require generators to contain yield
     * https://eslint.org/docs/rules/require-yield
     *
     * Why are you generating if you aren't yielding?
     */
    'require-yield': 2,

    /**
     * Consistent spacing for rest and spread
     * https://eslint.org/docs/rules/rest-spread-spacing
     *
     * Aesthetic judgement. Consistency.
     */
    'rest-spread-spacing': ['error', 'never'],

    /**
     * Sorts imports alphabetically
     * https://eslint.org/docs/rules/sort-imports
     *
     * This is a good idea, but grouping by none, single,
     * multiple is counter-intuitive. Should sort by
     * functionality, not number of imports.
     */
    'sort-imports': 0,

    /**
     * Require a description to be passed to Symbol()
     * https://eslint.org/docs/rules/symbol-description
     *
     * Makes debugging easier
     */
    'symbol-description': 2,

    /**
     * Consistent spacing around template variables
     * https://eslint.org/docs/rules/template-curly-spacing
     *
     * Consistency and compactness
     */
    'template-curly-spacing': ['error', 'never'],

    /**
     * Consistent spacing on yield *
     * https://eslint.org/docs/rules/yield-star-spacing
     *
     * Consistency. Matches generator star spacing.
     */
    'yield-star-spacing': ['error', 'both'],

    /* ====================================================
     * IMPORTS
     * ====================================================
     *
     * https://www.npmjs.com/package/eslint-plugin-import
     */

    /**
     * You _should_ follow this convention, but you're
     * often in the middle of building things.
     */
    // 'import/prefer-default-export': 1,

    /* ====================================================
     * EXTRA RULES
     * ====================================================
     *
     * https://github.com/bahmutov/eslint-rules
     */

    /**
     * Bad if you meant to add the code, OK if it's there
     * as explcit explanation.
     */
    'extra-rules/no-commented-out-code': 1,

    /**
     * Require point-free code where possible.
     *
     * Point free is cleaner. However, sometimes non-point
     * free is more explicit.
     */
    'extra-rules/potential-point-free': 1,

    /* ====================================================
     * BABEL
     * ====================================================
     *
     * https://github.com/babel/eslint-plugin-babel
     */

    /**
     * Fixes broken this issue in arrow functions
     * https://medium.com/@chestozo/fixing-eslint-no-invalid-this-error-for-fat-arrow-class-methods-a56908ca8bb6
     *
     * See no-invalid-this
     */
    'babel/no-invalid-this': 1,

    /* ====================================================
     * JSX-A11Y
     * ====================================================
     *
     * https://github.com/evcohen/eslint-plugin-jsx-a11y
     */

    /**
     * Show errors when non-accessible labels are used
     * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
     *
     * Disabled as this is deprecated in favour of
     * label-has-associated control
     *
     * See also: label-has-associated-control
     */
    'jsx-a11y/label-has-for': 0,

    /**
     * Show errors when non-accessible labels are used
     * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
     *
     * See also: label-has-for
     */
    'jsx-a11y/label-has-associated-control': 2,
  },
};
