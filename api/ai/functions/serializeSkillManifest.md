---
url: 'https://sqlrooms.org/api/ai/functions/serializeSkillManifest.md'
---
[@sqlrooms/ai](../index.md) / serializeSkillManifest

# Function: serializeSkillManifest()

> **serializeSkillManifest**(`manifest`): `string`

Serialize a manifest to YAML with a stable field order so that round-trips
produce diff-friendly output.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `manifest` | { `id`: `string`; `version`: `string`; `name`: `string`; `description`: `string`; `author?`: `string`; `icon?`: `string`; } |
| `manifest.id` | `string` |
| `manifest.version` | `string` |
| `manifest.name` | `string` |
| `manifest.description` | `string` |
| `manifest.author?` | `string` |
| `manifest.icon?` | `string` |

## Returns

`string`
