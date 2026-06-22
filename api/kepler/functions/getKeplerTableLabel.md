---
url: 'https://sqlrooms.org/api/kepler/functions/getKeplerTableLabel.md'
---
[@sqlrooms/kepler](../index.md) / getKeplerTableLabel

# Function: getKeplerTableLabel()

> **getKeplerTableLabel**(`table`, `options?`): `string`

Build a human-facing table label from raw catalog parts.

Labels omit `defaultDbSchema` and do not include SQL identifier quotes.
They are display-only; option values still carry the stable dataset id.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `table` | `DataTable` |
| `options` | [`KeplerTableSelectionOptions`](../type-aliases/KeplerTableSelectionOptions.md) |

## Returns

`string`
