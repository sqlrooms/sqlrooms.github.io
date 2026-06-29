---
url: 'https://sqlrooms.org/api/mosaic/interfaces/MosaicEditorActions.md'
---
[@sqlrooms/mosaic](../index.md) / MosaicEditorActions

# Interface: MosaicEditorActions

Actions available in the Mosaic spec editor

## Properties

### setEditedSpec

> **setEditedSpec**: (`spec`) => `void`

Update the edited spec string

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `spec` | `string` |

#### Returns

`void`

***

### applyChanges

> **applyChanges**: () => `void`

Apply all changes (calls onSpecChange callback)

#### Returns

`void`

***

### cancelChanges

> **cancelChanges**: () => `void`

Cancel changes and revert to last applied state

#### Returns

`void`

***

### resetToOriginal

> **resetToOriginal**: () => `void`

Reset to original initial values

#### Returns

`void`
