---
url: /api/mosaic/mosaic/namespaces/vg/functions/loadSpatial.md
---
[@sqlrooms/mosaic](../../../../index.md) / [vg](../index.md) / loadSpatial

# Function: loadSpatial()

> **loadSpatial**(`tableName`, `fileName`, `options?`): `string`

Load geometry data within a spatial file format.
This method requires that the DuckDB spatial extension is loaded.
Supports GeoJSON, TopoJSON, and other common spatial formats.
For TopoJSON, wet the layer option to indicate the feature to extract.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `tableName` | `string` |
| `fileName` | `string` |
| `options?` | `Options` |

## Returns

`string`
