---
url: >-
  https://sqlrooms.org/api/deck/type-aliases/DeckMapResourceConfigMergeOptions.md
---
[@sqlrooms/deck](../index.md) / DeckMapResourceConfigMergeOptions

# Type Alias: DeckMapResourceConfigMergeOptions

> **DeckMapResourceConfigMergeOptions** = `object`

Controls how an incoming map config patch is merged with durable state.

## Properties

### replaceLayers?

> `optional` **replaceLayers?**: `boolean`

Treat an incoming `spec.layers` array as the complete replacement list.

***

### replaceDatasets?

> `optional` **replaceDatasets?**: `boolean`

Treat incoming `datasets` as the complete replacement registry.
