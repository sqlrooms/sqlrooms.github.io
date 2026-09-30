---
url: https://sqlrooms.org/api/ai-core/functions/useRegisterBeforeSend.md
---
[@sqlrooms/ai-core](../index.md) / useRegisterBeforeSend

# Function: useRegisterBeforeSend()

> **useRegisterBeforeSend**(`handler`, `exclusiveKey?`): `void`

Registers a pre-send veto for as long as the calling component is mounted.

**Chat-wide, not per-surface.** One `<Chat>` root has one registry: a
suggestion row cannot bypass a policy the composer enforces, but two
composers under one root also share vetoes. Independent surfaces need
separate roots.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `handler` | [`BeforeSendHandler`](../type-aliases/BeforeSendHandler.md) | `undefined` | Called with the text about to be sent; return `false` to abort. May be a fresh closure each render. `undefined` registers nothing. |
| `exclusiveKey?` | `string` | Names a role only one registration should fill, for a dev-time duplicate warning. Omit for policies that may legitimately stack. |

## Returns

`void`
