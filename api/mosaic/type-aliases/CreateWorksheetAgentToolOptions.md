---
url: >-
  https://sqlrooms.org/api/mosaic/type-aliases/CreateWorksheetAgentToolOptions.md
---
[@sqlrooms/mosaic](../index.md) / CreateWorksheetAgentToolOptions

# Type Alias: CreateWorksheetAgentToolOptions\<TState>

> **CreateWorksheetAgentToolOptions**<`TState`> = [`BaseAgentToolOptions`](BaseAgentToolOptions.md)<`TState`> & `object`

Options for creating a worksheet agent tool.
Extends base agent options with worksheet-specific adapters and tools.

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `worksheetAdapter` | [`WorksheetAiAdapter`](WorksheetAiAdapter.md) | - |
| `databaseAdapter` | [`DatabaseAiAdapter`](DatabaseAiAdapter.md) | - |
| `dashboardAgentTool` | `Tool` | - |
| `htmlAppBlocksEnabled?` | `boolean` | Whether the worksheet agent should expose built-in HTML app block tools and instructions. Defaults to `true` for existing integrations. Hosts can set this to `false` when HTML app blocks are behind a feature gate. |
| `extraTools?` | [`ExtraWorksheetAiToolsFactory`](ExtraWorksheetAiToolsFactory.md) | Host-provided worksheet tools keyed by their registered tool name. Register custom tools (e.g., maps, charts, data loaders) to extend the worksheet agent's capabilities. |

## Type Parameters

| Type Parameter |
| ------ |
| `TState` |
