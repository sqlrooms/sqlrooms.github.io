---
url: 'https://sqlrooms.org/api/ai/type-aliases/QueryToolOutput.md'
---
[@sqlrooms/ai](../index.md) / QueryToolOutput

# Type Alias: QueryToolOutput

> **QueryToolOutput** = `object`

## Properties

### success

> **success**: `boolean`

***

### data?

> `optional` **data?**: `object`

| Name | Type |
| ------ | ------ |
| `type` | `"query"` |
| `summary` | `Record`<`string`, `unknown`>\[] | `null` |
| `firstRows?` | `Record`<`string`, `unknown`>\[] |

***

### title

> **title**: `string`

***

### sqlQuery

> **sqlQuery**: `string`

***

### details?

> `optional` **details?**: `string`

***

### error?

> `optional` **error?**: `string`

***

### showSql?

> `optional` **showSql?**: `boolean`

Whether to show the SQL query block in the renderer.
Overrides the `showSql` option passed to [createQueryToolRenderer](../functions/createQueryToolRenderer.md).
Defaults to the renderer's `showSql` option when not set (which itself defaults to true).
