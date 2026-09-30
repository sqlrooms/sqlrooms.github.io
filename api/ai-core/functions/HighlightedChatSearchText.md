---
url: https://sqlrooms.org/api/ai-core/functions/HighlightedChatSearchText.md
---
[@sqlrooms/ai-core](../index.md) / HighlightedChatSearchText

# Function: HighlightedChatSearchText()

> **HighlightedChatSearchText**(`__namedParameters`): `Element`

Renders `text` with search matches wrapped in `<mark>`. `text` must be the
exact string this call reports as rendered for `blockId`: it both supplies
the offsets are matched against and the characters that get sliced, so a
caller showing a transformed or shortened string is searched by that
string, not by whatever the block was originally registered with.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | { `text`: `string`; `blockId`: `string`; } |
| `__namedParameters.text` | `string` |
| `__namedParameters.blockId` | `string` |

## Returns

`Element`
