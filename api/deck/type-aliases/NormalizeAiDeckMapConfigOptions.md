---
url: https://sqlrooms.org/api/deck/type-aliases/NormalizeAiDeckMapConfigOptions.md
---
[@sqlrooms/deck](../index.md) / NormalizeAiDeckMapConfigOptions

# Type Alias: NormalizeAiDeckMapConfigOptions

> **NormalizeAiDeckMapConfigOptions** = `object`

Idempotent AI map-config repairs (scheme casing, sizes, bindings, fit inject).
Invalid shapes stay for [getDeckMapResourceConfigIssues](../functions/getDeckMapResourceConfigIssues.md) / agent retry.

## Properties

### stripCatalogNames?

> `optional` **stripCatalogNames?**: readonly `string`\[]

Host-injected catalogs to strip; omit for none — deck does not hardcode any.
