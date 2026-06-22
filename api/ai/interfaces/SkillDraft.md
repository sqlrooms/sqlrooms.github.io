---
url: 'https://sqlrooms.org/api/ai/interfaces/SkillDraft.md'
---
[@sqlrooms/ai](../index.md) / SkillDraft

# Interface: SkillDraft

The serializable half of the draft — the parts the agent's tools fill in.
`id` and `version` are deliberately omitted: the host derives them at save
time (id from the name via slug + collision resolution; version defaulted).

## Extended by

* [`SkillDraftState`](SkillDraftState.md)

## Properties

### name

> **name**: `string`

***

### description

> **description**: `string`

***

### author?

> `optional` **author?**: `string`

***

### instructions

> **instructions**: `string`
