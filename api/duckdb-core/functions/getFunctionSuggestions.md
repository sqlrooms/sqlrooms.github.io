---
url: 'https://sqlrooms.org/api/duckdb-core/functions/getFunctionSuggestions.md'
---
[@sqlrooms/duckdb-core](../index.md) / getFunctionSuggestions

# Function: getFunctionSuggestions()

> **getFunctionSuggestions**(`connector`, `wordBeforeCursor`, `limit?`): `Promise`<[`GroupedFunctionSuggestion`](../type-aliases/GroupedFunctionSuggestion.md)\[]>

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `connector` | [`DuckDbConnector`](../interfaces/DuckDbConnector.md) | `undefined` |
| `wordBeforeCursor` | `string` | `undefined` |
| `limit` | `number` | `100` |

## Returns

`Promise`<[`GroupedFunctionSuggestion`](../type-aliases/GroupedFunctionSuggestion.md)\[]>
