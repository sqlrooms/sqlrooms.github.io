---
url: https://sqlrooms.org/api/mosaic/functions/createMosaicSlice.md
---
[@sqlrooms/mosaic](../index.md) / createMosaicSlice

# Function: createMosaicSlice()

## Call Signature

> **createMosaicSlice**(`props`): `StateCreator`<`CoordinatorMosaicStoreState`, \[], \[], [`MosaicSliceState`](../type-aliases/MosaicSliceState.md)>

Create a Mosaic slice backed by a supplied coordinator.

This mode does not require a DuckDB slice in the room store.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`CreateCoordinatorMosaicSliceProps`](../type-aliases/CreateCoordinatorMosaicSliceProps.md) |

### Returns

`StateCreator`<`CoordinatorMosaicStoreState`, \[], \[], [`MosaicSliceState`](../type-aliases/MosaicSliceState.md)>

## Call Signature

> **createMosaicSlice**(`props?`): `StateCreator`<`DuckDbMosaicStoreState`, \[], \[], [`MosaicSliceState`](../type-aliases/MosaicSliceState.md)>

Create a Mosaic slice backed by the room's DuckDB connector.

The room store must include a DuckDB slice when no coordinator is supplied.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `props?` | [`CreateDuckDbMosaicSliceProps`](../type-aliases/CreateDuckDbMosaicSliceProps.md) |

### Returns

`StateCreator`<`DuckDbMosaicStoreState`, \[], \[], [`MosaicSliceState`](../type-aliases/MosaicSliceState.md)>
