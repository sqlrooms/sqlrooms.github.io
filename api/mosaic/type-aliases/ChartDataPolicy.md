---
url: 'https://sqlrooms.org/api/mosaic/type-aliases/ChartDataPolicy.md'
---
[@sqlrooms/mosaic](../index.md) / ChartDataPolicy

# Type Alias: ChartDataPolicy

> **ChartDataPolicy** = `object`

## Properties

### disabled?

> `optional` **disabled?**: `boolean`

Disable runtime row-count validation for charts whose query result size
does not correspond to rendered data points.

***

### maxRows?

> `optional` **maxRows?**: `number`

Maximum allowed result rows for this chart's runtime query results.

***

### reason?

> `optional` **reason?**: `string`

Short explanation shown to users and assistants when the policy trips.

***

### getResultSize?

> `optional` **getResultSize?**: (`result`) => `number`

Optional custom size estimator for renderer-specific result shapes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `result` | `unknown` |

#### Returns

`number`
