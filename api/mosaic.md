---
url: 'https://sqlrooms.org/api/mosaic.md'
---
# @sqlrooms/mosaic

This package is part of the SQLRooms framework. It provides React components and hooks for integrating [Mosaic](https://idl.uw.edu/mosaic/) - a visualization library for data exploration and analysis - into SQLRooms applications.

## Overview

Mosaic is a JavaScript library for data visualization and analysis developed by the [Interactive Data Lab (IDL)](https://idl.uw.edu/) at the University of Washington. It combines the expressiveness of declarative visualization grammars with the power of reactive programming and SQL queries.

One of Mosaic's powerful features is its cross-filtering capability powered by DuckDB, allowing users to interactively filter and explore large datasets with millions of records directly in the browser. This enables creating interactive dashboards where selections in one chart automatically filter data in other charts. For an example of this functionality, see the [Cross-Filter Flights demo](https://idl.uw.edu/mosaic/examples/flights-200k.html) which demonstrates interactive filtering across multiple visualizations of a 200,000-record flight dataset.

This package provides:

* React components for rendering Vega-Lite charts using Mosaic
* Hooks for integrating Mosaic with DuckDB in SQLRooms applications
* Utilities for working with Mosaic specifications

## Installation

```bash
npm install @sqlrooms/mosaic
```

## Usage

### Setting Up MosaicSlice

To use Mosaic in your SQLRooms application, you need to add the `MosaicSlice` to your room store. The slice manages the Mosaic connection and coordinates cross-filtering between multiple visualizations.

```tsx
import {createMosaicSlice, MosaicSliceState} from '@sqlrooms/mosaic';
import {createRoomStore, RoomShellSliceState} from '@sqlrooms/room-shell';
import {SqlEditorSliceState} from '@sqlrooms/sql-editor';

export type RoomState = RoomShellSliceState &
  SqlEditorSliceState &
  MosaicSliceState;

export const {roomStore, useRoomStore} = createRoomStore<RoomState>(
  (set, get, store) => ({
    // ... other slices
    ...createMosaicSlice()(set, get, store),
  }),
);
```

The Mosaic connection is automatically initialized when the DuckDB connector is ready. You can check the connection status:

```tsx
import {useRoomStore} from './store';

function MyComponent() {
  const mosaicConn = useRoomStore((state) => state.mosaic.connection);

  if (mosaicConn.status === 'loading') {
    return <div>Loading Mosaic...</div>;
  }

  if (mosaicConn.status === 'error') {
    return <div>Error: {mosaicConn.error.message}</div>;
  }

  // Mosaic is ready when status === 'ready'
  return <div>Mosaic is ready!</div>;
}
```

### useMosaicClient Hook

The `useMosaicClient` hook creates a Mosaic client that automatically queries data based on filter selections. This is useful for building custom visualizations that respond to cross-filtering.

```tsx
import {Query, useMosaicClient} from '@sqlrooms/mosaic';

function MapView() {
  const {data, isLoading, client} = useMosaicClient({
    selectionName: 'brush', // Named selection for cross-filtering
    query: (filter: any) => {
      return Query.from('earthquakes')
        .select('Latitude', 'Longitude', 'Magnitude', 'Depth', 'DateTime')
        .where(filter); // filter is automatically applied based on selection
    },
  });

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  // Use the data for your visualization
  return <div>Data loaded: {data?.numRows} rows</div>;
}
```

`useMosaicClient` returns an Apache Arrow table. Mosaic still uses its native
table runtime internally, but that detail is hidden at the hook boundary so
custom SQLRooms views can work with the same Arrow shape used by the DuckDB and
deck packages.

The hook accepts the following options:

* `id` - Optional unique identifier for this client (auto-generated if not provided)
* `selectionName` - Name of the selection to subscribe to for cross-filtering (will be created if it doesn't exist)
* `selection` - Alternatively, pass a `Selection` object directly
* `query` - Function that receives the current filter predicate and returns a Mosaic Query
* `queryResult` - Optional callback when query results are received
* `enabled` - Whether to automatically connect when mosaic is ready (default: `true`)

### Mosaic Profiler Primitives

The profiler primitives let you build a Quake-style cross-filtered table with
per-column summaries on top of `MosaicSlice`.

```tsx
import {MosaicProfiler} from '@sqlrooms/mosaic';
import {ScrollArea} from '@sqlrooms/ui';
import {useMemo} from 'react';
import {useRoomStore} from './store';

function EarthquakeProfiler() {
  const mosaic = useRoomStore((state) => state.mosaic);
  const brush = useMemo(() => mosaic.getSelection('brush'), [mosaic]);

  return (
    <MosaicProfiler tableName="earthquakes" selection={brush} pageSize={25}>
      <div className="flex min-h-0 flex-col border">
        <ScrollArea className="min-h-0 flex-1">
          <MosaicProfiler.Table>
            <MosaicProfiler.Header />
            <MosaicProfiler.Rows />
          </MosaicProfiler.Table>
        </ScrollArea>
        <MosaicProfiler.StatusBar />
      </div>
    </MosaicProfiler>
  );
}
```

For the common case, prefer the compound `MosaicProfiler` API. `useMosaicProfiler`
is still available when you need direct access to the profiler state for custom
layout, sizing, or advanced composition.

### Mosaic Dashboard Panels

`MosaicDashboard` is a compound dashboard surface backed by generic dashboard
panels instead of a chart-only list. Configure supported panel renderers and
runtime add-panel actions when creating the dashboard slice.

```tsx
import {
  createDefaultMosaicDashboardPanelRenderers,
  createMosaicDashboardProfilerPanelConfig,
  createMosaicDashboardSlice,
  createMosaicDashboardVgPlotPanelConfig,
  MosaicDashboard,
} from '@sqlrooms/mosaic';

const dashboardSlice = createMosaicDashboardSlice({
  panelRenderers: createDefaultMosaicDashboardPanelRenderers(),
  // Optional: pass chartTypes/chartBuilders to customize Add Chart.
  // Optional: pass addPanelActions to add app-specific menu entries.
});

function Dashboard() {
  return <MosaicDashboard dashboardId="main" />;
}

function addProfiler(store: RoomStore) {
  store.getState().mosaicDashboard.addPanel(
    'main',
    createMosaicDashboardProfilerPanelConfig({
      source: {tableName: 'earthquakes'},
    }),
  );
}
```

Dashboard panel sources may specify a `tableName` or trusted `sqlQuery`; when a
panel omits a source it falls back to the dashboard selected table. Panel renderer
definitions and chart builder definitions are runtime-only and intentionally
live outside persisted dashboard config.

### Chart Builder Compound Components

The chart builder UI can be used as a compound component API for flexible composition:

```tsx
import {
  ChartBuilderRoot,
  ChartBuilderTrigger,
  ChartBuilderDialogContent,
  ChartBuilderContent,
} from '@sqlrooms/mosaic';

function MyDashboard() {
  const columns = [...]; // Your table columns

  return (
    <ChartBuilderRoot
      tableName="earthquakes"
      columns={columns}
      onCreateChart={(spec, title) => {
        // Handle chart creation
      }}
    >
      <ChartBuilderTrigger />
      <ChartBuilderDialogContent>
        <ChartBuilderContent />
      </ChartBuilderDialogContent>
    </ChartBuilderRoot>
  );
}
```

Available compound components:

* `ChartBuilderRoot` - Context provider and dialog wrapper
* `ChartBuilderTrigger` - Button to open the dialog
* `ChartBuilderDialogContent` - Dialog content wrapper
* `ChartBuilderContent` - Main chart builder UI (type grid + fields + actions)
* `ChartBuilderTypeGrid` - Chart type selector grid
* `ChartBuilderFields` - Field selector inputs
* `ChartBuilderActions` - Back/Create buttons

For simpler use cases, the legacy `ChartBuilderDialog` component is still available but deprecated.

### Working with Selections

Selections enable cross-filtering between multiple visualizations. You can get or create a named selection from the store:

```tsx
import {useMemo} from 'react';
import {roomStore} from './store';

function FiltersPanel() {
  // Get or create a named selection
  const brush = useMemo(() => {
    const state = roomStore.getState();
    return state.mosaic.getSelection('brush');
  }, []);

  // Use the selection in your visualization
  // When users interact with charts using this selection,
  // all other charts subscribed to 'brush' will update automatically
}
```

Selection types:

* `'crossfilter'` - Multiple values can be selected (default)
* `'single'` - Only one value can be selected at a time
* `'union'` - Union of multiple selections

### VgPlotChart Component

The `VgPlotChart` component renders a Vega-Lite chart using the Mosaic library. It can accept either a Mosaic spec or a pre-built plot element:

```tsx
import {VgPlotChart, Spec} from '@sqlrooms/mosaic';

// Using a spec
const spec: Spec = {
  // Your Vega-Lite specification
};

function MyChart() {
  return <VgPlotChart spec={spec} />;
}

// Or using a pre-built plot element (useful with vg.plot())
import {vg, Selection} from '@sqlrooms/mosaic';

function MyFilterChart() {
  const brush = useMemo(() => {
    const state = roomStore.getState();
    return state.mosaic.getSelection('brush');
  }, []);

  const plot = useMemo(
    () =>
      vg.plot(
        vg.rectY(vg.from('earthquakes', {filterBy: brush}), {
          x: vg.bin('Magnitude', {maxbins: 25}),
          y: vg.count(),
        }),
        vg.intervalX({as: brush}),
      ),
    [brush],
  );

  return <VgPlotChart plot={plot} />;
}
```

## Example Applications

For complete working examples, see:

* **[Mosaic Example](https://github.com/sqlrooms/examples/tree/main/mosaic)** - Basic example showing Vega-Lite charts with cross-filtering
* **[DeckGL + Mosaic Example](https://github.com/sqlrooms/examples/tree/main/deckgl-mosaic)** - Advanced example combining DeckGL maps with Mosaic charts for geospatial data visualization

## Resources

* [Mosaic Documentation](https://idl.uw.edu/mosaic/)
* [Cross-Filter Flights Demo](https://idl.uw.edu/mosaic/examples/flights-200k.html)
* [Vega-Lite Documentation](https://vega.github.io/vega-lite/)
* [DuckDB Documentation](https://duckdb.org/docs/)

## License

MIT

## Namespaces

* [vg](mosaic/namespaces/vg/index.md)

## Classes

* [Param](classes/Param.md)
* [Selection](classes/Selection.md)
* [Query](classes/Query.md)

## Interfaces

* [ChartBuilderActionsProps](interfaces/ChartBuilderActionsProps.md)
* [ChartBuilderDialogContentProps](interfaces/ChartBuilderDialogContentProps.md)
* [ChartBuilderDialogProps](interfaces/ChartBuilderDialogProps.md)
* [ChartBuilderFieldsProps](interfaces/ChartBuilderFieldsProps.md)
* [ChartBuilderRootProps](interfaces/ChartBuilderRootProps.md)
* [ChartBuilderTypeGridProps](interfaces/ChartBuilderTypeGridProps.md)
* [FieldSelectorInputProps](interfaces/FieldSelectorInputProps.md)
* [ChartBuilderField](interfaces/ChartBuilderField.md)
* [ChartTypeDefinition](interfaces/ChartTypeDefinition.md)
* [ChartBuilderTemplate](interfaces/ChartBuilderTemplate.md)
* [ChartBuilderColumn](interfaces/ChartBuilderColumn.md)
* [MosaicChartContainerProps](interfaces/MosaicChartContainerProps.md)
* [MosaicChartDisplayProps](interfaces/MosaicChartDisplayProps.md)
* [MosaicChartEditorActionsProps](interfaces/MosaicChartEditorActionsProps.md)
* [MosaicCodeMirrorEditorProps](interfaces/MosaicCodeMirrorEditorProps.md)
* [MosaicSpecEditorPanelProps](interfaces/MosaicSpecEditorPanelProps.md)
* [MosaicEditorState](interfaces/MosaicEditorState.md)
* [MosaicEditorActions](interfaces/MosaicEditorActions.md)
* [MosaicEditorContextValue](interfaces/MosaicEditorContextValue.md)
* [UseMosaicChartEditorOptions](interfaces/UseMosaicChartEditorOptions.md)
* [UseMosaicChartEditorReturn](interfaces/UseMosaicChartEditorReturn.md)

## Type Aliases

* [MosaicColorLegendProps](type-aliases/MosaicColorLegendProps.md)
* [MosaicSliceConfig](type-aliases/MosaicSliceConfig.md)
* [MosaicClientOptions](type-aliases/MosaicClientOptions.md)
* [TrackedClient](type-aliases/TrackedClient.md)
* [MosaicSliceState](type-aliases/MosaicSliceState.md)
* [CreateMosaicSliceProps](type-aliases/CreateMosaicSliceProps.md)
* [PlotSize](type-aliases/PlotSize.md)
* [ResponsivePlotProps](type-aliases/ResponsivePlotProps.md)
* [ChartBuilderContentProps](type-aliases/ChartBuilderContentProps.md)
* [ChartBuilderContextValue](type-aliases/ChartBuilderContextValue.md)
* [ChartBuilderTriggerProps](type-aliases/ChartBuilderTriggerProps.md)
* [ChartSpec](type-aliases/ChartSpec.md)
* [MosaicDashboardRootProps](type-aliases/MosaicDashboardRootProps.md)
* [MosaicDashboardProps](type-aliases/MosaicDashboardProps.md)
* [MosaicDashboardPanelSource](type-aliases/MosaicDashboardPanelSource.md)
* [MosaicDashboardPanelConfig](type-aliases/MosaicDashboardPanelConfig.md)
* [MosaicDashboardPanelRendererProps](type-aliases/MosaicDashboardPanelRendererProps.md)
* [MosaicDashboardPanelRenderer](type-aliases/MosaicDashboardPanelRenderer.md)
* [MosaicDashboardAddPanelActionContext](type-aliases/MosaicDashboardAddPanelActionContext.md)
* [MosaicDashboardAddPanelAction](type-aliases/MosaicDashboardAddPanelAction.md)
* [MosaicDashboardEntry](type-aliases/MosaicDashboardEntry.md)
* [MosaicDashboardSliceConfig](type-aliases/MosaicDashboardSliceConfig.md)
* [MosaicDashboardSliceState](type-aliases/MosaicDashboardSliceState.md)
* [MosaicDashboardStoreState](type-aliases/MosaicDashboardStoreState.md)
* [CreateMosaicDashboardSliceProps](type-aliases/CreateMosaicDashboardSliceProps.md)
* [OnMosaicSpecChange](type-aliases/OnMosaicSpecChange.md)
* [MosaicProfilerRootProps](type-aliases/MosaicProfilerRootProps.md)
* [MosaicProfilerProps](type-aliases/MosaicProfilerProps.md)
* [MosaicProfilerCompoundHeaderProps](type-aliases/MosaicProfilerCompoundHeaderProps.md)
* [MosaicProfilerCompoundRowsProps](type-aliases/MosaicProfilerCompoundRowsProps.md)
* [MosaicProfilerCompoundStatusBarProps](type-aliases/MosaicProfilerCompoundStatusBarProps.md)
* [MosaicProfilerCompoundTableProps](type-aliases/MosaicProfilerCompoundTableProps.md)
* [MosaicProfilerHeaderProps](type-aliases/MosaicProfilerHeaderProps.md)
* [MosaicProfilerRowsProps](type-aliases/MosaicProfilerRowsProps.md)
* [MosaicProfilerStatusBarProps](type-aliases/MosaicProfilerStatusBarProps.md)
* [MosaicProfilerSorting](type-aliases/MosaicProfilerSorting.md)
* [MosaicProfilerPaginationState](type-aliases/MosaicProfilerPaginationState.md)
* [MosaicProfilerHistogramSummary](type-aliases/MosaicProfilerHistogramSummary.md)
* [MosaicProfilerCategoryBucket](type-aliases/MosaicProfilerCategoryBucket.md)
* [MosaicProfilerCategorySummary](type-aliases/MosaicProfilerCategorySummary.md)
* [MosaicProfilerSummaryState](type-aliases/MosaicProfilerSummaryState.md)
* [MosaicProfilerColumnKind](type-aliases/MosaicProfilerColumnKind.md)
* [MosaicProfilerColumnState](type-aliases/MosaicProfilerColumnState.md)
* [MosaicProfilerOptions](type-aliases/MosaicProfilerOptions.md)
* [UseMosaicProfilerReturn](type-aliases/UseMosaicProfilerReturn.md)
* [UseMosaicClientOptions](type-aliases/UseMosaicClientOptions.md)
* [Spec](type-aliases/Spec.md)

## Variables

* [MosaicChart](variables/MosaicChart.md)
* [MosaicChartBuilder](variables/MosaicChartBuilder.md)
* [MosaicSliceConfig](variables/MosaicSliceConfig.md)
* [ResponsivePlot](variables/ResponsivePlot.md)
* [VgPlotChart](variables/VgPlotChart.md)
* [ChartBuilderActions](variables/ChartBuilderActions.md)
* [ChartBuilderContent](variables/ChartBuilderContent.md)
* [ChartBuilderTrigger](variables/ChartBuilderTrigger.md)
* [ChartBuilderDialogContent](variables/ChartBuilderDialogContent.md)
* [ChartBuilderFields](variables/ChartBuilderFields.md)
* [ChartBuilderRoot](variables/ChartBuilderRoot.md)
* [ChartBuilderTypeGrid](variables/ChartBuilderTypeGrid.md)
* [countPlotBuilder](variables/countPlotBuilder.md)
* [histogramBuilder](variables/histogramBuilder.md)
* [lineChartBuilder](variables/lineChartBuilder.md)
* [ecdfBuilder](variables/ecdfBuilder.md)
* [heatmapBuilder](variables/heatmapBuilder.md)
* [boxPlotBuilder](variables/boxPlotBuilder.md)
* [bubbleChartBuilder](variables/bubbleChartBuilder.md)
* [customSpecBuilder](variables/customSpecBuilder.md)
* [mosaicChartBuilders](variables/mosaicChartBuilders.md)
* [NUMERIC\_COLUMN\_TYPES](variables/NUMERIC_COLUMN_TYPES.md)
* [TEMPORAL\_COLUMN\_TYPES](variables/TEMPORAL_COLUMN_TYPES.md)
* [QUANTITATIVE\_COLUMN\_TYPES](variables/QUANTITATIVE_COLUMN_TYPES.md)
* [countPlotChartType](variables/countPlotChartType.md)
* [histogramChartType](variables/histogramChartType.md)
* [lineChartChartType](variables/lineChartChartType.md)
* [ecdfChartType](variables/ecdfChartType.md)
* [heatmapChartType](variables/heatmapChartType.md)
* [boxPlotChartType](variables/boxPlotChartType.md)
* [bubbleChartChartType](variables/bubbleChartChartType.md)
* [customSpecChartType](variables/customSpecChartType.md)
* [mosaicChartTypes](variables/mosaicChartTypes.md)
* [describeChartSpecs](variables/describeChartSpecs.md)
* [toChartSpec](variables/toChartSpec.md)
* [MosaicDashboard](variables/MosaicDashboard.md)
* [MOSAIC\_DASHBOARD\_PANEL](variables/MOSAIC_DASHBOARD_PANEL.md)
* [MOSAIC\_DASHBOARD\_VGPLOT\_PANEL\_TYPE](variables/MOSAIC_DASHBOARD_VGPLOT_PANEL_TYPE.md)
* [MOSAIC\_DASHBOARD\_PROFILER\_PANEL\_TYPE](variables/MOSAIC_DASHBOARD_PROFILER_PANEL_TYPE.md)
* [MosaicDashboardPanelSource](variables/MosaicDashboardPanelSource.md)
* [MosaicDashboardPanelConfig](variables/MosaicDashboardPanelConfig.md)
* [MosaicDashboardEntry](variables/MosaicDashboardEntry.md)
* [MosaicDashboardSliceConfig](variables/MosaicDashboardSliceConfig.md)
* [MosaicCodeMirrorEditor](variables/MosaicCodeMirrorEditor.md)
* [MosaicProfiler](variables/MosaicProfiler.md)
* [MosaicProfilerRows](variables/MosaicProfilerRows.md)
* [PROFILER\_ROW\_NUMBER\_COLUMN\_WIDTH\_PX](variables/PROFILER_ROW_NUMBER_COLUMN_WIDTH_PX.md)
* [PROFILER\_DEFAULT\_COLUMN\_WIDTH\_PX](variables/PROFILER_DEFAULT_COLUMN_WIDTH_PX.md)
* [PROFILER\_UNSUPPORTED\_COLUMN\_WIDTH\_PX](variables/PROFILER_UNSUPPORTED_COLUMN_WIDTH_PX.md)

## Functions

* [createMosaicColorLegendPlot](functions/createMosaicColorLegendPlot.md)
* [MosaicColorLegend](functions/MosaicColorLegend.md)
* [createDefaultMosaicConfig](functions/createDefaultMosaicConfig.md)
* [createMosaicSlice](functions/createMosaicSlice.md)
* [useChartBuilderContext](functions/useChartBuilderContext.md)
* [useChartBuilderStore](functions/useChartBuilderStore.md)
* [createChartBuilderTemplate](functions/createChartBuilderTemplate.md)
* [createChartBuilderTemplates](functions/createChartBuilderTemplates.md)
* [createDefaultChartBuilders](functions/createDefaultChartBuilders.md)
* [buildChartTitleForSpec](functions/buildChartTitleForSpec.md)
* [columnMatchesFieldTypes](functions/columnMatchesFieldTypes.md)
* [getCompatibleColumns](functions/getCompatibleColumns.md)
* [isChartTypeAvailable](functions/isChartTypeAvailable.md)
* [getAvailableChartTypes](functions/getAvailableChartTypes.md)
* [buildChartTypeTitle](functions/buildChartTypeTitle.md)
* [canCreateChartFromType](functions/canCreateChartFromType.md)
* [createDefaultChartTypes](functions/createDefaultChartTypes.md)
* [describeChartTypes](functions/describeChartTypes.md)
* [toChartTypeDefinition](functions/toChartTypeDefinition.md)
* [MosaicDashboardRoot](functions/MosaicDashboardRoot.md)
* [useMosaicDashboardContext](functions/useMosaicDashboardContext.md)
* [createMosaicDashboardVgPlotPanelConfig](functions/createMosaicDashboardVgPlotPanelConfig.md)
* [createMosaicDashboardProfilerPanelConfig](functions/createMosaicDashboardProfilerPanelConfig.md)
* [getMosaicDashboardPanelId](functions/getMosaicDashboardPanelId.md)
* [getMosaicDashboardDockId](functions/getMosaicDashboardDockId.md)
* [getMosaicDashboardSelectionName](functions/getMosaicDashboardSelectionName.md)
* [resolveMosaicDashboardPanelSource](functions/resolveMosaicDashboardPanelSource.md)
* [createDefaultMosaicDashboardConfig](functions/createDefaultMosaicDashboardConfig.md)
* [createMosaicDashboardSlice](functions/createMosaicDashboardSlice.md)
* [useStoreWithMosaicDashboard](functions/useStoreWithMosaicDashboard.md)
* [createDefaultMosaicDashboardPanelRenderers](functions/createDefaultMosaicDashboardPanelRenderers.md)
* [useMosaicEditorContext](functions/useMosaicEditorContext.md)
* [loadMosaicSchema](functions/loadMosaicSchema.md)
* [getCachedMosaicSchema](functions/getCachedMosaicSchema.md)
* [preloadMosaicSchema](functions/preloadMosaicSchema.md)
* [useMosaicChartEditor](functions/useMosaicChartEditor.md)
* [MosaicProfilerHeader](functions/MosaicProfilerHeader.md)
* [MosaicProfilerStatusBar](functions/MosaicProfilerStatusBar.md)
* [getProfilerTableWidth](functions/getProfilerTableWidth.md)
* [useMosaicProfiler](functions/useMosaicProfiler.md)
* [useMosaicClient](functions/useMosaicClient.md)
* [isParam](functions/isParam.md)
* [isSelection](functions/isSelection.md)
* [makeClient](functions/makeClient.md)
* [astToDOM](functions/astToDOM.md)
* [astToESM](functions/astToESM.md)
* [parseSpec](functions/parseSpec.md)
* [column](functions/column.md)
* [asc](functions/asc.md)
* [desc](functions/desc.md)
* [sql](functions/sql.md)

## References

### MosaicDashboardEntryType

Renames and re-exports [MosaicDashboardEntry](variables/MosaicDashboardEntry.md)

***

### MosaicDashboardPanelConfigType

Renames and re-exports [MosaicDashboardPanelConfig](variables/MosaicDashboardPanelConfig.md)

***

### MosaicDashboardPanelSourceType

Renames and re-exports [MosaicDashboardPanelSource](variables/MosaicDashboardPanelSource.md)

***

### MosaicDashboardSliceConfigType

Renames and re-exports [MosaicDashboardSliceConfig](variables/MosaicDashboardSliceConfig.md)
