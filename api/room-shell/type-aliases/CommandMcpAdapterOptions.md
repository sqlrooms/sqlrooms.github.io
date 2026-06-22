---
url: 'https://sqlrooms.org/api/room-shell/type-aliases/CommandMcpAdapterOptions.md'
---
[@sqlrooms/room-shell](../index.md) / CommandMcpAdapterOptions

# Type Alias: CommandMcpAdapterOptions

> **CommandMcpAdapterOptions** = `object`

## Properties

### toolNamePrefix?

> `optional` **toolNamePrefix?**: `string`

***

### includeInvisible?

> `optional` **includeInvisible?**: `boolean`

***

### includeDisabled?

> `optional` **includeDisabled?**: `boolean`

***

### includeInputSchema?

> `optional` **includeInputSchema?**: `boolean`

***

### mapToolName?

> `optional` **mapToolName?**: (`commandId`) => `string`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `commandId` | `string` |

#### Returns

`string`

***

### defaultActor?

> `optional` **defaultActor?**: `string`

***

### defaultTraceId?

> `optional` **defaultTraceId?**: `string`

***

### defaultMetadata?

> `optional` **defaultMetadata?**: `Record`<`string`, `unknown`>
