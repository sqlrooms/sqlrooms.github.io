---
url: 'https://sqlrooms.org/api/pivot/type-aliases/PivotSliceState.md'
---
[@sqlrooms/pivot](../index.md) / PivotSliceState

# Type Alias: PivotSliceState

> **PivotSliceState** = `object`

## Properties

### pivot

> **pivot**: `SliceFunctions` & `object`

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `config` | [`PivotSliceConfig`](PivotSliceConfig.md) |
| `initialize()` | () => `Promise`<`void`> |
| `getPivotStore()` | (`pivotId`) => [`PivotInstanceStore`](PivotInstanceStore.md) |
| `addPivot()` | (`props?`) => `string` |
| `ensurePivot()` | (`pivotId`, `props?`) => `void` |
| `removePivot()` | (`pivotId`) => `void` |
| `renamePivot()` | (`pivotId`, `title`) => `void` |
| `setSource()` | (`pivotId`, `source`) => `void` |
| `setStatus()` | (`pivotId`, `status`) => `void` |
| `setConfig()` | (`pivotId`, `config`) => `void` |
| `patchConfig()` | (`pivotId`, `config`) => `void` |
| `setRendererName()` | (`pivotId`, `rendererName`) => `void` |
| `setAggregatorName()` | (`pivotId`, `aggregatorName`) => `void` |
| `setRows()` | (`pivotId`, `rows`) => `void` |
| `setCols()` | (`pivotId`, `cols`) => `void` |
| `setVals()` | (`pivotId`, `vals`) => `void` |
| `setUnusedOrder()` | (`pivotId`, `unusedOrder`) => `void` |
| `moveField()` | (`pivotId`, `field`, `destination`, `index?`) => `void` |
| `cycleRowOrder()` | (`pivotId`) => `void` |
| `cycleColOrder()` | (`pivotId`) => `void` |
| `setAttributeFilterValues()` | (`pivotId`, `attribute`, `values`) => `void` |
| `addAttributeFilterValues()` | (`pivotId`, `attribute`, `values`) => `void` |
| `removeAttributeFilterValues()` | (`pivotId`, `attribute`, `values`) => `void` |
| `clearAttributeFilter()` | (`pivotId`, `attribute`) => `void` |
| `runPivot()` | (`pivotId`, `opts?`) => `Promise`<`void`> |
