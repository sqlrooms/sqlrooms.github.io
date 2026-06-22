---
url: 'https://sqlrooms.org/api/ui/functions/useDebouncedCallback.md'
---
[@sqlrooms/ui](../index.md) / useDebouncedCallback

# Function: useDebouncedCallback()

> **useDebouncedCallback**<`T`>(`callback`, `delay?`): `T`

A custom hook for debouncing function calls.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`) => `void` |

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `callback` | `T` | `undefined` | The function to debounce |
| `delay` | `number` | `300` | The delay in milliseconds (default: 300) |

## Returns

`T`

The debounced callback function

## Example

```tsx
import { useDebouncedCallback } from '@sqlrooms/ui';

function AutoSaveForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const debouncedSave = useDebouncedCallback(
    (data: typeof formData) => {
      // This will only run 300ms after the user stops typing
      saveToServer(data);
    },
    300
  );

  const handleChange = (field: string, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    debouncedSave(newData);
  };

  return (
    <form>
      <input
        value={formData.name}
        onChange={(e) => handleChange('name', e.target.value)}
      />
      <input
        value={formData.email}
        onChange={(e) => handleChange('email', e.target.value)}
      />
    </form>
  );
}
```
