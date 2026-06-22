---
url: 'https://sqlrooms.org/api/app-runtime/type-aliases/HtmlAppBlockProps.md'
---
[@sqlrooms/app-runtime](../index.md) / HtmlAppBlockProps

# Type Alias: HtmlAppBlockProps\<TRoomState>

> **HtmlAppBlockProps**<`TRoomState`> = `Partial`<`StatefulBlockRenderProps`<`TRoomState`>> & `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
| `appId?` | `string` |
| `className?` | `string` |
| `queryTimeoutMs?` | `number` |
| `maxRows?` | `number` |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRoomState` *extends* [`HtmlAppRuntimeSliceState`](HtmlAppRuntimeSliceState.md) & [`HtmlAppRuntimeQueryState`](HtmlAppRuntimeQueryState.md) | [`HtmlAppRuntimeSliceState`](HtmlAppRuntimeSliceState.md) & [`HtmlAppRuntimeQueryState`](HtmlAppRuntimeQueryState.md) |
