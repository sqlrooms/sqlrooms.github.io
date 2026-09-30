---
url: https://sqlrooms.org/api/mcp/type-aliases/RoomCapabilityRuntime.md
---
[@sqlrooms/mcp](../index.md) / RoomCapabilityRuntime

# Type Alias: RoomCapabilityRuntime

> **RoomCapabilityRuntime** = `object`

Transport-neutral catalog, invocation, and lifecycle interface.

## Properties

### listTools

> **listTools**: () => [`RoomCapabilityDescriptor`](RoomCapabilityDescriptor.md)\[]

#### Returns

[`RoomCapabilityDescriptor`](RoomCapabilityDescriptor.md)\[]

***

### callTool

> **callTool**: (`name`, `input`, `context`) => `Promise`<[`RoomCapabilityResult`](RoomCapabilityResult.md)>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `input` | `unknown` |
| `context` | [`RoomCapabilityContext`](RoomCapabilityContext.md) |

#### Returns

`Promise`<[`RoomCapabilityResult`](RoomCapabilityResult.md)>

***

### dispose

> **dispose**: () => `void`

#### Returns

`void`
