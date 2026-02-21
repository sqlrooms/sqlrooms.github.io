---
url: /api/vega/functions/useVegaChartContext.md
---
[@sqlrooms/vega](../index.md) / useVegaChartContext

# Function: useVegaChartContext()

> **useVegaChartContext**(): [`VegaChartContextValue`](../interfaces/VegaChartContextValue.md)

Hook to access the Vega chart context within action components.

## Returns

[`VegaChartContextValue`](../interfaces/VegaChartContextValue.md)

## Example

```tsx
function CustomExportAction() {
  const { embed } = useVegaChartContext();

  const handleExport = async () => {
    if (!embed?.view) return;
    const canvas = await embed.view.toCanvas(2);
    // Do something with the canvas...
  };

  return <Button onClick={handleExport}>Export</Button>;
}
```

## Throws

Error if used outside of VegaLiteArrowChart
