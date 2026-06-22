---
url: 'https://sqlrooms.org/api/ai/functions/createQueryTool.md'
---
[@sqlrooms/ai](../index.md) / createQueryTool

# Function: createQueryTool()

> **createQueryTool**(`store`, `options?`): `Tool`<{ `type`: `"query"`; `sqlQuery`: `string`; `reasoning`: `string`; }, [`QueryToolOutput`](../type-aliases/QueryToolOutput.md)>

## Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | `StoreApi`<[`AiSliceState`](../type-aliases/AiSliceState.md) & `DuckDbSliceState`> |
| `options?` | [`QueryToolOptions`](../type-aliases/QueryToolOptions.md) |

## Returns

`Tool`<{ `type`: `"query"`; `sqlQuery`: `string`; `reasoning`: `string`; }, [`QueryToolOutput`](../type-aliases/QueryToolOutput.md)>
