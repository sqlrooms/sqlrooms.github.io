---
url: 'https://sqlrooms.org/api/ai/functions/loadSkillFromFiles.md'
---
[@sqlrooms/ai](../index.md) / loadSkillFromFiles

# Function: loadSkillFromFiles()

> **loadSkillFromFiles**(`files`): `object`

Compose a skill's two canonical files (`skill.yaml` + `SKILL.md`) plus any
additional files into a validated record.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `files` | [`SkillFile`](../interfaces/SkillFile.md)\[] |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `manifest` | { `id`: `string`; `version`: `string`; `name`: `string`; `description`: `string`; `author?`: `string`; `icon?`: `string`; } |
| `instructions` | `string` |
| `extraFiles` | [`SkillFile`](../interfaces/SkillFile.md)\[] |

## Throws

if `skill.yaml` or `SKILL.md` is missing or
empty, or if the manifest fails validation.
