---
url: https://sqlrooms.org/api/deck/type-aliases/DeckTableDatasetInput.md
---
[@sqlrooms/deck](../index.md) / DeckTableDatasetInput

# Type Alias: DeckTableDatasetInput

> **DeckTableDatasetInput** = `DeckDatasetBase` & `object`

Structured table-backed dataset source.

`tableName` identifies the source relation. When `transformSql` is present,
it must be a complete SELECT query that reads from the reserved
`__sqlrooms_source` relation supplied by SQLRooms at execution time.

## Type Declaration

| Name | Type |
| ------ | ------ |
| `tableName` | `string` |
| `transformSql?` | `string` |
