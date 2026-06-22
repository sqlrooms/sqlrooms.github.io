---
url: 'https://sqlrooms.org/api/mosaic/type-aliases/DashboardAgentResult.md'
---
[@sqlrooms/mosaic](../index.md) / DashboardAgentResult

# Type Alias: DashboardAgentResult

> **DashboardAgentResult** = `object`

Result returned by the dashboard agent after completing a task.
Contains execution status, final output, and optional metadata about the run.

## Properties

### success

> **success**: `boolean`

***

### finalOutput

> **finalOutput**: `string`

***

### dashboardId

> **dashboardId**: `string`

***

### error?

> `optional` **error?**: `string`

***

### metadata?

> `optional` **metadata?**: `AgentResultMetadata`
