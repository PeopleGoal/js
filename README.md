# js
* This is the base set of eslint rules (and, consequently, style) for JavaScript at Evermind.
* Inspired by the many great style-guide out there, but particularly https://github.com/zeit/eslint-config-base and https://github.com/airbnb/javascript

## Principles (in priority order)
* Safe
* Readible
* Consistent
* Clean
* Brief
* Easy

## Notes
* If something should never be in your code, it is an error, regardless of the severity of the issue.
* If something probably shouldn't be in your code, but might just require extra oversight from the programmer, the rule should produce a warning. The programmer should then insert a comment to remove the error, or adjust the code accordingly. https://eslint.org/docs/user-guide/configuring#using-configuration-comments
* You should add rules here where possible, not projects.

## Usage
* You should extend this in your `eslintrc.js`.
  ```javascript
  {
    'extends': '@evermind/eslint-config-base'
  }
  ```
  * See https://eslint.org/docs/developer-guide/shareable-configs for details.
* Add the following to your package.json scripts:
  ```javascript
  "scripts": {
    "lint": "./node_modules/.bin/eslint ./src" // or whatever your src folder is
  }
  ```
* eslint is for js linting, prettier is for formatting. Make sure you setup both.
* Setup your editor as necesary: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint, https://github.com/w0rp/ale

## Updating
1. Make appropriate changes in repo
2. `npm version <update_type>` (where update type is one of `patch`, `minor`, or `major`)
3. `npm publish --access public`
