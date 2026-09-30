---
url: >-
  https://sqlrooms.org/api/room-store/type-aliases/RoomStorePersistenceSnapshotEquivalence.md
---
[@sqlrooms/room-store](../index.md) / RoomStorePersistenceSnapshotEquivalence

# Type Alias: RoomStorePersistenceSnapshotEquivalence\<TSnapshot>

> **RoomStorePersistenceSnapshotEquivalence**<`TSnapshot`> = `object`

## Type Parameters

| Type Parameter |
| ------ |
| `TSnapshot` |

## Properties

### compareSnapshots?

> `optional` **compareSnapshots?**: (`next`, `previous`) => `boolean`

Returns true when two serialized snapshots should be treated as equivalent.

Defaults to referential equality, which preserves existing behavior for
primitive string snapshots.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `next` | `TSnapshot` |
| `previous` | `TSnapshot` |

#### Returns

`boolean`

***

### getSnapshotRevision?

> `optional` **getSnapshotRevision?**: (`snapshot`) => `unknown`

Extracts a stable revision from a snapshot for equivalence checks.

Ignored when `compareSnapshots` is provided.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `snapshot` | `TSnapshot` |

#### Returns

`unknown`
