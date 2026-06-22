---
url: 'https://sqlrooms.org/api/ai-config/functions/setAiRunContextPrimaryItem.md'
---
[@sqlrooms/ai-config](../index.md) / setAiRunContextPrimaryItem

# Function: setAiRunContextPrimaryItem()

> **setAiRunContextPrimaryItem**(`runContext`, `item`): `object`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `runContext` | `unknown` |
| `item` | {\[`key`: `string`]: `unknown`; `kind`: `string`; `id`: `string`; `title`: `string`; `type?`: `string`; `subtitle?`: `string`; } |
| `item.kind` | `string` |
| `item.id` | `string` |
| `item.title` | `string` |
| `item.type?` | `string` |
| `item.subtitle?` | `string` |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `items` | `object`\[] |
| `primaryItemId?` | `string` |
| `primaryItemKind?` | `string` |
| `capturedAt` | `number` |
