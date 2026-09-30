---
url: >-
  https://sqlrooms.org/api/room-shell/type-aliases/CreatePersistenceControllerOptions.md
---
[@sqlrooms/room-shell](../index.md) / CreatePersistenceControllerOptions

# Type Alias: CreatePersistenceControllerOptions\<TSnapshot>

> **CreatePersistenceControllerOptions**<`TSnapshot`> = `object`

## Type Parameters

| Type Parameter |
| ------ |
| `TSnapshot` |

## Properties

### adapter

> **adapter**: [`PersistenceAdapter`](PersistenceAdapter.md)<`TSnapshot`>

***

### getSnapshot?

> `optional` **getSnapshot?**: () => `TSnapshot` | `Promise`<`TSnapshot`>

#### Returns

`TSnapshot` | `Promise`<`TSnapshot`>

***

### autosaveDelayMs?

> `optional` **autosaveDelayMs?**: `number` | `null`

***

### now?

> `optional` **now?**: () => `number`

#### Returns

`number`
