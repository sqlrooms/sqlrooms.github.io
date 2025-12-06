---
url: /api/ai/functions/createQueryTool.md
---
[@sqlrooms/ai](../index.md) / createQueryTool

# Function: createQueryTool()

> **createQueryTool**(`store`, `options`?): `object`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | `StoreApi`<[`AiSliceState`](../type-aliases/AiSliceState.md) & `DuckDbSliceState`> |
| `options`? | [`QueryToolOptions`](../type-aliases/QueryToolOptions.md) |

## Returns

`object`

| Name | Type | Default value |
| ------ | ------ | ------ |
|  `name` | `string` | 'query' |
|  `description` | `string` | - |
|  `parameters` | `ZodObject`<{ `type`: `ZodLiteral`<`"query"`>; `sqlQuery`: `ZodString`; `reasoning`: `ZodString`; }, `$strip`> | QueryToolParameters |
|  `execute` | (`params`, `options`?) => `Promise`<{ `llmResult`: { `success`: `boolean`; `data`: { `type`: `"query"`; `summary`: `null` | `Record`<`string`, `unknown`>\[]; `firstRows`: `Record`<`string`, `unknown`>\[]; }; `details`: `undefined`; `errorMessage`: `undefined`; }; `additionalData`: { `title`: `string`; `sqlQuery`: `string`; }; } | { `additionalData`: `undefined`; `llmResult`: { `data`: `undefined`; `success`: `boolean`; `details`: `string`; `errorMessage`: `string`; }; }> | - |
|  `component` | (`props`) => `Element` | QueryToolResult |
