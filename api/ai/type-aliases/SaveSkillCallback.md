---
url: 'https://sqlrooms.org/api/ai/type-aliases/SaveSkillCallback.md'
---
[@sqlrooms/ai](../index.md) / SaveSkillCallback

# Type Alias: SaveSkillCallback

> **SaveSkillCallback** = (`draft`, `rootId?`) => `Promise`<[`SkillRef`](../interfaces/SkillRef.md)>

Callback invoked by `saveSkill` after the draft has been validated. The
host owns id derivation, version assignment, and the actual write through
`SkillStorage`.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `draft` | [`SkillDraft`](../interfaces/SkillDraft.md) |
| `rootId?` | `string` |

## Returns

`Promise`<[`SkillRef`](../interfaces/SkillRef.md)>
