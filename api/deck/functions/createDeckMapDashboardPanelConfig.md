---
url: https://sqlrooms.org/api/deck/functions/createDeckMapDashboardPanelConfig.md
---
[@sqlrooms/deck](../index.md) / createDeckMapDashboardPanelConfig

# Function: createDeckMapDashboardPanelConfig()

> **createDeckMapDashboardPanelConfig**(`options`): `object`

Creates a Mosaic panel only for the opt-in dashboard adapter.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CreateDeckMapDashboardPanelConfigOptions`](../type-aliases/CreateDeckMapDashboardPanelConfigOptions.md) |

## Returns

`object`

| Name | Type | Default value |
| ------ | ------ | ------ |
| `id` | `string` | - |
| `type` | `string` | `DECK_MAP_DASHBOARD_PANEL_TYPE` |
| `title` | `string` | - |
| `config` | `Record`<`string`, `unknown`> | - |
