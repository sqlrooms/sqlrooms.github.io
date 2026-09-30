---
url: https://sqlrooms.org/api/ai-core/type-aliases/AiTimeoutOptions.md
---
[@sqlrooms/ai-core](../index.md) / AiTimeoutOptions

# Type Alias: AiTimeoutOptions

> **AiTimeoutOptions** = `object`

Opt-in timeout limits for chat runs and tool execution.

## Properties

### runMs?

> `optional` **runMs?**: `number`

Maximum wall-clock time for a complete multi-step chat run.

***

### idleStreamMs?

> `optional` **idleStreamMs?**: `number`

Maximum time without an observable UI message update while a run is
streaming. Approval waits are excluded.

***

### toolExecutionMs?

> `optional` **toolExecutionMs?**: `number`

Default maximum execution time for an individual tool.

***

### tools?

> `optional` **tools?**: `Record`<`string`, `number` | `undefined`>

Per-tool overrides. An explicit `undefined` disables the default timeout
for that tool.
