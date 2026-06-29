---
url: 'https://sqlrooms.org/api/ai/functions/parseSkillManifest.md'
---
[@sqlrooms/ai](../index.md) / parseSkillManifest

# Function: parseSkillManifest()

> **parseSkillManifest**(`yamlText`): `object`

Parse YAML text into a validated `SkillManifest`.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `yamlText` | `string` |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `id` | `string` |
| `version` | `string` |
| `name` | `string` |
| `description` | `string` |
| `author?` | `string` |
| `icon?` | `string` |

## Throws

if the YAML is malformed or the parsed value
fails schema validation.
