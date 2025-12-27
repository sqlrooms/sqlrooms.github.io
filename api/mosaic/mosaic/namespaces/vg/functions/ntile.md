---
url: /api/mosaic/mosaic/namespaces/vg/functions/ntile.md
---
[@sqlrooms/mosaic](../../../../index.md) / [vg](../index.md) / ntile

# Function: ntile()

> **ntile**(`num_buckets`): `WindowNode`

Create a window function that returns an integer ranging from 1 to the
argument value, dividing the partition as equally as possible.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num_buckets` | `NumberValue` | The number of quantile buckets. |

## Returns

`WindowNode`
