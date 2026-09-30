---
url: https://sqlrooms.org/api/documents/type-aliases/StartBlockScopedChatActions.md
---
[@sqlrooms/documents](../index.md) / StartBlockScopedChatActions

# Type Alias: StartBlockScopedChatActions

> **StartBlockScopedChatActions** = `object`

Host-provided actions used by [startBlockScopedChat](../functions/startBlockScopedChat.md).

Apps adapt their room store into this bag so the shared helper stays free of
product-specific store imports.

## Properties

### getArtifact

> **getArtifact**: (`artifactId`) => [`StartBlockScopedChatArtifact`](StartBlockScopedChatArtifact.md) | `undefined`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `artifactId` | `string` |

#### Returns

[`StartBlockScopedChatArtifact`](StartBlockScopedChatArtifact.md) | `undefined`

***

### getCurrentArtifactId

> **getCurrentArtifactId**: () => `string` | `undefined`

#### Returns

`string` | `undefined`

***

### setCurrentArtifact

> **setCurrentArtifact**: (`artifactId`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `artifactId` | `string` |

#### Returns

`void`

***

### getAiSessions

> **getAiSessions**: () => `ArtifactAiSessionWithContent`\[]

#### Returns

`ArtifactAiSessionWithContent`\[]

***

### getSessionArtifactLinks

> **getSessionArtifactLinks**: () => `ArtifactSessionLink`\[]

All session↔artifact links. Passed through directly (not collapsed into a
one-artifact-per-session map) so sessions linked to multiple artifacts are
matched for every artifact they belong to.

#### Returns

`ArtifactSessionLink`\[]

***

### createArtifactScopedSession

> **createArtifactScopedSession**: () => `string` | `undefined`

#### Returns

`string` | `undefined`

***

### switchSession

> **switchSession**: (`sessionId`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |

#### Returns

`void`

***

### getSessionDraftContextItemIds

> **getSessionDraftContextItemIds**: (`sessionId`) => `string`\[] | `undefined`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |

#### Returns

`string`\[] | `undefined`

***

### setSessionDraftContextItemIds

> **setSessionDraftContextItemIds**: (`sessionId`, `ids`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |
| `ids` | `string`\[] |

#### Returns

`void`

***

### setPrompt

> **setPrompt**: (`sessionId`, `prompt`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |
| `prompt` | `string` |

#### Returns

`void`

***

### startAnalysisWhenReady

> **startAnalysisWhenReady**: (`sessionId`) => `Promise`<`boolean`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |

#### Returns

`Promise`<`boolean`>
