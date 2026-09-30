---
url: https://sqlrooms.org/api/ai-core/functions/useBlockSends.md
---
[@sqlrooms/ai-core](../index.md) / useBlockSends

# Function: useBlockSends()

> **useBlockSends**(`enabled?`): `void`

Blocks every send while the calling component is mounted, reported through
[ChatComposerState.sendBlocked](../interfaces/ChatComposerState.md#sendblocked).

For a state that makes sending impossible chat-wide (a missing credential);
conditional policies want [useRegisterBeforeSend](useRegisterBeforeSend.md).

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `enabled` | `boolean` | `true` |

## Returns

`void`
