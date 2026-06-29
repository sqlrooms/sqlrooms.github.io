---
url: 'https://sqlrooms.org/api/ui/functions/useDebounce.md'
---
[@sqlrooms/ui](../index.md) / useDebounce

# Function: useDebounce()

> **useDebounce**<`T`>(`value`, `delay?`): `T`

A custom hook for debouncing a value.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `value` | `T` | `undefined` | The value to debounce |
| `delay` | `number` | `500` | The delay in milliseconds (default: 500) |

## Returns

`T`

The debounced value

## Example

```tsx
import { useDebounce } from '@sqlrooms/ui';

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    // This will only run when the user stops typing for 300ms
    if (debouncedSearchTerm) {
      performSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
```
