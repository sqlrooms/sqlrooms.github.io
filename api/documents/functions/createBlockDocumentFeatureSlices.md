---
url: >-
  https://sqlrooms.org/api/documents/functions/createBlockDocumentFeatureSlices.md
---
[@sqlrooms/documents](../index.md) / createBlockDocumentFeatureSlices

# Function: createBlockDocumentFeatureSlices()

> **createBlockDocumentFeatureSlices**<`TRoomState`>(`props?`): `StateCreator`<[`BlockDocumentFeatureSlicesState`](../type-aliases/BlockDocumentFeatureSlicesState.md)>

Creates the store slices needed by block document surfaces with settings.

This composes block document content state with the shared block/panel
settings selection state used by BlockSettingsPanelLayout.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRoomState` *extends* `BaseRoomStoreState` & [`BlockDocumentsSliceState`](../type-aliases/BlockDocumentsSliceState.md) & [`BlockSettingsSliceState`](../type-aliases/BlockSettingsSliceState.md) | `BaseRoomStoreState` & [`BlockDocumentsSliceState`](../type-aliases/BlockDocumentsSliceState.md) & [`BlockSettingsSliceState`](../type-aliases/BlockSettingsSliceState.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`CreateBlockDocumentsSliceProps`](../type-aliases/CreateBlockDocumentsSliceProps.md)<`TRoomState`> |

## Returns

`StateCreator`<[`BlockDocumentFeatureSlicesState`](../type-aliases/BlockDocumentFeatureSlicesState.md)>
