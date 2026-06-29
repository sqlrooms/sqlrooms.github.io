---
url: 'https://sqlrooms.org/api/pivot.md'
---
# @sqlrooms/pivot

Slice-driven pivot table UI for SQLRooms, inspired by `react-pivottable` and backed by DuckDB SQL plus Vega-Lite charts.

## Selection model

* `createPivotSlice` manages pivot definitions and runtime state, but not host-level selection.
* Host apps should decide which pivot is visible, for example with layout tabs or an artifacts/workspace registry.
* `PivotView` now requires an explicit `pivotId` prop.

## Stateful block adapter

`createPivotBlockDefinition` exposes pivot tables as stateful block
implementations. Host apps can use this definition directly in block hosts or
wrap it as a top-level artifact shell with `@sqlrooms/artifacts`.

```tsx
import {createArtifactTypeFromStatefulBlock} from '@sqlrooms/artifacts';
import {createPivotBlockDefinition} from '@sqlrooms/pivot';

const pivotBlockDefinition = createPivotBlockDefinition();

export const pivotArtifactType =
  createArtifactTypeFromStatefulBlock(pivotBlockDefinition);
```

The adapter preserves pivot state in `pivot.config.pivots` and delegates
creation, rename, and delete behavior to `createPivotSlice`.

## Type Aliases

* [PivotBlockRenderProps](/api/pivot/type-aliases/PivotBlockRenderProps.md)
* [CreatePivotBlockDefinitionOptions](/api/pivot/type-aliases/CreatePivotBlockDefinitionOptions.md)
* [PivotAggregatorDefinition](/api/pivot/type-aliases/PivotAggregatorDefinition.md)
* [PivotCellData](/api/pivot/type-aliases/PivotCellData.md)
* [PivotCell](/api/pivot/type-aliases/PivotCell.md)
* [PivotRendererName](/api/pivot/type-aliases/PivotRendererName.md)
* [PivotRendererName](/api/pivot/type-aliases/PivotRendererName-1.md)
* [PivotSortOrder](/api/pivot/type-aliases/PivotSortOrder.md)
* [PivotSortOrder](/api/pivot/type-aliases/PivotSortOrder-1.md)
* [PivotFilterMap](/api/pivot/type-aliases/PivotFilterMap.md)
* [PivotValueFilter](/api/pivot/type-aliases/PivotValueFilter.md)
* [PivotConfig](/api/pivot/type-aliases/PivotConfig.md)
* [PivotConfig](/api/pivot/type-aliases/PivotConfig-1.md)
* [PivotSource](/api/pivot/type-aliases/PivotSource.md)
* [PivotSource](/api/pivot/type-aliases/PivotSource-1.md)
* [PivotRelationViews](/api/pivot/type-aliases/PivotRelationViews.md)
* [PivotRelationViews](/api/pivot/type-aliases/PivotRelationViews-1.md)
* [PivotRunState](/api/pivot/type-aliases/PivotRunState.md)
* [PivotRunState](/api/pivot/type-aliases/PivotRunState-1.md)
* [PivotStatus](/api/pivot/type-aliases/PivotStatus.md)
* [PivotStatus](/api/pivot/type-aliases/PivotStatus-1.md)
* [PivotSliceItem](/api/pivot/type-aliases/PivotSliceItem.md)
* [PivotSliceItem](/api/pivot/type-aliases/PivotSliceItem-1.md)
* [PivotSliceConfig](/api/pivot/type-aliases/PivotSliceConfig.md)
* [PivotDropZone](/api/pivot/type-aliases/PivotDropZone.md)
* [PivotField](/api/pivot/type-aliases/PivotField.md)
* [PivotQuerySource](/api/pivot/type-aliases/PivotQuerySource.md)
* [PivotSliceState](/api/pivot/type-aliases/PivotSliceState.md)
* [PivotInstanceSnapshot](/api/pivot/type-aliases/PivotInstanceSnapshot.md)
* [PivotInstanceState](/api/pivot/type-aliases/PivotInstanceState.md)
* [PivotInstanceStore](/api/pivot/type-aliases/PivotInstanceStore.md)
* [PivotOutputCell](/api/pivot/type-aliases/PivotOutputCell.md)

## Variables

* [PivotCellContent](/api/pivot/variables/PivotCellContent.md)
* [PivotEditor](/api/pivot/variables/PivotEditor.md)
* [PivotResults](/api/pivot/variables/PivotResults.md)
* [PivotView](/api/pivot/variables/PivotView.md)
* [PIVOT\_AGGREGATORS](/api/pivot/variables/PIVOT_AGGREGATORS.md)
* [DEFAULT\_PIVOT\_AGGREGATOR](/api/pivot/variables/DEFAULT_PIVOT_AGGREGATOR.md)
* [pivotCellRegistryEntry](/api/pivot/variables/pivotCellRegistryEntry.md)
* [PivotCellData](/api/pivot/variables/PivotCellData.md)
* [PivotCell](/api/pivot/variables/PivotCell.md)
* [PivotCellSchema](/api/pivot/variables/PivotCellSchema.md)
* [PIVOT\_RENDERER\_NAMES](/api/pivot/variables/PIVOT_RENDERER_NAMES.md)
* [PivotFilterMapSchema](/api/pivot/variables/PivotFilterMapSchema.md)
* [PivotValueFilterSchema](/api/pivot/variables/PivotValueFilterSchema.md)
* [PivotSliceConfig](/api/pivot/variables/PivotSliceConfig.md)

## Functions

* [createPivotBlockDefinition](/api/pivot/functions/createPivotBlockDefinition.md)
* [createDefaultPivotConfig](/api/pivot/functions/createDefaultPivotConfig.md)
* [normalizePivotConfig](/api/pivot/functions/normalizePivotConfig.md)
* [setAttributeFilterValuesInConfig](/api/pivot/functions/setAttributeFilterValuesInConfig.md)
* [addAttributeFilterValuesInConfig](/api/pivot/functions/addAttributeFilterValuesInConfig.md)
* [removeAttributeFilterValuesInConfig](/api/pivot/functions/removeAttributeFilterValuesInConfig.md)
* [clearAttributeFilterInConfig](/api/pivot/functions/clearAttributeFilterInConfig.md)
* [createPivotCoreStore](/api/pivot/functions/createPivotCoreStore.md)
* [createPivotSlice](/api/pivot/functions/createPivotSlice.md)
* [getPivotAggregator](/api/pivot/functions/getPivotAggregator.md)
* [getAggregatorLabel](/api/pivot/functions/getAggregatorLabel.md)
* [getDefaultValuesForAggregator](/api/pivot/functions/getDefaultValuesForAggregator.md)
* [formatAggregatorValue](/api/pivot/functions/formatAggregatorValue.md)
* [isPivotCell](/api/pivot/functions/isPivotCell.md)
* [createPivotRelationViews](/api/pivot/functions/createPivotRelationViews.md)
* [createOrReplacePivotRelations](/api/pivot/functions/createOrReplacePivotRelations.md)
* [dropPivotRelations](/api/pivot/functions/dropPivotRelations.md)
* [createPivotQuerySource](/api/pivot/functions/createPivotQuerySource.md)
* [createPivotQuerySourceFromTable](/api/pivot/functions/createPivotQuerySourceFromTable.md)
* [buildCellsQuery](/api/pivot/functions/buildCellsQuery.md)
* [buildRowTotalsQuery](/api/pivot/functions/buildRowTotalsQuery.md)
* [buildColTotalsQuery](/api/pivot/functions/buildColTotalsQuery.md)
* [buildGrandTotalQuery](/api/pivot/functions/buildGrandTotalQuery.md)
* [buildDistinctValuesQuery](/api/pivot/functions/buildDistinctValuesQuery.md)
* [buildPivotExportQuery](/api/pivot/functions/buildPivotExportQuery.md)
* [buildRendererTitle](/api/pivot/functions/buildRendererTitle.md)

## References

### PivotConfigSchema

Renames and re-exports [PivotConfig](/api/pivot/type-aliases/PivotConfig.md)

***

### PivotRelationViewsSchema

Renames and re-exports [PivotRelationViews](/api/pivot/type-aliases/PivotRelationViews.md)

***

### PivotRunStateSchema

Renames and re-exports [PivotRunState](/api/pivot/type-aliases/PivotRunState.md)

***

### PivotSourceSchema

Renames and re-exports [PivotSource](/api/pivot/type-aliases/PivotSource.md)

***

### PivotStatusSchema

Renames and re-exports [PivotStatus](/api/pivot/type-aliases/PivotStatus.md)
