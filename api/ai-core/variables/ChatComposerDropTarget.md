---
url: https://sqlrooms.org/api/ai-core/variables/ChatComposerDropTarget.md
---
[@sqlrooms/ai-core](../index.md) / ChatComposerDropTarget

# Variable: ChatComposerDropTarget

> `const` **ChatComposerDropTarget**: `ForwardRefExoticComponent`<`Omit`<`DetailedHTMLProps`<`HTMLAttributes`<`HTMLDivElement`>, `HTMLDivElement`>, `"ref"`> & `object` & `RefAttributes`<`HTMLDivElement`>>

Marks an element as a drop target for in-app context items dragged into the
composer — the one primitive carrying a ref and drag state a plain `<div>`
cannot.

**In-app context items only, not file uploads.** dnd-kit observes
pointer-driven drags between elements it manages, not the browser's native
HTML5 file-drag events. A file drop needs a separate primitive built on
native drag events.

**Requires `RoomDndProvider`,** not any `DndContext`: `useDndMonitor` throws
outside a `DndContext`, and drops need the `pointerWithin` collision only
`RoomDndProvider` adds — under a bare `DndContext` `onDrop` never fires.

While an accepted drag is over the element, `data-drop-active` is present,
so a host can style the hover state (e.g. Tailwind's
`data-[drop-active]:…`) without this component owning visual classes.
