---
url: /api/mosaic/mosaic/namespaces/vg/functions/lead.md
---
[@sqlrooms/mosaic](../../../../index.md) / [vg](../index.md) / lead

# Function: lead()

> **lead**(`expr`, `offset?`, `defaultValue?`): `WindowNode`

Create a window function that returns the expression evaluated at the row
that is offset rows after the current row within the partition.
If there is no such row, instead return default (which must be of the same
type as the expression). Both offset and default are evaluated with respect
to the current row. If omitted, offset defaults to 1 and default to null.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `expr` | `ExprValue` | The expression to evaluate. |
| `offset?` | `NumberValue` | The row offset (default `1`). |
| `defaultValue?` | `unknown` | The default value (default `null`). |

## Returns

`WindowNode`
