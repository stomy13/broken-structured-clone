# Broken structuredClone in Safari Example

On Safari, a map once produced using immer will result in a DataCloneError with structuredClone.

https://github.com/immerjs/immer/issues/1149

https://redux.js.org/style-guide/#do-not-put-non-serializable-values-in-state-or-actions

https://immerjs.github.io/immer/
