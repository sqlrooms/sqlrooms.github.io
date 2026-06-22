---
url: 'https://sqlrooms.org/api/ai/interfaces/SkillStorage.md'
---
[@sqlrooms/ai](../index.md) / SkillStorage

# Interface: SkillStorage

Abstract storage backend for skills. Implementations may be filesystem,
in-memory, HTTP, OPFS, etc. All operations are Promise-based.

Priority is encoded in the order returned by `listRoots()`: earlier roots
override later ones for `resolveSkillId` conflict resolution.

## Methods

### listRoots()

> **listRoots**(): `Promise`<[`SkillRoot`](SkillRoot.md)\[]>

Enumerate all roots known to this storage, in priority order (highest
priority first).

#### Returns

`Promise`<[`SkillRoot`](SkillRoot.md)\[]>

***

### listSkills()

> **listSkills**(`rootId?`): `Promise`<[`SkillListing`](SkillListing.md)\[]>

List skills. If `rootId` is provided, returns only skills from that root.
When called without a rootId, returns skills from every root; duplicates
(same `id` in multiple roots) are included so callers can render conflict
indicators.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rootId?` | `string` |

#### Returns

`Promise`<[`SkillListing`](SkillListing.md)\[]>

***

### readSkill()

> **readSkill**(`ref`): `Promise`<[`SkillRecord`](SkillRecord.md)>

Read the full record for a single skill.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ref` | [`SkillRef`](SkillRef.md) |

#### Returns

`Promise`<[`SkillRecord`](SkillRecord.md)>

#### Throws

a `SkillNotFoundError` if the ref does not resolve.

#### Throws

a `SkillManifestError` if the skill's `skill.yaml` fails to parse
or validate.

***

### writeSkill()

> **writeSkill**(`rootId`, `id`, `content`): `Promise`<[`SkillRef`](SkillRef.md)>

Create or overwrite a skill in the given root. Returns the resulting ref.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rootId` | `string` |
| `id` | `string` |
| `content` | [`SkillWriteContent`](SkillWriteContent.md) |

#### Returns

`Promise`<[`SkillRef`](SkillRef.md)>

#### Throws

a `SkillRootReadOnlyError` if the target root is not writable.

***

### deleteSkill()

> **deleteSkill**(`ref`): `Promise`<`void`>

Remove a skill from its root.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ref` | [`SkillRef`](SkillRef.md) |

#### Returns

`Promise`<`void`>

#### Throws

a `SkillRootReadOnlyError` if the ref's root is not writable.

#### Throws

a `SkillNotFoundError` if the ref does not resolve.

***

### resolveSkillId()

> **resolveSkillId**(`id`): `Promise`<[`SkillRef`](SkillRef.md) | `null`>

Given a bare skill id, return the highest-priority `SkillRef` that holds
it, or `null` if no root has the id.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`<[`SkillRef`](SkillRef.md) | `null`>

***

### subscribe()?

> `optional` **subscribe**(`listener`): () => `void`

Optional change notification. Mutating implementations should fire the
listener after a change is observable via `listSkills`/`readSkill`.
Read-only storages may omit this; consumers must guard with
`storage.subscribe?.(listener)`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | () => `void` |

#### Returns

() => `void`
