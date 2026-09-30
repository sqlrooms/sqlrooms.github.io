---
url: https://sqlrooms.org/api/mosaic/type-aliases/ChartSettingsPanelProps.md
---
[@sqlrooms/mosaic](../index.md) / ChartSettingsPanelProps

# Type Alias: ChartSettingsPanelProps

> **ChartSettingsPanelProps** = `object`

Props for the ChartSettingsPanel component.

## Properties

### dataTable

> **dataTable**: `DataTable` | `undefined`

The data table used by the chart

***

### config

> **config**: [`ChartConfig`](ChartConfig.md)

Current chart configuration

***

### onConfigChange

> **onConfigChange**: (`config`) => `void`

Callback when chart configuration changes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`ChartConfig`](ChartConfig.md) |

#### Returns

`void`

***

### onTableChange

> **onTableChange**: (`table`) => `void`

Callback when the selected data table changes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `table` | `DataTable` |

#### Returns

`void`

***

### title?

> `optional` **title?**: `string`

Optional title/caption for the chart

***

### onTitleChange?

> `optional` **onTitleChange?**: (`title`) => `void`

Callback when the chart title changes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `title` | `string` |

#### Returns

`void`

***

### readOnly?

> `optional` **readOnly?**: `boolean`

Whether settings should be non-mutating

***

### onClose?

> `optional` **onClose?**: () => `void`

Optional callback to close the host settings panel

#### Returns

`void`
