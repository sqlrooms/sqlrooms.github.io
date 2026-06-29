---
url: 'https://sqlrooms.org/api/cells.md'
---
# @sqlrooms/cells

Shared cells model and UI primitives used by notebook and canvas views.

The package owns:

* canonical cell records (`cells.config.data`)
* artifact-scoped runtime containers (`cells.config.artifacts`)
* in-artifact dependency edges and cascade execution
* SQL/result execution helpers and status tracking

## Dependency and schema model

* Dependencies and cascades are **artifact-local** by default.
* Cross-artifact references are only supported via explicit fully qualified SQL names.
* SQL execution resolves to a stable artifact schema namespace; it does not rely on global `USE schema`.
* Unqualified result-name references are resolved to the current artifact namespace during execution.

## Stable public API

Import from package root for stable APIs:

* slice: `createCellsSlice`
* hooks: `useCellsStore`
* helpers: `findArtifactIdForCell`, `resolveArtifactSchemaName`
* SQL helpers: `renderSqlWithInputs`, `findSqlDependencies`, `findSqlDependenciesFromAst`
* UI: `SqlCellContent`, `SqlCellRunButton`, `TextCellContent`, `InputCellContent`, `VegaCellContent`, `CellSourceSelector`
* types/schemas: exports from `types.ts`

## Internal APIs

Avoid importing internal implementation modules directly (for example `dagUtils`, `execution`, or component subpaths). These are not guaranteed to be semver-stable.

## Type Aliases

* [BuiltInCellType](/api/cells/type-aliases/BuiltInCellType.md)
* [CellType](/api/cells/type-aliases/CellType.md)
* [InputTypes](/api/cells/type-aliases/InputTypes.md)
* [InputText](/api/cells/type-aliases/InputText.md)
* [InputSlider](/api/cells/type-aliases/InputSlider.md)
* [InputDropdown](/api/cells/type-aliases/InputDropdown.md)
* [InputUnion](/api/cells/type-aliases/InputUnion.md)
* [SqlCellData](/api/cells/type-aliases/SqlCellData.md)
* [TextCellData](/api/cells/type-aliases/TextCellData.md)
* [BrushFieldType](/api/cells/type-aliases/BrushFieldType.md)
* [CrossFilterConfig](/api/cells/type-aliases/CrossFilterConfig.md)
* [VegaCellData](/api/cells/type-aliases/VegaCellData.md)
* [InputCellData](/api/cells/type-aliases/InputCellData.md)
* [CellData](/api/cells/type-aliases/CellData.md)
* [TextCell](/api/cells/type-aliases/TextCell.md)
* [VegaCell](/api/cells/type-aliases/VegaCell.md)
* [InputCell](/api/cells/type-aliases/InputCell.md)
* [Cell](/api/cells/type-aliases/Cell.md)
* [CellContainerProps](/api/cells/type-aliases/CellContainerProps.md)
* [SqlSelectToJsonFn](/api/cells/type-aliases/SqlSelectToJsonFn.md)
* [CellDependencies](/api/cells/type-aliases/CellDependencies.md)
* [CreateCellArgs](/api/cells/type-aliases/CreateCellArgs.md)
* [CellRegistryItem](/api/cells/type-aliases/CellRegistryItem.md)
* [CellRegistry](/api/cells/type-aliases/CellRegistry.md)
* [EdgeKind](/api/cells/type-aliases/EdgeKind.md)
* [Edge](/api/cells/type-aliases/Edge.md)
* [CellArtifactGraphCache](/api/cells/type-aliases/CellArtifactGraphCache.md)
* [CellArtifactRuntime](/api/cells/type-aliases/CellArtifactRuntime.md)
* [SqlCellStatus](/api/cells/type-aliases/SqlCellStatus.md)
* [OtherCellStatus](/api/cells/type-aliases/OtherCellStatus.md)
* [CellStatus](/api/cells/type-aliases/CellStatus.md)
* [SqlRunResult](/api/cells/type-aliases/SqlRunResult.md)
* [SqlRunCallbacks](/api/cells/type-aliases/SqlRunCallbacks.md)
* [SqlRenderInput](/api/cells/type-aliases/SqlRenderInput.md)
* [SqlDependencyOptions](/api/cells/type-aliases/SqlDependencyOptions.md)
* [SqlCellRunStatus](/api/cells/type-aliases/SqlCellRunStatus.md)
* [CellsSliceConfig](/api/cells/type-aliases/CellsSliceConfig.md)
* [CellsSliceOptions](/api/cells/type-aliases/CellsSliceOptions.md)
* [CellResultData](/api/cells/type-aliases/CellResultData.md)
* [CrossFilterSelection](/api/cells/type-aliases/CrossFilterSelection.md)
* [CellsSliceState](/api/cells/type-aliases/CellsSliceState.md)
* [CellsRootState](/api/cells/type-aliases/CellsRootState.md)

## Variables

* [CellSourceSelector](/api/cells/variables/CellSourceSelector.md)
* [InputCellContent](/api/cells/variables/InputCellContent.md)
* [SqlCellContent](/api/cells/variables/SqlCellContent.md)
* [TextCellContent](/api/cells/variables/TextCellContent.md)
* [VegaCellContent](/api/cells/variables/VegaCellContent.md)
* [SqlCell](/api/cells/variables/SqlCell.md)
* [CellType](/api/cells/variables/CellType.md)
* [InputTypes](/api/cells/variables/InputTypes.md)
* [InputText](/api/cells/variables/InputText.md)
* [InputSlider](/api/cells/variables/InputSlider.md)
* [InputDropdown](/api/cells/variables/InputDropdown.md)
* [InputUnion](/api/cells/variables/InputUnion.md)
* [SqlCellData](/api/cells/variables/SqlCellData.md)
* [TextCellData](/api/cells/variables/TextCellData.md)
* [CrossFilterConfig](/api/cells/variables/CrossFilterConfig.md)
* [VegaCellData](/api/cells/variables/VegaCellData.md)
* [InputCellData](/api/cells/variables/InputCellData.md)
* [CellData](/api/cells/variables/CellData.md)
* [TextCell](/api/cells/variables/TextCell.md)
* [VegaCell](/api/cells/variables/VegaCell.md)
* [InputCell](/api/cells/variables/InputCell.md)
* [SqlCellSchema](/api/cells/variables/SqlCellSchema.md)
* [TextCellSchema](/api/cells/variables/TextCellSchema.md)
* [VegaCellSchema](/api/cells/variables/VegaCellSchema.md)
* [InputCellSchema](/api/cells/variables/InputCellSchema.md)
* [Cell](/api/cells/variables/Cell.md)
* [EdgeKind](/api/cells/variables/EdgeKind.md)
* [Edge](/api/cells/variables/Edge.md)
* [CellArtifactGraphCache](/api/cells/variables/CellArtifactGraphCache.md)
* [CellArtifactRuntime](/api/cells/variables/CellArtifactRuntime.md)
* [SqlCellStatus](/api/cells/variables/SqlCellStatus.md)
* [OtherCellStatus](/api/cells/variables/OtherCellStatus.md)
* [CellsSliceConfig](/api/cells/variables/CellsSliceConfig.md)

## Functions

* [createCellsSlice](/api/cells/functions/createCellsSlice.md)
* [initializeInput](/api/cells/functions/initializeInput.md)
* [SqlCellRunButton](/api/cells/functions/SqlCellRunButton.md)
* [getRenderableDependencyEdges](/api/cells/functions/getRenderableDependencyEdges.md)
* [createDefaultCellRegistry](/api/cells/functions/createDefaultCellRegistry.md)
* [normalizeCellDependencies](/api/cells/functions/normalizeCellDependencies.md)
* [findArtifactIdForCell](/api/cells/functions/findArtifactIdForCell.md)
* [resolveArtifactSchemaName](/api/cells/functions/resolveArtifactSchemaName.md)
* [toDataSourceCell](/api/cells/functions/toDataSourceCell.md)
* [toDataSourceTable](/api/cells/functions/toDataSourceTable.md)
* [isDataSourceCell](/api/cells/functions/isDataSourceCell.md)
* [isDataSourceTable](/api/cells/functions/isDataSourceTable.md)
* [fromDataSourceCell](/api/cells/functions/fromDataSourceCell.md)
* [fromDataSourceTable](/api/cells/functions/fromDataSourceTable.md)
* [useCellsStore](/api/cells/functions/useCellsStore.md)
* [renderSqlWithInputs](/api/cells/functions/renderSqlWithInputs.md)
* [findSqlDependencies](/api/cells/functions/findSqlDependencies.md)
* [runSqlWithCallbacks](/api/cells/functions/runSqlWithCallbacks.md)
* [findSqlDependenciesFromAst](/api/cells/functions/findSqlDependenciesFromAst.md)
* [isSqlCell](/api/cells/functions/isSqlCell.md)
* [isTextCell](/api/cells/functions/isTextCell.md)
* [isVegaCell](/api/cells/functions/isVegaCell.md)
* [isInputCell](/api/cells/functions/isInputCell.md)
* [isSqlCellStatus](/api/cells/functions/isSqlCellStatus.md)
* [getUnqualifiedSqlIdentifier](/api/cells/functions/getUnqualifiedSqlIdentifier.md)
