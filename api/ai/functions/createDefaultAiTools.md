---
url: /api/ai/functions/createDefaultAiTools.md
---
[@sqlrooms/ai](../index.md) / createDefaultAiTools

# Function: createDefaultAiTools()

> **createDefaultAiTools**(`store`, `options`?): `OpenAssistantToolSet`

Default tools available to the AI assistant for data analysis
Includes:

* query: Executes SQL queries against DuckDB

## Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | `StoreApi`<[`AiSliceState`](../type-aliases/AiSliceState.md) & `DuckDbSliceState`> |
| `options`? | [`DefaultToolsOptions`](../type-aliases/DefaultToolsOptions.md) |

## Returns

`OpenAssistantToolSet`
