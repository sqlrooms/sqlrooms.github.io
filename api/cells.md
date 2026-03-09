---
url: 'https://sqlrooms.org/api/cells.md'
---
# @sqlrooms/cells

# @sqlrooms/cells

Shared cells model and UI primitives used by notebook and canvas views.

The package owns:

* canonical cell records (`cells.config.data`)
* sheet grouping and ordering (`cells.config.sheets`, `sheetOrder`, `currentSheetId`)
* in-sheet dependency edges and cascade execution
* SQL/result execution helpers and status tracking

## Dependency and schema model

* Dependencies and cascades are **sheet-local** by default.
* Cross-sheet references are only supported via explicit fully qualified SQL names.
* SQL execution resolves to a stable sheet schema namespace; it does not rely on global `USE schema`.
* Unqualified result-name references are resolved to the current sheet namespace during execution.

## Stable public API

Import from package root for stable APIs:

* slice: `createCellsSlice`
* hooks: `useCellsStore`
* helpers: `findSheetIdForCell`, `getSheetsByType`
* SQL helpers: `renderSqlWithInputs`, `findSqlDependencies`, `findSqlDependenciesFromAst`
* UI: `SqlCellContent`, `SqlCellRunButton`, `TextCellContent`, `InputCellContent`, `VegaCellContent`, `SheetsTabBar`
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
* [VegaCellData](type-aliases/VegaCellData.md)
* [InputCellData](type-aliases/InputCellData.md)
* [CellData](type-aliases/CellData.md)
* [TextCell](type-aliases/TextCell.md)
* [VegaCell](type-aliases/VegaCell.md)
* [InputCell](type-aliases/InputCell.md)
* [Cell](type-aliases/Cell.md)
* [CellContainerProps](type-aliases/CellContainerProps.md)
* [SqlSelectToJsonFn](type-aliases/SqlSelectToJsonFn.md)
* [CellRegistryItem](type-aliases/CellRegistryItem.md)
* [CellRegistry](type-aliases/CellRegistry.md)
* [SheetType](type-aliases/SheetType.md)
* [EdgeKind](type-aliases/EdgeKind.md)
* [Edge](type-aliases/Edge.md)
* [SheetGraphCache](type-aliases/SheetGraphCache.md)
* [Sheet](type-aliases/Sheet.md)
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
* [CellsSliceState](type-aliases/CellsSliceState.md)
* [CellsRootState](type-aliases/CellsRootState.md)

## Variables

* [InputCellContent](variables/InputCellContent.md)
* [SheetsTabBar](variables/SheetsTabBar.md)
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
* [SheetType](variables/SheetType.md)
* [EdgeKind](variables/EdgeKind.md)
* [Edge](variables/Edge.md)
* [SheetGraphCache](variables/SheetGraphCache.md)
* [Sheet](variables/Sheet.md)
* [SqlCellStatus](variables/SqlCellStatus.md)
* [OtherCellStatus](variables/OtherCellStatus.md)
* [CellStatus](variables/CellStatus.md)
* [CellsSliceConfig](variables/CellsSliceConfig.md)

## Functions

* [createCellsSlice](functions/createCellsSlice.md)
* [initializeInput](functions/initializeInput.md)
* [SqlCellRunButton](functions/SqlCellRunButton.md)
* [getRenderableDependencyEdges](functions/getRenderableDependencyEdges.md)
* [createDefaultCellRegistry](functions/createDefaultCellRegistry.md)
* [findSheetIdForCell](functions/findSheetIdForCell.md)
* [getSheetsByType](functions/getSheetsByType.md)
* [useCellsStore](functions/useCellsStore.md)
* [renderSqlWithInputs](functions/renderSqlWithInputs.md)
* [findSqlDependencies](functions/findSqlDependencies.md)
* [runSqlWithCallbacks](functions/runSqlWithCallbacks.md)
* [findSqlDependenciesFromAst](functions/findSqlDependenciesFromAst.md)
* [isSqlCell](functions/isSqlCell.md)
* [isTextCell](functions/isTextCell.md)
* [isVegaCell](functions/isVegaCell.md)
* [isInputCell](functions/isInputCell.md)
* [isValidSqlIdentifier](functions/isValidSqlIdentifier.md)
* [getEffectiveResultName](functions/getEffectiveResultName.md)
