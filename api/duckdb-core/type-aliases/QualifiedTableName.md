---
url: 'https://sqlrooms.org/api/duckdb-core/type-aliases/QualifiedTableName.md'
---
[@sqlrooms/duckdb-core](../index.md) / QualifiedTableName

# Type Alias: QualifiedTableName

> **QualifiedTableName** = `object`

## Properties

### database?

> `optional` **database?**: `string`

***

### schema?

> `optional` **schema?**: `string`

***

### table

> **table**: `string`

***

### defaultDatabase?

> `optional` **defaultDatabase?**: `string`

Database/catalog that can be omitted from the canonical table reference.

***

### toArray

> **toArray**: (`options?`) => `string`\[]

Returns raw, unescaped identifier parts in `[database, schema, table]`
order after applying any requested omissions.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | { `includeDatabase?`: `boolean`; `includeSchema?`: `boolean`; } |
| `options.includeDatabase?` | `boolean` |
| `options.includeSchema?` | `boolean` |

#### Returns

`string`\[]

***

### toFullString

> **toFullString**: () => `string`

Returns a fully-qualified SQL table reference, including the database when
this object carries one.

#### Returns

`string`

***

### toString

> **toString**: () => `string`

#### Returns

`string`
