# reusable emotion.sh styles

- import anything out of here and apply it to the appropriate (usually the parent) components css prop
- emotion is awesome, the css prop eventually applies the same classname to all elements
  - i.e. it wont create a new link tag for every element
- you generally need `rootVarsCss` and `resetCss` at a minimum for every reusable style
  - see how we include it in `src/indexCss.tsx`

```js

import { textCss } from 'src/Library';

const someParentComponent () => (
  <div css={[someOtherCss, textCss]}>
    <span className="h1">i look like an H1</span>
  </div>
)

```
