---
url: /api/ai-core/functions/useAiChat.md
---
[@sqlrooms/ai-core](../index.md) / useAiChat

# Function: useAiChat()

> **useAiChat**(): `object`

Custom hook that provides AI chat functionality with automatic transport setup,
message syncing, and tool call handling.

This hook encapsulates all the logic needed to integrate the AI SDK's useChat
with the AI slice state management.

## Returns

`object`

An object containing messages and sendMessage from useChat

| Name | Type |
| ------ | ------ |
|  `messages` | `UIMessage`<`unknown`, `UIDataTypes`, `UITools`>\[] |
|  `sendMessage` | (`message`?, `options`?) => `Promise`<`void`> |

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
