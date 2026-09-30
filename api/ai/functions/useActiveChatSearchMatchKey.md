---
url: https://sqlrooms.org/api/ai/functions/useActiveChatSearchMatchKey.md
---
[@sqlrooms/ai](../index.md) / useActiveChatSearchMatchKey

# Function: useActiveChatSearchMatchKey()

> **useActiveChatSearchMatchKey**(`blockId?`): `string` | `undefined`

An opaque key for `blockId`'s current search selection, or undefined when
the block does not hold the active match. The key changes on every query
or navigation attempt, even when the same match remains active. A slot that
hides content behind a disclosure can key a reveal effect on this value so
repeated navigation never leaves the selected match hidden. Do not use the
key as a DOM id; use `activeMatchId` from [ChatSearchContextValue](../type-aliases/ChatSearchContextValue.md) for
the active mark's anchor.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `blockId?` | `string` |

## Returns

`string` | `undefined`
