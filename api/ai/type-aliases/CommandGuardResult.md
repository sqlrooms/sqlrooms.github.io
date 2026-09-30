---
url: https://sqlrooms.org/api/ai/type-aliases/CommandGuardResult.md
---
[@sqlrooms/ai](../index.md) / CommandGuardResult

# Type Alias: CommandGuardResult

> **CommandGuardResult** = `object`

The caller-scoped access decision for a room command descriptor.

## Properties

### allowed

> **allowed**: `boolean`

Whether the command tools may expose and execute the command.

***

### code?

> `optional` **code?**: `string`

Optional machine-readable refusal code returned by `execute_command`.

***

### message?

> `optional` **message?**: `string`

Optional refusal or redirect message returned by `execute_command`.
