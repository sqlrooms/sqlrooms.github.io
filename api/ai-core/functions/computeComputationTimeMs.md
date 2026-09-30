---
url: https://sqlrooms.org/api/ai-core/functions/computeComputationTimeMs.md
---
[@sqlrooms/ai-core](../index.md) / computeComputationTimeMs

# Function: computeComputationTimeMs()

> **computeComputationTimeMs**(`toolCallIds`, `toolTimings`): `number` | `undefined`

Compute the enclosing duration of the supplied recorded tool calls.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `toolCallIds` | `Iterable`<`string`> |
| `toolTimings` | `Record`<`string`, { `startedAt?`: `number`; `completedAt?`: `number`; }> |

## Returns

`number` | `undefined`
