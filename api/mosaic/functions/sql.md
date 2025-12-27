---
url: /api/mosaic/functions/sql.md
---
[@sqlrooms/mosaic](../index.md) / sql

# Function: sql()

> **sql**(`strings`, ...`exprs`): `FragmentNode`

Template tag function for SQL fragments. Interpolated values
may be strings, other SQL expression objects (such as column
references), primitive values, or dynamic parameters.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `strings` | `TemplateStringsArray` | Template string constants. |
| ...`exprs` | `TemplateValue`\[] | Template expression values. |

## Returns

`FragmentNode`
