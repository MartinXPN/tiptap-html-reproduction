# Reproducing TipTap issues

## The issue
Tiptap infinitely re-renders the `CodeBlock` component in mobile viewports.
The code works fine when the viewport is desktop-sized.

This happens as soon as we add any view to the code block (even if it's empty):
```tsx
import {NodeViewContent, NodeViewWrapper, ReactNodeViewRenderer} from "@tiptap/react";
import {CodeBlock} from '@tiptap/extension-code-block';

function EmptyView() {
    console.log('EmptyView');   // <- This will log infinitely in mobile viewports
    return <NodeViewWrapper><NodeViewContent /></NodeViewWrapper>
}


export default CodeBlock.extend({
    addNodeView() {
        return ReactNodeViewRenderer(EmptyView);
    },
});
```


## Reproducing the issue

```shell
npm i
npm run dev
# Open the browser, and open the console
# Change the type from desktop to mobile
# Navigate to http://localhost:3000/code
# Refresh the page using the browser refresh button (not command + R)
# You'll see the infinitely re-rendering `CodeBlockView` component
```

## Code structure
All the code is in the `src/app/code` directory.
