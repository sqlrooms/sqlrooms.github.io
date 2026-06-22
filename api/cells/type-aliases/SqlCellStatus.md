---
url: 'https://sqlrooms.org/api/cells/type-aliases/SqlCellStatus.md'
---
[@sqlrooms/cells](../index.md) / SqlCellStatus

# Type Alias: SqlCellStatus

> **SqlCellStatus** = `object`

Cell Status

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `type` | `"sql"` |
|  `status` | `"success"` | `"idle"` | `"running"` | `"cancel"` | `"error"` |
|  `lastError?` | `string` |
|  `referencedTables` | `string`\[] |
|  `resultName?` | `string` |
|  `resultView?` | `string` |
|  `resultRelationType?` | `"view"` | `"table"` |
|  `lastRunTime?` | `number` |
