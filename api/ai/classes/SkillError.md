---
url: 'https://sqlrooms.org/api/ai/classes/SkillError.md'
---
[@sqlrooms/ai](../index.md) / SkillError

# Class: SkillError

## Extends

* `Error`

## Extended by

* [`SkillManifestError`](SkillManifestError.md)
* [`SkillNotFoundError`](SkillNotFoundError.md)
* [`SkillRootReadOnlyError`](SkillRootReadOnlyError.md)
* [`SkillConflictError`](SkillConflictError.md)

## Constructors

### Constructor

> **new SkillError**(`code`, `message`, `context?`): `SkillError`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `code` | [`SkillErrorCode`](../type-aliases/SkillErrorCode.md) |
| `message` | `string` |
| `context?` | [`SkillErrorContext`](../interfaces/SkillErrorContext.md) |

#### Returns

`SkillError`

#### Overrides

`Error.constructor`

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
|  `code` | `readonly` | [`SkillErrorCode`](../type-aliases/SkillErrorCode.md) |
|  `context?` | `readonly` | [`SkillErrorContext`](../interfaces/SkillErrorContext.md) |

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
