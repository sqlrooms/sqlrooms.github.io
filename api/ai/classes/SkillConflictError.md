---
url: 'https://sqlrooms.org/api/ai/classes/SkillConflictError.md'
---
[@sqlrooms/ai](../index.md) / SkillConflictError

# Class: SkillConflictError

## Extends

* [`SkillError`](SkillError.md)

## Constructors

### Constructor

> **new SkillConflictError**(`message`, `context?`): `SkillConflictError`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `context?` | [`SkillErrorContext`](../interfaces/SkillErrorContext.md) |

#### Returns

`SkillConflictError`

#### Overrides

[`SkillError`](SkillError.md).[`constructor`](SkillError.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
|  `code` | `readonly` | [`SkillErrorCode`](../type-aliases/SkillErrorCode.md) | [`SkillError`](SkillError.md).[`code`](SkillError.md#property-code) |
|  `context?` | `readonly` | [`SkillErrorContext`](../interfaces/SkillErrorContext.md) | [`SkillError`](SkillError.md).[`context`](SkillError.md#property-context) |

## Methods

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

| Name | Type |
| ------ | ------ |
| `name` | `string` |
| `code` | [`SkillErrorCode`](../type-aliases/SkillErrorCode.md) |
| `message` | `string` |
| `context` | [`SkillErrorContext`](../interfaces/SkillErrorContext.md) | `undefined` |

#### Inherited from

[`SkillError`](SkillError.md).[`toJSON`](SkillError.md#tojson)
