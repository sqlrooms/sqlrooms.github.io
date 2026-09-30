---
url: https://sqlrooms.org/api/documents/type-aliases/BlockSettingsComponentProps.md
---
[@sqlrooms/documents](../index.md) / BlockSettingsComponentProps

# Type Alias: BlockSettingsComponentProps

> **BlockSettingsComponentProps** = `object`

Props passed to block settings components.

## Properties

### blockId

> **blockId**: `string`

The ID of the block or panel being configured

***

### dashboardId?

> `optional` **dashboardId?**: `string`

The ID of the parent dashboard/document, when available

***

### blockInstanceId?

> `optional` **blockInstanceId?**: `string`

Backing state id for stateful document blocks, when available

***

### readOnly?

> `optional` **readOnly?**: `boolean`

Whether the selected document block is read-only

***

### onClose?

> `optional` **onClose?**: () => `void`

Optional callback for settings UIs that can close the host settings panel

#### Returns

`void`
