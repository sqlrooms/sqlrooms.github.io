---
url: /api/vega/variables/VegaLiteChart.md
---
[@sqlrooms/vega](../index.md) / VegaLiteChart

# Variable: VegaLiteChart

> `const` **VegaLiteChart**: `FC`<{ `className?`: `string`; `width?`: `number` | `"auto"`; `height?`: `number` | `"auto"`; `aspectRatio?`: `number`; `sqlQuery`: `string`; `spec`: `string` | [`VisualizationSpec`](../type-aliases/VisualizationSpec.md); `dataName?`: `string`; }> & `object`

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
| `SqlChart` | `FC`<{ `className?`: `string`; `width?`: `number` | `"auto"`; `height?`: `number` | `"auto"`; `aspectRatio?`: `number`; `sqlQuery`: `string`; `spec`: `string` | [`VisualizationSpec`](../type-aliases/VisualizationSpec.md); `dataName?`: `string`; }> | `VegaLiteSqlChart` |
| `ArrowChart` | `FC`<{ `className?`: `string`; `width?`: `number` | `"auto"`; `height?`: `number` | `"auto"`; `aspectRatio?`: `number`; `spec`: `string` | [`VisualizationSpec`](../type-aliases/VisualizationSpec.md); `arrowTable`: `Table`<`any`> | `undefined`; `dataName?`: `string`; }> | `ArrowChart` |
