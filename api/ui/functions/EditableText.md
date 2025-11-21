---
url: /api/ui/functions/EditableText.md
---
[@sqlrooms/ui](../index.md) / EditableText

# Function: EditableText()

> **EditableText**(`props`): `ReactNode` | `Promise`<`ReactNode`>

Component that allows the user to edit a string.

The editing mode can be controlled (the mode is managed by the parent component)
or uncontrolled (managed by the component itself).

Controlled mode example:

```
   const [text, setText] = useState('');
   const [isEditing, setEditing] = useState(false);
   ...
   <EditableText
      value={text}
      onChange={setText}
      isEditing={isEditing}
      onEditingChange={setEditing}
   />
```

Uncontrolled mode example:

```
   const [text, setText] = useState('');
   ...
   <EditableText
     value={text}
     onChange={setText}
     defaultEditing={false}
   />
```

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | { `className`: `string`; `isReadOnly`: `boolean`; `value`: `string`; `placeholder`: `string`; `onChange`: (`text`) => `void`; `defaultEditing`: `boolean`; `isEditing`: `boolean`; `onEditingChange`: (`isEditing`) => `void`; } | - |
| `props.className`? | `string` | - |
| `props.isReadOnly`? | `boolean` | - |
| `props.value` | `string` | - |
| `props.placeholder`? | `string` | - |
| `props.onChange` | (`text`) => `void` | - |
| `props.defaultEditing`? | `boolean` | The editing state when it is initially rendered. Use when you do not need to control its editing state in the parent component. |
| `props.isEditing`? | `boolean` | The controlled editing state of the component. Must be used in conjunction with onEditingChange. |
| `props.onEditingChange`? | (`isEditing`) => `void` | - |

## Returns

`ReactNode` | `Promise`<`ReactNode`>
