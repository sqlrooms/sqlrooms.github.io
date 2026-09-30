---
url: https://sqlrooms.org/api/app-runtime/type-aliases/HtmlAppBlockDocumentBlock.md
---
[@sqlrooms/app-runtime](../index.md) / HtmlAppBlockDocumentBlock

# Type Alias: HtmlAppBlockDocumentBlock

> **HtmlAppBlockDocumentBlock** = `object`

Block-document stateful block DTO for an owned HTML app runtime.

`type` identifies the document block shape, `blockType` identifies the HTML
app runtime block, `ownership` records that the document owns the runtime
state, and `intent` carries the optional durable app objective.

## Properties

### type

> **type**: `"statefulBlock"`

***

### id

> **id**: `string`

***

### blockType

> **blockType**: *typeof* [`HTML_APP_BLOCK_TYPE`](../variables/HTML_APP_BLOCK_TYPE.md)

***

### blockInstanceId

> **blockInstanceId**: `string`

***

### ownership

> **ownership**: `"owned"`

***

### intent?

> `optional` **intent?**: `string`

***

### caption

> **caption**: `string`

***

### height

> **height**: `number`
