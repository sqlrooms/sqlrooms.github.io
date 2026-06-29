---
url: 'https://sqlrooms.org/api/ai/functions/createWriteInstructionsTool.md'
---
[@sqlrooms/ai](../index.md) / createWriteInstructionsTool

# Function: createWriteInstructionsTool()

> **createWriteInstructionsTool**(`draftStore`, `context`): `Tool`<{ `markdown`: `string`; }, { `success`: `false`; `error`: `string`; `length?`: `undefined`; } | { `success`: `true`; `length`: `number`; `error?`: `undefined`; }>

## Parameters

| Parameter | Type |
| ------ | ------ |
| `draftStore` | [`SkillDraftStore`](../type-aliases/SkillDraftStore.md) |
| `context` | [`SkillAuthoringContext`](../interfaces/SkillAuthoringContext.md) |

## Returns

`Tool`<{ `markdown`: `string`; }, { `success`: `false`; `error`: `string`; `length?`: `undefined`; } | { `success`: `true`; `length`: `number`; `error?`: `undefined`; }>
