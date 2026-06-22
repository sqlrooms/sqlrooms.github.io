---
url: 'https://sqlrooms.org/api/ai/functions/formatOtherTableScopesForAi.md'
---
[@sqlrooms/ai](../index.md) / formatOtherTableScopesForAi

# Function: formatOtherTableScopesForAi()

> **formatOtherTableScopesForAi**(`tables`, `currentDatabase?`): `string`

Formats a compact notice about tables outside the current database's main schema.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tables` | `DataTable`\[] | Flat DuckDB table catalog. |
| `currentDatabase?` | `string` | Name of the active database, when known. |

## Returns

`string`

Prompt text describing additional visible table locations, or an
empty string when there are no additional scoped tables.
