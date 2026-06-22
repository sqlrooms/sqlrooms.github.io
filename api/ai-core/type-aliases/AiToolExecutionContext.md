---
url: 'https://sqlrooms.org/api/ai-core/type-aliases/AiToolExecutionContext.md'
---
[@sqlrooms/ai-core](../index.md) / AiToolExecutionContext

# Type Alias: AiToolExecutionContext

> **AiToolExecutionContext** = `object`

## Properties

### sessionId?

> `optional` **sessionId?**: `string`

***

### aiRunContext?

> `optional` **aiRunContext?**: [`AiRunContext`](AiRunContext.md)

***

### getAiRunContext?

> `optional` **getAiRunContext?**: () => [`AiRunContext`](AiRunContext.md) | `undefined`

#### Returns

[`AiRunContext`](AiRunContext.md) | `undefined`

***

### setAiRunContext?

> `optional` **setAiRunContext?**: (`runContext`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `runContext` | [`AiRunContext`](AiRunContext.md) | `undefined` |

#### Returns

`void`

***

### setPrimaryRunContextItem?

> `optional` **setPrimaryRunContextItem?**: (`item`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`AiRunContextItem`](AiRunContextItem.md) |

#### Returns

`void`
