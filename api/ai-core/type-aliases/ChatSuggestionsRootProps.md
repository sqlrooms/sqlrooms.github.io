---
url: https://sqlrooms.org/api/ai-core/type-aliases/ChatSuggestionsRootProps.md
---
[@sqlrooms/ai-core](../index.md) / ChatSuggestionsRootProps

# Type Alias: ChatSuggestionsRootProps

> **ChatSuggestionsRootProps** = `ComponentPropsWithoutRef`<`"div"`> & `object`

Props for [Root](../variables/ChatSuggestionsRoot.md).

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `asChild?` | `boolean` | Render as the single child element instead of a `<div>`, via Radix's `Slot`. |
| `open?` | `boolean` | Overrides the store's visibility state when provided. Use this when a host's own popover, dropdown, or overlay already owns open/closed state and suggestions visibility should simply follow it, rather than maintaining a second, possibly-disagreeing visibility flag. Pair with onOpenChange: while controlled, `Dismiss` and `VisibilityToggle` inside this root report through it instead of writing the store this prop overrides. |
| `onOpenChange()?` | (`open`) => `void` | Called by the visibility controls inside this root while [open](../variables/ChatSuggestionsRoot.md) is provided. Ignored when uncontrolled, where those controls write the normalized store directly. |
