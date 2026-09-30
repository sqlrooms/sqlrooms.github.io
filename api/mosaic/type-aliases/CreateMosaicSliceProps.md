---
url: https://sqlrooms.org/api/mosaic/type-aliases/CreateMosaicSliceProps.md
---
[@sqlrooms/mosaic](../index.md) / CreateMosaicSliceProps

# Type Alias: CreateMosaicSliceProps

> **CreateMosaicSliceProps** = [`CreateCoordinatorMosaicSliceProps`](CreateCoordinatorMosaicSliceProps.md) | [`CreateDuckDbMosaicSliceProps`](CreateDuckDbMosaicSliceProps.md)

Configuration for creating a Mosaic slice.

Supply a coordinator to use Mosaic without a database slice, or omit it to
create a coordinator from the room's DuckDB slice.
