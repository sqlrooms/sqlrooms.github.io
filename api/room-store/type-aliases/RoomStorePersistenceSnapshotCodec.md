---
url: >-
  https://sqlrooms.org/api/room-store/type-aliases/RoomStorePersistenceSnapshotCodec.md
---
[@sqlrooms/room-store](../index.md) / RoomStorePersistenceSnapshotCodec

# Type Alias: RoomStorePersistenceSnapshotCodec\<TPersisted, TSnapshot>

> **RoomStorePersistenceSnapshotCodec**<`TPersisted`, `TSnapshot`> = `object`

Converts between a persisted room-state shape and the snapshot value handled
by a persistence adapter.

The default codec stores snapshots as JSON strings. Provide a custom codec
when the backing store already accepts structured values, compressed payloads,
encrypted payloads, or another non-string snapshot format.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TPersisted` | The partial room-state shape persisted by Zustand. |
| `TSnapshot` | The durable snapshot shape accepted by the adapter. |

## Properties

### serialize?

> `optional` **serialize?**: (`persisted`) => `TSnapshot`

Serializes the already-partialized persisted state into a durable snapshot.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `persisted` | `TPersisted` |

#### Returns

`TSnapshot`

***

### deserialize?

> `optional` **deserialize?**: (`snapshot`) => `TPersisted`

Deserializes a durable snapshot into the shape Zustand will merge.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `snapshot` | `TSnapshot` |

#### Returns

`TPersisted`
