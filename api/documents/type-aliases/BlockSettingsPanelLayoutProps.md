---
url: >-
  https://sqlrooms.org/api/documents/type-aliases/BlockSettingsPanelLayoutProps.md
---
[@sqlrooms/documents](../index.md) / BlockSettingsPanelLayoutProps

# Type Alias: BlockSettingsPanelLayoutProps

> **BlockSettingsPanelLayoutProps** = `object`

## Properties

### children

> **children**: `ReactNode`

Main content to render next to the settings panel.

***

### editor?

> `optional` **editor?**: `Editor` | `null`

Optional Tiptap editor used to resolve selected block settings when the
layout is rendered outside a BlockDocumentEditor context.

***

### documentId?

> `optional` **documentId?**: `string`

Document ID required when providing an explicit editor prop.

***

### className?

> `optional` **className?**: `string`

Additional classes for the resizable panel group.

***

### contentClassName?

> `optional` **contentClassName?**: `string`

Additional classes for the main content panel.

***

### settingsPanelClassName?

> `optional` **settingsPanelClassName?**: `string`

Additional classes for the settings panel container.

***

### settingsClassName?

> `optional` **settingsClassName?**: `string`

Additional classes for the rendered BlockSettingsPanel.

***

### defaultSize?

> `optional` **defaultSize?**: `number`

Initial settings panel size in pixels.

***

### minSize?

> `optional` **minSize?**: `number`

Minimum settings panel size in pixels.

***

### maxSize?

> `optional` **maxSize?**: `number` | `string`

Maximum settings panel size in pixels or a CSS percentage string.
