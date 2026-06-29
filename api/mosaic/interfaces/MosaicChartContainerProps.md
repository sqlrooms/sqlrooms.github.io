---
url: 'https://sqlrooms.org/api/mosaic/interfaces/MosaicChartContainerProps.md'
---
[@sqlrooms/mosaic](../index.md) / MosaicChartContainerProps

# Interface: MosaicChartContainerProps

## Properties

### spec

> **spec**: `string` | `Spec`

Initial Mosaic specification

***

### params?

> `optional` **params?**: `Map`<`string`, `Param`<`any`>>

Pre-defined params/selections for shared cross-filtering

***

### editable?

> `optional` **editable?**: `boolean`

Whether editing is enabled

#### Default

```ts
true
```

***

### onSpecChange?

> `optional` **onSpecChange?**: [`OnMosaicSpecChange`](../type-aliases/OnMosaicSpecChange.md)

Callback when spec changes are applied

***

### children

> **children**: `ReactNode`

Child components (Chart, SpecEditor, Actions)

***

### className?

> `optional` **className?**: `string`

Custom class name for the container
