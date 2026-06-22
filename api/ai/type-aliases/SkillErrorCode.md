---
url: 'https://sqlrooms.org/api/ai/type-aliases/SkillErrorCode.md'
---
[@sqlrooms/ai](../index.md) / SkillErrorCode

# Type Alias: SkillErrorCode

> **SkillErrorCode** = `"INVALID_MANIFEST"` | `"NOT_FOUND"` | `"ROOT_READONLY"` | `"ID_CONFLICT"`

Structured error types for the skills subsystem. All errors are
serializable across process boundaries (plain JSON properties, no
circular refs) so that host IPC layers can ferry them verbatim.
