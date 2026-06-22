---
url: 'https://sqlrooms.org/api/ai-core/type-aliases/MessageTokenUsage.md'
---
[@sqlrooms/ai-core](../index.md) / MessageTokenUsage

# Type Alias: MessageTokenUsage

> **MessageTokenUsage** = `object`

Accumulated token usage for an assistant message, sourced from the AI SDK's
LanguageModelUsage reported at the end of each step.

## Properties

### inputTokens

> **inputTokens**: `number`

***

### outputTokens

> **outputTokens**: `number`

***

### totalTokens

> **totalTokens**: `number`

***

### inputTokenDetails?

> `optional` **inputTokenDetails?**: `object`

| Name | Type |
| ------ | ------ |
| `cacheReadTokens?` | `number` |
| `cacheWriteTokens?` | `number` |

***

### outputTokenDetails?

> `optional` **outputTokenDetails?**: `object`

| Name | Type |
| ------ | ------ |
| `reasoningTokens?` | `number` |
