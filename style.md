# Style

As well as the formal linting rules in `index.js`, there are additional points below which constitute JavaScript style for Evermind.

---


* Use destructuring as much as possible. This is not enforced with linting but should be adhered to where possible.

---

## React

* `styled-components` is the preferred method for styling in React. Extract into separate files if necessary.
* Aim for pure functions as much as possible. Always favour a function over a class if you can.
* Avoid `renderSection()` methods where possible, favouring stand-alone components.
* Follow the rule of: the more complex the code, the higher up the hierarchy it should be. This means when you get several layers deep, your components should be purer and not be getting involved with any complex logic or API calls.

### MobX
* Be careful about Providers


### BluePrint

* Use the component props and the Intent and Classes objects over CSS properties (e.g. 'bp3-icon-cog', 'bp3-intent-primary', 'bp3-minimal')
