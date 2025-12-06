---
url: /api/ai-rag/interfaces/AiProvider.md
---
[@sqlrooms/ai-rag](../index.md) / AiProvider

# Interface: AiProvider

Provider instance from Vercel AI SDK (e.g., openai, google, anthropic).
This is an interface with an embedding method for v2 models.

## Methods

### embedding()

> **embedding**(`modelId`, `settings`?): `any`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `modelId` | `string` |
| `settings`? | { `dimensions`: `number`; } |
| `settings.dimensions`? | `number` |

#### Returns

`any`
