---
url: >-
  https://sqlrooms.org/api/pivot/type-aliases/CreatePivotBlockDefinitionOptions.md
---
[@sqlrooms/pivot](../index.md) / CreatePivotBlockDefinitionOptions

# Type Alias: CreatePivotBlockDefinitionOptions\<TRoomState>

> **CreatePivotBlockDefinitionOptions**<`TRoomState`> = `object`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRoomState` *extends* [`PivotSliceState`](PivotSliceState.md) | [`PivotSliceState`](PivotSliceState.md) |

## Properties

### render?

> `optional` **render?**: `ComponentType`<[`PivotBlockRenderProps`](PivotBlockRenderProps.md)<`TRoomState`>>

***

### label?

> `optional` **label?**: `string`

***

### defaultTitle?

> `optional` **defaultTitle?**: `string`

***

### source?

> `optional` **source?**: [`PivotSource`](PivotSource.md)

***

### config?

> `optional` **config?**: `Partial`<[`PivotConfig`](PivotConfig.md)>
