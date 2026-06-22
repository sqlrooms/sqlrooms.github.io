---
url: 'https://sqlrooms.org/api/ai/functions/getTablesForAiScope.md'
---
[@sqlrooms/ai](../index.md) / getTablesForAiScope

# Function: getTablesForAiScope()

> **getTablesForAiScope**(`tables`, `currentDatabase?`, `options?`): `DataTable`\[]

Filters a table catalog to the subset that should be exposed in AI context.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tables` | `DataTable`\[] | Flat DuckDB table catalog. |
| `currentDatabase?` | `string` | Name of the active database, when known. |
| `options?` | [`AiTableScopeOptions`](../type-aliases/AiTableScopeOptions.md) | Optional scope and exact database/schema filters. |

## Returns

`DataTable`\[]

Tables matching the requested AI scope.
