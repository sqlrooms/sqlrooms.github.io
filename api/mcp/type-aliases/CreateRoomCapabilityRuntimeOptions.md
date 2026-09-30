---
url: >-
  https://sqlrooms.org/api/mcp/type-aliases/CreateRoomCapabilityRuntimeOptions.md
---
[@sqlrooms/mcp](../index.md) / CreateRoomCapabilityRuntimeOptions

# Type Alias: CreateRoomCapabilityRuntimeOptions

> **CreateRoomCapabilityRuntimeOptions** = `object`

Construction limits and hooks for a room capability runtime.

## Properties

### capabilities

> **capabilities**: [`RoomCapability`](RoomCapability.md)\[]

***

### policy?

> `optional` **policy?**: [`RoomCapabilityPolicy`](RoomCapabilityPolicy.md)

***

### timeoutMs?

> `optional` **timeoutMs?**: `number`

***

### maxInputBytes?

> `optional` **maxInputBytes?**: `number`

***

### maxOutputBytes?

> `optional` **maxOutputBytes?**: `number`

***

### onInvocation?

> `optional` **onInvocation?**: (`trace`) => `void` | `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `trace` | [`RoomCapabilityTrace`](RoomCapabilityTrace.md) |

#### Returns

`void` | `Promise`<`void`>
