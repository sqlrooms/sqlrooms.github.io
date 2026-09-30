---
url: https://sqlrooms.org/api/ai-core/functions/getSubAgentErrorMessage.md
---
[@sqlrooms/ai-core](../index.md) / getSubAgentErrorMessage

# Function: getSubAgentErrorMessage()

> **getSubAgentErrorMessage**(`error`): `string`

Extracts the underlying message from a thrown value.

Local stand-in for `getErrorMessage`, which ai-core does not depend on.
Exported so a host that has verified parent and child share a trust boundary
can pass it as `formatError` to get the unredacted text back.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `unknown` |

## Returns

`string`
