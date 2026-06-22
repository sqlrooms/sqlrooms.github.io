---
url: 'https://sqlrooms.org/api/ai/type-aliases/TableSchemaContextLimits.md'
---
[@sqlrooms/ai](../index.md) / TableSchemaContextLimits

# Type Alias: TableSchemaContextLimits

> **TableSchemaContextLimits** = `object`

Prompt-size limits used when formatting table schema context for an AI model.

## Properties

### fullSchemaThreshold?

> `optional` **fullSchemaThreshold?**: `number`

Maximum number of scoped tables that can be
shown with complete column schemas before switching to hybrid summaries.

***

### namesOnlyThreshold?

> `optional` **namesOnlyThreshold?**: `number`

Maximum number of scoped tables to mention in
the hybrid summary before reporting an omitted-table count.

***

### maxChars?

> `optional` **maxChars?**: `number`

Optional hard character budget for the generated schema
context string.
