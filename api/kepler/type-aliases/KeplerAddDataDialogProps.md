---
url: 'https://sqlrooms.org/api/kepler/type-aliases/KeplerAddDataDialogProps.md'
---
[@sqlrooms/kepler](../index.md) / KeplerAddDataDialogProps

# Type Alias: KeplerAddDataDialogProps

> **KeplerAddDataDialogProps** = `object`

## Properties

### addDataModal

> **addDataModal**: `Pick`<`UseDisclosureReturnValue`, `"isOpen"` | `"onClose"`>

***

### loadTileSet

> **loadTileSet**: `LoadTileSet`

***

### loadFiles

> **loadFiles**: (`files`) => `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `files` | `FileList` | `string`\[] |

#### Returns

`Promise`<`void`>

***

### method?

> `optional` **method?**: [`AddDataMethods`](../enumerations/AddDataMethods.md)

***

### acceptedFormats?

> `optional` **acceptedFormats?**: `string`\[]
