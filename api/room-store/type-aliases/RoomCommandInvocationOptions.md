---
url: >-
  https://sqlrooms.org/api/room-store/type-aliases/RoomCommandInvocationOptions.md
---
[@sqlrooms/room-store](../index.md) / RoomCommandInvocationOptions

# Type Alias: RoomCommandInvocationOptions

> **RoomCommandInvocationOptions** = `Partial`<[`RoomCommandInvocation`](RoomCommandInvocation.md)> & `object`

Optional invocation metadata for a room command.

`signal` supports cooperative cancellation and is excluded from serializable
invocation and audit data.

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `signal?` | `AbortSignal` | Cancels command execution without becoming part of serializable audit data. |
