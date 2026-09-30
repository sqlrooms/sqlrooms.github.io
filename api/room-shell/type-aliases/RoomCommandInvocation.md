---
url: https://sqlrooms.org/api/room-shell/type-aliases/RoomCommandInvocation.md
---
[@sqlrooms/room-shell](../index.md) / RoomCommandInvocation

# Type Alias: RoomCommandInvocation

> **RoomCommandInvocation** = `object`

## Properties

### surface

> **surface**: [`RoomCommandSurface`](RoomCommandSurface.md)

***

### actor?

> `optional` **actor?**: `string`

***

### traceId?

> `optional` **traceId?**: `string`

***

### target?

> `optional` **target?**: `object`

Stable resource target captured for this invocation, when available.

| Name | Type |
| ------ | ------ |
| `kind` | `string` |
| `id` | `string` |

***

### metadata?

> `optional` **metadata?**: `Record`<`string`, `unknown`>
