---
url: https://sqlrooms.org/api/ai-core/functions/measureProviderContext.md
---
[@sqlrooms/ai-core](../index.md) / measureProviderContext

# Function: measureProviderContext()

> **measureProviderContext**(`__namedParameters`): `Promise`<[`ProviderContextDiagnostic`](../type-aliases/ProviderContextDiagnostic.md)>

Measure the exact request assembly visible at the AI SDK's provider-step
boundary. The result intentionally contains sizes and identifiers only; it
never copies prompt, message, or schema content into diagnostics state.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `ProviderContextMeasurementInput` |

## Returns

`Promise`<[`ProviderContextDiagnostic`](../type-aliases/ProviderContextDiagnostic.md)>
