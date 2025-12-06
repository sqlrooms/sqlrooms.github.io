---
url: /api/sql-editor/functions/createSqlEditorSlice.md
---
[@sqlrooms/sql-editor](../index.md) / createSqlEditorSlice

# Function: createSqlEditorSlice()

> **createSqlEditorSlice**(`__namedParameters`): `StateCreator`<[`SqlEditorSliceState`](../type-aliases/SqlEditorSliceState.md)>

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | { `config`: { `queries`: `object`\[]; `selectedQueryId`: `string`; `lastExecutedQuery`: `string`; `openTabs`: `string`\[]; }; `queryResultLimit`: `number`; `queryResultLimitOptions`: `number`\[]; } |
| `__namedParameters.config`? | { `queries`: `object`\[]; `selectedQueryId`: `string`; `lastExecutedQuery`: `string`; `openTabs`: `string`\[]; } |
| `__namedParameters.config.queries` | `object`\[] |
| `__namedParameters.config.selectedQueryId` | `string` |
| `__namedParameters.config.lastExecutedQuery`? | `string` |
| `__namedParameters.config.openTabs` | `string`\[] |
| `__namedParameters.queryResultLimit`? | `number` |
| `__namedParameters.queryResultLimitOptions`? | `number`\[] |

## Returns

`StateCreator`<[`SqlEditorSliceState`](../type-aliases/SqlEditorSliceState.md)>
