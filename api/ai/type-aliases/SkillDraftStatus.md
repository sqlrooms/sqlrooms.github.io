---
url: 'https://sqlrooms.org/api/ai/type-aliases/SkillDraftStatus.md'
---
[@sqlrooms/ai](../index.md) / SkillDraftStatus

# Type Alias: SkillDraftStatus

> **SkillDraftStatus** = `"idle"` | `"saving"` | `"saved"` | `"error"`

Save status lifecycle. Transitions: `'idle' → 'saving' → 'saved' | 'error'`.
A retry from `'error'` is `'error' → 'saving' → ...`.
