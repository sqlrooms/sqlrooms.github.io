---
url: 'https://sqlrooms.org/api/vega.md'
---
# @sqlrooms/vega

Vega-Lite chart components and AI chart tool integration for SQLRooms.

## Installation

```bash
npm install @sqlrooms/vega @sqlrooms/duckdb @sqlrooms/ui
```

## Main exports

* `VegaLiteChart` (simple + compound component API)
* `createVegaChartTool()` for AI tool workflows
* `VegaChartToolResult`
* editor utilities/hooks (`useVegaChartEditor`, `useVegaEditorContext`)

## Quick start (simple chart)

```tsx
import {VegaLiteChart} from '@sqlrooms/vega';

export function SalesChart() {
  return (
    <VegaLiteChart
      sqlQuery="SELECT category, SUM(amount) AS total FROM sales GROUP BY category"
      spec={{
        mark: 'bar',
        encoding: {
          x: {field: 'category', type: 'nominal'},
          y: {field: 'total', type: 'quantitative'},
        },
      }}
      aspectRatio={16 / 9}
    />
  );
}
```

## Compound component API (editable chart workflow)

```tsx
import {VegaLiteChart, type VisualizationSpec} from '@sqlrooms/vega';

const initialSpec: VisualizationSpec = {
  mark: 'line',
  encoding: {
    x: {field: 'date', type: 'temporal'},
    y: {field: 'value', type: 'quantitative'},
  },
};

export function CompoundVegaChart() {
  return (
    <VegaLiteChart.Container
      spec={initialSpec}
      sqlQuery="SELECT date, value FROM metrics"
      editable
      onSpecChange={(spec) => console.log('next spec', spec)}
      onSqlChange={(sql) => console.log('next sql', sql)}
    >
      <VegaLiteChart.Actions />
      <VegaLiteChart.Chart />
      <VegaLiteChart.SpecEditor />
      <VegaLiteChart.SqlEditor />
    </VegaLiteChart.Container>
  );
}
```

## AI integration (`createVegaChartTool`)

```tsx
import {
  createAiSlice,
  createDefaultAiInstructions,
  createDefaultAiTools,
} from '@sqlrooms/ai';
import {createVegaChartTool} from '@sqlrooms/vega';

// inside your createRoomStore composer
createAiSlice({
  tools: {
    ...createDefaultAiTools(store),
    chart: createVegaChartTool({
      editable: true,
      editorMode: 'both',
    }),
  },
  getInstructions: () => createDefaultAiInstructions(store),
})(set, get, store);
```

`createVegaChartTool` constructor options:

* `editable`: whether users can edit SQL/spec in the chart UI
* `editorMode`: which editors to render (`'none' | 'sql' | 'vega' | 'both'`)

### LLM invocation / Zod schema fields

At runtime, the tool call payload is validated by a Zod schema.\
These fields are supplied by the LLM when invoking the tool (not passed into
`createVegaChartTool(...)`):

* `sqlQuery`: SQL used to fetch chart data
* `vegaLiteSpec`: Vega-Lite JSON string
* `reasoning`: explanation shown to users for why this chart/spec was chosen

## Example apps

* Vega example: https://github.com/sqlrooms/examples/tree/main/vega
* AI example (with chart tool): https://github.com/sqlrooms/examples/tree/main/ai

## Interfaces

* [VegaChartActionsProps](interfaces/VegaChartActionsProps.md)
* [VegaChartContextValue](interfaces/VegaChartContextValue.md)
* [VegaEditActionProps](interfaces/VegaEditActionProps.md)
* [VegaExportActionProps](interfaces/VegaExportActionProps.md)
* [VegaEditorState](interfaces/VegaEditorState.md)
* [VegaEditorActions](interfaces/VegaEditorActions.md)
* [VegaEditorContextValue](interfaces/VegaEditorContextValue.md)
* [UseVegaChartEditorOptions](interfaces/UseVegaChartEditorOptions.md)
* [UseVegaChartEditorReturn](interfaces/UseVegaChartEditorReturn.md)

## Type Aliases

* [VegaChartToolParameters](type-aliases/VegaChartToolParameters.md)
* [VegaChartToolOptions](type-aliases/VegaChartToolOptions.md)
* [EditorMode](type-aliases/EditorMode.md)
* [OnSpecChange](type-aliases/OnSpecChange.md)
* [OnSqlChange](type-aliases/OnSqlChange.md)
* [VisualizationSpec](type-aliases/VisualizationSpec.md)

## Variables

* [VegaChartActions](variables/VegaChartActions.md)
* [VegaChartToolParameters](variables/VegaChartToolParameters.md)
* [DEFAULT\_VEGA\_CHART\_DESCRIPTION](variables/DEFAULT_VEGA_CHART_DESCRIPTION.md)
* [VegaEditAction](variables/VegaEditAction.md)
* [VegaExportAction](variables/VegaExportAction.md)
* [VegaMonacoEditor](variables/VegaMonacoEditor.md)
* [VegaLiteChart](variables/VegaLiteChart.md)

## Functions

* [useVegaChartContext](functions/useVegaChartContext.md)
* [createVegaChartTool](functions/createVegaChartTool.md)
* [VegaChartToolResult](functions/VegaChartToolResult.md)
* [useVegaEditorContext](functions/useVegaEditorContext.md)
* [useVegaChartEditor](functions/useVegaChartEditor.md)
* [loadVegaLiteSchema](functions/loadVegaLiteSchema.md)
* [getCachedVegaLiteSchema](functions/getCachedVegaLiteSchema.md)
* [preloadVegaLiteSchema](functions/preloadVegaLiteSchema.md)

## References

### VegaChartToolParametersType

Renames and re-exports [VegaChartToolParameters](variables/VegaChartToolParameters.md)
