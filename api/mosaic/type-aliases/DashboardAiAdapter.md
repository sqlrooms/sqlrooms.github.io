---
url: 'https://sqlrooms.org/api/mosaic/type-aliases/DashboardAiAdapter.md'
---
[@sqlrooms/mosaic](../index.md) / DashboardAiAdapter

# Type Alias: DashboardAiAdapter

> **DashboardAiAdapter** = `object`

Dashboard adapter with full dashboard panel management capabilities.
Extends BaseAiAdapter with dashboard-specific operations.

## Properties

### getPanelIssue?

> `optional` **getPanelIssue?**: (`panelId`) => [`ChartRuntimeIssue`](ChartRuntimeIssue.md) | `undefined`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `panelId` | `string` |

#### Returns

[`ChartRuntimeIssue`](ChartRuntimeIssue.md) | `undefined`

***

### getSelectedTable?

> `optional` **getSelectedTable?**: () => `string` | `undefined`

#### Returns

`string` | `undefined`

***

### getPanels?

> `optional` **getPanels?**: () => [`MosaicDashboardPanelConfig`](MosaicDashboardPanelConfig.md)\[]

#### Returns

[`MosaicDashboardPanelConfig`](MosaicDashboardPanelConfig.md)\[]

***

### setSelectedTable

> **setSelectedTable**: (`tableName`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tableName` | `string` |

#### Returns

`void`

## Methods

### getPanel()

> **getPanel**(`panelId`): { `id`: `string`; `type`: `"vgplot"`; `title`: `string`; `source?`: { `tableName?`: `string`; `sqlQuery?`: `string`; }; `config`: { `chartType`: `"histogram"`; `settings`: { `field?`: `string`; `maxBins?`: `number`; `color?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"count-plot"`; `settings`: { `field?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"line-chart"`; `settings`: { `x?`: `string`; `xInterval?`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields?`: `object`\[]; `showLegend`: `boolean`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"scatter-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; `size?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"heatmap"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"box-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"custom-spec"`; `settingsOpen?`: `boolean`; `settings`: { `vgPlotSpec?`: `unknown`; }; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `string`; `settings`: `Record`<`string`, `unknown`>; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }; } | { `id`: `string`; `type`: `"data-table-explorer"`; `title`: `string`; `source?`: { `tableName?`: `string`; `sqlQuery?`: `string`; }; `config`: { `pageSize?`: `number`; }; } | { `id`: `string`; `type`: `string`; `title`: `string`; `source?`: { `tableName?`: `string`; `sqlQuery?`: `string`; }; `config`: `Record`<`string`, `unknown`>; } | `undefined`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `panelId` | `string` |

#### Returns

{ `id`: `string`; `type`: `"vgplot"`; `title`: `string`; `source?`: { `tableName?`: `string`; `sqlQuery?`: `string`; }; `config`: { `chartType`: `"histogram"`; `settings`: { `field?`: `string`; `maxBins?`: `number`; `color?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"count-plot"`; `settings`: { `field?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"line-chart"`; `settings`: { `x?`: `string`; `xInterval?`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields?`: `object`\[]; `showLegend`: `boolean`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"scatter-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; `size?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"heatmap"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"box-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"custom-spec"`; `settingsOpen?`: `boolean`; `settings`: { `vgPlotSpec?`: `unknown`; }; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `string`; `settings`: `Record`<`string`, `unknown`>; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }; } | { `id`: `string`; `type`: `"data-table-explorer"`; `title`: `string`; `source?`: { `tableName?`: `string`; `sqlQuery?`: `string`; }; `config`: { `pageSize?`: `number`; }; } | { `id`: `string`; `type`: `string`; `title`: `string`; `source?`: { `tableName?`: `string`; `sqlQuery?`: `string`; }; `config`: `Record`<`string`, `unknown`>; } | `undefined`

***

### updatePanel()

> **updatePanel**(`panelId`, `patch`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `panelId` | `string` |
| `patch` | `Partial`<`PanelPatch`> |

#### Returns

`void`

***

### removePanel()

> **removePanel**(`panelId`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `panelId` | `string` |

#### Returns

`void`

***

### addPanel()

> **addPanel**(`panel`): `string`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `panel` | { `id`: `string`; `type`: `"vgplot"`; `title`: `string`; `source?`: { `tableName?`: `string`; `sqlQuery?`: `string`; }; `config`: { `chartType`: `"histogram"`; `settings`: { `field?`: `string`; `maxBins?`: `number`; `color?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"count-plot"`; `settings`: { `field?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"line-chart"`; `settings`: { `x?`: `string`; `xInterval?`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields?`: `object`\[]; `showLegend`: `boolean`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"scatter-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; `size?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"heatmap"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"box-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"custom-spec"`; `settingsOpen?`: `boolean`; `settings`: { `vgPlotSpec?`: `unknown`; }; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `string`; `settings`: `Record`<`string`, `unknown`>; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }; } | { `id`: `string`; `type`: `"data-table-explorer"`; `title`: `string`; `source?`: { `tableName?`: `string`; `sqlQuery?`: `string`; }; `config`: { `pageSize?`: `number`; }; } | { `id`: `string`; `type`: `string`; `title`: `string`; `source?`: { `tableName?`: `string`; `sqlQuery?`: `string`; }; `config`: `Record`<`string`, `unknown`>; } |

#### Returns

`string`
