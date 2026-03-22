---
url: 'https://sqlrooms.org/api/notebook.md'
---
# @sqlrooms/notebook

# @sqlrooms/notebook

Tabbed notebook UI and Zustand slice for SQL/text/markdown/vega/input cells in SQLRooms apps.

* NotebookSlice stores tabs and cells under `config.notebook`
* SQL cells create DuckDB views in schema `notebook` using the cell name
* Cell execution cascades to dependents when definitions change
* Pluggable cell renderers supported via `createNotebookSlice()`

## Installation

```bash
pnpm add @sqlrooms/notebook
```

## API

### Config

* `createDefaultNotebookConfig(partial?)` → default `config.notebook`
* Zod schemas: `NotebookSliceConfig`, `NotebookCellSchema`, `NotebookTabSchema`

### Slice

```ts
createNotebookSlice({});
```

Requires a store that also includes `@sqlrooms/duckdb` slice for `db.sqlSelectToJson` and `db.getConnector`.

Notebook actions under `notebook`:

* `addTab()`, `renameTab(id, title)`, `setCurrentTab(id)`, `removeTab(id)`
* `addCell(tabId, type)`, `removeCell(cellId)`, `renameCell(cellId, name)`, `updateCell(cellId, updater)`
* `runCell(cellId, opts?)`, `runAllCells(tabId)`, `cancelRunCell(cellId)`

SQL cells must contain a single `SELECT` statement. Validation is performed via `get().db.sqlSelectToJson(lastQueryStatement)`. Successful execution creates or replaces a DuckDB view in schema `notebook` named after the cell.

Dependencies are inferred from `sqlSelectToJson` and basic name references; when a cell runs, dependent SQL cells are re-run unless `cascade` is disabled.

### UI

`createNotebookComponents(useStore)` returns `{ Notebook }` React component bound to your store hook.

```tsx
const {Notebook} = createNotebookComponents(useRoomStore);
<Notebook />;
```

Tabs use `EditableText` for renaming, with a + Add button. SQL, Text, Markdown, Vega (stub), and Input cells are supported out of the box.

## Stable vs internal imports

Use root imports from `@sqlrooms/notebook` as the stable API surface.

* stable: `createNotebookSlice`, `createDefaultNotebookConfig`, `Notebook`, `useStoreWithNotebook`, exported schema types
* internal: direct imports from implementation files under `src/` are not semver-stable and may change without notice

## Type Aliases

* [InputTypes](type-aliases/InputTypes.md)
* [NotebookSliceState](type-aliases/NotebookSliceState.md)
* [InputCell](type-aliases/InputCell.md)
* [NotebookCell](type-aliases/NotebookCell.md)
* [NotebookSheetMeta](type-aliases/NotebookSheetMeta.md)
* [NotebookSheet](type-aliases/NotebookSheet.md)
* [NotebookSliceConfig](type-aliases/NotebookSliceConfig.md)
* [NotebookTab](type-aliases/NotebookTab.md)

## Variables

* [InputTypes](variables/InputTypes.md)
* [Notebook](variables/Notebook.md)
* [InputCell](variables/InputCell.md)
* [NotebookCell](variables/NotebookCell.md)
* [NotebookSheetMeta](variables/NotebookSheetMeta.md)
* [NotebookSheet](variables/NotebookSheet.md)
* [NotebookSliceConfig](variables/NotebookSliceConfig.md)
* [NotebookTab](variables/NotebookTab.md)

## Functions

* [createDefaultNotebookConfig](functions/createDefaultNotebookConfig.md)
* [createNotebookSlice](functions/createNotebookSlice.md)
* [useStoreWithNotebook](functions/useStoreWithNotebook.md)
