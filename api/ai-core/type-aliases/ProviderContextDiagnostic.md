---
url: https://sqlrooms.org/api/ai-core/type-aliases/ProviderContextDiagnostic.md
---
[@sqlrooms/ai-core](../index.md) / ProviderContextDiagnostic

# Type Alias: ProviderContextDiagnostic

> **ProviderContextDiagnostic** = `object`

Metadata-only measurement of one outbound provider step.

## Properties

### id

> **id**: `string`

***

### recordedAt

> **recordedAt**: `number`

***

### role

> **role**: `string`

Stable caller-assigned role label, e.g. `chat-coordinator`.

***

### provider

> **provider**: `string`

***

### model

> **model**: `string`

***

### sessionId?

> `optional` **sessionId?**: `string`

***

### step

> **step**: `number`

Zero-based provider invocation within the owning request.

***

### instructions

> **instructions**: `object`

| Name | Type |
| ------ | ------ |
| `chars` | `number` |
| `bytes` | `number` |

***

### messages

> **messages**: `object`

| Name | Type |
| ------ | ------ |
| `count` | `number` |
| `bytes` | `number` |

***

### tools

> **tools**: `object`\[]

| Name | Type |
| ------ | ------ |
| `name` | `string` |
| `schemaBytes` | `number` |

***

### toolSchemaBytes

> **toolSchemaBytes**: `number`

***

### sources

> **sources**: `string`\[]

Names of request-assembly sources; never their content.

***

### preparationMetrics?

> `optional` **preparationMetrics?**: `Record`<`string`, `number`>

Numeric request-preparation facts such as catalog or candidate size.

***

### inputTokens?

> `optional` **inputTokens?**: `number`

Provider-reported input tokens, populated after the step completes.
