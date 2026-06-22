---
url: 'https://sqlrooms.org/api/ai-core/variables/ExpandableContent.md'
---
[@sqlrooms/ai-core](../index.md) / ExpandableContent

# Variable: ExpandableContent

> `const` **ExpandableContent**: `React.FC`<`ExpandableContentProps`>

A container that caps content at a max height with a subtle gradient
fade at the bottom. Clicking expands it to reveal all content.
When ExpandableContentProps.showLabels is true (default), a
"Show more" hint and a "Collapse" button are displayed; when false
only the gradient + chevron icon are shown.

If the content fits within the max height the wrapper is invisible.
