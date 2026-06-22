---
url: 'https://sqlrooms.org/api/ai/interfaces/SkillWriteContent.md'
---
[@sqlrooms/ai](../index.md) / SkillWriteContent

# Interface: SkillWriteContent

Content payload passed to `writeSkill`. The manifest is the structured
form; `extraFiles` is for auxiliary files (icons, references, etc.) that
live alongside `skill.yaml` and `SKILL.md`.

## Properties

### manifest

> **manifest**: `object`

| Name | Type |
| ------ | ------ |
| `id` | `string` |
| `version` | `string` |
| `name` | `string` |
| `description` | `string` |
| `author?` | `string` |
| `icon?` | `string` |

***

### instructions

> **instructions**: `string`

***

### extraFiles?

> `optional` **extraFiles?**: [`SkillFile`](SkillFile.md)\[]
