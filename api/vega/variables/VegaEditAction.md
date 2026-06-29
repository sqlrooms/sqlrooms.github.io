---
url: 'https://sqlrooms.org/api/vega/variables/VegaEditAction.md'
---
[@sqlrooms/vega](../index.md) / VegaEditAction

# Variable: VegaEditAction

> `const` **VegaEditAction**: `React.FC`<[`VegaEditActionProps`](../interfaces/VegaEditActionProps.md)>

View/Edit action component for VegaLiteArrowChart.
Provides a popover with tabbed Vega-Lite spec and SQL viewers.
When `editable` is true in the context, shows editing controls.

Must be used within a VegaChartContainer to access editor context.

## Example

```tsx
<VegaChartContainer spec={spec} sqlQuery={query}>
  <VegaChartDisplay>
    <VegaLiteArrowChart.Actions>
      <VegaExportAction />
      <VegaEditAction editorMode="both" />
    </VegaLiteArrowChart.Actions>
  </VegaChartDisplay>
</VegaChartContainer>
```
