# js
This is the base set of eslint rules (and, consequently, style) for JavaScript at Evermind

* Inspired by https://github.com/zeit/eslint-config-base and https://github.com/airbnb/javascript
* eslint is for js linting, prettier is for formatting.

* If you get a warning you are sure you can avoid, be sure to add a comment to prevent it showing up in your console

## Principles
* If something should never be in your code, it is an error, regardless of the severity of the issue.
* If something probably shouldn't be in your code, but might just require extra oversight from the programmer, the rule should produce a warning. The programmer should then insert a comment to remove the error, or adjust the code accordingly.

## Usage

