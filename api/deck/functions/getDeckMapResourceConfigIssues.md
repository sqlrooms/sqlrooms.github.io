---
url: https://sqlrooms.org/api/deck/functions/getDeckMapResourceConfigIssues.md
---
[@sqlrooms/deck](../index.md) / getDeckMapResourceConfigIssues

# Function: getDeckMapResourceConfigIssues()

> **getDeckMapResourceConfigIssues**(`config`, `options?`): [`DeckMapResourceConfigIssue`](../type-aliases/DeckMapResourceConfigIssue.md)\[]

Validates the post-merge invariants of a renderable, resource-native map.
Patch inputs may be sparse, but the durable result must have supported
dataset sources and dataset-backed layers.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`DeckMapConfig`](../type-aliases/DeckMapConfig.md) |
| `options` | [`DeckMapResourceConfigValidationOptions`](../type-aliases/DeckMapResourceConfigValidationOptions.md) |

## Returns

[`DeckMapResourceConfigIssue`](../type-aliases/DeckMapResourceConfigIssue.md)\[]
