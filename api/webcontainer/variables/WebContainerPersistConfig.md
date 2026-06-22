---
url: 'https://sqlrooms.org/api/webcontainer/variables/WebContainerPersistConfig.md'
---
[@sqlrooms/webcontainer](../index.md) / WebContainerPersistConfig

# Variable: WebContainerPersistConfig

> `const` **WebContainerPersistConfig**: `ZodPipe`<`ZodObject`<{ `filesTree`: `ZodCustom`<`FileSystemTree`, `FileSystemTree`>; `openedFiles`: `ZodArray`<`ZodObject`<{ `path`: `ZodString`; `content`: `ZodString`; `dirty`: `ZodBoolean`; }, `$strip`>>; `activeFilePath`: `ZodNullable`<`ZodString`>; }, `$strip`>, `ZodTransform`<{ `openedFiles`: `object`\[]; `activeFilePath`: `string` | `null`; `filesTree`: { }; }, { `filesTree`: `FileSystemTree`; `openedFiles`: `object`\[]; `activeFilePath`: `string` | `null`; }>>

Persistence-safe schema that strips `filesTree` (which can be huge after
`npm install` pulls in `node_modules`) so `JSON.stringify` in the persist
middleware never blows up.  The tree is re-exported from the live
WebContainer on every boot, so there is nothing to restore.
