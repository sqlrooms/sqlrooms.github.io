---
url: https://sqlrooms.org/api/documents/type-aliases/StartBlockScopedChatOptions.md
---
[@sqlrooms/documents](../index.md) / StartBlockScopedChatOptions

# Type Alias: StartBlockScopedChatOptions

> **StartBlockScopedChatOptions** = `object`

## Properties

### target

> **target**: [`BlockAiTarget`](BlockAiTarget.md)

***

### prompt

> **prompt**: `string`

***

### revealAssistant

> **revealAssistant**: () => `void`

#### Returns

`void`

***

### actions

> **actions**: [`StartBlockScopedChatActions`](StartBlockScopedChatActions.md)

***

### isValidBlockDocumentArtifact

> **isValidBlockDocumentArtifact**: (`artifact`) => `boolean`

Returns true when the artifact can host block-scoped Ask AI.
Callers supply product-specific checks (for example block-document artifacts).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `artifact` | [`StartBlockScopedChatArtifact`](StartBlockScopedChatArtifact.md) |

#### Returns

`boolean`

***

### contextItemId?

> `optional` **contextItemId?**: `string`

Precomputed context item id. When omitted, derived via [blockContextItemId](../functions/blockContextItemId.md).

***

### artifactLabel?

> `optional` **artifactLabel?**: `string`

Optional product noun used in toast copy.
Defaults to "block document".
