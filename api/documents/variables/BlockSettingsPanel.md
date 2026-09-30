---
url: https://sqlrooms.org/api/documents/variables/BlockSettingsPanel.md
---
[@sqlrooms/documents](../index.md) / BlockSettingsPanel

# Variable: BlockSettingsPanel

> `const` **BlockSettingsPanel**: `FC`<[`BlockSettingsPanelProps`](../type-aliases/BlockSettingsPanelProps.md)>

Panel that displays settings for the currently selected block.

Automatically renders the settings component supplied by the selected
block or panel definition.

Shows empty states for:

* No block selected
* No settings component available for the selected block

## Example

```tsx
<div className="flex h-full">
  <div className="flex-1">
    <Dashboard />
  </div>
  <BlockSettingsPanel className="w-80 border-l" />
</div>
```
