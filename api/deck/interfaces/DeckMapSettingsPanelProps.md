---
url: https://sqlrooms.org/api/deck/interfaces/DeckMapSettingsPanelProps.md
---
[@sqlrooms/deck](../index.md) / DeckMapSettingsPanelProps

# Interface: DeckMapSettingsPanelProps

## Properties

### title

> **title**: `string`

***

### selectedTable?

> `optional` **selectedTable?**: `string`

***

### config

> **config**: [`DeckMapConfig`](../type-aliases/DeckMapConfig.md)

***

### tables

> **tables**: `DataTable`\[]

***

### onClose?

> `optional` **onClose?**: () => `void`

#### Returns

`void`

***

### onTableChange

> **onTableChange**: (`table`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `table` | `DataTable` |

#### Returns

`void`

***

### onTitleChange

> **onTitleChange**: (`title`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `title` | `string` |

#### Returns

`void`

***

### onConfigChange

> **onConfigChange**: (`config`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`DeckMapConfig`](../type-aliases/DeckMapConfig.md) |

#### Returns

`void`

***

### readOnly?

> `optional` **readOnly?**: `boolean`

***

### customConfig?

> `optional` **customConfig?**: `boolean`

Custom maps stay on the JSON editor so basic controls cannot clobber them.

***

### preferDatasetSource?

> `optional` **preferDatasetSource?**: `boolean`

Document maps own their dataset in `config.datasets`. Prefer that table
over `selectedTable`, which is only a sidecar. Dashboards leave this false
so the shared dashboard selected table is shown.
