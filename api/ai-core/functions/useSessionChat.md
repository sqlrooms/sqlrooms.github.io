---
url: /api/ai-core/functions/useSessionChat.md
---
[@sqlrooms/ai-core](../index.md) / useSessionChat

# Function: useSessionChat()

> **useSessionChat**(`sessionId`): `UseSessionChatResult`

Custom hook that provides per-session AI chat functionality.
Each session gets its own independent useChat instance.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionId` | `string` | The ID of the session to manage chat for |

## Returns

`UseSessionChatResult`

An object containing messages, sendMessage, stop, and status for this session

## Example

```tsx
function SessionComponent({ sessionId }) {
  const {messages, sendMessage, stop, status} = useSessionChat(sessionId);

  const handleSubmit = () => {
    sendMessage({text: 'Hello!'});
  };

  return (
    <div>
      {messages.map(msg => <div key={msg.id}>{msg.content}</div>)}
    </div>
  );
}
```
