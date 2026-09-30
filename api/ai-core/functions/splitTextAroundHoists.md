---
url: https://sqlrooms.org/api/ai-core/functions/splitTextAroundHoists.md
---
[@sqlrooms/ai-core](../index.md) / splitTextAroundHoists

# Function: splitTextAroundHoists()

> **splitTextAroundHoists**(`model`): `object`

Split text around the first hoist-producing call for chronological recipes.
When nothing is hoistable, all text stays in `responseText`.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`ChatTurnModel`](../type-aliases/ChatTurnModel.md) |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `responseText` | [`ChatTurnTextItem`](../type-aliases/ChatTurnTextItem.md)\[] |
| `summaryText` | [`ChatTurnTextItem`](../type-aliases/ChatTurnTextItem.md)\[] |
