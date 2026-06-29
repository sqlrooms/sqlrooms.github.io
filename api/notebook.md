---
url: 'https://sqlrooms.org/api/notebook.md'
---
# @sqlrooms/notebook

Artifact-scoped notebook UI and Zustand slice for SQL/text/markdown/vega/input cells in SQLRooms apps.

* NotebookSlice stores per-artifact notebook metadata under `config.artifacts`
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
* Zod schemas: `NotebookSliceConfig`, `NotebookCell`, `NotebookArtifact`, `NotebookArtifactMeta`

### Slice

```ts
createNotebookSlice({});
```

Requires a store that also includes `@sqlrooms/duckdb` slice for `db.sqlSelectToJson` and `db.getConnector`.

Notebook actions under `notebook`:

* `ensureArtifact(artifactId)`, `removeArtifact(artifactId)`
* `addCell(artifactId, type)`, `moveCell(artifactId, cellId, direction)`
* `removeCell(cellId)`, `renameCell(cellId, name)`, `updateCell(cellId, updater)`
* `runCell(cellId, opts?)`, `runAllCells(artifactId)`, `runAllCellsCascade(artifactId)`, `cancelRunCell(cellId)`

SQL cells must contain a single `SELECT` statement. Validation is performed via `get().db.sqlSelectToJson(lastQueryStatement)`. Successful execution creates or replaces a DuckDB view in schema `notebook` named after the cell.

Dependencies are inferred from `sqlSelectToJson` and basic name references; when a cell runs, dependent SQL cells are re-run unless `cascade` is disabled.

### UI

`Notebook` is exported from the package root and requires an explicit `artifactId`.

```tsx
<Notebook artifactId="notebook-1" />
```

The host app owns artifact titles and selection. SQL, Text, Markdown, Vega, Pivot, and Input cells are supported out of the box.

## Stable vs internal imports

Use root imports from `@sqlrooms/notebook` as the stable API surface.

* stable: `createNotebookSlice`, `createDefaultNotebookConfig`, `Notebook`, `useStoreWithNotebook`, exported schema types
* internal: direct imports from implementation files under `src/` are not semver-stable and may change without notice

## Type Aliases

* [InputTypes](/api/notebook/type-aliases/InputTypes.md)
* [NotebookSliceState](/api/notebook/type-aliases/NotebookSliceState.md)
* [InputCell](/api/notebook/type-aliases/InputCell.md)
* [NotebookCell](/api/notebook/type-aliases/NotebookCell.md)
* [NotebookArtifactMeta](/api/notebook/type-aliases/NotebookArtifactMeta.md)
* [NotebookArtifact](/api/notebook/type-aliases/NotebookArtifact.md)
* [NotebookSliceConfig](/api/notebook/type-aliases/NotebookSliceConfig.md)
* [NotebookArtifactView](/api/notebook/type-aliases/NotebookArtifactView.md)

## Variables

* [InputTypes](/api/notebook/variables/InputTypes.md)
* [Notebook](/api/notebook/variables/Notebook.md)
* [InputCell](/api/notebook/variables/InputCell.md)
* [NotebookCell](/api/notebook/variables/NotebookCell.md)
* [NotebookArtifactMeta](/api/notebook/variables/NotebookArtifactMeta.md)
* [NotebookArtifact](/api/notebook/variables/NotebookArtifact.md)
* [NotebookSliceConfig](/api/notebook/variables/NotebookSliceConfig.md)
* [NotebookArtifactView](/api/notebook/variables/NotebookArtifactView.md)

## Functions

* [createDefaultNotebookConfig](/api/notebook/functions/createDefaultNotebookConfig.md)
* [createNotebookSlice](/api/notebook/functions/createNotebookSlice.md)
* [useStoreWithNotebook](/api/notebook/functions/useStoreWithNotebook.md)
