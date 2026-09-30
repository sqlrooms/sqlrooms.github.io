---
url: https://sqlrooms.org/api/deck/type-aliases/DeckSqlDatasetInput.md
---
[@sqlrooms/deck](../index.md) / DeckSqlDatasetInput

# Type Alias: DeckSqlDatasetInput

> **DeckSqlDatasetInput** = `DeckDatasetBase` & `object`

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `sqlQuery` | `string` | Literal SQL query used as the full dataset source. SQLRooms does not rewrite this query when dashboard selected tables change. Use `DeckTableDatasetInput` when a dataset should follow a structured table source. |
