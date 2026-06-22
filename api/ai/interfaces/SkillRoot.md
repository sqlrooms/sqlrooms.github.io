---
url: 'https://sqlrooms.org/api/ai/interfaces/SkillRoot.md'
---
[@sqlrooms/ai](../index.md) / SkillRoot

# Interface: SkillRoot

A logical storage root that groups skills. Hosts typically wire multiple
roots in priority order (e.g. installed > user > built-in).

## Properties

### id

> **id**: `string`

Stable identifier for this root (e.g. `"user"`, `"built-in"`).

***

### label

> **label**: `string`

Human-readable label suitable for UI surfaces.

***

### writable

> **writable**: `boolean`

Whether the root accepts writes. Read-only roots reject `writeSkill`.
