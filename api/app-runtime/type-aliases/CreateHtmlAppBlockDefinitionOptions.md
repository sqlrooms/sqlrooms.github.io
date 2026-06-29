---
url: >-
  https://sqlrooms.org/api/app-runtime/type-aliases/CreateHtmlAppBlockDefinitionOptions.md
---
[@sqlrooms/app-runtime](../index.md) / CreateHtmlAppBlockDefinitionOptions

# Type Alias: CreateHtmlAppBlockDefinitionOptions\<TRoomState>

> **CreateHtmlAppBlockDefinitionOptions**<`TRoomState`> = `object`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRoomState` *extends* [`HtmlAppRuntimeSliceState`](HtmlAppRuntimeSliceState.md) | [`HtmlAppRuntimeSliceState`](HtmlAppRuntimeSliceState.md) |

## Properties

### label?

> `optional` **label?**: `string`

***

### defaultTitle?

> `optional` **defaultTitle?**: `string`

***

### defaultApp?

> `optional` **defaultApp?**: `Partial`<[`HtmlAppState`](HtmlAppState.md)>

***

### render?

> `optional` **render?**: `ComponentType`<`StatefulBlockRenderProps`<`TRoomState`>>
