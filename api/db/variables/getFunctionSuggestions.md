---
url: 'https://sqlrooms.org/api/db/variables/getFunctionSuggestions.md'
---
[@sqlrooms/db](../index.md) / getFunctionSuggestions

# Variable: getFunctionSuggestions

> `const` **getFunctionSuggestions**: (`connector`, `wordBeforeCursor`, `limit?`) => `Promise`<[`GroupedFunctionSuggestion`](../type-aliases/GroupedFunctionSuggestion.md)\[]>

## Parameters

| Parameter | Type |
| ------ | ------ |
| `connector` | [`DuckDbConnector`](../interfaces/DuckDbConnector.md) |
| `wordBeforeCursor` | `string` |
| `limit?` | `number` |

## Returns

`Promise`<[`GroupedFunctionSuggestion`](../type-aliases/GroupedFunctionSuggestion.md)\[]>
