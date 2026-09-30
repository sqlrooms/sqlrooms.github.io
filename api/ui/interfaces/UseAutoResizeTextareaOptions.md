---
url: https://sqlrooms.org/api/ui/interfaces/UseAutoResizeTextareaOptions.md
---
[@sqlrooms/ui](../index.md) / UseAutoResizeTextareaOptions

# Interface: UseAutoResizeTextareaOptions

Options for [useAutoResizeTextarea](../functions/useAutoResizeTextarea.md).

## Properties

### autoResize

> **autoResize**: `boolean`

Whether auto-resize is active. When false, the hook is a no-op.

***

### textareaRef

> **textareaRef**: `RefObject`<`HTMLTextAreaElement` | `null`>

Ref to the textarea to measure and resize. May point to a textarea
rendered by a component the caller does not own.

***

### value?

> `optional` **value?**: `string` | `number` | readonly `string`\[]

The textarea's current controlled value, if any.

***

### defaultValue?

> `optional` **defaultValue?**: `string` | `number` | readonly `string`\[]

The textarea's uncontrolled default value, if any.
