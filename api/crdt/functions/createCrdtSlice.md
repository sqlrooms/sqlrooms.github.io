---
url: /api/crdt/functions/createCrdtSlice.md
---
[@sqlrooms/crdt](../index.md) / createCrdtSlice

# Function: createCrdtSlice()

> **createCrdtSlice**<`S`, `TSchema`>(`options`): `StateCreator`<[`CrdtSliceState`](../type-aliases/CrdtSliceState.md)>

Create a CRDT-backed slice that mirrors selected store fields into a Loro doc.

The returned state creator is intended to be composed into a larger Zustand store.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `S` *extends* `Record`<`string`, `any`> | - |
| `TSchema` *extends* `SchemaType` | `SchemaType` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CreateCrdtSliceOptions`](../type-aliases/CreateCrdtSliceOptions.md)<`S`, `TSchema`> |

## Returns

`StateCreator`<[`CrdtSliceState`](../type-aliases/CrdtSliceState.md)>
