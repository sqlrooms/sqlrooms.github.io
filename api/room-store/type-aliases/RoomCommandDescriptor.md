---
url: 'https://sqlrooms.org/api/room-store/type-aliases/RoomCommandDescriptor.md'
---
[@sqlrooms/room-store](../index.md) / RoomCommandDescriptor

# Type Alias: RoomCommandDescriptor

> **RoomCommandDescriptor** = `object`

## Properties

### id

> **id**: `string`

***

### owner

> **owner**: `string`

***

### name

> **name**: `string`

***

### description?

> `optional` **description?**: `string`

***

### group?

> `optional` **group?**: `string`

***

### keywords?

> `optional` **keywords?**: `string`\[]

***

### enabled

> **enabled**: `boolean`

***

### visible

> **visible**: `boolean`

***

### requiresInput

> **requiresInput**: `boolean`

***

### inputDescription?

> `optional` **inputDescription?**: `string`

***

### inputSchema?

> `optional` **inputSchema?**: [`RoomCommandPortableSchema`](RoomCommandPortableSchema.md)

***

### keystrokes

> **keystrokes**: `string`\[]

***

### shortcut?

> `optional` **shortcut?**: `string`

***

### readOnly

> **readOnly**: `boolean`

***

### idempotent

> **idempotent**: `boolean`

***

### riskLevel

> **riskLevel**: [`RoomCommandRiskLevel`](RoomCommandRiskLevel.md)

***

### requiresConfirmation

> **requiresConfirmation**: `boolean`
