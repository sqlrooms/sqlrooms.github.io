---
url: 'https://sqlrooms.org/api/ai/functions/getAiTableScopeSummary.md'
---
[@sqlrooms/ai](../index.md) / getAiTableScopeSummary

# Function: getAiTableScopeSummary()

> **getAiTableScopeSummary**(`tables`, `currentDatabase?`): `AiTableScopeSummary`

Summarizes visible tables outside the default AI table scope.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tables` | `DataTable`\[] | Flat DuckDB table catalog. |
| `currentDatabase?` | `string` | Name of the active database, when known. |

## Returns

`AiTableScopeSummary`

Counts for current-main tables and additional locations.
