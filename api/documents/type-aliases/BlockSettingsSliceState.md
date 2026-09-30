---
url: https://sqlrooms.org/api/documents/type-aliases/BlockSettingsSliceState.md
---
[@sqlrooms/documents](../index.md) / BlockSettingsSliceState

# Type Alias: BlockSettingsSliceState

> **BlockSettingsSliceState** = `object`

State shape for the block settings slice

## Properties

### blockSettings

> **blockSettings**: `object`

| Name | Type | Description |
| ------ | ------ | ------ |
| `config` | [`BlockSettingsSliceConfig`](BlockSettingsSliceConfig.md) | - |
| `runtime` | { `selectedBlock?`: [`SelectedBlock`](SelectedBlock.md); `isSettingsPanelOpen`: `boolean`; `settingsPanelOpenRequest`: `number`; } | - |
| `selectBlock()` | (`block`) => `void` | Select a block |
| `requestOpenSettingsPanel()` | () => `void` | Request the host settings panel to open |
| `requestCloseSettingsPanel()` | () => `void` | Request the host settings panel to close |
| `setSettingsPanelOpen()` | (`isOpen`) => `void` | Synchronize host settings panel visibility |
| `clearSelection()` | () => `void` | Clear the current selection |
| `isBlockSelected()` | (`type`, `id`, `dashboardId?`) => `boolean` | Check if a specific block is selected |
| `clearSelectionIfBlockDeleted()` | (`blockId`) => `void` | Clear selection if a block is deleted |
