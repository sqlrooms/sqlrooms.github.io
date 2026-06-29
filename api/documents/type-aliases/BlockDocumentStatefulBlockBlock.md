---
url: >-
  https://sqlrooms.org/api/documents/type-aliases/BlockDocumentStatefulBlockBlock.md
---
[@sqlrooms/documents](../index.md) / BlockDocumentStatefulBlockBlock

# Type Alias: BlockDocumentStatefulBlockBlock

> **BlockDocumentStatefulBlockBlock** = `object`

A stateful block embedding another block type (e.g., dashboard, data-table) by instance ID with ownership semantics.

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `id` | `string` |
|  `intent?` | `string` |
|  `type` | `"statefulBlock"` |
|  `blockType` | `string` |
|  `blockInstanceId` | `string` |
|  `ownership?` | `"owned"` | `"shared"` | `"external"` |
|  `title?` | `string` |
|  `caption?` | `string` |
|  `height?` | `number` |
