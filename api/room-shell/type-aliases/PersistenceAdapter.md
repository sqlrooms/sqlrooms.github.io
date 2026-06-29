---
url: 'https://sqlrooms.org/api/room-shell/type-aliases/PersistenceAdapter.md'
---
[@sqlrooms/room-shell](../index.md) / PersistenceAdapter

# Type Alias: PersistenceAdapter\<TSnapshot>

> **PersistenceAdapter**<`TSnapshot`> = `object`

## Type Parameters

| Type Parameter |
| ------ |
| `TSnapshot` |

## Properties

### load

> **load**: () => `Promise`<`TSnapshot` | `null`>

#### Returns

`Promise`<`TSnapshot` | `null`>

***

### save

> **save**: (`snapshot`, `metadata?`) => `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `snapshot` | `TSnapshot` |
| `metadata?` | [`PersistenceSaveMetadata`](PersistenceSaveMetadata.md) |

#### Returns

`Promise`<`void`>
