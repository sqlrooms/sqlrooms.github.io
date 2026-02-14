---
url: /api/mosaic/mosaic/namespaces/vg/functions/quantile.md
---
[@sqlrooms/mosaic](../../../../index.md) / [vg](../index.md) / quantile

# Function: quantile()

> **quantile**(`expr`, `p`): `AggregateNode`

Compute a quantile aggregate.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `expr` | `ExprValue` | The expression to aggregate. |
| `p` | `ExprValue` | The quantile value. |

## Returns

`AggregateNode`

A SQL aggregate function call.
