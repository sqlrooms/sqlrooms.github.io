---
url: 'https://sqlrooms.org/api/mosaic/type-aliases/WorksheetAgentResult.md'
---
[@sqlrooms/mosaic](../index.md) / WorksheetAgentResult

# Type Alias: WorksheetAgentResult

> **WorksheetAgentResult** = `object`

Result returned by the worksheet agent after completing a task.
Contains execution status, final output, and optional metadata about the run.

## Properties

### success

> **success**: `boolean`

***

### finalOutput

> **finalOutput**: `string`

***

### worksheetId

> **worksheetId**: `string`

***

### error?

> `optional` **error?**: `string`

***

### metadata?

> `optional` **metadata?**: `AgentResultMetadata`
