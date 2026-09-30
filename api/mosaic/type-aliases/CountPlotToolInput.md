---
url: https://sqlrooms.org/api/mosaic/type-aliases/CountPlotToolInput.md
---
[@sqlrooms/mosaic](../index.md) / CountPlotToolInput

# Type Alias: CountPlotToolInput

> **CountPlotToolInput** = `object`

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
|  `tableName` | `string` | - |
|  `title?` | `string` | - |
|  `panelId?` | `string` | - |
|  `reasoning` | `string` | - |
|  `settings` | { `field`: `string`; `metric?`: `"count"` | `"aggregate"`; `valueField?`: `string`; `aggregate?`: `"sum"` | `"max"` | `"min"` | `"avg"`; `sort?`: `"value-desc"` | `"value-asc"` | `"label-asc"` | `"label-desc"`; `maxBars?`: `number`; `leftMargin?`: `number`; } | `CountPlotToolSettings` |
