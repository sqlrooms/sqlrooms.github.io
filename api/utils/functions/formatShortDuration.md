---
url: 'https://sqlrooms.org/api/utils/functions/formatShortDuration.md'
---
[@sqlrooms/utils](../index.md) / formatShortDuration

# Function: formatShortDuration()

> **formatShortDuration**(`ms`): `string`

Formats a duration in milliseconds into a compact human-readable string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ms` | `number` | Duration in milliseconds |

## Returns

`string`

Compact duration string like "3s", "14m 49s", "1h 2m 3s"

## Example

```ts
formatShortDuration(889000); // "14m 49s"
formatShortDuration(3000);   // "3s"
formatShortDuration(3723000); // "1h 2m 3s"
```
