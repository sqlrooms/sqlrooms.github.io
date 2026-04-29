---
url: 'https://sqlrooms.org/api/cells.md'
---
# @sqlrooms/cells

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

* [BuiltInCellType](type-aliases/BuiltInCellType.md)
* [CellType](type-aliases/CellType.md)
* [InputTypes](type-aliases/InputTypes.md)
* [InputText](type-aliases/InputText.md)
* [InputSlider](type-aliases/InputSlider.md)
* [InputDropdown](type-aliases/InputDropdown.md)
* [InputUnion](type-aliases/InputUnion.md)
* [SqlCellData](type-aliases/SqlCellData.md)
* [TextCellData](type-aliases/TextCellData.md)
* [BrushFieldType](type-aliases/BrushFieldType.md)
* [CrossFilterConfig](type-aliases/CrossFilterConfig.md)
* [VegaCellData](type-aliases/VegaCellData.md)
* [InputCellData](type-aliases/InputCellData.md)
* [CellData](type-aliases/CellData.md)
* [TextCell](type-aliases/TextCell.md)
* [VegaCell](type-aliases/VegaCell.md)
* [InputCell](type-aliases/InputCell.md)
* [Cell](type-aliases/Cell.md)
* [CellContainerProps](type-aliases/CellContainerProps.md)
* [SqlSelectToJsonFn](type-aliases/SqlSelectToJsonFn.md)
* [CellDependencies](type-aliases/CellDependencies.md)
* [CreateCellArgs](type-aliases/CreateCellArgs.md)
* [CellRegistryItem](type-aliases/CellRegistryItem.md)
* [CellRegistry](type-aliases/CellRegistry.md)
* [EdgeKind](type-aliases/EdgeKind.md)
* [Edge](type-aliases/Edge.md)
* [CellArtifactGraphCache](type-aliases/CellArtifactGraphCache.md)
* [CellArtifactRuntime](type-aliases/CellArtifactRuntime.md)
* [SqlCellStatus](type-aliases/SqlCellStatus.md)
* [OtherCellStatus](type-aliases/OtherCellStatus.md)
* [CellStatus](type-aliases/CellStatus.md)
* [SqlRunResult](type-aliases/SqlRunResult.md)
* [SqlRunCallbacks](type-aliases/SqlRunCallbacks.md)
* [SqlRenderInput](type-aliases/SqlRenderInput.md)
* [SqlDependencyOptions](type-aliases/SqlDependencyOptions.md)
* [SqlCellRunStatus](type-aliases/SqlCellRunStatus.md)
* [CellsSliceConfig](type-aliases/CellsSliceConfig.md)
* [CellsSliceOptions](type-aliases/CellsSliceOptions.md)
* [CellResultData](type-aliases/CellResultData.md)
* [CrossFilterSelection](type-aliases/CrossFilterSelection.md)
* [CellsSliceState](type-aliases/CellsSliceState.md)
* [CellsRootState](type-aliases/CellsRootState.md)

## Variables

* [CellSourceSelector](variables/CellSourceSelector.md)
* [InputCellContent](variables/InputCellContent.md)
* [SqlCellContent](variables/SqlCellContent.md)
* [TextCellContent](variables/TextCellContent.md)
* [VegaCellContent](variables/VegaCellContent.md)
* [SqlCell](variables/SqlCell.md)
* [CellType](variables/CellType.md)
* [InputTypes](variables/InputTypes.md)
* [InputText](variables/InputText.md)
* [InputSlider](variables/InputSlider.md)
* [InputDropdown](variables/InputDropdown.md)
* [InputUnion](variables/InputUnion.md)
* [SqlCellData](variables/SqlCellData.md)
* [TextCellData](variables/TextCellData.md)
* [CrossFilterConfig](variables/CrossFilterConfig.md)
* [VegaCellData](variables/VegaCellData.md)
* [InputCellData](variables/InputCellData.md)
* [CellData](variables/CellData.md)
* [TextCell](variables/TextCell.md)
* [VegaCell](variables/VegaCell.md)
* [InputCell](variables/InputCell.md)
* [SqlCellSchema](variables/SqlCellSchema.md)
* [TextCellSchema](variables/TextCellSchema.md)
* [VegaCellSchema](variables/VegaCellSchema.md)
* [InputCellSchema](variables/InputCellSchema.md)
* [Cell](variables/Cell.md)
* [EdgeKind](variables/EdgeKind.md)
* [Edge](variables/Edge.md)
* [CellArtifactGraphCache](variables/CellArtifactGraphCache.md)
* [CellArtifactRuntime](variables/CellArtifactRuntime.md)
* [SqlCellStatus](variables/SqlCellStatus.md)
* [OtherCellStatus](variables/OtherCellStatus.md)
* [CellsSliceConfig](variables/CellsSliceConfig.md)
* [BRUSH\_PARAM\_NAME](variables/BRUSH_PARAM_NAME.md)

## Functions

* [createCellsSlice](functions/createCellsSlice.md)
* [initializeInput](functions/initializeInput.md)
* [SqlCellRunButton](functions/SqlCellRunButton.md)
* [getRenderableDependencyEdges](functions/getRenderableDependencyEdges.md)
* [createDefaultCellRegistry](functions/createDefaultCellRegistry.md)
* [normalizeCellDependencies](functions/normalizeCellDependencies.md)
* [findArtifactIdForCell](functions/findArtifactIdForCell.md)
* [resolveArtifactSchemaName](functions/resolveArtifactSchemaName.md)
* [toDataSourceCell](functions/toDataSourceCell.md)
* [toDataSourceTable](functions/toDataSourceTable.md)
* [isDataSourceCell](functions/isDataSourceCell.md)
* [isDataSourceTable](functions/isDataSourceTable.md)
* [fromDataSourceCell](functions/fromDataSourceCell.md)
* [fromDataSourceTable](functions/fromDataSourceTable.md)
* [useCellsStore](functions/useCellsStore.md)
* [renderSqlWithInputs](functions/renderSqlWithInputs.md)
* [findSqlDependencies](functions/findSqlDependencies.md)
* [runSqlWithCallbacks](functions/runSqlWithCallbacks.md)
* [findSqlDependenciesFromAst](functions/findSqlDependenciesFromAst.md)
* [isSqlCell](functions/isSqlCell.md)
* [isTextCell](functions/isTextCell.md)
* [isVegaCell](functions/isVegaCell.md)
* [isInputCell](functions/isInputCell.md)
* [isSqlCellStatus](functions/isSqlCellStatus.md)
* [buildCrossFilterPredicate](functions/buildCrossFilterPredicate.md)
