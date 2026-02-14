---
url: /api/vega/interfaces/VegaEditorActions.md
---
[@sqlrooms/vega](../index.md) / VegaEditorActions

# Interface: VegaEditorActions

Actions available in the editor

## Properties

### setEditedSpec()

> **setEditedSpec**: (`spec`) => `void`

Update the edited spec string

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `spec` | `string` |

#### Returns

`void`

***

### setEditedSql()

> **setEditedSql**: (`sql`) => `void`

Update the edited SQL query

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sql` | `string` |

#### Returns

`void`

***

### applyChanges()

> **applyChanges**: () => `void`

Apply all changes (calls onSpecChange/onSqlChange callbacks)

#### Returns

`void`

***

### cancelChanges()

> **cancelChanges**: () => `void`

Cancel changes and revert to last applied state

#### Returns

`void`

***

### resetToOriginal()

> **resetToOriginal**: () => `void`

Reset to original initial values

#### Returns

`void`
