---
url: /api/utils/functions/formatTimeRelative.md
---
[@sqlrooms/utils](../index.md) / formatTimeRelative

# Function: formatTimeRelative()

> **formatTimeRelative**(`d`): `string`

Formats a date relative to the current time (e.g., "2 hours ago", "in 3 days")

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `d` | `string` | `number` | `Dayjs` | `Date` | `null` | `undefined` | Date to format (accepts any dayjs ConfigType) |

## Returns

`string`

Human-readable relative time string

## Example

```ts
formatTimeRelative(new Date(Date.now() - 3600000)); // "1 hour ago"
```
