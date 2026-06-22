---
url: 'https://sqlrooms.org/api/ai/functions/createSkillDraftStore.md'
---
[@sqlrooms/ai](../index.md) / createSkillDraftStore

# Function: createSkillDraftStore()

> **createSkillDraftStore**(): [`SkillDraftStore`](../type-aliases/SkillDraftStore.md)

Create a fresh per-session draft store. The authoring wizard is ephemeral:
each dialog open calls this factory, and the store is discarded on close.
Exporting a singleton hook would leak draft state across sessions and is
deliberately avoided.

## Returns

[`SkillDraftStore`](../type-aliases/SkillDraftStore.md)
