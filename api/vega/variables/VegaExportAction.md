---
url: /api/vega/variables/VegaExportAction.md
---
[@sqlrooms/vega](../index.md) / VegaExportAction

# Variable: VegaExportAction

> `const` **VegaExportAction**: `React.FC`<[`VegaExportActionProps`](../interfaces/VegaExportActionProps.md)>

Export action component for VegaLiteArrowChart.
Provides a dropdown menu with PNG and SVG export options.

## Examples

```tsx
<VegaLiteArrowChart spec={spec} arrowTable={data}>
  <VegaLiteArrowChart.Actions>
    <VegaExportAction pngScale={3} />
  </VegaLiteArrowChart.Actions>
</VegaLiteArrowChart>
```

```tsx
// With custom filename
<VegaExportAction
  getFilename={(format) => `my-chart-${Date.now()}.${format}`}
/>
```
