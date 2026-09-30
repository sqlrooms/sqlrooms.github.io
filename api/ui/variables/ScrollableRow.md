---
url: https://sqlrooms.org/api/ui/variables/ScrollableRow.md
---
[@sqlrooms/ui](../index.md) / ScrollableRow

# Variable: ScrollableRow

> `const` **ScrollableRow**: `ForwardRefExoticComponent`<`object` & `Omit`<`Omit`<`DetailedHTMLProps`<`HTMLAttributes`<`HTMLDivElement`>, `HTMLDivElement`>, `"ref"`>, `"className"` | `"children"`> & `RefAttributes`<`HTMLDivElement`>>

A horizontally scrolling row with arrows that appear only where there is more
content.

The forwarded ref and `className` target the outer wrapper (so `Slot` or
drop-target wrapping works); `scrollRef` targets the inner scrolling
container.
