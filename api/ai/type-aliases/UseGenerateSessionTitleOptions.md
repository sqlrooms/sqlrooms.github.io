---
url: 'https://sqlrooms.org/api/ai/type-aliases/UseGenerateSessionTitleOptions.md'
---
[@sqlrooms/ai](../index.md) / UseGenerateSessionTitleOptions

# Type Alias: UseGenerateSessionTitleOptions

> **UseGenerateSessionTitleOptions** = [`GenerateSessionTitleOptions`](GenerateSessionTitleOptions.md) & `object`

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `enabled?` | `boolean` | Turn title generation on or off. Useful while model credentials or app subscription state are still loading. |
| `delayMs?` | `number` | Delay after a new user message before generating a title. |
| `onError()?` | (`error`) => `void` | Observe failures without breaking the chat UI. |
