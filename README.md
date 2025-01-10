# Broken structuredClone in Safari Example

On iOS and Safari, a map once stored in zustand's store using immer will result in a DataCloneError with structuredClone.

https://github.com/immerjs/immer/issues/1149

https://redux.js.org/style-guide/#do-not-put-non-serializable-values-in-state-or-actions
