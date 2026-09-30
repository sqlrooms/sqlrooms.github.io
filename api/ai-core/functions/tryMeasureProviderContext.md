---
url: https://sqlrooms.org/api/ai-core/functions/tryMeasureProviderContext.md
---
[@sqlrooms/ai-core](../index.md) / tryMeasureProviderContext

# Function: tryMeasureProviderContext()

> **tryMeasureProviderContext**(`args`): `Promise`<[`ProviderContextDiagnostic`](../type-aliases/ProviderContextDiagnostic.md) | `undefined`>

Best-effort wrapper for request-path instrumentation. Diagnostics must never
prevent an otherwise valid provider request from running.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | `ProviderContextMeasurementInput` |

## Returns

`Promise`<[`ProviderContextDiagnostic`](../type-aliases/ProviderContextDiagnostic.md) | `undefined`>
