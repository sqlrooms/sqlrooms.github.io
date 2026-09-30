---
url: >-
  https://sqlrooms.org/api/sql-editor/type-aliases/CreateSqlQueryBlockDefinitionOptions.md
---
[@sqlrooms/sql-editor](../index.md) / CreateSqlQueryBlockDefinitionOptions

# Type Alias: CreateSqlQueryBlockDefinitionOptions\<TRoomState>

> **CreateSqlQueryBlockDefinitionOptions**<`TRoomState`> = `object`

## Type Parameters

| Type Parameter |
| ------ |
| `TRoomState` *extends* `BaseRoomStoreState` & [`SqlEditorSliceState`](SqlEditorSliceState.md) |

## Properties

### label?

> `optional` **label?**: `string`

***

### defaultTitle?

> `optional` **defaultTitle?**: `string`

***

### render?

> `optional` **render?**: `ComponentType`<`StatefulBlockRenderProps`<`TRoomState`>>
