---
url: https://sqlrooms.org/api/ai/variables/QueryToolResult.md
---
[@sqlrooms/ai](../index.md) / QueryToolResult

# Variable: QueryToolResult

> `const` **QueryToolResult**: [`ToolRenderer`](../type-aliases/ToolRenderer.md)<[`QueryToolOutput`](../type-aliases/QueryToolOutput.md), { `type`: `"query"`; `sqlQuery`: `string`; `reasoning`: `string`; }>

Default renderer for query tool results.
For custom configuration (showSql, formatValue) use [createQueryToolRenderer](../functions/createQueryToolRenderer.md).
