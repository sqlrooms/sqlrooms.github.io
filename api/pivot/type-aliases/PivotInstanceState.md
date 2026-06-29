---
url: 'https://sqlrooms.org/api/pivot/type-aliases/PivotInstanceState.md'
---
[@sqlrooms/pivot](../index.md) / PivotInstanceState

# Type Alias: PivotInstanceState

> **PivotInstanceState** = [`PivotInstanceSnapshot`](PivotInstanceSnapshot.md) & `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
| `ui` | `PivotEditorUiState` |
| `setSource()` | (`source`) => `void` |
| `setConfig()` | (`config`) => `void` |
| `patchConfig()` | (`config`) => `void` |
| `setRendererName()` | (`rendererName`) => `void` |
| `setAggregatorName()` | (`aggregatorName`) => `void` |
| `setVals()` | (`vals`) => `void` |
| `moveField()` | (`field`, `destination`, `index?`) => `void` |
| `cycleRowOrder()` | () => `void` |
| `cycleColOrder()` | () => `void` |
| `setAttributeFilterValues()` | (`attribute`, `values`) => `void` |
| `addAttributeFilterValues()` | (`attribute`, `values`) => `void` |
| `removeAttributeFilterValues()` | (`attribute`, `values`) => `void` |
| `clearAttributeFilter()` | (`attribute`) => `void` |
| `setSectionOpen()` | (`section`, `isOpen`) => `void` |
| `run()` | () => `Promise`<`void`> |
