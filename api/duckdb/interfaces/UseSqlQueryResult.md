---
url: /api/duckdb/interfaces/UseSqlQueryResult.md
---
[@sqlrooms/duckdb](../index.md) / UseSqlQueryResult

# Interface: UseSqlQueryResult\<T>

A wrapper interface that exposes the underlying Arrow table,
a typed row accessor, and the number of rows.

## Extends

* [`TypedRowAccessor`](TypedRowAccessor.md)<`T`>

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Properties

### arrowTable

> **arrowTable**: `Table`

The underlying Arrow table

***

### length

> **length**: `number`

Number of rows in the table

#### Inherited from

[`TypedRowAccessor`](TypedRowAccessor.md).[`length`](TypedRowAccessor.md#length)

## Methods

### getRow()

> **getRow**(`index`): `T`

Returns a typed row at the specified index by converting on demand

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

#### Returns

`T`

#### Inherited from

[`TypedRowAccessor`](TypedRowAccessor.md).[`getRow`](TypedRowAccessor.md#getrow)

***

### rows()

> **rows**(): `IterableIterator`<`T`>

Returns an iterator that yields each row in the table

#### Returns

`IterableIterator`<`T`>

#### Inherited from

[`TypedRowAccessor`](TypedRowAccessor.md).[`rows`](TypedRowAccessor.md#rows)

***

### toArray()

> **toArray**(): `T`\[]

Returns an array containing all rows in the table. The array is cached and reused.

#### Returns

`T`\[]

#### Inherited from

[`TypedRowAccessor`](TypedRowAccessor.md).[`toArray`](TypedRowAccessor.md#toarray)

***

### \[iterator]\()

> **\[iterator]**(): `Iterator`<`T`, `any`, `any`>

#### Returns

`Iterator`<`T`, `any`, `any`>

#### Inherited from

[`TypedRowAccessor`](TypedRowAccessor.md).[`[iterator]`](TypedRowAccessor.md#iterator)
