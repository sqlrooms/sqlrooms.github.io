---
url: /api/ui/functions/useDisclosure.md
---
[@sqlrooms/ui](../index.md) / useDisclosure

# Function: useDisclosure()

> **useDisclosure**(`initialState`): [`UseDisclosureReturnValue`](../interfaces/UseDisclosureReturnValue.md)

A custom hook for managing disclosure state (open/closed).

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `initialState` | `boolean` | `false` | The initial state of the disclosure (default: false) |

## Returns

[`UseDisclosureReturnValue`](../interfaces/UseDisclosureReturnValue.md)

An object containing the disclosure state and methods to control it

## Example

```tsx
import { useDisclosure } from '@your-package/ui';

function Modal() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <>
      <button onClick={onOpen}>Open Modal</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Modal Title</h2>
            <p>Modal content goes here...</p>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
```
