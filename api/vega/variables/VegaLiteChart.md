---
url: /api/vega/variables/VegaLiteChart.md
---
[@sqlrooms/vega](../index.md) / VegaLiteChart

# Variable: VegaLiteChart

> `const` **VegaLiteChart**: `FC`<`Omit`<`VegaLiteArrowChartProps`, `"arrowTable"`> & `object`> & `object`

Composable Vega-Lite chart component with editing capabilities.

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
| `SqlChart` | `FC`<`Omit`<`VegaLiteArrowChartProps`, `"arrowTable"`> & `object`> | `VegaLiteSqlChart` |
| `ArrowChart` | `FC`<`VegaLiteArrowChartProps`> & `object` | `VegaLiteArrowChart` |
| `Container` | `FC`<`VegaChartContainerProps`> | `VegaChartContainer` |
| `Chart` | `FC`<`VegaChartDisplayProps`> | `VegaChartDisplay` |
| `SpecEditor` | `FC`<`VegaSpecEditorPanelProps`> | `VegaSpecEditorPanel` |
| `SqlEditor` | `FC`<`VegaSqlEditorPanelProps`> | `VegaSqlEditorPanel` |
| `Actions` | `FC`<`VegaChartEditorActionsProps`> | `VegaChartEditorActions` |

## Example

```tsx
// Compound component pattern
<VegaLiteChart.Container
  spec={mySpec}
  sqlQuery={myQuery}
  editable={true}
  onSpecChange={(spec) => saveSpec(spec)}
>
  <VegaLiteChart.Chart />
  <VegaLiteChart.SpecEditor />
  <VegaLiteChart.SqlEditor />
  <VegaLiteChart.Actions />
</VegaLiteChart.Container>

// Simple usage (legacy)
<VegaLiteChart spec={mySpec} sqlQuery={myQuery} />
```
