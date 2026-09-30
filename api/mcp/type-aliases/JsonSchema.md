---
url: https://sqlrooms.org/api/mcp/type-aliases/JsonSchema.md
---
[@sqlrooms/mcp](../index.md) / JsonSchema

# Type Alias: JsonSchema

> **JsonSchema** = `object`

JSON Schema subset accepted for portable room capability inputs.

## Indexable

> \[`key`: `string`]: `unknown`

## Properties

### $schema?

> `optional` **$schema?**: `string`

***

### type?

> `optional` **type?**: `string` | `string`\[]

***

### title?

> `optional` **title?**: `string`

***

### description?

> `optional` **description?**: `string`

***

### properties?

> `optional` **properties?**: `Record`<`string`, `JsonSchema`>

***

### required?

> `optional` **required?**: `string`\[]

***

### items?

> `optional` **items?**: `JsonSchema` | `boolean`

***

### prefixItems?

> `optional` **prefixItems?**: `JsonSchema`\[]

***

### additionalProperties?

> `optional` **additionalProperties?**: `boolean` | `JsonSchema`

***

### unevaluatedProperties?

> `optional` **unevaluatedProperties?**: `boolean` | `JsonSchema`
