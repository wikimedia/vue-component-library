# Codex docs

## Dev site

In the root of the Codex monorepo, run:

```
npm run docs:dev -w docs
```

This will both serve the VitePress site locally at http://localhost:3000 and
compile component usage docs.

## Writing docs

### General docs

Docs are written in Markdown, see the [VitePress docs](https://vitepress.vuejs.org/guide/markdown.html)
for details.

### Component demos

Component demos should be added directly to the component directory in the
vue-components package. See Button for an example. Markdown files in component
directories will automatically be pulled into the docs/components directory and
component usage docs will be appended. For full details of how the component
demo pages are constructed, see docs/utils/templates/component.js.

## Updating the sidebar

The sidebar is configured in docs/.vitepress/config.js.
