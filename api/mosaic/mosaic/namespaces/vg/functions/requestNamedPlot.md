---
url: /api/mosaic/mosaic/namespaces/vg/functions/requestNamedPlot.md
---
[@sqlrooms/mosaic](../../../../index.md) / [vg](../index.md) / requestNamedPlot

# Function: requestNamedPlot()

> **requestNamedPlot**(`ctx`, `name`, `callback`): `void`

Context-sensitive lookup of named plots.
This method proxies access to the NamedPlots.request().
If the provided context object has a local namedPlots, that is used.
Otherwise the default instance is used.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | `any` |
| `name` | `any` |
| `callback` | `any` |

## Returns

`void`
