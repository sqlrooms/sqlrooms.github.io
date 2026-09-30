---
url: https://sqlrooms.org/api/ai/variables/ChatRendering.md
---
[@sqlrooms/ai](../index.md) / ChatRendering

# Variable: ChatRendering

> `const` **ChatRendering**: `FC`<[`ChatRenderingProps`](../type-aliases/ChatRenderingProps.md)>

Subtree-scoped chat presentation recipe. Partial overrides merge with the
parent recipe or SQLRooms defaults.

## Example

```tsx
<Chat.Rendering components={{Activity: AppActivity}}>
  <Chat.Messages />
</Chat.Rendering>
```
