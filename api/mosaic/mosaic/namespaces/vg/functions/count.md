---
url: /api/mosaic/mosaic/namespaces/vg/functions/count.md
---
[@sqlrooms/mosaic](../../../../index.md) / [vg](../index.md) / count

# Function: count()

> **count**(`expr?`): `AggregateNode`

Compute a count aggregate.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `expr?` | `ExprValue` | An optional expression to count. If specified, only non-null expression values are counted. If omitted, all rows within a group are counted. |

## Returns

`AggregateNode`

A SQL aggregate function call.
