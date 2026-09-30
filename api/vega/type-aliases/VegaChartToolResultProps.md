---
url: https://sqlrooms.org/api/vega/type-aliases/VegaChartToolResultProps.md
---
[@sqlrooms/vega](../index.md) / VegaChartToolResultProps

# Type Alias: VegaChartToolResultProps

> **VegaChartToolResultProps** = `ToolRendererProps`<[`VegaChartToolOutput`](VegaChartToolOutput.md), [`VegaChartToolParameters`](VegaChartToolParameters.md)> & `object`

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `className?` | `string` | - |
| `options?` | `EmbedOptions` | - |
| `editorMode?` | [`EditorMode`](EditorMode.md) | Which editors to show when viewing **Default** `'both'` |
| `aspectRatio?` | `number` | Width-to-height ratio used when no fixed or automatic height is selected. **Default** `16/9` |
| `height?` | [`VegaChartHeight`](VegaChartHeight.md) | Fixed outer chart height, or `'auto'` to opt into category-aware sizing. Automatic sizing falls back to the aspect ratio for ordinary charts. |
| `getHeight?` | [`VegaChartHeightResolver`](VegaChartHeightResolver.md) | Optional application-specific height policy. Returning `'auto'` applies the built-in category-aware sizing policy. |
