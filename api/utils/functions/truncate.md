---
url: /api/utils/functions/truncate.md
---
[@sqlrooms/utils](../index.md) / truncate

# Function: truncate()

> **truncate**(`text`, `maxWords`): `string`

Truncates text to a specified word limit

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `text` | `string` | `undefined` | The text to truncate |
| `maxWords` | `number` | `10` | The maximum number of words to keep (default: 10) |

## Returns

`string`

The truncated text with "..." appended if truncated

## Example

```ts
truncate("This is a very long sentence that should be truncated", 5) // returns "This is a very long..."
truncate("Short text", 10) // returns "Short text"
```
