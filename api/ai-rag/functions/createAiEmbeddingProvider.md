---
url: /api/ai-rag/functions/createAiEmbeddingProvider.md
---
[@sqlrooms/ai-rag](../index.md) / createAiEmbeddingProvider

# Function: createAiEmbeddingProvider()

> **createAiEmbeddingProvider**(`providerOrFactory`, `modelId`, `dimensions`?, `getApiKey`?): [`EmbeddingProvider`](../type-aliases/EmbeddingProvider.md)

Create an embedding provider using Vercel AI SDK.

This is a generic function that works with any provider from the Vercel AI SDK:

* OpenAI (@ai-sdk/openai)
* Google (@ai-sdk/google)
* Anthropic (@ai-sdk/anthropic)
* Custom providers

Supports both static providers and dynamic provider factories for runtime API key configuration.

IMPORTANT: The model and dimensions MUST match the ones used during database preparation.
Check your database metadata to ensure compatibility.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `providerOrFactory` | [`AiProvider`](../interfaces/AiProvider.md) | [`AiProviderFactory`](../type-aliases/AiProviderFactory.md) | Provider instance or factory function that creates a provider |
| `modelId` | `string` | Model identifier (e.g., 'text-embedding-3-small', 'text-embedding-004') |
| `dimensions`? | `number` | Embedding dimensions (optional, defaults to model's native dimensions) |
| `getApiKey`? | () => `undefined` | `string` | Optional function to retrieve API key at runtime (for dynamic provider factories) |

## Returns

[`EmbeddingProvider`](../type-aliases/EmbeddingProvider.md)

EmbeddingProvider function

## Examples

```typescript
import {openai} from '@ai-sdk/openai';
import {createAiEmbeddingProvider} from '@sqlrooms/ai-rag';

// OpenAI text-embedding-3-small (1536 dimensions)
const provider = createAiEmbeddingProvider(
  openai,
  'text-embedding-3-small',
  1536
);
```

```typescript
import {createOpenAI} from '@ai-sdk/openai';
import {createAiEmbeddingProvider} from '@sqlrooms/ai-rag';

// Provider factory that creates OpenAI instance with runtime API key
const provider = createAiEmbeddingProvider(
  (apiKey) => createOpenAI({apiKey}),
  'text-embedding-3-small',
  1536,
  () => store.getState().aiSettings.config.providers?.['openai']?.apiKey
);
```

## Note

Requires AI SDK 5+ which uses v2 embedding specification.
The provider must support the `embedding()` method that returns a v2 model.
