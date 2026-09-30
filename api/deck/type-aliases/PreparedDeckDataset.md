---
url: https://sqlrooms.org/api/deck/type-aliases/PreparedDeckDataset.md
---
[@sqlrooms/deck](../index.md) / PreparedDeckDataset

# Type Alias: PreparedDeckDataset

> **PreparedDeckDataset** = `object`

## Properties

### datasetId

> **datasetId**: `string`

***

### table

> **table**: `arrow.Table`

***

### datasetGeometryColumn?

> `optional` **datasetGeometryColumn?**: `string`

Dataset-level geometry column used when preparing this payload.

***

### datasetGeometryEncodingHint?

> `optional` **datasetGeometryEncodingHint?**: [`GeometryEncodingHint`](GeometryEncodingHint.md)

Dataset-level encoding hint used when preparing this payload.

***

### resolveGeometry

> **resolveGeometry**: (`geometryColumn?`) => [`ResolvedGeometryColumn`](ResolvedGeometryColumn.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `geometryColumn?` | `string` |

#### Returns

[`ResolvedGeometryColumn`](ResolvedGeometryColumn.md)

***

### getGeoArrowLayerData

> **getGeoArrowLayerData**: (`geometryColumn?`) => [`PreparedGeoArrowLayerData`](PreparedGeoArrowLayerData.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `geometryColumn?` | `string` |

#### Returns

[`PreparedGeoArrowLayerData`](PreparedGeoArrowLayerData.md)

***

### getGeoJsonBinaryData

> **getGeoJsonBinaryData**: (`geometryColumn?`) => `unknown`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `geometryColumn?` | `string` |

#### Returns

`unknown`
