---
url: 'https://sqlrooms.org/api/ui/functions/useDebouncedValue.md'
---
[@sqlrooms/ui](../index.md) / useDebouncedValue

# Function: useDebouncedValue()

> **useDebouncedValue**<`T`>(`externalValue`, `onPersist`, `debounceMs?`): \[`T`, (`value`) => `void`]

Hook for managing local state with debounced persistence.

Provides immediate local state updates for responsive UI while
debouncing expensive persistence operations (e.g., store updates, API calls).

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `externalValue` | `T` | `undefined` | Value from external source (store, props, etc.) |
| `onPersist` | (`value`) => `void` | `undefined` | Callback to persist value (will be debounced) |
| `debounceMs` | `number` | `300` | Debounce delay in milliseconds (default: 300) |

## Returns

\[`T`, (`value`) => `void`]

\[localValue, setValue] - Current local value and setter function

## Example

```tsx
const [localSpec, setSpec] = useDebouncedValue(
  cell.data.vegaSpec,
  (spec) => updateCell(id, draft => { draft.data.vegaSpec = spec }),
  300
);
```
