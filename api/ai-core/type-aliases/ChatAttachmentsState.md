---
url: https://sqlrooms.org/api/ai-core/type-aliases/ChatAttachmentsState.md
---
[@sqlrooms/ai-core](../index.md) / ChatAttachmentsState

# Type Alias: ChatAttachmentsState

> **ChatAttachmentsState** = `object`

Transient files and actions shared by attachment UI under one chat root.

## Properties

### attachments

> **attachments**: `FileUIPart`\[]

Files waiting to be included in the next user message.

***

### append

> **append**: (`attachments`) => `void`

Adds already-serialized AI SDK file parts without asynchronous work.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `attachments` | `FileUIPart`\[] |

#### Returns

`void`

***

### appendAsync

> **appendAsync**: (`prepare`) => `Promise`<`boolean`>

Prepares files asynchronously and appends them only if the composer state
has not been cleared while the work is pending.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prepare` | () => `Promise`<`FileUIPart`\[]> |

#### Returns

`Promise`<`boolean`>

Whether the prepared attachments were still current and appended.

***

### remove

> **remove**: (`attachment`) => `void`

Removes one pending file part by identity.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `attachment` | `FileUIPart` |

#### Returns

`void`

***

### clear

> **clear**: () => `void`

Removes every pending attachment.

#### Returns

`void`
