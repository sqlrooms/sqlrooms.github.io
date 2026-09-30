---
url: https://sqlrooms.org/api/mosaic/functions/useConfirmDatasetChange.md
---
[@sqlrooms/mosaic](../index.md) / useConfirmDatasetChange

# Function: useConfirmDatasetChange()

> **useConfirmDatasetChange**<`T`>(`onConfirmed`): `object`

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `onConfirmed` | (`value`) => `void` |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `pendingValue` | `T` | `null` |
| `handleChangeRequest()` | (`value`) => `void` |
| `handleConfirm()` | () => `void` |
| `handleCancel()` | () => `void` |
| `isDialogOpen` | `boolean` |
