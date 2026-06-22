---
url: 'https://sqlrooms.org/api/cells/type-aliases/InputCell.md'
---
[@sqlrooms/cells](../index.md) / InputCell

# Type Alias: InputCell

> **InputCell** = `object`

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
|  `id` | `string` | - |
|  `type` | `"input"` | - |
|  `data` | { `title`: `string`; `input`: { `kind`: `"text"`; `varName`: `string`; `value`: `string`; } | { `kind`: `"slider"`; `varName`: `string`; `min`: `number`; `max`: `number`; `step`: `number`; `value`: `number`; } | { `kind`: `"dropdown"`; `varName`: `string`; `options`: `string`\[]; `value`: `string`; }; } | `InputCellData` |
