---
url: https://sqlrooms.org/api/artifacts/functions/resolveArtifactTargetId.md
---
[@sqlrooms/artifacts](../index.md) / resolveArtifactTargetId

# Function: resolveArtifactTargetId()

> **resolveArtifactTargetId**(`options`): `string` | `undefined`

Resolve an optional artifact target for a room command.

Explicit command input always wins. AI commands then use the stable target
captured for the invoking tool call. Other invocations, and AI invocations
without a captured artifact, preserve the live current-artifact fallback.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | { `requestedArtifactId?`: `string`; `invocation`: `Pick`<`RoomCommandInvocation`, `"surface"` | `"target"`>; `currentArtifactId?`: `string`; } |
| `options.requestedArtifactId?` | `string` |
| `options.invocation` | `Pick`<`RoomCommandInvocation`, `"surface"` | `"target"`> |
| `options.currentArtifactId?` | `string` |

## Returns

`string` | `undefined`
