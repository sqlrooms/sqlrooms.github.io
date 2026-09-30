---
url: https://sqlrooms.org/api/duckdb/type-aliases/SplitSqlStatementsOptions.md
---
[@sqlrooms/duckdb](../index.md) / SplitSqlStatementsOptions

# Type Alias: SplitSqlStatementsOptions

> **SplitSqlStatementsOptions** = `object`

Options for [splitSqlStatements](../functions/splitSqlStatements.md).

## Properties

### removeComments?

> `optional` **removeComments?**: `boolean`

Whether to remove SQL comments from returned statements. Comment removal
preserves line breaks and inserts whitespace where needed to avoid joining
adjacent SQL tokens.

#### Default

```ts
true
```
