---
url: 'https://sqlrooms.org/api/cells/type-aliases/InputCellData.md'
---
[@sqlrooms/cells](../index.md) / InputCellData

# Type Alias: InputCellData

> **InputCellData** = `object`

Input Cell Data

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
|  `title` | `string` | - |
|  `input` | { `kind`: `"text"`; `varName`: `string`; `value`: `string`; } | { `kind`: `"slider"`; `varName`: `string`; `min`: `number`; `max`: `number`; `step`: `number`; `value`: `number`; } | { `kind`: `"dropdown"`; `varName`: `string`; `options`: `string`\[]; `value`: `string`; } | `InputUnion` |
