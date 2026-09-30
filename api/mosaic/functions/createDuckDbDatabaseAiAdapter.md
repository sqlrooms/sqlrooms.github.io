---
url: https://sqlrooms.org/api/mosaic/functions/createDuckDbDatabaseAiAdapter.md
---
[@sqlrooms/mosaic](../index.md) / createDuckDbDatabaseAiAdapter

# Function: createDuckDbDatabaseAiAdapter()

> **createDuckDbDatabaseAiAdapter**<`TState`>(`store`): [`DatabaseAiAdapter`](../type-aliases/DatabaseAiAdapter.md)

Creates a database AI adapter backed by the mounted DuckDB slice.

## Type Parameters

| Type Parameter |
| ------ |
| `TState` *extends* `DuckDbSliceState` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | [`AiStore`](../type-aliases/AiStore.md)<`TState`> |

## Returns

[`DatabaseAiAdapter`](../type-aliases/DatabaseAiAdapter.md)
