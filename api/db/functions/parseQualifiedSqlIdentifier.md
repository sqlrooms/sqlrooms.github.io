---
url: 'https://sqlrooms.org/api/db/functions/parseQualifiedSqlIdentifier.md'
---
[@sqlrooms/db](../index.md) / parseQualifiedSqlIdentifier

# Function: parseQualifiedSqlIdentifier()

> **parseQualifiedSqlIdentifier**(`qualifiedName`): `Partial`<[`QualifiedTableName`](../type-aliases/QualifiedTableName.md)> | `undefined`

Parses a possibly-qualified SQL identifier into database, schema, and table
segments. The parser is quote-aware, so dots inside double-quoted identifiers
are treated as part of the current segment.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `qualifiedName` | `string` | `undefined` |

## Returns

`Partial`<[`QualifiedTableName`](../type-aliases/QualifiedTableName.md)> | `undefined`

## Example

```ts
parseQualifiedSqlIdentifier('schema.table')
// {schema: 'schema', table: 'table'}
parseQualifiedSqlIdentifier('"memory"."main"."events.2026"')
// {database: 'memory', schema: 'main', table: 'events.2026'}
```
