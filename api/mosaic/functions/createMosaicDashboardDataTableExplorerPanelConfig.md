---
url: >-
  https://sqlrooms.org/api/mosaic/functions/createMosaicDashboardDataTableExplorerPanelConfig.md
---
[@sqlrooms/mosaic](../index.md) / createMosaicDashboardDataTableExplorerPanelConfig

# Function: createMosaicDashboardDataTableExplorerPanelConfig()

> **createMosaicDashboardDataTableExplorerPanelConfig**(`options?`): `object`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | { `title?`: `string`; `config?`: { `pageSize?`: `number`; }; } |
| `options.title?` | `string` |
| `options.config?` | { `pageSize?`: `number`; } |
| `options.config.pageSize?` | `number` |

## Returns

`object`

| Name | Type | Default value |
| ------ | ------ | ------ |
| `id` | `string` | - |
| `type` | `"data-table-explorer"` | - |
| `title` | `string` | - |
| `config` | { `pageSize?`: `number`; } | `DataTableExplorerPanelConfig` |
