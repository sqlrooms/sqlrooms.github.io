---
url: https://sqlrooms.org/api/documents/type-aliases/BlockDocumentBlockSummary.md
---
[@sqlrooms/documents](../index.md) / BlockDocumentBlockSummary

# Type Alias: BlockDocumentBlockSummary

> **BlockDocumentBlockSummary** = `object`

Generic summary of a block document block for agent planning.

## Properties

### blockId

> **blockId**: `string`

***

### index

> **index**: `number`

***

### type

> **type**: `string`

***

### title?

> `optional` **title?**: `string`

***

### caption?

> `optional` **caption?**: `string`

***

### tableName?

> `optional` **tableName?**: `string`

***

### statefulBlock?

> `optional` **statefulBlock?**: `object`

| Name | Type |
| ------ | ------ |
| `blockType` | `string` |
| `blockInstanceId?` | `string` |
| `ownership?` | `"owned"` | `"shared"` | `"external"` |
