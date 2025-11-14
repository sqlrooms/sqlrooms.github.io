---
url: /api/duckdb/functions/createTypedRowAccessor.md
---
[@sqlrooms/duckdb](../index.md) / createTypedRowAccessor

# Function: createTypedRowAccessor()

> **createTypedRowAccessor**<`T`>(`__namedParameters`): [`TypedRowAccessor`](../interfaces/TypedRowAccessor.md)<`T`>

Creates a row accessor wrapper around an Arrow table that provides typed row access.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `TypeMap` | `any` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | { `arrowTable`: `Table`<`T`>; `validate`: (`row`) => `T`; } |
| `__namedParameters.arrowTable` | `Table`<`T`> |
| `__namedParameters.validate`? | (`row`) => `T` |

## Returns

[`TypedRowAccessor`](../interfaces/TypedRowAccessor.md)<`T`>
