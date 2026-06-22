---
url: 'https://sqlrooms.org/api/ai-core/functions/formatAbortSnapshot.md'
---
[@sqlrooms/ai-core](../index.md) / formatAbortSnapshot

# Function: formatAbortSnapshot()

> **formatAbortSnapshot**(`snapshot`, `indent?`): `string`

Format an `AgentProgressSnapshot` into a human-readable string
that can be embedded in error text for LLM visibility.
Recurses into `childSnapshot` to render arbitrarily deep nesting.

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `snapshot` | [`AgentProgressSnapshot`](../type-aliases/AgentProgressSnapshot.md) | `undefined` |
| `indent` | `string` | `''` |

## Returns

`string`
