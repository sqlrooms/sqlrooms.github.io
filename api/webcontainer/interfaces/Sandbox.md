---
url: 'https://sqlrooms.org/api/webcontainer/interfaces/Sandbox.md'
---
[@sqlrooms/webcontainer](../index.md) / Sandbox

# Interface: Sandbox

Minimal sandbox interface for executing commands and managing files
in a WebContainer environment.

## Methods

### executeCommand()

> **executeCommand**(`command`): `Promise`<{ `stdout`: `string`; `stderr`: `string`; `exitCode`: `number`; }>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `command` | `string` |

#### Returns

`Promise`<{ `stdout`: `string`; `stderr`: `string`; `exitCode`: `number`; }>

***

### readFile()

> **readFile**(`path`): `Promise`<`string`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

`Promise`<`string`>

***

### writeFiles()

> **writeFiles**(`files`): `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `files` | `object`\[] |

#### Returns

`Promise`<`void`>
