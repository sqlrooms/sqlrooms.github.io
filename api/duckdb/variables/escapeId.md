---
url: /api/duckdb/variables/escapeId.md
---
[@sqlrooms/duckdb](../index.md) / escapeId

# Variable: escapeId()

> `const` **escapeId**: (`id`) => `string`

Escapes an identifier (like table or column names) for use in DuckDB SQL queries
by wrapping it in double quotes and escaping any existing double quotes by doubling them.
If the identifier is already properly quoted, returns it as is.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The identifier string to escape |

## Returns

`string`

The escaped identifier wrapped in double quotes

## Example

```ts
escapeId("my_table") // Returns '"my_table"'
escapeId("my""table") // Returns '"my""""table"'
```
