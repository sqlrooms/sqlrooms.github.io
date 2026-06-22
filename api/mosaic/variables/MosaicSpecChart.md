---
url: 'https://sqlrooms.org/api/mosaic/variables/MosaicSpecChart.md'
---
[@sqlrooms/mosaic](../index.md) / MosaicSpecChart

# Variable: MosaicSpecChart

> `const` **MosaicSpecChart**: `object`

Compound component for composable Mosaic chart editing.

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
|  `Container` | `FC`<[`MosaicChartContainerProps`](../interfaces/MosaicChartContainerProps.md)> | `MosaicChartContainer` |
|  `Display` | `FC`<[`MosaicChartDisplayProps`](../interfaces/MosaicChartDisplayProps.md)> | `MosaicChartDisplay` |
|  `SpecEditor` | `FC`<[`MosaicSpecEditorPanelProps`](../interfaces/MosaicSpecEditorPanelProps.md)> | `MosaicSpecEditorPanel` |
|  `Actions` | `FC`<[`MosaicChartEditorActionsProps`](../interfaces/MosaicChartEditorActionsProps.md)> | `MosaicChartEditorActions` |
|  `CodeMirrorEditor` | `FC`<[`MosaicCodeMirrorEditorProps`](../interfaces/MosaicCodeMirrorEditorProps.md)> | `MosaicCodeMirrorEditor` |

## Example

```tsx
<MosaicSpecChart.Container spec={mySpec} onSpecChange={save}>
  <MosaicSpecChart.Display />
  <MosaicSpecChart.SpecEditor />
  <MosaicSpecChart.Actions />
</MosaicSpecChart.Container>
```
