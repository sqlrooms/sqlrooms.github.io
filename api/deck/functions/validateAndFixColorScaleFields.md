---
url: https://sqlrooms.org/api/deck/functions/validateAndFixColorScaleFields.md
---
[@sqlrooms/deck](../index.md) / validateAndFixColorScaleFields

# Function: validateAndFixColorScaleFields()

> **validateAndFixColorScaleFields**<`T`>(`config`, `resolveTable`): `T`

Fix colorScale `field` casing; reject unknown fields on bare `{tableName}` sources.
Call before normalize so lon/lat `transformSql` inject does not disable rejection.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `object` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | `T` |
| `resolveTable` | [`ResolveColorScaleTable`](../type-aliases/ResolveColorScaleTable.md) |

## Returns

`T`
