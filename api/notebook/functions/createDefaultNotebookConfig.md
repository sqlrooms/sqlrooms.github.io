---
url: 'https://sqlrooms.org/api/notebook/functions/createDefaultNotebookConfig.md'
---
[@sqlrooms/notebook](../index.md) / createDefaultNotebookConfig

# Function: createDefaultNotebookConfig()

> **createDefaultNotebookConfig**(`props?`): `object`

Create default `notebook.config` structure with no cells.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `Partial`<[`NotebookSliceConfig`](../type-aliases/NotebookSliceConfig.md)> |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `artifacts` | `Record`<`string`, { `id`: `string`; `meta`: { `cellOrder`: `string`\[]; }; }> |
| `currentCellId?` | `string` |
