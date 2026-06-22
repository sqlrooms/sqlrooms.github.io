---
url: 'https://sqlrooms.org/api/mosaic/functions/createDashboardAiTools.md'
---
[@sqlrooms/mosaic](../index.md) / createDashboardAiTools

# Function: createDashboardAiTools()

> **createDashboardAiTools**(`options`): `Record`<`string`, `Tool`>

Creates the complete set of AI tools for dashboard operations, including chart tools and data table explorer.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`CreateDashboardAiToolsOptions`](../type-aliases/CreateDashboardAiToolsOptions.md) | Configuration options for creating dashboard tools |

## Returns

`Record`<`string`, `Tool`>

Record of tool names to Tool instances, including built-in and any extra tools
