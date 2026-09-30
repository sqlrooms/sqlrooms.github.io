---
url: https://sqlrooms.org/api/documents/functions/startBlockScopedChat.md
---
[@sqlrooms/documents](../index.md) / startBlockScopedChat

# Function: startBlockScopedChat()

> **startBlockScopedChat**(`__namedParameters`): `Promise`<`void`>

Opens or reuses an artifact-scoped AI session for a specific block target,
seeds the block into draft context, and starts analysis with the given prompt.

A finished session that already references the same block is reused even when
the target artifact is not that session's most recently linked artifact, so
re-asking about a block reuses its chat instead of spawning a new one. A
running session for the same block blocks a new turn (the existing run is
revealed instead). When no reusable session exists a new artifact-scoped
session is created.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`StartBlockScopedChatOptions`](../type-aliases/StartBlockScopedChatOptions.md) |

## Returns

`Promise`<`void`>
