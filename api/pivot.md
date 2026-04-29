---
url: 'https://sqlrooms.org/api/pivot.md'
---
# @sqlrooms/pivot

# @sqlrooms/pivot

Slice-driven pivot table UI for SQLRooms, inspired by `react-pivottable` and backed by DuckDB SQL plus Vega-Lite charts.

## Selection model

* `createPivotSlice` manages pivot definitions and runtime state, but not host-level selection.
* Host apps should decide which pivot is visible, for example with layout tabs or an artifacts/workspace registry.
* `PivotView` now requires an explicit `pivotId` prop.

## Type Aliases

* [PivotAggregatorDefinition](type-aliases/PivotAggregatorDefinition.md)
* [PivotCellData](type-aliases/PivotCellData.md)
* [PivotCell](type-aliases/PivotCell.md)
* [PivotRendererName](type-aliases/PivotRendererName.md)
* [PivotRendererName](type-aliases/PivotRendererName-1.md)
* [PivotSortOrder](type-aliases/PivotSortOrder.md)
* [PivotSortOrder](type-aliases/PivotSortOrder-1.md)
* [PivotFilterMap](type-aliases/PivotFilterMap.md)
* [PivotValueFilter](type-aliases/PivotValueFilter.md)
* [PivotConfig](type-aliases/PivotConfig.md)
* [PivotConfig](type-aliases/PivotConfig-1.md)
* [PivotSource](type-aliases/PivotSource.md)
* [PivotSource](type-aliases/PivotSource-1.md)
* [PivotRelationViews](type-aliases/PivotRelationViews.md)
* [PivotRelationViews](type-aliases/PivotRelationViews-1.md)
* [PivotRunState](type-aliases/PivotRunState.md)
* [PivotRunState](type-aliases/PivotRunState-1.md)
* [PivotStatus](type-aliases/PivotStatus.md)
* [PivotStatus](type-aliases/PivotStatus-1.md)
* [PivotSliceItem](type-aliases/PivotSliceItem.md)
* [PivotSliceItem](type-aliases/PivotSliceItem-1.md)
* [PivotSliceConfig](type-aliases/PivotSliceConfig.md)
* [PivotDropZone](type-aliases/PivotDropZone.md)
* [PivotField](type-aliases/PivotField.md)
* [PivotQuerySource](type-aliases/PivotQuerySource.md)
* [PivotSliceState](type-aliases/PivotSliceState.md)
* [PivotInstanceSnapshot](type-aliases/PivotInstanceSnapshot.md)
* [PivotInstanceState](type-aliases/PivotInstanceState.md)
* [PivotInstanceStore](type-aliases/PivotInstanceStore.md)
* [PivotOutputCell](type-aliases/PivotOutputCell.md)

## Variables

* [PivotCellContent](variables/PivotCellContent.md)
* [PivotEditor](variables/PivotEditor.md)
* [PivotResults](variables/PivotResults.md)
* [PivotView](variables/PivotView.md)
* [PIVOT\_AGGREGATORS](variables/PIVOT_AGGREGATORS.md)
* [DEFAULT\_PIVOT\_AGGREGATOR](variables/DEFAULT_PIVOT_AGGREGATOR.md)
* [pivotCellRegistryEntry](variables/pivotCellRegistryEntry.md)
* [PivotCellData](variables/PivotCellData.md)
* [PivotCell](variables/PivotCell.md)
* [PivotCellSchema](variables/PivotCellSchema.md)
* [PIVOT\_RENDERER\_NAMES](variables/PIVOT_RENDERER_NAMES.md)
* [PivotFilterMapSchema](variables/PivotFilterMapSchema.md)
* [PivotValueFilterSchema](variables/PivotValueFilterSchema.md)
* [PivotSliceConfig](variables/PivotSliceConfig.md)

## Functions

* [createDefaultPivotConfig](functions/createDefaultPivotConfig.md)
* [normalizePivotConfig](functions/normalizePivotConfig.md)
* [setAttributeFilterValuesInConfig](functions/setAttributeFilterValuesInConfig.md)
* [addAttributeFilterValuesInConfig](functions/addAttributeFilterValuesInConfig.md)
* [removeAttributeFilterValuesInConfig](functions/removeAttributeFilterValuesInConfig.md)
* [clearAttributeFilterInConfig](functions/clearAttributeFilterInConfig.md)
* [createPivotCoreStore](functions/createPivotCoreStore.md)
* [createPivotSlice](functions/createPivotSlice.md)
* [getPivotAggregator](functions/getPivotAggregator.md)
* [getAggregatorLabel](functions/getAggregatorLabel.md)
* [getDefaultValuesForAggregator](functions/getDefaultValuesForAggregator.md)
* [formatAggregatorValue](functions/formatAggregatorValue.md)
* [isPivotCell](functions/isPivotCell.md)
* [createPivotRelationViews](functions/createPivotRelationViews.md)
* [createOrReplacePivotRelations](functions/createOrReplacePivotRelations.md)
* [dropPivotRelations](functions/dropPivotRelations.md)
* [createPivotQuerySource](functions/createPivotQuerySource.md)
* [createPivotQuerySourceFromTable](functions/createPivotQuerySourceFromTable.md)
* [buildCellsQuery](functions/buildCellsQuery.md)
* [buildRowTotalsQuery](functions/buildRowTotalsQuery.md)
* [buildColTotalsQuery](functions/buildColTotalsQuery.md)
* [buildGrandTotalQuery](functions/buildGrandTotalQuery.md)
* [buildDistinctValuesQuery](functions/buildDistinctValuesQuery.md)
* [buildPivotExportQuery](functions/buildPivotExportQuery.md)
* [buildRendererTitle](functions/buildRendererTitle.md)

## References

### PivotConfigSchema

Renames and re-exports [PivotConfig](type-aliases/PivotConfig.md)

***

### PivotRelationViewsSchema

Renames and re-exports [PivotRelationViews](type-aliases/PivotRelationViews.md)

***

### PivotRunStateSchema

Renames and re-exports [PivotRunState](type-aliases/PivotRunState.md)

***

### PivotSourceSchema

Renames and re-exports [PivotSource](type-aliases/PivotSource.md)

***

### PivotStatusSchema

Renames and re-exports [PivotStatus](type-aliases/PivotStatus.md)
