---
url: https://sqlrooms.org/api/ai-core/type-aliases/ChatComposerDropTargetProps.md
---
[@sqlrooms/ai-core](../index.md) / ChatComposerDropTargetProps

# Type Alias: ChatComposerDropTargetProps

> **ChatComposerDropTargetProps** = `ComponentPropsWithoutRef`<`"div"`> & `object`

Props for [DropTarget](../variables/ChatComposerDropTarget.md).

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `asChild?` | `boolean` | Render as the single child element instead of a `<div>`, via Radix's `Slot`. |
| `id` | `string` | A dnd-kit droppable id, unique within the surrounding dnd-kit context. |
| `canAccept()` | (`data`) => `boolean` | Whether the item currently being dragged may be dropped here. |
| `onDrop()` | (`data`) => `void` | Called with the dragged item's data when an accepted drop lands. |
