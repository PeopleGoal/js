# js
* This is the base set of eslint rules (and, consequently, style) for JavaScript at Evermind.
* Inspired by the many great style-guides out there, but particularly [Zeit's](https://github.com/zeit/eslint-config-base) and [Airbnb's](https://github.com/airbnb/javascript).

## Principles (in priority order)
* Safe
* Readible
* Consistent
* Clean
* Brief
* Easy

## Uses
* [`eslint`](https://github.com/eslint/eslint) -> For syntax and code issues, as well as some stylistic linting
* [`husky`](https://github.com/typicode/husky) -> Manage githooks
* [`lint-staged`](https://github.com/okonet/lint-staged) -> Use with husky for automatic linting on git commit

## Notes
* This is a work in progress and should be thought of as organic, rather than static. It is as much a tool to decide what the style should be as it is an enforcement and declaration of that style.
* If something should never be in your code, it is an error, regardless of the severity of the issue.
* If something probably shouldn't be in your code, but might just require extra oversight from the programmer, the rule should produce a warning. The programmer should then insert a comment to remove the error, or adjust the code accordingly. See the [eslint docs](https://eslint.org/docs/user-guide/configuring#using-configuration-comments) for details.
* You should add rules here where possible, not in individual projects.

## Usage
* Make sure you have eslint installed and initialised: `npm --save-dev i eslint`/`yarn add --dev eslint`
* Install with yarn (or npm)
  ```
  yarn add --dev @evermind/eslint-config-base
  ```
* You should extend this in your `eslintrc.js`.
  ```javascript
  {
    'extends': '@evermind/eslint-config-base'
  }
  ```
  * See https://eslint.org/docs/developer-guide/shareable-configs for details.
* Add the following to your package.json scripts (adjusting for the appropriate src folder accordingly):
  ```javascript
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    // note that lint-staged chooses the path for linting for you
    "*.{js,jsx}": [
      "yarn lint", 
      "git add"
    ]
  },
  "scripts": {
    "lint": "eslint ./src",
  }
  ```
* Setup your editor as necesary: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint, https://github.com/w0rp/ale

### Git Hooks
* This packagage assumes you are using githooks to run linting (hence the fact that `husky` and `elint-staged` are dependencies, although they do not technically need to be implemented).
* If you add to your package.json as specified above, you'll have automatic linting taken care of for you on each commit, for the files you are commiting only.

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
* You may also want to add some githooks for extra flow checking by adding `flow --write` to lint-staged in your `package.json`.

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
