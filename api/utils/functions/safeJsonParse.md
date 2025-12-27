---
url: /api/utils/functions/safeJsonParse.md
---
[@sqlrooms/utils](../index.md) / safeJsonParse

# Function: safeJsonParse()

> **safeJsonParse**<`T`>(`json`): `T` | `undefined`

Parse a JSON string and return the parsed object.
If the string is not valid JSON, return undefined.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `json` | `string` | `null` | `undefined` | The JSON string to parse. |

## Returns

`T` | `undefined`

The parsed object or undefined if the string is not valid JSON.
