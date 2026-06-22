---
url: 'https://sqlrooms.org/api/python/type-aliases/PythonOutputDeclaration.md'
---
[@sqlrooms/python](../index.md) / PythonOutputDeclaration

# Type Alias: PythonOutputDeclaration

> **PythonOutputDeclaration** = { `type`: `"text"`; `name`: `string`; } | { `type`: `"json"`; `name`: `string`; } | { `type`: `"table"`; `name`: `string`; `tableName?`: `string`; } | { `type`: `"image"`; `name`: `string`; `mimeType?`: `string`; } | { `type`: `"markdown"`; `name`: `string`; } | { `type`: `"html"`; `name`: `string`; } | { `type`: `"vega-lite"`; `name`: `string`; }

Declared output Python may write back into SQLRooms.
