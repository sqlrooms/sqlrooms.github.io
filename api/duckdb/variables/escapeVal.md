---
url: /api/duckdb/variables/escapeVal.md
---
[@sqlrooms/duckdb](../index.md) / escapeVal

# Variable: escapeVal()

> `const` **escapeVal**: (`val`) => `string`

Escapes a value for use in DuckDB SQL queries by wrapping it in single quotes
and escaping any existing single quotes by doubling them.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `val` | `unknown` | The value to escape. Will be converted to string if not already a string. |

## Returns

`string`

The escaped string value wrapped in single quotes.

## Example

```ts
escapeVal("John's data") // Returns "'John''s data'"
```
