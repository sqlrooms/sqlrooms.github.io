---
url: /api/ai/functions/useAiChat.md
---
[@sqlrooms/ai](../index.md) / useAiChat

# Function: useAiChat()

> **useAiChat**(): `UseAiChatResult`

Custom hook that provides AI chat functionality with automatic transport setup,
message syncing, and tool call handling.

This hook encapsulates all the logic needed to integrate the AI SDK's useChat
with the AI slice state management.

## Returns

`UseAiChatResult`

An object containing messages and sendMessage from useChat

## Example

```tsx
function MyComponent() {
  const {messages, sendMessage} = useAiChat();

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
