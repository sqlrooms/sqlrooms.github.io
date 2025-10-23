---
url: /api/ui/functions/EditableText.md
---
[@sqlrooms/ui](../index.md) / EditableText

# Function: EditableText()

> **EditableText**(`props`): `ReactNode` | `Promise`<`ReactNode`>

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | { `className`: `string`; `isReadOnly`: `boolean`; `value`: `string`; `minWidth`: `number`; `maxWidth`: `number`; `placeholder`: `string`; `onChange`: (`text`) => `void`; `defaultEditing`: `boolean`; `isEditing`: `boolean`; `onEditingChange`: (`isEditing`) => `void`; } | - |
| `props.className`? | `string` | - |
| `props.isReadOnly`? | `boolean` | - |
| `props.value` | `string` | - |
| `props.minWidth`? | `number` | - |
| `props.maxWidth`? | `number` | - |
| `props.placeholder`? | `string` | - |
| `props.onChange` | (`text`) => `void` | - |
| `props.defaultEditing`? | `boolean` | The editing state when it is initially rendered. Use when you do not need to control its editing state in the parent component. |
| `props.isEditing`? | `boolean` | The controlled editing state of the component. Must be used in conjunction with onEditingChange. |
| `props.onEditingChange`? | (`isEditing`) => `void` | - |

## Returns

`ReactNode` | `Promise`<`ReactNode`>
