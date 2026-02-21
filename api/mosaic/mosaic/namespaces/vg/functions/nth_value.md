---
url: /api/mosaic/mosaic/namespaces/vg/functions/nth_value.md
---
[@sqlrooms/mosaic](../../../../index.md) / [vg](../index.md) / nth\_value

# Function: nth\_value()

> **nth\_value**(`expr`, `nth`): `WindowNode`

Create a window function that returns the expression evaluated at the
nth row of the window frame (counting from 1), or null if no such row.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `expr` | `ExprValue` | The expression to evaluate. |
| `nth` | `NumberValue` | The 1-based window frame index. |

## Returns

`WindowNode`
