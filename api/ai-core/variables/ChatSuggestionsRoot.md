---
url: https://sqlrooms.org/api/ai-core/variables/ChatSuggestionsRoot.md
---
[@sqlrooms/ai-core](../index.md) / ChatSuggestionsRoot

# Variable: ChatSuggestionsRoot

> `const` **ChatSuggestionsRoot**: `ForwardRefExoticComponent`<`Omit`<`DetailedHTMLProps`<`HTMLAttributes`<`HTMLDivElement`>, `HTMLDivElement`>, `"ref"`> & `object` & `RefAttributes`<`HTMLDivElement`>>

Visibility gate for a suggestions list: renders nothing when suggestions
are hidden, and its single child (or a plain `<div>`) otherwise.

Carries **no position, size, or overflow styling** — a host's own
popover, overlay, in-flow container, or horizontal scroller owns all of
that. This is what keeps the same primitive expressible as a full-width
vertical list, a popover anchored elsewhere in the tree, or a horizontal
carousel.
