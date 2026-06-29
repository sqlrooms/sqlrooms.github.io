---
url: 'https://sqlrooms.org/api/ui/interfaces/UseComboboxReturn.md'
---
[@sqlrooms/ui](../index.md) / UseComboboxReturn

# Interface: UseComboboxReturn

State and prop helpers returned by useCombobox.

## Properties

### open

> **open**: `boolean`

***

### setOpen

> **setOpen**: (`open`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `open` | `boolean` |

#### Returns

`void`

***

### handleSelect

> **handleSelect**: (`value`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`void`

***

### popoverProps

> **popoverProps**: `object`

| Name | Type |
| ------ | ------ |
| `open` | `boolean` |
| `onOpenChange()` | (`open`) => `void` |

***

### triggerProps

> **triggerProps**: `object`

| Name | Type |
| ------ | ------ |
| `role` | `"combobox"` |
| `aria-expanded` | `boolean` |
