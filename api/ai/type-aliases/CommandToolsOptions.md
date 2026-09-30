---
url: https://sqlrooms.org/api/ai/type-aliases/CommandToolsOptions.md
---
[@sqlrooms/ai](../index.md) / CommandToolsOptions

# Type Alias: CommandToolsOptions

> **CommandToolsOptions** = `object`

Options for configuring the model-facing room command tools.

## Properties

### searchToolName?

> `optional` **searchToolName?**: `string`

***

### getToolName?

> `optional` **getToolName?**: `string`

***

### listToolName?

> `optional` **listToolName?**: `string`

***

### executeToolName?

> `optional` **executeToolName?**: `string`

***

### defaultSurface?

> `optional` **defaultSurface?**: `RoomCommandSurface`

***

### defaultActor?

> `optional` **defaultActor?**: `string`

***

### defaultTraceId?

> `optional` **defaultTraceId?**: `string`

***

### defaultSkillId?

> `optional` **defaultSkillId?**: `string`

***

### defaultMetadata?

> `optional` **defaultMetadata?**: `Record`<`string`, `unknown`>

***

### includeInvisibleCommandsByDefault?

> `optional` **includeInvisibleCommandsByDefault?**: `boolean`

***

### includeDisabledCommandsInList?

> `optional` **includeDisabledCommandsInList?**: `boolean`

***

### commandGuard?

> `optional` **commandGuard?**: (`descriptor`) => [`CommandGuardResult`](CommandGuardResult.md)

Restricts which commands this tool instance may expose or execute.
Denied commands are omitted from discovery and details. Execution returns
`command-not-available-to-caller` unless the decision supplies a code.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `descriptor` | [`CommandToolDescriptor`](CommandToolDescriptor.md) |

#### Returns

[`CommandGuardResult`](CommandGuardResult.md)
