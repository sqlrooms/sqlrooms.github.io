---
url: 'https://sqlrooms.org/api/ai/classes/CompositeSkillStorage.md'
---
[@sqlrooms/ai](../index.md) / CompositeSkillStorage

# Class: CompositeSkillStorage

A `SkillStorage` that priority-merges an ordered array of children
(highest priority first). Children must own disjoint `rootId`s — the
composite does not validate this; violating it makes dispatch ambiguous.

## Implements

* [`SkillStorage`](../interfaces/SkillStorage.md)

## Constructors

### Constructor

> **new CompositeSkillStorage**(`children`): `CompositeSkillStorage`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `children` | readonly [`SkillStorage`](../interfaces/SkillStorage.md)\[] |

#### Returns

`CompositeSkillStorage`

## Methods

### listRoots()

> **listRoots**(): `Promise`<[`SkillRoot`](../interfaces/SkillRoot.md)\[]>

Enumerate all roots known to this storage, in priority order (highest
priority first).

#### Returns

`Promise`<[`SkillRoot`](../interfaces/SkillRoot.md)\[]>

#### Implementation of

[`SkillStorage`](../interfaces/SkillStorage.md).[`listRoots`](../interfaces/SkillStorage.md#listroots)

***

### listSkills()

> **listSkills**(`rootId?`): `Promise`<[`SkillListing`](../interfaces/SkillListing.md)\[]>

List skills. If `rootId` is provided, returns only skills from that root.
When called without a rootId, returns skills from every root; duplicates
(same `id` in multiple roots) are included so callers can render conflict
indicators.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rootId?` | `string` |

#### Returns

`Promise`<[`SkillListing`](../interfaces/SkillListing.md)\[]>

#### Implementation of

[`SkillStorage`](../interfaces/SkillStorage.md).[`listSkills`](../interfaces/SkillStorage.md#listskills)

***

### readSkill()

> **readSkill**(`ref`): `Promise`<[`SkillRecord`](../interfaces/SkillRecord.md)>

Read the full record for a single skill.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ref` | [`SkillRef`](../interfaces/SkillRef.md) |

#### Returns

`Promise`<[`SkillRecord`](../interfaces/SkillRecord.md)>

#### Throws

a `SkillNotFoundError` if the ref does not resolve.

#### Throws

a `SkillManifestError` if the skill's `skill.yaml` fails to parse
or validate.

#### Implementation of

[`SkillStorage`](../interfaces/SkillStorage.md).[`readSkill`](../interfaces/SkillStorage.md#readskill)

***

### writeSkill()

> **writeSkill**(`rootId`, `id`, `content`): `Promise`<[`SkillRef`](../interfaces/SkillRef.md)>

Create or overwrite a skill in the given root. Returns the resulting ref.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rootId` | `string` |
| `id` | `string` |
| `content` | [`SkillWriteContent`](../interfaces/SkillWriteContent.md) |

#### Returns

`Promise`<[`SkillRef`](../interfaces/SkillRef.md)>

#### Throws

a `SkillRootReadOnlyError` if the target root is not writable.

#### Implementation of

[`SkillStorage`](../interfaces/SkillStorage.md).[`writeSkill`](../interfaces/SkillStorage.md#writeskill)

***

### deleteSkill()

> **deleteSkill**(`ref`): `Promise`<`void`>

Remove a skill from its root.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ref` | [`SkillRef`](../interfaces/SkillRef.md) |

#### Returns

`Promise`<`void`>

#### Throws

a `SkillRootReadOnlyError` if the ref's root is not writable.

#### Throws

a `SkillNotFoundError` if the ref does not resolve.

#### Implementation of

[`SkillStorage`](../interfaces/SkillStorage.md).[`deleteSkill`](../interfaces/SkillStorage.md#deleteskill)

***

### resolveSkillId()

> **resolveSkillId**(`id`): `Promise`<[`SkillRef`](../interfaces/SkillRef.md) | `null`>

Given a bare skill id, return the highest-priority `SkillRef` that holds
it, or `null` if no root has the id.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`<[`SkillRef`](../interfaces/SkillRef.md) | `null`>

#### Implementation of

[`SkillStorage`](../interfaces/SkillStorage.md).[`resolveSkillId`](../interfaces/SkillStorage.md#resolveskillid)

***

### subscribe()

> **subscribe**(`listener`): () => `void`

Always implemented so consumers can call it unconditionally. Fans out
to children that expose `subscribe?`; if none do, this is a noop
returning a noop unsubscribe.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | () => `void` |

#### Returns

() => `void`

#### Implementation of

[`SkillStorage`](../interfaces/SkillStorage.md).[`subscribe`](../interfaces/SkillStorage.md#subscribe)
