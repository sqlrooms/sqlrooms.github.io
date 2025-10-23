---
url: /api/ai-core/functions/useScrollToBottom.md
---
[@sqlrooms/ai-core](../index.md) / useScrollToBottom

# Function: useScrollToBottom()

> **useScrollToBottom**<`T`>(`options`): `ScrollToBottomResult`<`T`>

A React hook that provides automatic scrolling behavior for containers with dynamic content.

This hook helps manage scroll behavior in containers where content is being added dynamically,
such as chat interfaces or logs. It automatically scrolls to the bottom when new content is added
if the user was already at the bottom, and provides a function to manually scroll to the bottom.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* `null` | `HTMLElement` | The type of HTMLElement for the container and end references |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | { `dataToObserve`: `unknown`; `containerRef`: `RefObject`<`null` | `T`>; `endRef`: `RefObject`<`null` | `T`>; `scrollOnInitialLoad`: `boolean`; } | Configuration options |
| `options.dataToObserve` | `unknown` | The data to observe for changes (messages, items, etc.) |
| `options.containerRef` | `RefObject`<`null` | `T`> | Reference to the scrollable container element |
| `options.endRef` | `RefObject`<`null` | `T`> | Reference to an element at the end of the content |
| `options.scrollOnInitialLoad`? | `boolean` | Whether to scroll to bottom on initial load (default: true) |

## Returns

`ScrollToBottomResult`<`T`>

An object containing:

* showScrollButton: Boolean indicating if the "scroll to bottom" button should be shown
* scrollToBottom: Function to programmatically scroll to the bottom

## Example

```tsx
import { useRef } from 'react';
import { useScrollToBottom } from './use-scroll-to-bottom';

function ChatContainer({ messages }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const { showScrollButton, scrollToBottom } = useScrollToBottom({
    dataToObserve: messages,
    containerRef,
    endRef,
    scrollOnInitialLoad: false // Disable scrolling on initial load
  });

  return (
    <div className="relative h-[500px]">
      <div ref={containerRef} className="h-full overflow-y-auto p-4">
        {messages.map((message) => (
          <div key={message.id} className="mb-4">
            {message.text}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-4 right-4 rounded-full bg-blue-500 p-2"
        >
          ↓
        </button>
      )}
    </div>
  );
}
```
