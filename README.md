# js
* This is the base set of eslint rules (and, consequently, style) for JavaScript at Evermind.
* Inspired by the many great style-guide out there, but particularly [Zeit's](https://github.com/zeit/eslint-config-base) and [Airbnb's](https://github.com/airbnb/javascript).

## Principles (in priority order)
* Safe
* Readible
* Consistent
* Clean
* Brief
* Easy

## Uses
* [`eslint`](https://github.com/eslint/eslint) -> For syntax and code issues, as well as some stylistic linting
* [`prettier`](https://github.com/prettier) -> For good defaults on styling
* [`prettier-eslint`](https://github.com/prettier/prettier-eslint), [`prettier-eslint-cli`](https://github.com/prettier/prettier-eslint-cli) -> For when we want to overwrite prettier
* [`husky`](https://github.com/typicode/husky) -> Manage githooks
* [`lint-staged`](https://github.com/okonet/lint-staged) -> Use with husky for automatic linting on git commit

## Notes
* If something should never be in your code, it is an error, regardless of the severity of the issue.
* If something probably shouldn't be in your code, but might just require extra oversight from the programmer, the rule should produce a warning. The programmer should then insert a comment to remove the error, or adjust the code accordingly. See the [eslint docs](https://eslint.org/docs/user-guide/configuring#using-configuration-comments) for details.
* You should add rules here where possible, not in individual projects.
* You might also want to check out [`stylelint`](https://stylelint.io/) and [`prettier-stylelint`](https://github.com/hugomrdias/prettier-stylelint) for CSS linting.
* We're not using [`eslint-config-prettier`](https://eslint.org/docs/user-guide/configuring#using-configuration-comments) as we want to override some rules with eslint manually.
* We're not using [`eslint-plugin-prettier`](https://eslint.org/docs/user-guide/configuring#using-configuration-comments) as there may be conflicts due to the point above. eslint and prettier differing will mean there will always be linting errors.
* This installs Prettier for you (but not eslint).

## Usage
* Make sure you have eslint installed and initialised: `npm --save-dev i eslint`
* You should extend this in your `eslintrc.js`.
  ```javascript
  {
    'extends': '@evermind/eslint-config-base'
  }
  ```
  * See https://eslint.org/docs/developer-guide/shareable-configs for details.
* Add the following to your package.json scripts (adjusting for the appropriate src folder accordingly):
  ```javascript
  "scripts": {
    "eslint": "./node_modules/.bin/eslint ./src"
    "lint": "node_modules/.bin/prettier-eslint --write --print-width 70 --tab-width 2 --trailing-comma es5 --bracket-spacing --semi --single-quote \"src/**/*.{js,jsx}\""

  }
  ```
* eslint is for js linting, prettier is for formatting. Make sure you setup both.
* Setup your editor as necesary: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint, https://github.com/w0rp/ale

### Flow
* If you have flow installed, you will also need to run `yarn add --dev eslint-plugin-flowtype`.
* You will then need to add the following to your `.eslintrc.js`:
  ```javascript
  {
    'extends': [
      'plugin:flowtype/recommended',  
    ],
    'plugins': [
      'flowtype', 
    ],
  }
  ```
### React
* If you are using react, you will also need to run `yarn add --dev eslint-plugin-react`
* Then add the following to your `.eslnitrc.js`:
  ```javascript
  {
    'extends': [
      'plugin:react/recommended',  
    ],
    'plugins': [
      'react',
    ],
  }
  ```

## Updating
1. Make appropriate changes in repo
  - Ensure stylistic changes (i.e. overwrites of Prettier) go in `styleRules.js`.
2. `npm version <update_type>` (where update type is one of `patch`, `minor`, or `major`)
3. `npm publish`
