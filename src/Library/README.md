# Library

- reusable components

## why all the simple components ?

- there are some cross cutton concerns available for all HTML elements
- ^ e.g. requiring standards for ARIA/WCAG
- ^ if you use the `Library/Article` instead of `<article>` you'll reap the benefits

## why all the complex components ?

- generally these components are Interfaces/wrappers around react-aria/reakit
- ^ both provide ARIA/WCAG standards that i dont necessarily want to recreate
