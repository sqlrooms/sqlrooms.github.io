---
url: 'https://sqlrooms.org/api/room-shell/type-aliases/RoomCommand.md'
---
[@sqlrooms/room-shell](../index.md) / RoomCommand

# Type Alias: RoomCommand\<RS>

> **RoomCommand**<`RS`> = `object`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `RS` *extends* [`BaseRoomStoreState`](BaseRoomStoreState.md) | [`BaseRoomStoreState`](BaseRoomStoreState.md) |

## Properties

### id

> **id**: `string`

***

### name

> **name**: `string`

***

### description?

> `optional` **description?**: `string`

***

### group?

> `optional` **group?**: `string`

***

### keywords?

> `optional` **keywords?**: `string`\[]

***

### inputSchema?

> `optional` **inputSchema?**: `ZodType`<`unknown`>

***

### inputDescription?

> `optional` **inputDescription?**: `string`

***

### validateInput?

> `optional` **validateInput?**: (`input`, `context`) => `void` | `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `unknown` |
| `context` | [`RoomCommandExecutionContext`](RoomCommandExecutionContext.md)<`RS`> |

#### Returns

`void` | `Promise`<`void`>

***

### execute

> **execute**: (`context`, `input?`) => [`RoomCommandExecuteOutput`](RoomCommandExecuteOutput.md) | `Promise`<[`RoomCommandExecuteOutput`](RoomCommandExecuteOutput.md)>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`RoomCommandExecutionContext`](RoomCommandExecutionContext.md)<`RS`> |
| `input?` | `unknown` |

#### Returns

[`RoomCommandExecuteOutput`](RoomCommandExecuteOutput.md) | `Promise`<[`RoomCommandExecuteOutput`](RoomCommandExecuteOutput.md)>

***

### isVisible?

> `optional` **isVisible?**: [`RoomCommandPredicate`](RoomCommandPredicate.md)<`RS`>

***

### isEnabled?

> `optional` **isEnabled?**: [`RoomCommandPredicate`](RoomCommandPredicate.md)<`RS`>

***

### metadata?

> `optional` **metadata?**: [`RoomCommandPolicyMetadata`](RoomCommandPolicyMetadata.md)

***

### ui?

> `optional` **ui?**: [`RoomCommandUiMetadata`](RoomCommandUiMetadata.md)

***

### ~~keystrokes?~~

> `optional` **keystrokes?**: [`RoomCommandKeystrokes`](RoomCommandKeystrokes.md)

#### Deprecated

Use ui?.keystrokes

***

### ~~shortcut?~~

> `optional` **shortcut?**: `string`

#### Deprecated

Use ui?.shortcut

***

### ~~inputComponent?~~

> `optional` **inputComponent?**: [`RoomCommandInputComponent`](RoomCommandInputComponent.md)

#### Deprecated

Use ui?.inputComponent

***

### ~~readOnly?~~

> `optional` **readOnly?**: `boolean`

#### Deprecated

Use metadata?.readOnly

***

### ~~idempotent?~~

> `optional` **idempotent?**: `boolean`

#### Deprecated

Use metadata?.idempotent

***

### ~~riskLevel?~~

> `optional` **riskLevel?**: [`RoomCommandRiskLevel`](RoomCommandRiskLevel.md)

#### Deprecated

Use metadata?.riskLevel

***

### ~~requiresConfirmation?~~

> `optional` **requiresConfirmation?**: `boolean`

#### Deprecated

Use metadata?.requiresConfirmation
