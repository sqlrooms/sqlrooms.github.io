---
url: 'https://sqlrooms.org/api/ai/functions/formatTablesForLLM.md'
---
[@sqlrooms/ai](../index.md) / formatTablesForLLM

# Function: formatTablesForLLM()

> **formatTablesForLLM**(`tables`, `currentDatabase?`, `limits?`): `string`

Formats table schema information using a hybrid prompt strategy.

For small current-database main-schema catalogs, every table includes full
columns. Larger catalogs include full schemas for the first few tables,
table IDs/row counts for the next group, and a hidden-table count for the rest.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tables` | `DataTable`\[] | Flat DuckDB table catalog to expose. |
| `currentDatabase?` | `string` | Name of the active database, when known. |
| `limits?` | [`TableSchemaContextLimits`](../type-aliases/TableSchemaContextLimits.md) | Optional prompt-size thresholds and character budget. |

## Returns

`string`

AI prompt text that includes usable canonical table IDs and guidance
for resolving bare user table names before downstream tool calls.
