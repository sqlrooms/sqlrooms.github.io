---
url: 'https://sqlrooms.org/api/ai/interfaces/SkillDraftState.md'
---
[@sqlrooms/ai](../index.md) / SkillDraftState

# Interface: SkillDraftState

The serializable half of the draft — the parts the agent's tools fill in.
`id` and `version` are deliberately omitted: the host derives them at save
time (id from the name via slug + collision resolution; version defaulted).

## Extends

* [`SkillDraft`](SkillDraft.md)

## Properties

### name

> **name**: `string`

#### Inherited from

[`SkillDraft`](SkillDraft.md).[`name`](SkillDraft.md#name)

***

### description

> **description**: `string`

#### Inherited from

[`SkillDraft`](SkillDraft.md).[`description`](SkillDraft.md#description)

***

### author?

> `optional` **author?**: `string`

#### Inherited from

[`SkillDraft`](SkillDraft.md).[`author`](SkillDraft.md#author)

***

### instructions

> **instructions**: `string`

#### Inherited from

[`SkillDraft`](SkillDraft.md).[`instructions`](SkillDraft.md#instructions)

***

### status

> **status**: [`SkillDraftStatus`](../type-aliases/SkillDraftStatus.md)

***

### error?

> `optional` **error?**: `string`

## Methods

### patchManifest()

> **patchManifest**(`patch`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `patch` | `Partial`<`Pick`<[`SkillDraft`](SkillDraft.md), `"name"` | `"description"` | `"author"`>> |

#### Returns

`void`

***

### setInstructions()

> **setInstructions**(`markdown`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `markdown` | `string` |

#### Returns

`void`

***

### setStatus()

> **setStatus**(`status`, `error?`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`SkillDraftStatus`](../type-aliases/SkillDraftStatus.md) |
| `error?` | `string` |

#### Returns

`void`

***

### reset()

> **reset**(): `void`

#### Returns

`void`
