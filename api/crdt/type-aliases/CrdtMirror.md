---
url: /api/crdt/type-aliases/CrdtMirror.md
---
[@sqlrooms/crdt](../index.md) / CrdtMirror

# Type Alias: CrdtMirror\<S, TSchema>

> **CrdtMirror**<`S`, `TSchema`> = `object`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `S` | - |
| `TSchema` *extends* `SchemaType` | `SchemaType` |

## Properties

### schema

> **schema**: [`MirrorSchema`](MirrorSchema.md)<`TSchema`>

Schema for the value stored under this mirror's key in the Loro doc.

Example: if the mirror key is `"canvas"`, this schema describes the value at
`doc.root.canvas` (not an extra `{canvas: ...}` wrapper).

***

### select?

> `optional` **select**: `CrdtMirrorValueSelector`<`S`, `TSchema`>

Select the value to write under this mirror key.

If omitted, the store field at the same key name will be mirrored.

***

### apply?

> `optional` **apply**: `CrdtMirrorValueApplier`<`S`, `TSchema`>

Apply an incoming CRDT value under this mirror key back into the store.

If omitted, the store field at the same key name will be replaced.

***

### initialState?

> `optional` **initialState**: `Partial`<`InferInputType`<`TSchema`>>

Initial value written under this mirror key when creating the Mirror.

***

### mirrorOptions?

> `optional` **mirrorOptions**: `Record`<`string`, `unknown`>
