---
url: https://sqlrooms.org/api/ai-core/type-aliases/BeforeSendHandler.md
---
[@sqlrooms/ai-core](../index.md) / BeforeSendHandler

# Type Alias: BeforeSendHandler

> **BeforeSendHandler** = (`text`) => `boolean` | `void`

A synchronous pre-send veto: called with the text about to be sent, and
returning `false` to abort. Any other return value proceeds.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

## Returns

`boolean` | `void`
