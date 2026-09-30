---
url: https://sqlrooms.org/api/ai/functions/createQueryToolRenderer.md
---
[@sqlrooms/ai](../index.md) / createQueryToolRenderer

# Function: createQueryToolRenderer()

> **createQueryToolRenderer**(`options?`): [`ToolRenderer`](../type-aliases/ToolRenderer.md)<[`QueryToolOutput`](../type-aliases/QueryToolOutput.md), { `type`: `"query"`; `sqlQuery`: `string`; `reasoning`: `string`; }>

Creates a configured renderer for query tool results.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`QueryToolRendererOptions`](../type-aliases/QueryToolRendererOptions.md) |

## Returns

[`ToolRenderer`](../type-aliases/ToolRenderer.md)<[`QueryToolOutput`](../type-aliases/QueryToolOutput.md), { `type`: `"query"`; `sqlQuery`: `string`; `reasoning`: `string`; }>

## Example

```ts
toolRenderers: {
  query: createQueryToolRenderer({
    showSql: false,
    formatValue: myGeomFormatter,
  }),
}
```
