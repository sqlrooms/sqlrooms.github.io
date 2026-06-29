---
url: 'https://sqlrooms.org/api/ai-core/functions/useElapsedTime.md'
---
[@sqlrooms/ai-core](../index.md) / useElapsedTime

# Function: useElapsedTime()

> **useElapsedTime**(`isRunning`, `startedAt?`, `completedAt?`): `string` | `undefined`

Returns a formatted elapsed-time string that auto-updates every second
while the operation is running. Returns a static formatted duration
when completed, or undefined when there is no timing data.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `isRunning` | `boolean` |
| `startedAt?` | `number` |
| `completedAt?` | `number` |

## Returns

`string` | `undefined`
