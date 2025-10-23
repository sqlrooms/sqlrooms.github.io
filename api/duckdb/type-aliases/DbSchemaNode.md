---
url: /api/duckdb/type-aliases/DbSchemaNode.md
---
[@sqlrooms/duckdb](../index.md) / DbSchemaNode

# Type Alias: DbSchemaNode\<T>

> **DbSchemaNode**<`T`>: `object`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`NodeObject`](NodeObject.md) | [`NodeObject`](NodeObject.md) |

## Type declaration

| Name | Type |
| ------ | ------ |
|  `key` | `string` |
|  `object` | `T` |
|  `children`? | [`DbSchemaNode`](DbSchemaNode.md)\[] |
|  `isInitialOpen`? | `boolean` |
