---
url: /api/ui/variables/EditableText.md
---
[@sqlrooms/ui](../index.md) / EditableText

# Variable: EditableText

> `const` **EditableText**: `FC`<{ `className?`: `string`; `isReadOnly?`: `boolean`; `value`: `string`; `placeholder?`: `string`; `onChange`: (`text`) => `void`; `autoFocus?`: `boolean`; `selectOnFocus?`: `boolean`; `allowTabFocusWhenNotEditing?`: `boolean`; `defaultEditing?`: `boolean`; `isEditing?`: `boolean`; `onEditingChange?`: (`isEditing`) => `void`; }>

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
