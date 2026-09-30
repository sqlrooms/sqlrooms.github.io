---
url: https://sqlrooms.org/api/ai/functions/withRunContextTools.md
---
[@sqlrooms/ai](../index.md) / withRunContextTools

# Function: withRunContextTools()

> **withRunContextTools**(`tools`, `args`): `ToolSet`

Wrap every executable tool in `tools` so it receives the invoking turn's
execution scope (`sessionId` plus the mutable `AiRunContext` accessors) in its
AI SDK execution options.

Use this wherever a toolset is handed to an agent that does not itself own the
chat request — most importantly for nested `ToolLoopAgent` sub-agents, whose
tools would otherwise execute with no scope at all and fall back to whatever
artifact/map/session is currently visible in the UI.

Semantics:

* Parent scope wins over inner options when the parent supplies a value, so a
  nested agent cannot accidentally reassign the owning session. Fields the
  parent leaves `undefined` preserve whatever the inner options already had.
* `getAiRunContext` is read at execution time rather than captured, so an
  in-turn retarget (e.g. `set_primary_context_artifact`) is visible to later
  tool calls, including those inside nested agents.
* The inner tool's own `toolCallId`, `messages`, and `abortSignal` are left
  intact.
* `state` is optional and only used for `setToolCallSession` attribution. Omit
  it when forwarding into nested agents; the chat transport passes it so
  top-level tool calls stay attributed to their session.
* `getState` lets timeout cleanup read the latest nested-agent progress. It
  should be supplied by transports that provide `state`.
* Configured per-tool timeouts preserve upstream cancellation signals and
  abort the signal forwarded to the wrapped tool when its limit expires.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `tools` | `ToolSet` |
| `args` | [`AiToolExecutionContext`](../type-aliases/AiToolExecutionContext.md) & `object` |

## Returns

`ToolSet`
