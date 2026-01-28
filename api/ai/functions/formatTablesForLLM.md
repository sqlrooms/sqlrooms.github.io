---
url: /api/ai/functions/formatTablesForLLM.md
---
[@sqlrooms/ai](../index.md) / formatTablesForLLM

# Function: formatTablesForLLM()

> **formatTablesForLLM**(`tables`, `currentDatabase?`): `string`

Formats table schema information in a clean, LLM-friendly format

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tables` | `DataTable`\[] | Array of DataTable objects from the DuckDB state |
| `currentDatabase?` | `string` | The current local database name to filter by |

## Returns

`string`

Formatted string representation of table schemas
