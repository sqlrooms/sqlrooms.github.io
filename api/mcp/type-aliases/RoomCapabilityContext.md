---
url: https://sqlrooms.org/api/mcp/type-aliases/RoomCapabilityContext.md
---
[@sqlrooms/mcp](../index.md) / RoomCapabilityContext

# Type Alias: RoomCapabilityContext

> **RoomCapabilityContext** = `object`

Host-stamped invocation metadata shared across capability transports.

## Properties

### surface

> **surface**: `"mcp-http"` | `"ai"` | `"cli"` | `"api"` | `string` & `object`

***

### actor?

> `optional` **actor?**: `string`

***

### traceId?

> `optional` **traceId?**: `string`

***

### requestId?

> `optional` **requestId?**: `string`

***

### clientInfo?

> `optional` **clientInfo?**: `object`

| Name | Type |
| ------ | ------ |
| `name?` | `string` |
| `version?` | `string` |

***

### metadata?

> `optional` **metadata?**: `Record`<`string`, `unknown`>

***

### signal?

> `optional` **signal?**: `AbortSignal`
