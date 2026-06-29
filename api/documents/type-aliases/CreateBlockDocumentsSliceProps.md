---
url: >-
  https://sqlrooms.org/api/documents/type-aliases/CreateBlockDocumentsSliceProps.md
---
[@sqlrooms/documents](../index.md) / CreateBlockDocumentsSliceProps

# Type Alias: CreateBlockDocumentsSliceProps\<TRoomState>

> **CreateBlockDocumentsSliceProps**<`TRoomState`> = `object`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRoomState` *extends* `BaseRoomStoreState` & [`BlockDocumentsSliceState`](BlockDocumentsSliceState.md) | `BaseRoomStoreState` & [`BlockDocumentsSliceState`](BlockDocumentsSliceState.md) |

## Properties

### config?

> `optional` **config?**: `Partial`<[`BlockDocumentsSliceConfig`](BlockDocumentsSliceConfig.md)>

***

### now?

> `optional` **now?**: () => `number`

#### Returns

`number`

***

### onDeleteOwnedStatefulBlock?

> `optional` **onDeleteOwnedStatefulBlock?**: (`context`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`BlockDocumentOwnedStatefulBlockDeleteContext`](BlockDocumentOwnedStatefulBlockDeleteContext.md)<`TRoomState`> |

#### Returns

`void`

***

### onCreateOwnedStatefulBlock?

> `optional` **onCreateOwnedStatefulBlock?**: (`context`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`BlockDocumentOwnedStatefulBlockCreateContext`](BlockDocumentOwnedStatefulBlockCreateContext.md)<`TRoomState`> |

#### Returns

`void`

***

### onRenameOwnedStatefulBlock?

> `optional` **onRenameOwnedStatefulBlock?**: (`context`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`BlockDocumentOwnedStatefulBlockRenameContext`](BlockDocumentOwnedStatefulBlockRenameContext.md)<`TRoomState`> |

#### Returns

`void`
