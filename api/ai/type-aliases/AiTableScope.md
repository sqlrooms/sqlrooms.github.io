---
url: 'https://sqlrooms.org/api/ai/type-aliases/AiTableScope.md'
---
[@sqlrooms/ai](../index.md) / AiTableScope

# Type Alias: AiTableScope

> **AiTableScope** = `"main"` | `"current_database"` | `"all"`

Table visibility scope used when selecting the catalog slice to expose to AI.

`main` means the current database's `main` schema, `current_database` means
all schemas in the current database, and `all` means every visible table.
