---
url: /api/utils/functions/safeJsonParse.md
---
[@sqlrooms/utils](../index.md) / safeJsonParse

# Function: safeJsonParse()

> **safeJsonParse**<`T`>(`json`): `undefined` | `T`

Parse a JSON string and return the parsed object.
If the string is not valid JSON, return undefined.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `json` | `undefined` | `null` | `string` | The JSON string to parse. |

## Returns

`undefined` | `T`

The parsed object or undefined if the string is not valid JSON.
