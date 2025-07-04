# Reproducing TipTap issues

## The issue
Tiptap infinitely re-renders the `CodeBlock` component in a very specific scenario:
- It has to be a production build (`npm run build`)
- It has to be in a mobile viewport (e.g. using Chrome DevTools)

The code works fine in development mode.
It also works fine in production mode when the viewport is desktop-sized.


## Reproducing the issue

```shell
npm i --force  # `use-async-effect` doesn't include the latest react version
npm run build
npm run start
# Open the browser, and open the console
# Change the type from desktop to mobile
# Navigate to http://localhost:3000/code
# You'll see the infinitely re-rendering `CodeBlockView` component
```

## Code structure
All the code is in the `src/app/code` directory.
