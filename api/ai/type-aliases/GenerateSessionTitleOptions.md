---
url: 'https://sqlrooms.org/api/ai/type-aliases/GenerateSessionTitleOptions.md'
---
[@sqlrooms/ai](../index.md) / GenerateSessionTitleOptions

# Type Alias: GenerateSessionTitleOptions

> **GenerateSessionTitleOptions** = `object`

## Properties

### maxTitleLength?

> `optional` **maxTitleLength?**: `number`

Maximum generated title length after cleanup.

***

### maxUserMessages?

> `optional` **maxUserMessages?**: `number`

Number of initial user messages to include in the title prompt.

***

### isDefaultSessionName?

> `optional` **isDefaultSessionName?**: (`name`) => `boolean`

Identify titles that are still safe to auto-replace.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`boolean`

***

### buildPrompt?

> `optional` **buildPrompt?**: (`args`) => `string`

Override the prompt sent to the title-generation model.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | `GenerateSessionTitlePromptArgs` |

#### Returns

`string`

***

### getPromptOptions?

> `optional` **getPromptOptions?**: (`args`) => [`GenerateSessionTitlePromptOptions`](GenerateSessionTitlePromptOptions.md) | `Promise`<[`GenerateSessionTitlePromptOptions`](GenerateSessionTitlePromptOptions.md)>

Provide model/provider/baseUrl options for the title-generation call.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | `GenerateSessionTitlePromptArgs` |

#### Returns

[`GenerateSessionTitlePromptOptions`](GenerateSessionTitlePromptOptions.md) | `Promise`<[`GenerateSessionTitlePromptOptions`](GenerateSessionTitlePromptOptions.md)>
