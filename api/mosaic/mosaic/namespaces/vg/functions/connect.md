---
url: /api/mosaic/mosaic/namespaces/vg/functions/connect.md
---
[@sqlrooms/mosaic](../../../../index.md) / [vg](../index.md) / connect

# Function: connect()

> **connect**(`ctx`, ...`clients`): `void`

Context-sensitive connector for coordinator and clients.
This method proxies access to Coordinator.connect().
If the provided context object has an explicit coordinator, that is used.
Otherwise the default coordinator singleton is used.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | `any` |
| ...`clients` | `any`\[] |

## Returns

`void`
