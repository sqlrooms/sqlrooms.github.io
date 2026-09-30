---
url: https://sqlrooms.org/api/deck/functions/mergeDeckMapResourceConfigPatch.md
---
[@sqlrooms/deck](../index.md) / mergeDeckMapResourceConfigPatch

# Function: mergeDeckMapResourceConfigPatch()

> **mergeDeckMapResourceConfigPatch**(`existingConfig`, `incomingConfig`, `options?`): [`DeckMapConfig`](../type-aliases/DeckMapConfig.md)

Merges a sparse map-tool patch with durable state. Empty dataset registries
and layer arrays mean "preserve" only when an existing resource is present.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `existingConfig` | [`DeckMapConfig`](../type-aliases/DeckMapConfig.md) | `undefined` |
| `incomingConfig` | [`DeckMapConfig`](../type-aliases/DeckMapConfig.md) |
| `options` | [`DeckMapResourceConfigMergeOptions`](../type-aliases/DeckMapResourceConfigMergeOptions.md) |

## Returns

[`DeckMapConfig`](../type-aliases/DeckMapConfig.md)
