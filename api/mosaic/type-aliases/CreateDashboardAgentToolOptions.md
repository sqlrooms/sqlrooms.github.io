---
url: >-
  https://sqlrooms.org/api/mosaic/type-aliases/CreateDashboardAgentToolOptions.md
---
[@sqlrooms/mosaic](../index.md) / CreateDashboardAgentToolOptions

# Type Alias: CreateDashboardAgentToolOptions\<TState>

> **CreateDashboardAgentToolOptions**<`TState`> = [`BaseAgentToolOptions`](BaseAgentToolOptions.md)<`TState`> & `object`

Options for creating a dashboard agent tool.
Extends base agent options with dashboard-specific database adapter and optional extra tools.

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `databaseAdapter` | [`DatabaseAiAdapter`](DatabaseAiAdapter.md) | - |
| `extraTools?` | [`ExtraDashboardAiToolsFactory`](ExtraDashboardAiToolsFactory.md) | Host-provided dashboard tools keyed by their registered tool name. Register geospatial map tools under MAP\_TOOL\_KEY so prompts and tools stay in sync. |

## Type Parameters

| Type Parameter |
| ------ |
| `TState` |
