---
url: /api/crdt/functions/createIndexedDbDocStorage.md
---
[@sqlrooms/crdt](../index.md) / createIndexedDbDocStorage

# Function: createIndexedDbDocStorage()

> **createIndexedDbDocStorage**(`options`): [`CrdtDocStorage`](../type-aliases/CrdtDocStorage.md)

Creates an IndexedDB-backed CRDT doc storage.

Prefer IndexedDB over LocalStorage for larger snapshots and better durability.
In non-browser environments (SSR/tests without DOM), this storage becomes a no-op.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `IndexedDbDocStorageOptions` |

## Returns

[`CrdtDocStorage`](../type-aliases/CrdtDocStorage.md)
