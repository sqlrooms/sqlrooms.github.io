---
url: 'https://sqlrooms.org/api/notebook/type-aliases/NotebookSliceConfig.md'
---
[@sqlrooms/notebook](../index.md) / NotebookSliceConfig

# Type Alias: NotebookSliceConfig

> **NotebookSliceConfig** = `object`

Notebook Slice Config (view-only artifact runtime metadata).

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `artifacts` | `Record`<`string`, { `id`: `string`; `meta`: { `cellOrder`: `string`\[]; }; }> |
|  `currentCellId?` | `string` |
