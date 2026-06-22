---
url: 'https://sqlrooms.org/api/pivot/type-aliases/PivotStatus-1.md'
---
[@sqlrooms/pivot](../index.md) / PivotStatus

# Type Alias: PivotStatus

> **PivotStatus** = `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `state` | `"success"` | `"error"` | `"idle"` | `"running"` | `"cancel"` |
|  `stale` | `boolean` |
|  `lastError?` | `string` |
|  `lastRunTime?` | `number` |
|  `relations?` | { `cells?`: `string`; `rowTotals?`: `string`; `colTotals?`: `string`; `grandTotal?`: `string`; `export?`: `string`; } |
|  `sourceRelation?` | `string` |
