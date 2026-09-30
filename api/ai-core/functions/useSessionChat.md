---
url: https://sqlrooms.org/api/ai-core/functions/useSessionChat.md
---
[@sqlrooms/ai-core](../index.md) / useSessionChat

# Function: useSessionChat()

> **useSessionChat**(`sessionId`): `UseSessionChatResult`

Subscribe to the AI SDK chat owned by a session runtime.

The AI slice owns the runtime lifecycle, so a session can keep running
without a mounted React component. This hook only bridges its chat into
React.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionId` | `string` | The ID of the session to observe. |

## Returns

`UseSessionChatResult`

Messages and imperative chat methods for the session.
