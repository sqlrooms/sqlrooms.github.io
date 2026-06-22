---
url: 'https://sqlrooms.org/api/mosaic/functions/ensureNoOverride.md'
---
[@sqlrooms/mosaic](../index.md) / ensureNoOverride

# Function: ensureNoOverride()

> **ensureNoOverride**(`builtInTools`, `extraTools`): `void`

Validates that extra tools do not override built-in tools.
Prevents accidental shadowing of core functionality by custom tools.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `builtInTools` | `Record`<`string`, `Tool`> | Record of built-in tool names to tools |
| `extraTools` | `Record`<`string`, `Tool`> | Record of extra tool names to tools being registered |

## Returns

`void`

## Throws

When a key from extraTools exists in builtInTools
