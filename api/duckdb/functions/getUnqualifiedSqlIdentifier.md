---
url: 'https://sqlrooms.org/api/duckdb/functions/getUnqualifiedSqlIdentifier.md'
---
[@sqlrooms/duckdb](../index.md) / getUnqualifiedSqlIdentifier

# Function: getUnqualifiedSqlIdentifier()

> **getUnqualifiedSqlIdentifier**(`qualifiedName`): `string` | `undefined`

Returns the final identifier segment from a possibly-qualified SQL name.

The parser is quote-aware: dots inside double-quoted identifiers are treated
as part of the identifier rather than as qualification separators. Embedded
quotes inside a quoted segment use the standard `""` escape.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `qualifiedName` | `string` | `undefined` |

## Returns

`string` | `undefined`

## Example

```ts
getUnqualifiedSqlIdentifier('schema.table')              // 'table'
getUnqualifiedSqlIdentifier('db.schema.table')           // 'table'
getUnqualifiedSqlIdentifier('schema."my.funny.table"')   // 'my.funny.table'
getUnqualifiedSqlIdentifier('"weird""name"')             // 'weird"name'
```
