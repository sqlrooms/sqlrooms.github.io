---
url: 'https://sqlrooms.org/api/mosaic/interfaces/DashboardToolDeps.md'
---
[@sqlrooms/mosaic](../index.md) / DashboardToolDeps

# Interface: DashboardToolDeps

Dependencies for dashboard-specific tools that manage panels.

## Properties

### addPanel

> **addPanel**: (`dashboardId`, `panel`) => `string`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `dashboardId` | `string` |
| `panel` | `any` |

#### Returns

`string`

***

### updatePanel

> **updatePanel**: (`dashboardId`, `panelId`, `patch`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `dashboardId` | `string` |
| `panelId` | `string` |
| `patch` | `Partial`<`PanelPatch`> |

#### Returns

`void`

***

### getDashboard

> **getDashboard**: (`dashboardId`) => { `id`: `string`; `title`: `string`; `layoutType`: `"grid"` | `"dock"`; `selectedTable?`: `string`; `panels`: ({ `id`: `string`; `type`: `"vgplot"`; `title`: `string`; `source?`: { `tableName?`: `string`; `sqlQuery?`: `string`; }; `config`: { `chartType`: `"histogram"`; `settings`: { `field?`: `string`; `maxBins?`: `number`; `color?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `"count-plot"`; `settings`: { `field?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `"line-chart"`; `settings`: { `x?`: `string`; `xInterval?`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields?`: ...\[]; `showLegend`: `boolean`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `"scatter-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; `size?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `"heatmap"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `"box-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `"custom-spec"`; `settingsOpen?`: `boolean`; `settings`: { `vgPlotSpec?`: `unknown`; }; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `string`; `settings`: `Record`<`string`, `unknown`>; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; }; } | { `id`: `string`; `type`: `"data-table-explorer"`; `title`: `string`; `source?`: { `tableName?`: `string`; `sqlQuery?`: `string`; }; `config`: { `pageSize?`: `number`; }; } | { `id`: `string`; `type`: `string`; `title`: `string`; `source?`: { `tableName?`: `string`; `sqlQuery?`: `string`; }; `config`: `Record`<`string`, `unknown`>; })\[]; `layout`: `LayoutNode` | `null`; `updatedAt`: `number`; } | `undefined`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `dashboardId` | `string` |

#### Returns

{ `id`: `string`; `title`: `string`; `layoutType`: `"grid"` | `"dock"`; `selectedTable?`: `string`; `panels`: ({ `id`: `string`; `type`: `"vgplot"`; `title`: `string`; `source?`: { `tableName?`: `string`; `sqlQuery?`: `string`; }; `config`: { `chartType`: `"histogram"`; `settings`: { `field?`: `string`; `maxBins?`: `number`; `color?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `"count-plot"`; `settings`: { `field?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `"line-chart"`; `settings`: { `x?`: `string`; `xInterval?`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields?`: ...\[]; `showLegend`: `boolean`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `"scatter-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; `size?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `"heatmap"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `"box-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `"custom-spec"`; `settingsOpen?`: `boolean`; `settings`: { `vgPlotSpec?`: `unknown`; }; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `string`; `settings`: `Record`<`string`, `unknown`>; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; }; } | { `id`: `string`; `type`: `"data-table-explorer"`; `title`: `string`; `source?`: { `tableName?`: `string`; `sqlQuery?`: `string`; }; `config`: { `pageSize?`: `number`; }; } | { `id`: `string`; `type`: `string`; `title`: `string`; `source?`: { `tableName?`: `string`; `sqlQuery?`: `string`; }; `config`: `Record`<`string`, `unknown`>; })\[]; `layout`: `LayoutNode` | `null`; `updatedAt`: `number`; } | `undefined`

***

### getPanelIssue?

> `optional` **getPanelIssue?**: (`dashboardId`, `panelId`) => [`ChartRuntimeIssue`](../type-aliases/ChartRuntimeIssue.md) | `undefined`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `dashboardId` | `string` |
| `panelId` | `string` |

#### Returns

[`ChartRuntimeIssue`](../type-aliases/ChartRuntimeIssue.md) | `undefined`

***

### removePanel

> **removePanel**: (`dashboardId`, `panelId`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `dashboardId` | `string` |
| `panelId` | `string` |

#### Returns

`void`

***

### setCurrentArtifact

> **setCurrentArtifact**: (`artifactId`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `artifactId` | `string` |

#### Returns

`void`
