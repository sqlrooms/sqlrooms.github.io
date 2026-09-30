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
| `authorizeDashboard?` | `AuthorizeDashboard`<`TState`> | Optional host authorization for a resolved dashboard target. Hosts can use this to enforce product-specific ownership constraints, such as requiring the dashboard to belong to a captured block document. The callback runs once when the dashboard agent starts and again with fresh state immediately before every adapter mutation. Throwing or rejecting blocks the operation; it does not make the agent retarget a different dashboard. |
| `extraTools?` | [`ExtraDashboardAiToolsFactory`](ExtraDashboardAiToolsFactory.md) | Host-provided dashboard tools keyed by their registered tool name. Register geospatial map tools under MAP\_TOOL\_KEY so prompts and tools stay in sync. |

## Type Parameters

| Type Parameter |
| ------ |
| `TState` |
