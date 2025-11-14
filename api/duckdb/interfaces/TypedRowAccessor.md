---
url: /api/duckdb/interfaces/TypedRowAccessor.md
---
[@sqlrooms/duckdb](../index.md) / TypedRowAccessor

# Interface: TypedRowAccessor\<T>

## Extends

* `Iterable`<`T`>

## Extended by

* [`UseSqlQueryResult`](UseSqlQueryResult.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Properties

### length

> **length**: `number`

Number of rows in the table

## Methods

### \[iterator]\()

> **\[iterator]**(): `Iterator`<`T`, `any`, `any`>

#### Returns

`Iterator`<`T`, `any`, `any`>

#### Inherited from

`Iterable.[iterator]`

***

### getRow()

> **getRow**(`index`): `T`

Returns a typed row at the specified index by converting on demand

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

#### Returns

`T`

***

### rows()

> **rows**(): `IterableIterator`<`T`>

Returns an iterator that yields each row in the table

#### Returns

`IterableIterator`<`T`>

***

### toArray()

> **toArray**(): `T`\[]

Returns an array containing all rows in the table. The array is cached and reused.

#### Returns

`T`\[]
