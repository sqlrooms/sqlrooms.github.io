---
url: /api/ai-rag/type-aliases/AiProviderFactory.md
---
[@sqlrooms/ai-rag](../index.md) / AiProviderFactory

# Type Alias: AiProviderFactory()

> **AiProviderFactory** = (`apiKey?`) => [`AiProvider`](../interfaces/AiProvider.md)

Factory function that creates a provider instance, optionally with an API key.
This allows creating providers dynamically at runtime with user-provided API keys.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `apiKey?` | `string` |

## Returns

[`AiProvider`](../interfaces/AiProvider.md)
