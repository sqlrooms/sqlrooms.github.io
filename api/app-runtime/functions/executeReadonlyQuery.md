---
url: 'https://sqlrooms.org/api/app-runtime/functions/executeReadonlyQuery.md'
---
[@sqlrooms/app-runtime](../index.md) / executeReadonlyQuery

# Function: executeReadonlyQuery()

> **executeReadonlyQuery**(`__namedParameters`): `Promise`<{ `rows`: `Record`<`string`, `unknown`>\[]; `columns`: `object`\[]; `rowCount`: `number`; `truncated`: `boolean`; `executionMs?`: `number`; }>

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | { `request`: { `sql`: `string`; `params?`: `unknown`\[]; `maxRows?`: `number`; }; `getState`: () => [`HtmlAppRuntimeSliceState`](../type-aliases/HtmlAppRuntimeSliceState.md) & [`HtmlAppRuntimeQueryState`](../type-aliases/HtmlAppRuntimeQueryState.md); `timeoutMs`: `number`; `maxRows`: `number`; } |
| `__namedParameters.request` | { `sql`: `string`; `params?`: `unknown`\[]; `maxRows?`: `number`; } |
| `__namedParameters.request.sql` | `string` |
| `__namedParameters.request.params?` | `unknown`\[] |
| `__namedParameters.request.maxRows?` | `number` |
| `__namedParameters.getState` | () => [`HtmlAppRuntimeSliceState`](../type-aliases/HtmlAppRuntimeSliceState.md) & [`HtmlAppRuntimeQueryState`](../type-aliases/HtmlAppRuntimeQueryState.md) |
| `__namedParameters.timeoutMs` | `number` |
| `__namedParameters.maxRows` | `number` |

## Returns

`Promise`<{ `rows`: `Record`<`string`, `unknown`>\[]; `columns`: `object`\[]; `rowCount`: `number`; `truncated`: `boolean`; `executionMs?`: `number`; }>
