---
url: https://sqlrooms.org/api/deck/type-aliases/DeckMapSurfaceProps.md
---
[@sqlrooms/deck](../index.md) / DeckMapSurfaceProps

# Type Alias: DeckMapSurfaceProps

> **DeckMapSurfaceProps** = `object`

## Properties

### mapId

> **mapId**: `string`

***

### map

> **map**: [`DeckMapResource`](DeckMapResource.md)

***

### readOnly?

> `optional` **readOnly?**: `boolean`

***

### selected?

> `optional` **selected?**: `boolean`

***

### caption?

> `optional` **caption?**: `string`

***

### headerActions?

> `optional` **headerActions?**: `ReactNode`

***

### fitRequestVersion?

> `optional` **fitRequestVersion?**: `number`

***

### onUpdateMap

> **onUpdateMap**: (`patch`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `patch` | `Partial`<[`DeckMapResource`](DeckMapResource.md)> |

#### Returns

`void`

***

### onReportIssue

> **onReportIssue**: (`issue`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `issue` | `Omit`<[`DeckMapRuntimeIssue`](DeckMapRuntimeIssue.md), `"mapId"`> |

#### Returns

`void`

***

### onClearIssue

> **onClearIssue**: (`kind?`) => `void`

Clears the current issue when its kind matches, or all issues when omitted.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `kind?` | [`DeckMapRuntimeIssue`](DeckMapRuntimeIssue.md)\[`"kind"`] |

#### Returns

`void`

***

### dataAdapter?

> `optional` **dataAdapter?**: [`DeckMapDataAdapter`](DeckMapDataAdapter.md)
