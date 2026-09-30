---
url: https://sqlrooms.org/api/mosaic/functions/createDashboardFeatureSlices.md
---
[@sqlrooms/mosaic](../index.md) / createDashboardFeatureSlices

# Function: createDashboardFeatureSlices()

> **createDashboardFeatureSlices**<`TRoomState`>(`props?`): `StateCreator`<[`MosaicDashboardFeatureSlicesState`](../type-aliases/MosaicDashboardFeatureSlicesState.md)>

Creates the store slices needed by Mosaic dashboard surfaces with settings.

This composes dashboard state with the shared block/panel settings selection
state used by BlockSettingsPanelLayout.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRoomState` *extends* `BaseRoomStoreState` & `DbSliceState` & `DuckDbSliceState` & `LayoutSliceState` & [`MosaicSliceState`](../type-aliases/MosaicSliceState.md) & [`MosaicDashboardSliceState`](../type-aliases/MosaicDashboardSliceState.md) & `BlockSettingsSliceState` | `BaseRoomStoreState` & `DbSliceState` & `DuckDbSliceState` & `LayoutSliceState` & [`MosaicSliceState`](../type-aliases/MosaicSliceState.md) & [`MosaicDashboardSliceState`](../type-aliases/MosaicDashboardSliceState.md) & `BlockSettingsSliceState` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`CreateMosaicDashboardSliceProps`](../type-aliases/CreateMosaicDashboardSliceProps.md) |

## Returns

`StateCreator`<[`MosaicDashboardFeatureSlicesState`](../type-aliases/MosaicDashboardFeatureSlicesState.md)>
