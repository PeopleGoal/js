module.exports = {
  rules: {
    /**
     * Prevents for loops with conditions that can never be met.
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

    // TODO continue eslint.org/docs/rules from here

    /**
     * You _should_ follow this convention, but you're
     * often in the middle of building things.
    */
    'import/prefer-default-export': 1,
  },
  // TODO add all import rules
  // TODO add all standard rules
  // TODO add react rules
  // TODO add flow rules
  // TODO add jsx-ally
  // TODO add plugin-promise rules
  // TODO add plugin-lodash rules
  // TODO add plugin-filenames
  // TODO add eslint-plugin-comments

  // TODO make things fixable!
};
