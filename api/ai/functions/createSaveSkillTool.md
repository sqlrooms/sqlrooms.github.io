---
url: 'https://sqlrooms.org/api/ai/functions/createSaveSkillTool.md'
---
[@sqlrooms/ai](../index.md) / createSaveSkillTool

# Function: createSaveSkillTool()

> **createSaveSkillTool**(`draftStore`, `context`, `onSave`): `Tool`<{ `rootId?`: `string`; }, { `success`: `false`; `error`: `string`; `ref?`: `undefined`; } | { `success`: `true`; `ref`: [`SkillRef`](../interfaces/SkillRef.md); `error?`: `undefined`; }>

## Parameters

| Parameter | Type |
| ------ | ------ |
| `draftStore` | [`SkillDraftStore`](../type-aliases/SkillDraftStore.md) |
| `context` | [`SkillAuthoringContext`](../interfaces/SkillAuthoringContext.md) |
| `onSave` | [`SaveSkillCallback`](../type-aliases/SaveSkillCallback.md) |

## Returns

`Tool`<{ `rootId?`: `string`; }, { `success`: `false`; `error`: `string`; `ref?`: `undefined`; } | { `success`: `true`; `ref`: [`SkillRef`](../interfaces/SkillRef.md); `error?`: `undefined`; }>
