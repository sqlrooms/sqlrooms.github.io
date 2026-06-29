---
url: 'https://sqlrooms.org/api/ai/interfaces/SkillRecord.md'
---
[@sqlrooms/ai](../index.md) / SkillRecord

# Interface: SkillRecord

The full record for a single skill: its ref, parsed manifest, instructions
body, and any additional files (icons, references, etc.).

Invariant: `extraFiles` never contains `skill.yaml` or `SKILL.md` — those
are already represented by `manifest` and `instructions`. Storing them
twice would invite drift on round-trip.

## Properties

### ref

> **ref**: [`SkillRef`](SkillRef.md)

***

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

### extraFiles

> **extraFiles**: [`SkillFile`](SkillFile.md)\[]
