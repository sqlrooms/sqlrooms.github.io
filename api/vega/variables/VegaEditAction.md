---
url: /api/vega/variables/VegaEditAction.md
---
[@sqlrooms/vega](../index.md) / VegaEditAction

# Variable: VegaEditAction

> `const` **VegaEditAction**: `React.FC`<[`VegaEditActionProps`](../interfaces/VegaEditActionProps.md)>

Edit action component for VegaLiteArrowChart.
Provides a popover with tabbed Vega-Lite spec and SQL editors.

Must be used within a VegaChartContainer to access editor context.

## Examples

```tsx
<VegaChartContainer spec={spec} sqlQuery={query} editable>
  <VegaChartDisplay>
    <VegaLiteArrowChart.Actions>
      <VegaExportAction />
      <VegaEditAction editorMode="both" />
    </VegaLiteArrowChart.Actions>
  </VegaChartDisplay>
</VegaChartContainer>
```

```tsx
// Spec editor only
<VegaEditAction editorMode="spec" />
```
