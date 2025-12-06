---
url: /api/duckdb/type-aliases/SeparatedStatements.md
---
[@sqlrooms/duckdb](../index.md) / SeparatedStatements

# Type Alias: SeparatedStatements

> **SeparatedStatements**: `object`

Result of separating the last SQL statement from preceding ones.

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `precedingStatements` | `string`\[] | All statements except the last one |
|  `lastStatement` | `string` | The last statement |
