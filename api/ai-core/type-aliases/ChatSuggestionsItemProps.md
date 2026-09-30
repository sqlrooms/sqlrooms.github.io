---
url: https://sqlrooms.org/api/ai-core/type-aliases/ChatSuggestionsItemProps.md
---
[@sqlrooms/ai-core](../index.md) / ChatSuggestionsItemProps

# Type Alias: ChatSuggestionsItemProps

> **ChatSuggestionsItemProps** = `Omit`<`ActionButtonProps`, `"onActivate"`> & `object`

Props for [Item](../variables/ChatSuggestionsItem.md).

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The suggestion's text. |
| `submit?` | `boolean` | Send `text` on activation instead of filling it into the prompt. Defaults to `false` (fill). Submitting reuses the composer's `send`, so — like fill — it overwrites a non-empty draft rather than appending to it. |
