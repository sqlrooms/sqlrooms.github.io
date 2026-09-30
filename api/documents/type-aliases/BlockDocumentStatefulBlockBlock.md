---
url: >-
  https://sqlrooms.org/api/documents/type-aliases/BlockDocumentStatefulBlockBlock.md
---
[@sqlrooms/documents](../index.md) / BlockDocumentStatefulBlockBlock

# Type Alias: BlockDocumentStatefulBlockBlock

> **BlockDocumentStatefulBlockBlock** = `object`

A stateful block embedding another block type (e.g., dashboard, data-table) by instance ID with ownership semantics.

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `id` | `string` | - |
|  `intent?` | `string` | - |
|  `type` | `"statefulBlock"` | - |
|  `blockType` | `string` | - |
|  `blockInstanceId` | `string` | - |
|  `ownership?` | `"owned"` | `"shared"` | `"external"` | - |
|  `caption?` | `string` | User-facing label shown for the block in the document flow. |
|  `tableName?` | `string` | Table identity this block reads from, for block types that bind to a single table (currently `data-table`). Resolved via `db.findTable`, same as the `chart` block's `tableName`. Other block types leave this unset and keep their data binding inside their own backing state. |
|  `height?` | `number` | - |
