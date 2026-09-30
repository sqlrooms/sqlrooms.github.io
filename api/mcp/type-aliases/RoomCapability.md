---
url: https://sqlrooms.org/api/mcp/type-aliases/RoomCapability.md
---
[@sqlrooms/mcp](../index.md) / RoomCapability

# Type Alias: RoomCapability

> **RoomCapability** = `object`

Executable capability definition owned by a live room.

## Properties

### name

> **name**: `string`

***

### title?

> `optional` **title?**: `string`

***

### description

> **description**: `string`

***

### inputSchema

> **inputSchema**: [`JsonSchema`](JsonSchema.md)

***

### annotations?

> `optional` **annotations?**: [`RoomCapabilityAnnotations`](RoomCapabilityAnnotations.md)

***

### execute

> **execute**: (`input`, `context`) => `Promise`<[`RoomCapabilityResult`](RoomCapabilityResult.md)> | [`RoomCapabilityResult`](RoomCapabilityResult.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `unknown` |
| `context` | [`RoomCapabilityContext`](RoomCapabilityContext.md) |

#### Returns

`Promise`<[`RoomCapabilityResult`](RoomCapabilityResult.md)> | [`RoomCapabilityResult`](RoomCapabilityResult.md)
