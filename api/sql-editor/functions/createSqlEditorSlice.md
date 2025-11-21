---
url: /api/sql-editor/functions/createSqlEditorSlice.md
---
[@sqlrooms/sql-editor](../index.md) / createSqlEditorSlice

# Function: createSqlEditorSlice()

> **createSqlEditorSlice**(`__namedParameters`): `StateCreator`<[`SqlEditorSliceState`](../type-aliases/SqlEditorSliceState.md)>

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | { `config`: { `queries`: `object`\[]; `selectedQueryId`: `string`; `lastExecutedQuery`: `string`; `closedTabIds`: `string`\[]; }; `queryResultLimit`: `number`; `queryResultLimitOptions`: `number`\[]; } |
| `__namedParameters.config`? | { `queries`: `object`\[]; `selectedQueryId`: `string`; `lastExecutedQuery`: `string`; `closedTabIds`: `string`\[]; } |
| `__namedParameters.config.queries` | `object`\[] |
| `__namedParameters.config.selectedQueryId` | `string` |
| `__namedParameters.config.lastExecutedQuery`? | `string` |
| `__namedParameters.config.closedTabIds` | `string`\[] |
| `__namedParameters.queryResultLimit`? | `number` |
| `__namedParameters.queryResultLimitOptions`? | `number`\[] |

## Returns

`StateCreator`<[`SqlEditorSliceState`](../type-aliases/SqlEditorSliceState.md)>
