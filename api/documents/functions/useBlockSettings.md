---
url: https://sqlrooms.org/api/documents/functions/useBlockSettings.md
---
[@sqlrooms/documents](../index.md) / useBlockSettings

# Function: useBlockSettings()

> **useBlockSettings**(`selectedItem`, `documentId`, `readOnly?`): `BlockSettingsResult`

Hook that resolves the settings component and props for a selected block.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `selectedItem` | [`SelectedItem`](../type-aliases/SelectedItem.md) | The currently selected block or panel |
| `documentId` | `string` | `undefined` | Document ID (used as dashboardId for TipTap blocks) |
| `readOnly?` | `boolean` | - |

## Returns

`BlockSettingsResult`

Settings component and props, or null if no settings available
