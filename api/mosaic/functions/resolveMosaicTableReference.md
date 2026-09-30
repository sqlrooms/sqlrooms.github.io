---
url: https://sqlrooms.org/api/mosaic/functions/resolveMosaicTableReference.md
---
[@sqlrooms/mosaic](../index.md) / resolveMosaicTableReference

# Function: resolveMosaicTableReference()

> **resolveMosaicTableReference**<`T`>(`tables`, `tableName`): `ResolveTableReferenceResult`<`T`>

Resolves a persisted dashboard table identity against the current SQLRooms
table catalog. Canonical identities and qualified SQL identifiers are
preferred; legacy bare names resolve only when unambiguous.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`MosaicTableReferenceCandidate`](../type-aliases/MosaicTableReferenceCandidate.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `tables` | `T`\[] |
| `tableName` | [`MosaicTableReferenceInput`](../type-aliases/MosaicTableReferenceInput.md) | `undefined` |

## Returns

`ResolveTableReferenceResult`<`T`>
