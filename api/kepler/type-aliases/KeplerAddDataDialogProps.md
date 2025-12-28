---
url: /api/kepler/type-aliases/KeplerAddDataDialogProps.md
---
[@sqlrooms/kepler](../index.md) / KeplerAddDataDialogProps

# Type Alias: KeplerAddDataDialogProps

> **KeplerAddDataDialogProps** = `object` & [`KeplerS3BrowserProps`](KeplerS3BrowserProps.md)

## Type Declaration

| Name | Type |
| ------ | ------ |
| `addDataModal` | `Pick`<`UseDisclosureReturnValue`, `"isOpen"` | `"onClose"`> |
| `loadTileSet` | `LoadTileSet` |
| `loadFiles()` | (`files`) => `Promise`<`void`> |
| `method?` | [`AddDataMethods`](../enumerations/AddDataMethods.md) |
| `acceptedFormats?` | `string`\[] |
