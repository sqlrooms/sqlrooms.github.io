---
url: 'https://sqlrooms.org/api/notebook/functions/createNotebookSlice.md'
---
[@sqlrooms/notebook](../index.md) / createNotebookSlice

# Function: createNotebookSlice()

> **createNotebookSlice**(`props?`): `StateCreator`<[`NotebookSliceState`](../type-aliases/NotebookSliceState.md)>

Create the Notebook slice with tabs, cells, execution and dependency handling.
Supports pluggable custom renderers via options.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props?` | { `config?`: `Partial`<{ `artifacts`: `Record`<`string`, { `id`: `string`; `meta`: { `cellOrder`: `string`\[]; }; }>; `currentCellId?`: `string`; }>; } |
| `props.config?` | `Partial`<{ `artifacts`: `Record`<`string`, { `id`: `string`; `meta`: { `cellOrder`: `string`\[]; }; }>; `currentCellId?`: `string`; }> |

## Returns

`StateCreator`<[`NotebookSliceState`](../type-aliases/NotebookSliceState.md)>
