---
url: >-
  https://sqlrooms.org/api/mosaic/type-aliases/DataTableExplorerCategorySummary.md
---
[@sqlrooms/mosaic](../index.md) / DataTableExplorerCategorySummary

# Type Alias: DataTableExplorerCategorySummary

> **DataTableExplorerCategorySummary** = `DataTableExplorerSummaryStatus` & `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
| `bucketCount` | `number` |
| `buckets` | [`DataTableExplorerCategoryBucket`](DataTableExplorerCategoryBucket.md)\[] |
| `client?` | `MosaicClient` |
| `kind` | `"category"` |
| `selectedKey?` | `string` |
| `toggleValue()` | (`key`) => `void` |
