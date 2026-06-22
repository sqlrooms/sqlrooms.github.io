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

Mosaic's pre-aggregation optimization creates `preagg_*` cache tables lazily
when users interact with cross-filtered selections. By default Mosaic writes
those tables to the persistent `mosaic` schema. If the DuckDB database is a user
project file, point pre-aggregates at an attached cache database or disable them:

```tsx
const mosaicCacheDatabase = '__sqlrooms_mosaic_cache';

const connector = createWebSocketDuckDbConnector({
  initializationQuery: [
    `ATTACH IF NOT EXISTS ':memory:' AS ${mosaicCacheDatabase}`,
    `CREATE SCHEMA IF NOT EXISTS ${mosaicCacheDatabase}.mosaic`,
  ].join('; '),
});

export const {roomStore, useRoomStore} = createRoomStore<RoomState>(
  (set, get, store) => ({
    // ... db slice using connector
    ...createMosaicSlice({
      preagg: {
        schema: `${mosaicCacheDatabase}.mosaic`,
      },
    })(set, get, store),
  }),
);
```

Set `preagg.enabled` to `false` when you prefer to avoid pre-aggregate tables
entirely.

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

### Data Table Explorer Primitives

The Data Table Explorer primitives let you build a Quake-style cross-filtered
table with per-column summaries on top of `MosaicSlice`.

```tsx
import {DataTableExplorer} from '@sqlrooms/mosaic';
import {ScrollArea} from '@sqlrooms/ui';
import {useMemo} from 'react';
import {useRoomStore} from './store';

function EarthquakeExplorer() {
  const mosaic = useRoomStore((state) => state.mosaic);
  const brush = useMemo(() => mosaic.getSelection('brush'), [mosaic]);

  return (
    <DataTableExplorer tableName="earthquakes" selection={brush} pageSize={25}>
      <div className="flex min-h-0 flex-col border">
        <ScrollArea className="min-h-0 flex-1">
          <DataTableExplorer.Table>
            <DataTableExplorer.Header />
            <DataTableExplorer.Rows />
          </DataTableExplorer.Table>
        </ScrollArea>
        <DataTableExplorer.StatusBar />
      </div>
    </DataTableExplorer>
  );
}
```

For the common case, prefer the compound `DataTableExplorer` API.
`useDataTableExplorer` is still available when you need direct access to the
explorer state for custom layout, sizing, or advanced composition.

`DataTableBlockRenderer` wraps the same explorer UI as a stateful block
renderer for `@sqlrooms/documents` block documents. Register it with a
host-provided stateful block type such as `data-table` when a document or
worksheet surface should embed an interactive Data Table Explorer directly.

### Worksheet Agent HTML App Tools

`createWorksheetAgentTool` exposes worksheet HTML app block workflows by
default. Hosts that gate or do not support HTML app blocks should pass
`htmlAppBlocksEnabled: false` so the agent omits `add_html_app_block` and does
not advertise HTML app block workflows in its instructions.

### Mosaic Dashboard Panels

`MosaicDashboard` is a compound dashboard surface backed by generic dashboard
panels instead of a chart-only list. Configure supported panel renderers and
runtime add-panel actions when creating the dashboard slice.

```tsx
import {
  createDefaultMosaicDashboardPanelRenderers,
  createMosaicDashboardDataTableExplorerPanelConfig,
  createMosaicDashboardChartPanelConfig,
  createMosaicDashboardSlice,
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

function addDataTableExplorer(store: RoomStore) {
  store.getState().mosaicDashboard.addPanel(
    'main',
    createMosaicDashboardDataTableExplorerPanelConfig({
      source: {tableName: 'earthquakes'},
    }),
  );
}

function addBoxPlotChart(store: RoomStore) {
  store.getState().mosaicDashboard.addPanel(
    'main',
    createMosaicDashboardChartPanelConfig('Magnitude by Region', {
      chartType: 'box-plot',
      settings: {
        x: 'region',
        y: 'magnitude',
      },
    }),
  );
}
```

Dashboards have a creation-time `layoutType` of either `dock` or `grid`.
Existing persisted dashboards default to `dock`; pass `'grid'` to
`createDashboard(title, 'grid')` or `ensureDashboard(id, title, 'grid')` when
creating a dashboard that should use the scrollable grid renderer. Re-ensuring
an existing dashboard does not convert between layout types.

Dashboard panel sources may specify a `tableName` or trusted `sqlQuery`; when a
panel omits a source it falls back to the dashboard selected table. Panel renderer
definitions and chart builder definitions are runtime-only and intentionally
live outside persisted dashboard config.

### Reset Filters

The package provides hooks and components for resetting cross-filter selections at both dashboard and panel levels:

#### Dashboard-Level Reset

Use `useDashboardResetFilters` to track and reset all filters for a dashboard:

```tsx
import {useDashboardResetFilters} from '@sqlrooms/mosaic';

function DashboardToolbar({dashboardId}: {dashboardId: string}) {
  const {hasActiveFilters, reset} = useDashboardResetFilters({dashboardId});

  return (
    <button onClick={reset} disabled={!hasActiveFilters}>
      Reset All Filters
    </button>
  );
}
```

The hook returns:

* `hasActiveFilters` - Boolean indicating whether any filters are active
* `reset` - Function to clear all filters for the dashboard

#### Panel-Level Reset

Use `usePanelResetFilters` to track and reset only the filters originating from a specific panel:

```tsx
import {
  usePanelResetFilters,
  usePanelClients,
  ResetFiltersButton,
} from '@sqlrooms/mosaic';

function ChartPanelHeader({
  dashboardId,
  panelId,
  selectionName,
}: {
  dashboardId: string;
  panelId: string;
  selectionName: string;
}) {
  const panelClients = usePanelClients(dashboardId, panelId);
  const {hasActiveFilters, reset} = usePanelResetFilters({
    panelClients,
    selectionName,
  });

  return (
    <div className="panel-header">
      <h3>My Chart</h3>
      <ResetFiltersButton disabled={!hasActiveFilters} onClick={reset} />
    </div>
  );
}
```

Panel-level reset requires registering the panel's Mosaic clients. Use `usePanelClientRegistration` in your panel renderer:

```tsx
import {usePanelClientRegistration} from '@sqlrooms/mosaic';

function ChartPanelRenderer({dashboardId, panelId}: PanelProps) {
  const {client} = useMosaicClient({
    selectionName: 'brush',
    query: /* ... */,
  });

  // Register this client so the panel reset button can track its filters
  usePanelClientRegistration(dashboardId, panelId, [client]);

  return <VgPlotChart /* ... */ />;
}
```

#### Reset Filters Button Component

The `ResetFiltersButton` is a pre-styled UI component:

```tsx
import {ResetFiltersButton} from '@sqlrooms/mosaic';

<ResetFiltersButton
  disabled={!hasActiveFilters}
  onClick={reset}
  tooltip="Reset filters" // optional
  className="custom-class" // optional
/>;
```

### Dashboard Stateful Block Adapter

`createMosaicDashboardBlockDefinition` exposes Mosaic dashboards as stateful
block implementations. This lets host packages render the same dashboard
implementation either inside a block host or through an artifact shell created
with `@sqlrooms/artifacts`.

```tsx
import {createArtifactTypeFromStatefulBlock} from '@sqlrooms/artifacts';
import {createMosaicDashboardBlockDefinition} from '@sqlrooms/mosaic';

const dashboardBlockDefinition = createMosaicDashboardBlockDefinition({
  render: DashboardArtifact,
});

export const dashboardArtifactType = createArtifactTypeFromStatefulBlock(
  dashboardBlockDefinition,
);
```

The adapter preserves existing dashboard state in
`mosaicDashboard.config.dashboardsById` and delegates lifecycle work to the
dashboard slice.

### Dashboard AI Tools

`@sqlrooms/mosaic` provides reusable assistant tools for dashboard authoring,
including chart tools, a Data Table Explorer panel tool, and an optional
exploratory `dashboard_agent`. Client apps supply small adapters that map
Mosaic's generic dashboard operations to their store and table metadata.
Agent tools use `intent` for the natural-language objective they should satisfy.

```ts
import {
  createDashboardAiTools,
  MAP_TOOL_KEY,
  type DashboardAiAdapter,
  type DatabaseAiAdapter,
} from '@sqlrooms/mosaic';

const dashboardId = 'dashboard-1';

const databaseAdapter: DatabaseAiAdapter = {
  getTables: () => store.getState().db.tables,
  findTable: (tableName) =>
    store.getState().db.tables.find((table) => table.tableName === tableName),
};

const dashboardAdapter: DashboardAiAdapter = {
  getSelectedTable: () =>
    store.getState().mosaicDashboard.getDashboard(dashboardId)?.selectedTable,
  getPanels: () =>
    store.getState().mosaicDashboard.getDashboard(dashboardId)?.panels ?? [],
  setSelectedTable: (tableName) =>
    store.getState().mosaicDashboard.setSelectedTable(dashboardId, tableName),
  addPanel: (panel) =>
    store.getState().mosaicDashboard.addPanel(dashboardId, panel),
  updatePanel: (panelId, patch) =>
    store.getState().mosaicDashboard.updatePanel(dashboardId, panelId, patch),
  removePanel: (panelId) =>
    store.getState().mosaicDashboard.removePanel(dashboardId, panelId),
  getPanel: (panelId) =>
    store
      .getState()
      .mosaicDashboard.getDashboard(dashboardId)
      ?.panels.find((panel) => panel.id === panelId),
  getPanelIssue: (panelId) =>
    store.getState().mosaicDashboard.getPanelIssue(dashboardId, panelId),
};

const dashboardTools = createDashboardAiTools({
  databaseAdapter,
  dashboardAdapter,
});
```

Dashboard chart tools create new chart panels by default. When the user asks to
edit an existing chart, pass that panel's `panelId` to the same chart tool; the
tool validates that the target is a chart panel and updates its config in place.
If the tool call omits `title`, updates preserve the panel's existing title
instead of renaming it to the default chart title.

Host tools can be added with `extraTools`; they must not reuse built-in
dashboard tool keys. Register geospatial map tools under `MAP_TOOL_KEY` so the
dashboard prompts and tool registration stay aligned. When host tools need
specialized agent guidance, pass `additionalInstructions` to append that
guidance after the built-in agent workflow without replacing it.

Worksheet agents also accept host tools through `extraTools`. Worksheet extra
tool factories receive the active `worksheetId` alongside the worksheet and
database adapters, so host apps can add worksheet-scoped tools such as embedded
stateful blocks without guessing which worksheet the sub-agent is editing.
Worksheet block-container tools propagate optional `intent` onto the created
block when the host adapter persists block document state.

### Box Plot Chart Type

The built-in Box Plot chart type (`'box-plot'`) is a specialized chart that uses
a custom renderer instead of Vega-Lite. It calculates quartiles, whiskers, and
outliers directly in DuckDB using SQL queries, then renders them with Observable
Plot primitives. This approach provides better performance and more accurate
statistical calculations than Observable Plot's built-in `boxY` mark.

Box plots support:

* Grouped box plots by categorical variable (x-axis)
* Y-axis brushing for interactive filtering
* Cross-filtering integration with other dashboard charts
* Custom quartile calculation using DuckDB's `quantile_cont` function

The renderer is modular and organized in the `chart-types/box-plot/renderer/`
directory with separate concerns:

* **BoxPlotPanelRenderer.tsx** - Main React component with drag interactions
* **BoxPlotClient.ts** - Mosaic client for SQL-based data queries
* **plot.ts** - Observable Plot rendering logic
* **utils.ts** - Statistical calculations and coordinate transformations
* **constants.ts** - Theme colors and layout constants

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
      onCreateChartOutput={(output, title) => {
        // Optional: handle non-spec outputs such as dashboard panel chart types.
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

### Combobox Component

The package provides a reusable compound `Combobox` component for building searchable select dropdowns. This component is used internally by chart settings fields like `AggregationSelector`, `FieldSelectorInput`, and `TemporalGranularitySelector`.

```tsx
import {Combobox} from '@sqlrooms/mosaic';

function MySelector() {
  const [value, setValue] = useState('');

  return (
    <Combobox value={value} onChange={setValue}>
      <Combobox.Trigger placeholder="Select option..." />
      <Combobox.Content>
        <Combobox.Search placeholder="Search..." />
        <Combobox.Empty>No results found.</Combobox.Empty>
        <Combobox.List>
          <Combobox.Item value="option1">Option 1</Combobox.Item>
          <Combobox.Item value="option2">Option 2</Combobox.Item>
          <Combobox.Item value="option3">Option 3</Combobox.Item>
        </Combobox.List>
      </Combobox.Content>
    </Combobox>
  );
}
```

Available compound components:

* `Combobox` (root) - Manages state and provides context
* `Combobox.Trigger` - Button to open the dropdown
* `Combobox.Content` - Popover content wrapper
* `Combobox.Search` - Search input field
* `Combobox.Empty` - Empty state message
* `Combobox.List` - Items container
* `Combobox.Item` - Individual selectable item

For advanced use cases, the underlying `useCombobox` hook is also exported.

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

## Classes

* [DataPointLimitError](/api/mosaic/classes/DataPointLimitError.md)
* [AiAgentError](/api/mosaic/classes/AiAgentError.md)
* [MosaicDashboardPanelErrorBoundary](/api/mosaic/classes/MosaicDashboardPanelErrorBoundary.md)

## Interfaces

* [ResolvedChartResources](/api/mosaic/interfaces/ResolvedChartResources.md)
* [CreateChartParams](/api/mosaic/interfaces/CreateChartParams.md)
* [CreateChartResult](/api/mosaic/interfaces/CreateChartResult.md)
* [ChartBuilderActionsProps](/api/mosaic/interfaces/ChartBuilderActionsProps.md)
* [ChartBuilderDialogProps](/api/mosaic/interfaces/ChartBuilderDialogProps.md)
* [ChartBuilderFieldsProps](/api/mosaic/interfaces/ChartBuilderFieldsProps.md)
* [ChartBuilderTypeGridProps](/api/mosaic/interfaces/ChartBuilderTypeGridProps.md)
* [ChartBuilderField](/api/mosaic/interfaces/ChartBuilderField.md)
* [DashboardToolDeps](/api/mosaic/interfaces/DashboardToolDeps.md)
* [ChartBuilderColumn](/api/mosaic/interfaces/ChartBuilderColumn.md)
* [ColumnsContextValue](/api/mosaic/interfaces/ColumnsContextValue.md)
* [FieldSelectorInputProps](/api/mosaic/interfaces/FieldSelectorInputProps.md)
* [MosaicChartContainerProps](/api/mosaic/interfaces/MosaicChartContainerProps.md)
* [MosaicChartDisplayProps](/api/mosaic/interfaces/MosaicChartDisplayProps.md)
* [MosaicChartEditorActionsProps](/api/mosaic/interfaces/MosaicChartEditorActionsProps.md)
* [MosaicCodeMirrorEditorProps](/api/mosaic/interfaces/MosaicCodeMirrorEditorProps.md)
* [MosaicSpecEditorPanelProps](/api/mosaic/interfaces/MosaicSpecEditorPanelProps.md)
* [MosaicEditorState](/api/mosaic/interfaces/MosaicEditorState.md)
* [MosaicEditorActions](/api/mosaic/interfaces/MosaicEditorActions.md)
* [MosaicEditorContextValue](/api/mosaic/interfaces/MosaicEditorContextValue.md)
* [UseMosaicChartEditorOptions](/api/mosaic/interfaces/UseMosaicChartEditorOptions.md)
* [UseMosaicChartEditorReturn](/api/mosaic/interfaces/UseMosaicChartEditorReturn.md)

## Type Aliases

* [MosaicColorLegendProps](/api/mosaic/type-aliases/MosaicColorLegendProps.md)
* [MosaicSliceConfig](/api/mosaic/type-aliases/MosaicSliceConfig.md)
* [MosaicPreAggregateOptions](/api/mosaic/type-aliases/MosaicPreAggregateOptions.md)
* [MosaicClientOptions](/api/mosaic/type-aliases/MosaicClientOptions.md)
* [TrackedClient](/api/mosaic/type-aliases/TrackedClient.md)
* [MosaicSliceState](/api/mosaic/type-aliases/MosaicSliceState.md)
* [CreateMosaicSliceProps](/api/mosaic/type-aliases/CreateMosaicSliceProps.md)
* [PlotSize](/api/mosaic/type-aliases/PlotSize.md)
* [ResponsivePlotProps](/api/mosaic/type-aliases/ResponsivePlotProps.md)
* [DataTableExplorerToolInput](/api/mosaic/type-aliases/DataTableExplorerToolInput.md)
* [CreateDashboardAiToolsOptions](/api/mosaic/type-aliases/CreateDashboardAiToolsOptions.md)
* [DashboardAiAdapter](/api/mosaic/type-aliases/DashboardAiAdapter.md)
* [DashboardAgentResult](/api/mosaic/type-aliases/DashboardAgentResult.md)
* [ExtraDashboardAiToolsParams](/api/mosaic/type-aliases/ExtraDashboardAiToolsParams.md)
* [ExtraDashboardAiToolsFactory](/api/mosaic/type-aliases/ExtraDashboardAiToolsFactory.md)
* [CreateDashboardAgentToolOptions](/api/mosaic/type-aliases/CreateDashboardAgentToolOptions.md)
* [DatabaseAiAdapter](/api/mosaic/type-aliases/DatabaseAiAdapter.md)
* [ToolOutput](/api/mosaic/type-aliases/ToolOutput.md)
* [AiStore](/api/mosaic/type-aliases/AiStore.md)
* [AgentToolCall](/api/mosaic/type-aliases/AgentToolCall.md)
* [AgentRunResult](/api/mosaic/type-aliases/AgentRunResult.md)
* [BaseAgentToolOptions](/api/mosaic/type-aliases/BaseAgentToolOptions.md)
* [WorksheetAiAdapter](/api/mosaic/type-aliases/WorksheetAiAdapter.md)
* [WorksheetAgentResult](/api/mosaic/type-aliases/WorksheetAgentResult.md)
* [ExtraWorksheetAiToolsParams](/api/mosaic/type-aliases/ExtraWorksheetAiToolsParams.md)
* [ExtraWorksheetAiToolsFactory](/api/mosaic/type-aliases/ExtraWorksheetAiToolsFactory.md)
* [CreateWorksheetAgentToolOptions](/api/mosaic/type-aliases/CreateWorksheetAgentToolOptions.md)
* [ChartBuilderContentProps](/api/mosaic/type-aliases/ChartBuilderContentProps.md)
* [ChartBuilderContextValue](/api/mosaic/type-aliases/ChartBuilderContextValue.md)
* [ChartBuilderTriggerProps](/api/mosaic/type-aliases/ChartBuilderTriggerProps.md)
* [ChartBuilderDialogContentProps](/api/mosaic/type-aliases/ChartBuilderDialogContentProps.md)
* [ChartBuilderRootProps](/api/mosaic/type-aliases/ChartBuilderRootProps.md)
* [ChartDataPolicy](/api/mosaic/type-aliases/ChartDataPolicy.md)
* [ChartDataPolicyOverride](/api/mosaic/type-aliases/ChartDataPolicyOverride.md)
* [ChartDataPolicyContext](/api/mosaic/type-aliases/ChartDataPolicyContext.md)
* [ChartRuntimeIssue](/api/mosaic/type-aliases/ChartRuntimeIssue.md)
* [ChartRuntimeIssueContext](/api/mosaic/type-aliases/ChartRuntimeIssueContext.md)
* [ChartRuntimeIssueReporter](/api/mosaic/type-aliases/ChartRuntimeIssueReporter.md)
* [MosaicChartSettingsPanelProps](/api/mosaic/type-aliases/MosaicChartSettingsPanelProps.md)
* [MosaicChartViewProps](/api/mosaic/type-aliases/MosaicChartViewProps.md)
* [ChartToolExecutionContext](/api/mosaic/type-aliases/ChartToolExecutionContext.md)
* [ChartBuilderDashboardPanelOutput](/api/mosaic/type-aliases/ChartBuilderDashboardPanelOutput.md)
* [ChartTypeDefinition](/api/mosaic/type-aliases/ChartTypeDefinition.md)
* [~~ChartSpec~~](/api/mosaic/type-aliases/ChartSpec.md)
* [BoxPlotChartSettings](/api/mosaic/type-aliases/BoxPlotChartSettings.md)
* [BoxPlotToolInput](/api/mosaic/type-aliases/BoxPlotToolInput.md)
* [ChartConfig](/api/mosaic/type-aliases/ChartConfig.md)
* [ChartSettings](/api/mosaic/type-aliases/ChartSettings.md)
* [ChartType](/api/mosaic/type-aliases/ChartType.md)
* [CountPlotChartSettings](/api/mosaic/type-aliases/CountPlotChartSettings.md)
* [CountPlotToolInput](/api/mosaic/type-aliases/CountPlotToolInput.md)
* [HeatmapChartSettings](/api/mosaic/type-aliases/HeatmapChartSettings.md)
* [HeatmapToolInput](/api/mosaic/type-aliases/HeatmapToolInput.md)
* [HistogramChartSettings](/api/mosaic/type-aliases/HistogramChartSettings.md)
* [HistogramToolInput](/api/mosaic/type-aliases/HistogramToolInput.md)
* [LineChartSettings](/api/mosaic/type-aliases/LineChartSettings.md)
* [LineChartToolInput](/api/mosaic/type-aliases/LineChartToolInput.md)
* [ScatterPlotChartSettings](/api/mosaic/type-aliases/ScatterPlotChartSettings.md)
* [ScatterPlotToolInput](/api/mosaic/type-aliases/ScatterPlotToolInput.md)
* [ChartToolParams](/api/mosaic/type-aliases/ChartToolParams.md)
* [MosaicDashboardRootProps](/api/mosaic/type-aliases/MosaicDashboardRootProps.md)
* [MosaicDashboardProps](/api/mosaic/type-aliases/MosaicDashboardProps.md)
* [MosaicDashboardPanelRendererProps](/api/mosaic/type-aliases/MosaicDashboardPanelRendererProps.md)
* [MosaicDashboardPanelRenderer](/api/mosaic/type-aliases/MosaicDashboardPanelRenderer.md)
* [MosaicDashboardSliceConfig](/api/mosaic/type-aliases/MosaicDashboardSliceConfig.md)
* [MosaicDashboardSliceState](/api/mosaic/type-aliases/MosaicDashboardSliceState.md)
* [MosaicDashboardStoreState](/api/mosaic/type-aliases/MosaicDashboardStoreState.md)
* [CreateMosaicDashboardSliceProps](/api/mosaic/type-aliases/CreateMosaicDashboardSliceProps.md)
* [MosaicDashboardAddPanelActionContext](/api/mosaic/type-aliases/MosaicDashboardAddPanelActionContext.md)
* [MosaicDashboardAddPanelAction](/api/mosaic/type-aliases/MosaicDashboardAddPanelAction.md)
* [OnStartDashboard](/api/mosaic/type-aliases/OnStartDashboard.md)
* [ResetFiltersButtonProps](/api/mosaic/type-aliases/ResetFiltersButtonProps.md)
* [DataTableExplorerPanelConfig](/api/mosaic/type-aliases/DataTableExplorerPanelConfig.md)
* [DataTableExplorerPanelConfig](/api/mosaic/type-aliases/DataTableExplorerPanelConfig-1.md)
* [MosaicDashboardLayoutType](/api/mosaic/type-aliases/MosaicDashboardLayoutType.md)
* [MosaicDashboardLayoutType](/api/mosaic/type-aliases/MosaicDashboardLayoutType-1.md)
* [MosaicDashboardPanelSource](/api/mosaic/type-aliases/MosaicDashboardPanelSource.md)
* [MosaicDashboardPanelSource](/api/mosaic/type-aliases/MosaicDashboardPanelSource-1.md)
* [MosaicDashboardBlockRenderProps](/api/mosaic/type-aliases/MosaicDashboardBlockRenderProps.md)
* [CreateMosaicDashboardBlockDefinitionOptions](/api/mosaic/type-aliases/CreateMosaicDashboardBlockDefinitionOptions.md)
* [ChartPanelConfig](/api/mosaic/type-aliases/ChartPanelConfig.md)
* [ChartPanelConfig](/api/mosaic/type-aliases/ChartPanelConfig-1.md)
* [MosaicDashboardPanelConfig](/api/mosaic/type-aliases/MosaicDashboardPanelConfig.md)
* [MosaicDashboardEntry](/api/mosaic/type-aliases/MosaicDashboardEntry.md)
* [UseDashboardResetFiltersOptions](/api/mosaic/type-aliases/UseDashboardResetFiltersOptions.md)
* [UseDashboardResetFiltersReturn](/api/mosaic/type-aliases/UseDashboardResetFiltersReturn.md)
* [UsePanelResetFiltersOptions](/api/mosaic/type-aliases/UsePanelResetFiltersOptions.md)
* [UsePanelResetFiltersReturn](/api/mosaic/type-aliases/UsePanelResetFiltersReturn.md)
* [DataTableExplorerRootProps](/api/mosaic/type-aliases/DataTableExplorerRootProps.md)
* [DataTableExplorerProps](/api/mosaic/type-aliases/DataTableExplorerProps.md)
* [DataTableExplorerCompoundHeaderProps](/api/mosaic/type-aliases/DataTableExplorerCompoundHeaderProps.md)
* [DataTableExplorerCompoundRowsProps](/api/mosaic/type-aliases/DataTableExplorerCompoundRowsProps.md)
* [DataTableExplorerCompoundStatusBarProps](/api/mosaic/type-aliases/DataTableExplorerCompoundStatusBarProps.md)
* [DataTableExplorerCompoundTableProps](/api/mosaic/type-aliases/DataTableExplorerCompoundTableProps.md)
* [DataTableExplorerCompoundResetButtonProps](/api/mosaic/type-aliases/DataTableExplorerCompoundResetButtonProps.md)
* [DataTableExplorerHeaderProps](/api/mosaic/type-aliases/DataTableExplorerHeaderProps.md)
* [DataTableExplorerRowsProps](/api/mosaic/type-aliases/DataTableExplorerRowsProps.md)
* [DataTableExplorerStatusBarProps](/api/mosaic/type-aliases/DataTableExplorerStatusBarProps.md)
* [DataTableExplorerSorting](/api/mosaic/type-aliases/DataTableExplorerSorting.md)
* [DataTableExplorerPaginationState](/api/mosaic/type-aliases/DataTableExplorerPaginationState.md)
* [DataTableExplorerHistogramSummary](/api/mosaic/type-aliases/DataTableExplorerHistogramSummary.md)
* [DataTableExplorerCategoryBucket](/api/mosaic/type-aliases/DataTableExplorerCategoryBucket.md)
* [DataTableExplorerCategorySummary](/api/mosaic/type-aliases/DataTableExplorerCategorySummary.md)
* [DataTableExplorerSummaryState](/api/mosaic/type-aliases/DataTableExplorerSummaryState.md)
* [DataTableExplorerColumnKind](/api/mosaic/type-aliases/DataTableExplorerColumnKind.md)
* [DataTableExplorerColumnState](/api/mosaic/type-aliases/DataTableExplorerColumnState.md)
* [DataTableExplorerTableReference](/api/mosaic/type-aliases/DataTableExplorerTableReference.md)
* [DataTableExplorerOptions](/api/mosaic/type-aliases/DataTableExplorerOptions.md)
* [UseDataTableExplorerReturn](/api/mosaic/type-aliases/UseDataTableExplorerReturn.md)
* [OnMosaicSpecChange](/api/mosaic/type-aliases/OnMosaicSpecChange.md)
* [UseMosaicClientOptions](/api/mosaic/type-aliases/UseMosaicClientOptions.md)

## Variables

* [MosaicSpecChart](/api/mosaic/variables/MosaicSpecChart.md)
* [MosaicChartBuilder](/api/mosaic/variables/MosaicChartBuilder.md)
* [MosaicSliceConfig](/api/mosaic/variables/MosaicSliceConfig.md)
* [ResponsivePlot](/api/mosaic/variables/ResponsivePlot.md)
* [VgPlotChart](/api/mosaic/variables/VgPlotChart.md)
* [MAP\_TOOL\_KEY](/api/mosaic/variables/MAP_TOOL_KEY.md)
* [DataTableExplorerToolInput](/api/mosaic/variables/DataTableExplorerToolInput.md)
* [BaseChartToolInput](/api/mosaic/variables/BaseChartToolInput.md)
* [ChartBuilderActions](/api/mosaic/variables/ChartBuilderActions.md)
* [ChartBuilderContent](/api/mosaic/variables/ChartBuilderContent.md)
* [ChartBuilderTrigger](/api/mosaic/variables/ChartBuilderTrigger.md)
* [ChartBuilderDialogContent](/api/mosaic/variables/ChartBuilderDialogContent.md)
* [ChartBuilderFields](/api/mosaic/variables/ChartBuilderFields.md)
* [ChartBuilderRoot](/api/mosaic/variables/ChartBuilderRoot.md)
* [ChartBuilderTypeGrid](/api/mosaic/variables/ChartBuilderTypeGrid.md)
* [DEFAULT\_CHART\_MAX\_DATA\_POINTS](/api/mosaic/variables/DEFAULT_CHART_MAX_DATA_POINTS.md)
* [MosaicChart](/api/mosaic/variables/MosaicChart.md)
* [MosaicChartSettingsPanel](/api/mosaic/variables/MosaicChartSettingsPanel.md)
* [MosaicChartView](/api/mosaic/variables/MosaicChartView.md)
* [addChartPanelAction](/api/mosaic/variables/addChartPanelAction.md)
* [boxPlotChartType](/api/mosaic/variables/boxPlotChartType.md)
* [BoxPlotChartSettings](/api/mosaic/variables/BoxPlotChartSettings.md)
* [BoxPlotToolInput](/api/mosaic/variables/BoxPlotToolInput.md)
* [ChartConfig](/api/mosaic/variables/ChartConfig.md)
* [countPlotChartType](/api/mosaic/variables/countPlotChartType.md)
* [CountPlotChartSettings](/api/mosaic/variables/CountPlotChartSettings.md)
* [CountPlotToolInput](/api/mosaic/variables/CountPlotToolInput.md)
* [customSpecChartType](/api/mosaic/variables/customSpecChartType.md)
* [heatmapChartType](/api/mosaic/variables/heatmapChartType.md)
* [HeatmapChartSettings](/api/mosaic/variables/HeatmapChartSettings.md)
* [HeatmapToolInput](/api/mosaic/variables/HeatmapToolInput.md)
* [histogramChartType](/api/mosaic/variables/histogramChartType.md)
* [HistogramChartSettings](/api/mosaic/variables/HistogramChartSettings.md)
* [HistogramToolInput](/api/mosaic/variables/HistogramToolInput.md)
* [lineChartChartType](/api/mosaic/variables/lineChartChartType.md)
* [LineChartSettings](/api/mosaic/variables/LineChartSettings.md)
* [LineChartToolInput](/api/mosaic/variables/LineChartToolInput.md)
* [mosaicChartTypes](/api/mosaic/variables/mosaicChartTypes.md)
* [scatterPlotChartType](/api/mosaic/variables/scatterPlotChartType.md)
* [ScatterPlotChartSettings](/api/mosaic/variables/ScatterPlotChartSettings.md)
* [ScatterPlotToolInput](/api/mosaic/variables/ScatterPlotToolInput.md)
* [ChartBlockRenderer](/api/mosaic/variables/ChartBlockRenderer.md)
* [NUMERIC\_COLUMN\_TYPES](/api/mosaic/variables/NUMERIC_COLUMN_TYPES.md)
* [TEMPORAL\_COLUMN\_TYPES](/api/mosaic/variables/TEMPORAL_COLUMN_TYPES.md)
* [QUANTITATIVE\_COLUMN\_TYPES](/api/mosaic/variables/QUANTITATIVE_COLUMN_TYPES.md)
* [ColumnSelector](/api/mosaic/variables/ColumnSelector.md)
* [ColumnsProvider](/api/mosaic/variables/ColumnsProvider.md)
* [Field](/api/mosaic/variables/Field.md)
* [MultiFieldSelector](/api/mosaic/variables/MultiFieldSelector.md)
* [TableSelector](/api/mosaic/variables/TableSelector.md)
* [DefaultMosaicDashboardBlock](/api/mosaic/variables/DefaultMosaicDashboardBlock.md)
* [MosaicDashboard](/api/mosaic/variables/MosaicDashboard.md)
* [MOSAIC\_DASHBOARD\_PANEL](/api/mosaic/variables/MOSAIC_DASHBOARD_PANEL.md)
* [MosaicDashboardSliceConfig](/api/mosaic/variables/MosaicDashboardSliceConfig.md)
* [ResetFiltersButton](/api/mosaic/variables/ResetFiltersButton.md)
* [MOSAIC\_DASHBOARD\_CHART\_PANEL\_TYPE](/api/mosaic/variables/MOSAIC_DASHBOARD_CHART_PANEL_TYPE.md)
* [MOSAIC\_DASHBOARD\_DATA\_TABLE\_EXPLORER\_PANEL\_TYPE](/api/mosaic/variables/MOSAIC_DASHBOARD_DATA_TABLE_EXPLORER_PANEL_TYPE.md)
* [MosaicDashboardPanelConfig](/api/mosaic/variables/MosaicDashboardPanelConfig.md)
* [MosaicDashboardEntry](/api/mosaic/variables/MosaicDashboardEntry.md)
* [defaultAddPanelActions](/api/mosaic/variables/defaultAddPanelActions.md)
* [MosaicDashboardPanelLayout](/api/mosaic/variables/MosaicDashboardPanelLayout.md)
* [DataTableExplorer](/api/mosaic/variables/DataTableExplorer.md)
* [DataTableExplorerRows](/api/mosaic/variables/DataTableExplorerRows.md)
* [DataTableExplorerStatusBar](/api/mosaic/variables/DataTableExplorerStatusBar.md)
* [addDataTableExplorerPanelAction](/api/mosaic/variables/addDataTableExplorerPanelAction.md)
* [DATA\_TABLE\_EXPLORER\_ROW\_NUMBER\_COLUMN\_WIDTH\_PX](/api/mosaic/variables/DATA_TABLE_EXPLORER_ROW_NUMBER_COLUMN_WIDTH_PX.md)
* [DATA\_TABLE\_EXPLORER\_DEFAULT\_COLUMN\_WIDTH\_PX](/api/mosaic/variables/DATA_TABLE_EXPLORER_DEFAULT_COLUMN_WIDTH_PX.md)
* [DATA\_TABLE\_EXPLORER\_UNSUPPORTED\_COLUMN\_WIDTH\_PX](/api/mosaic/variables/DATA_TABLE_EXPLORER_UNSUPPORTED_COLUMN_WIDTH_PX.md)
* [DataTableBlockRenderer](/api/mosaic/variables/DataTableBlockRenderer.md)
* [MosaicCodeMirrorEditor](/api/mosaic/variables/MosaicCodeMirrorEditor.md)

## Functions

* [createMosaicColorLegendPlot](/api/mosaic/functions/createMosaicColorLegendPlot.md)
* [MosaicColorLegend](/api/mosaic/functions/MosaicColorLegend.md)
* [createDefaultMosaicConfig](/api/mosaic/functions/createDefaultMosaicConfig.md)
* [createMosaicSlice](/api/mosaic/functions/createMosaicSlice.md)
* [createDataTableExplorerTool](/api/mosaic/functions/createDataTableExplorerTool.md)
* [createDashboardAgentTool](/api/mosaic/functions/createDashboardAgentTool.md)
* [createDashboardAiTools](/api/mosaic/functions/createDashboardAiTools.md)
* [ensureTable](/api/mosaic/functions/ensureTable.md)
* [ensurePanel](/api/mosaic/functions/ensurePanel.md)
* [ensureNoOverride](/api/mosaic/functions/ensureNoOverride.md)
* [createWorksheetAgentTool](/api/mosaic/functions/createWorksheetAgentTool.md)
* [useChartBuilderContext](/api/mosaic/functions/useChartBuilderContext.md)
* [useChartBuilderStore](/api/mosaic/functions/useChartBuilderStore.md)
* [buildChartTitleForSpec](/api/mosaic/functions/buildChartTitleForSpec.md)
* [buildChartTypeTitle](/api/mosaic/functions/buildChartTypeTitle.md)
* [canCreateChartFromType](/api/mosaic/functions/canCreateChartFromType.md)
* [getQueryResultRowCount](/api/mosaic/functions/getQueryResultRowCount.md)
* [assertChartDataPolicy](/api/mosaic/functions/assertChartDataPolicy.md)
* [resolveChartDataPolicy](/api/mosaic/functions/resolveChartDataPolicy.md)
* [createChartRuntimeIssueFromError](/api/mosaic/functions/createChartRuntimeIssueFromError.md)
* [isSpecChartType](/api/mosaic/functions/isSpecChartType.md)
* [isComponentChartType](/api/mosaic/functions/isComponentChartType.md)
* [createBoxPlotAiTool](/api/mosaic/functions/createBoxPlotAiTool.md)
* [createCountPlotAiTool](/api/mosaic/functions/createCountPlotAiTool.md)
* [createChartTools](/api/mosaic/functions/createChartTools.md)
* [createDefaultChartTypes](/api/mosaic/functions/createDefaultChartTypes.md)
* [createHeatmapAiTool](/api/mosaic/functions/createHeatmapAiTool.md)
* [createHistogramAiTool](/api/mosaic/functions/createHistogramAiTool.md)
* [createLineChartAiTool](/api/mosaic/functions/createLineChartAiTool.md)
* [createScatterPlotAiTool](/api/mosaic/functions/createScatterPlotAiTool.md)
* [useBrushSelectionParams](/api/mosaic/functions/useBrushSelectionParams.md)
* [useChartRetainer](/api/mosaic/functions/useChartRetainer.md)
* [useChartRetainerByKey](/api/mosaic/functions/useChartRetainerByKey.md)
* [useParseChartConfig](/api/mosaic/functions/useParseChartConfig.md)
* [useColumnsContext](/api/mosaic/functions/useColumnsContext.md)
* [MosaicDashboardRoot](/api/mosaic/functions/MosaicDashboardRoot.md)
* [useMosaicDashboardContext](/api/mosaic/functions/useMosaicDashboardContext.md)
* [createMosaicDashboardChartPanelConfig](/api/mosaic/functions/createMosaicDashboardChartPanelConfig.md)
* [createMosaicDashboardDataTableExplorerPanelConfig](/api/mosaic/functions/createMosaicDashboardDataTableExplorerPanelConfig.md)
* [isChartPanelConfig](/api/mosaic/functions/isChartPanelConfig.md)
* [getMosaicDashboardPanelId](/api/mosaic/functions/getMosaicDashboardPanelId.md)
* [getMosaicDashboardDockId](/api/mosaic/functions/getMosaicDashboardDockId.md)
* [getMosaicDashboardGridId](/api/mosaic/functions/getMosaicDashboardGridId.md)
* [getMosaicDashboardSelectionName](/api/mosaic/functions/getMosaicDashboardSelectionName.md)
* [createDefaultMosaicDashboardConfig](/api/mosaic/functions/createDefaultMosaicDashboardConfig.md)
* [createMosaicDashboardSlice](/api/mosaic/functions/createMosaicDashboardSlice.md)
* [useStoreWithMosaicDashboard](/api/mosaic/functions/useStoreWithMosaicDashboard.md)
* [createDefaultMosaicDashboardPanelRenderers](/api/mosaic/functions/createDefaultMosaicDashboardPanelRenderers.md)
* [createMosaicDashboardBlockDefinition](/api/mosaic/functions/createMosaicDashboardBlockDefinition.md)
* [useDashboardResetFilters](/api/mosaic/functions/useDashboardResetFilters.md)
* [usePanelResetFilters](/api/mosaic/functions/usePanelResetFilters.md)
* [usePanelClientRegistration](/api/mosaic/functions/usePanelClientRegistration.md)
* [usePanelClients](/api/mosaic/functions/usePanelClients.md)
* [useSelectedOrFirstTable](/api/mosaic/functions/useSelectedOrFirstTable.md)
* [DataTableExplorerHeader](/api/mosaic/functions/DataTableExplorerHeader.md)
* [getDataTableExplorerTableWidth](/api/mosaic/functions/getDataTableExplorerTableWidth.md)
* [useDataTableExplorer](/api/mosaic/functions/useDataTableExplorer.md)
* [useMosaicEditorContext](/api/mosaic/functions/useMosaicEditorContext.md)
* [loadMosaicSchema](/api/mosaic/functions/loadMosaicSchema.md)
* [getCachedMosaicSchema](/api/mosaic/functions/getCachedMosaicSchema.md)
* [preloadMosaicSchema](/api/mosaic/functions/preloadMosaicSchema.md)
* [useMosaicChartEditor](/api/mosaic/functions/useMosaicChartEditor.md)
* [useTablesWithColumns](/api/mosaic/functions/useTablesWithColumns.md)
* [useMosaicClient](/api/mosaic/functions/useMosaicClient.md)
* [getTableReference](/api/mosaic/functions/getTableReference.md)

## References

### MOSAIC\_DASHBOARD\_VGPLOT\_PANEL\_TYPE

Renames and re-exports [MOSAIC\_DASHBOARD\_CHART\_PANEL\_TYPE](/api/mosaic/variables/MOSAIC_DASHBOARD_CHART_PANEL_TYPE.md)

***

### MosaicDashboardSliceConfigType

Renames and re-exports [MosaicDashboardSliceConfig](/api/mosaic/variables/MosaicDashboardSliceConfig.md)

***

### MosaicDashboardEntryType

Renames and re-exports [MosaicDashboardEntry](/api/mosaic/variables/MosaicDashboardEntry.md)

***

### MosaicDashboardPanelConfigType

Renames and re-exports [MosaicDashboardPanelConfig](/api/mosaic/variables/MosaicDashboardPanelConfig.md)
