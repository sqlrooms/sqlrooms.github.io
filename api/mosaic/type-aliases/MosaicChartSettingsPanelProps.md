---
url: https://sqlrooms.org/api/mosaic/type-aliases/MosaicChartSettingsPanelProps.md
---
[@sqlrooms/mosaic](../index.md) / MosaicChartSettingsPanelProps

# Type Alias: MosaicChartSettingsPanelProps

> **MosaicChartSettingsPanelProps** = `object`

Props for the Mosaic chart settings panel.

## Properties

### dataTable?

> `optional` **dataTable?**: `DataTable`

Data table that supplies fields available to the chart configuration.

***

### config

> **config**: [`ChartConfig`](ChartConfig.md)

Current chart configuration shown in the settings controls.

***

### onChange

> **onChange**: (`config`) => `void`

Called when the chart configuration changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`ChartConfig`](ChartConfig.md) |

#### Returns

`void`

***

### readOnly?

> `optional` **readOnly?**: `boolean`

***

### showViewSpecButton?

> `optional` **showViewSpecButton?**: `boolean`

Whether to render the inline view-spec button above chart controls.
