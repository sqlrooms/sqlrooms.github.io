---
url: /api/vega/variables/VegaChartActions.md
---
[@sqlrooms/vega](../index.md) / VegaChartActions

# Variable: VegaChartActions

> `const` **VegaChartActions**: `React.FC`<[`VegaChartActionsProps`](../interfaces/VegaChartActionsProps.md)>

Container component for chart actions toolbar.
Positions actions as an overlay in the top-right corner of the chart.

## Example

```tsx
<VegaLiteArrowChart spec={spec} arrowTable={data}>
  <VegaChartActions>
    <VegaExportAction />
    <Separator orientation="vertical" className="h-4" />
    <Button size="xs" variant="ghost" onClick={handleRefresh}>
      <RefreshCw className="h-4 w-4" />
    </Button>
  </VegaChartActions>
</VegaLiteArrowChart>
```
