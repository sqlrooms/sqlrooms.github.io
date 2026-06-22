---
url: 'https://sqlrooms.org/api/db/functions/quoteTableReference.md'
---
[@sqlrooms/db](../index.md) / quoteTableReference

# Function: quoteTableReference()

> **quoteTableReference**(`tableName`): `string`

Quotes a table reference for SQL.

Accepts bare names, unquoted qualified names, or already-quoted qualified
identifiers. Without a default database context, the result keeps all parsed
table reference parts and quotes each identifier segment.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `tableName` | `string` |

## Returns

`string`

## Example

```ts
quoteTableReference('events') // '"events"'
quoteTableReference('main.events') // '"main"."events"'
quoteTableReference('"memory"."main"."events.2026"') // '"memory"."main"."events.2026"'
```
