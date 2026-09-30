---
url: https://sqlrooms.org/api/mosaic/type-aliases/DataTableSettingsPanelProps.md
---
[@sqlrooms/mosaic](../index.md) / DataTableSettingsPanelProps

# Type Alias: DataTableSettingsPanelProps

> **DataTableSettingsPanelProps** = `object`

Props for the data-table explorer settings panel.

## Properties

### value

> **value**: `DataTable` | `undefined`

Currently selected table for the data-table explorer.

***

### onChange

> **onChange**: (`table`) => `void`

Called when the selected table changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `table` | `DataTable` |

#### Returns

`void`

***

### title?

> `optional` **title?**: `string`

Optional display title or caption value.

***

### titleLabel?

> `optional` **titleLabel?**: `string`

Label for the editable title field.

***

### onTitleChange?

> `optional` **onTitleChange?**: (`title`) => `void`

Called when the display title or caption changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `title` | `string` |

#### Returns

`void`

***

### readOnly?

> `optional` **readOnly?**: `boolean`
