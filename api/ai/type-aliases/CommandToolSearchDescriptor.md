---
url: 'https://sqlrooms.org/api/ai/type-aliases/CommandToolSearchDescriptor.md'
---
[@sqlrooms/ai](../index.md) / CommandToolSearchDescriptor

# Type Alias: CommandToolSearchDescriptor

> **CommandToolSearchDescriptor** = `Omit`<`RoomCommandDescriptor`, `"owner"` | `"inputDescription"` | `"inputSchema"` | `"keystrokes"` | `"shortcut"`> & `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
| `inputSchema?` | `RoomCommandDescriptor`\[`"inputSchema"`] |
| `score` | `number` |
| `matchReason` | `string` |
| `metadataWarnings?` | `string`\[] |
