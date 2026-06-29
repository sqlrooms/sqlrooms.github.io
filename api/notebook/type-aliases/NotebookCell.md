---
url: 'https://sqlrooms.org/api/notebook/type-aliases/NotebookCell.md'
---
[@sqlrooms/notebook](../index.md) / NotebookCell

# Type Alias: NotebookCell

> **NotebookCell** = { `id`: `string`; `type`: `"sql"`; `data`: { `title`: `string`; `sql`: `string`; `resultName?`: `string`; `connectorId?`: `string`; }; } | { `id`: `string`; `type`: `"text"`; `data`: { `title`: `string`; `text`: `string`; }; } | { `id`: `string`; `type`: `"vega"`; `data`: { `title`: `string`; `sqlId?`: `string`; `tableRef?`: `string`; `sql?`: `string`; `vegaSpec?`: `any`; `crossFilter`: { `enabled`: `boolean`; `brushField?`: `string`; `brushFieldType?`: `BrushFieldType`; }; }; } | { `id`: `string`; `type`: `"input"`; `data`: { `title`: `string`; `input`: { `kind`: `"text"`; `varName`: `string`; `value`: `string`; } | { `kind`: `"slider"`; `varName`: `string`; `min`: `number`; `max`: `number`; `step`: `number`; `value`: `number`; } | { `kind`: `"dropdown"`; `varName`: `string`; `options`: `string`\[]; `value`: `string`; }; }; } | { `id`: `string`; `type`: `"pivot"`; `data`: { `pivotId`: `string`; }; }
