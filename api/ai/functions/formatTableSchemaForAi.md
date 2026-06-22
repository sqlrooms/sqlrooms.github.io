---
url: 'https://sqlrooms.org/api/ai/functions/formatTableSchemaForAi.md'
---
[@sqlrooms/ai](../index.md) / formatTableSchemaForAi

# Function: formatTableSchemaForAi()

> **formatTableSchemaForAi**(`table`): `string`

Formats a table with full column schema for AI context.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `table` | `DataTable` | Data table metadata to format. |

## Returns

`string`

Multi-line schema text including canonical table ID, optional row
count, columns, and optional comment.
