---
url: 'https://sqlrooms.org/api/mosaic/functions/usePanelResetFilters.md'
---
[@sqlrooms/mosaic](../index.md) / usePanelResetFilters

# Function: usePanelResetFilters()

> **usePanelResetFilters**(`__namedParameters`): [`UsePanelResetFiltersReturn`](../type-aliases/UsePanelResetFiltersReturn.md)

Hook for managing panel-specific filter reset logic.
Tracks active filters from the given panel clients and provides a reset function
that only clears filters originating from those clients.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`UsePanelResetFiltersOptions`](../type-aliases/UsePanelResetFiltersOptions.md) |

## Returns

[`UsePanelResetFiltersReturn`](../type-aliases/UsePanelResetFiltersReturn.md)
