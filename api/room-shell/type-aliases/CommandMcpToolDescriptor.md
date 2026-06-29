---
url: 'https://sqlrooms.org/api/room-shell/type-aliases/CommandMcpToolDescriptor.md'
---
[@sqlrooms/room-shell](../index.md) / CommandMcpToolDescriptor

# Type Alias: CommandMcpToolDescriptor

> **CommandMcpToolDescriptor** = `object`

## Properties

### name

> **name**: `string`

***

### commandId

> **commandId**: `string`

***

### title

> **title**: `string`

***

### description?

> `optional` **description?**: `string`

***

### inputSchema?

> `optional` **inputSchema?**: [`RoomCommandPortableSchema`](RoomCommandPortableSchema.md)

***

### annotations?

> `optional` **annotations?**: `object`

| Name | Type |
| ------ | ------ |
| `readOnlyHint?` | `boolean` |
| `idempotentHint?` | `boolean` |
| `destructiveHint?` | `boolean` |
| `requiresConfirmation?` | `boolean` |
