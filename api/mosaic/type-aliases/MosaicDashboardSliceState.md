---
url: 'https://sqlrooms.org/api/mosaic/type-aliases/MosaicDashboardSliceState.md'
---
[@sqlrooms/mosaic](../index.md) / MosaicDashboardSliceState

# Type Alias: MosaicDashboardSliceState

> **MosaicDashboardSliceState** = `object`

## Properties

### mosaicDashboard

> **mosaicDashboard**: `SliceFunctions` & `object`

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `config` | [`MosaicDashboardSliceConfig`](MosaicDashboardSliceConfig.md) |
| `runtime` | { `retainedChartsByPanelId`: `Record`<`string`, `RetainedVgPlotChart`>; `panelIssuesByPanelId`: `Record`<`string`, [`ChartRuntimeIssue`](ChartRuntimeIssue.md)>; `panelClients`: `Record`<`string`, `MosaicClient`\[]>; } |
| `chartTypes?` | [`ChartTypeDefinition`](ChartTypeDefinition.md)\[] |
| `addPanelActions` | [`MosaicDashboardAddPanelAction`](MosaicDashboardAddPanelAction.md)\[] |
| `createDashboard()` | (`title?`, `layoutType?`) => `string` |
| `ensureDashboard()` | (`dashboardId`, `title?`, `layoutType?`) => `void` |
| `removeDashboard()` | (`dashboardId`) => `void` |
| `getDashboard()` | (`dashboardId`) => `MosaicDashboardEntry` | `undefined` |
| `setDashboardTitle()` | (`dashboardId`, `title`) => `void` |
| `setSelectedTable()` | (`dashboardId`, `tableName`) => `void` |
| `setLastSelectedTable()` | (`dashboardId`, `tableName`) => `void` |
| `panelRenderers` | `PanelRenderersRecord` |
| `registerPanelRenderer()` | (`type`, `renderer`) => `void` |
| `unregisterPanelRenderer()` | (`type`) => `void` |
| `addPanel()` | (`dashboardId`, `panel`) => `MosaicDashboardPanelConfig`\[`"id"`] |
| `updatePanel()` | (`dashboardId`, `panelId`, `patch`) => `void` |
| `removePanel()` | (`dashboardId`, `panelId`) => `void` |
| `getRetainedChart()` | (`dashboardId`, `panelId`) => `RetainedVgPlotChart` | `undefined` |
| `getRetainedChartByKey()` | (`runtimeKey`) => `RetainedVgPlotChart` | `undefined` |
| `setRetainedChart()` | (`dashboardId`, `panelId`, `chart`) => `void` |
| `setRetainedChartByKey()` | (`runtimeKey`, `chart`) => `void` |
| `getPanelIssue()` | (`dashboardId`, `panelId`) => [`ChartRuntimeIssue`](ChartRuntimeIssue.md) | `undefined` |
| `getPanelIssueByKey()` | (`runtimeKey`) => [`ChartRuntimeIssue`](ChartRuntimeIssue.md) | `undefined` |
| `reportPanelIssue()` | (`dashboardId`, `panelId`, `issue`) => `void` |
| `reportPanelIssueByKey()` | (`runtimeKey`, `issue`) => `void` |
| `clearPanelIssue()` | (`dashboardId`, `panelId`) => `void` |
| `clearPanelIssueByKey()` | (`runtimeKey`) => `void` |
| `evictPanelRuntime()` | (`dashboardId`, `panelId`) => `void` |
| `evictPanelRuntimeByKey()` | (`runtimeKey`) => `void` |
| `evictDashboardRuntime()` | (`dashboardId`, `options?`) => `void` |
| `clearAllDashboardRuntime()` | () => `void` |
| `setLayout()` | (`dashboardId`, `layout`) => `void` |
| `registerPanelClient()` | (`dashboardId`, `panelId`, `client`) => `void` |
| `unregisterPanelClient()` | (`dashboardId`, `panelId`, `client`) => `void` |
| `getPanelClients()` | (`dashboardId`, `panelId`) => `MosaicClient`\[] |
