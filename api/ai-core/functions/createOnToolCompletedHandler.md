---
url: /api/ai-core/functions/createOnToolCompletedHandler.md
---
[@sqlrooms/ai-core](../index.md) / createOnToolCompletedHandler

# Function: createOnToolCompletedHandler()

> **createOnToolCompletedHandler**(`store`, `sessionId?`): (`toolCallId`, `additionalData`) => `void`

Creates a handler for tool completion that updates the tool additional data in the store

## Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | `StoreApi`<`AiSliceStateForTransport`> |
| `sessionId?` | `string` |

## Returns

> (`toolCallId`, `additionalData`): `void`

### Parameters

| Parameter | Type |
| ------ | ------ |
| `toolCallId` | `string` |
| `additionalData` | `unknown` |

### Returns

`void`
