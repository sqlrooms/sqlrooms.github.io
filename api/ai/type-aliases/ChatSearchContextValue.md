---
url: https://sqlrooms.org/api/ai/type-aliases/ChatSearchContextValue.md
---
[@sqlrooms/ai](../index.md) / ChatSearchContextValue

# Type Alias: ChatSearchContextValue

> **ChatSearchContextValue** = `object`

State and actions shared by `Chat.Root`'s search provider.

`registerBlocks`/`unregisterBlocks` declare which text exists to search
(per turn group), independent of whether anything painted it on screen.
`reportRenderedBlock` is the rendered-set half: a slot calls
`reportRenderedBlock(blockId, text)` on mount and calls the function it
returns on unmount. A block stays indexed as long as at least one call's
release has not run yet, and the text matched against is the text passed
by whichever live call reported most recently, so an earlier reporter
releasing after a later one never makes the block fall back to stale text.
A block that registered but was never reported as rendered is excluded
from search entirely. `activeMatchId` identifies the active match's DOM
anchor, while `activeMatchKey` changes on every query or navigation attempt
so reveal and scroll effects can run again even when that DOM id is reused.

## Properties

### query

> **query**: `string`

***

### setQuery

> **setQuery**: (`query`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` |

#### Returns

`void`

***

### matches

> **matches**: [`ChatSearchMatch`](ChatSearchMatch.md)\[]

***

### activeMatchId?

> `optional` **activeMatchId?**: `string`

***

### activeMatchKey?

> `optional` **activeMatchKey?**: `string`

***

### activeMatchNumber

> **activeMatchNumber**: `number`

***

### registerBlocks

> **registerBlocks**: (`groupId`, `blocks`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `groupId` | `string` |
| `blocks` | [`ChatSearchBlock`](ChatSearchBlock.md)\[] |

#### Returns

`void`

***

### unregisterBlocks

> **unregisterBlocks**: (`groupId`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `groupId` | `string` |

#### Returns

`void`

***

### getMatchesForBlock

> **getMatchesForBlock**: (`blockId`) => [`ChatSearchMatch`](ChatSearchMatch.md)\[]

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `blockId` | `string` |

#### Returns

[`ChatSearchMatch`](ChatSearchMatch.md)\[]

***

### goToNextMatch

> **goToNextMatch**: () => `void`

#### Returns

`void`

***

### goToPreviousMatch

> **goToPreviousMatch**: () => `void`

#### Returns

`void`

***

### clearSearch

> **clearSearch**: () => `void`

#### Returns

`void`

***

### reportRenderedBlock

> **reportRenderedBlock**: (`blockId`, `text?`) => () => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `blockId` | `string` |
| `text?` | `string` |

#### Returns

() => `void`
