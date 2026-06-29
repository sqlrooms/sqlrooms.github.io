---
url: 'https://sqlrooms.org/api/ai/functions/buildSkillAuthoringSystemPrompt.md'
---
[@sqlrooms/ai](../index.md) / buildSkillAuthoringSystemPrompt

# Function: buildSkillAuthoringSystemPrompt()

> **buildSkillAuthoringSystemPrompt**(`context`): `string`

Build the authoring agent's system prompt. Deterministic — no dates, random
ids, or host-specific strings beyond the capability surface supplied via
`context`.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`SkillAuthoringContext`](../interfaces/SkillAuthoringContext.md) |

## Returns

`string`
