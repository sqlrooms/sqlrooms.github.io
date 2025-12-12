---
url: /api/room-store/type-aliases/StateCreator.md
---
[@sqlrooms/room-store](../index.md) / StateCreator

# Type Alias: StateCreator\<T, Mis, Mos, U>

> **StateCreator**<`T`, `Mis`, `Mos`, `U`> = (`setState`, `getState`, `store`) => `U` & `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
| `$$storeMutators?` | `Mos` |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `Mis` *extends* \[`StoreMutatorIdentifier`, `unknown`]\[] | \[] |
| `Mos` *extends* \[`StoreMutatorIdentifier`, `unknown`]\[] | \[] |
| `U` | `T` |
