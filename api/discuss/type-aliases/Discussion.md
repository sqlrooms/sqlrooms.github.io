---
url: /api/discuss/type-aliases/Discussion.md
---
[@sqlrooms/discuss](../index.md) / Discussion

# Type Alias: Discussion

> **Discussion**: `object`

## Type declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
|  `id` | `string` | - |
|  `anchorId`? | `string` | - |
|  `rootComment` | { `id`: `string`; `userId`: `string`; `text`: `string`; `timestamp`: `Date`; `parentId`: `string`; } | Comment |
|  `comments` | `object`\[] | - |
