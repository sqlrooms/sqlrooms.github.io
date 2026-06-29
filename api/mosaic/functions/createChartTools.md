---
url: 'https://sqlrooms.org/api/mosaic/functions/createChartTools.md'
---
[@sqlrooms/mosaic](../index.md) / createChartTools

# Function: createChartTools()

> **createChartTools**(`chartTypes`, `params`, `toolNamePrefix`): `Record`<`string`, `Tool`>

Dynamically generate chart configuration tools from chart type definitions.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chartTypes` | [`ChartTypeDefinition`](../type-aliases/ChartTypeDefinition.md)<`any`>\[] | Array of chart type definitions |
| `params` | [`ChartToolParams`](../type-aliases/ChartToolParams.md) | Chart tool parameters containing addChart function, maxDataPoints limit, and databaseAdapter for table/column resolution |
| `toolNamePrefix` | `string` | Required prefix for generated tool names (e.g., 'create\_dashboard\_' or 'create\_block\_document\_chart\_') |

## Returns

`Record`<`string`, `Tool`>

Record mapping tool names to tool instances

## Example

```ts
const chartTypes = resolveChartTypes();
const params: ChartToolParams = {
  addChart: (chartParams) => dashboardAdapter.addPanel(chartParams),
  maxDataPoints: 10000,
  databaseAdapter: myDatabaseAdapter
};
const tools = createChartTools(chartTypes, params, 'create_dashboard_');
// Returns: { create_dashboard_histogram: Tool, create_dashboard_line_chart: Tool, ... }
```
