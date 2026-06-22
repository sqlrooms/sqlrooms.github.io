---
url: 'https://sqlrooms.org/api/ai/functions/createWriteManifestTool.md'
---
[@sqlrooms/ai](../index.md) / createWriteManifestTool

# Function: createWriteManifestTool()

> **createWriteManifestTool**(`draftStore`, `context`): `Tool`<{ `name`: `string`; `description`: `string`; `author?`: `string`; }, { `success`: `false`; `error`: `string`; `manifest?`: `undefined`; } | { `success`: `true`; `manifest`: { `name`: `string`; `description`: `string`; `author`: `string` | `undefined`; }; `error?`: `undefined`; }>

## Parameters

| Parameter | Type |
| ------ | ------ |
| `draftStore` | [`SkillDraftStore`](../type-aliases/SkillDraftStore.md) |
| `context` | [`SkillAuthoringContext`](../interfaces/SkillAuthoringContext.md) |

## Returns

`Tool`<{ `name`: `string`; `description`: `string`; `author?`: `string`; }, { `success`: `false`; `error`: `string`; `manifest?`: `undefined`; } | { `success`: `true`; `manifest`: { `name`: `string`; `description`: `string`; `author`: `string` | `undefined`; }; `error?`: `undefined`; }>
