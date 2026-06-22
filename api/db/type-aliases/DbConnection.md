---
url: 'https://sqlrooms.org/api/db/type-aliases/DbConnection.md'
---
[@sqlrooms/db](../index.md) / DbConnection

# Type Alias: DbConnection

> **DbConnection** = `object`

Declarative connection metadata used by the orchestration layer.

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `id` | `string` | - |
|  `engineId` | `string` | - |
|  `title` | `string` | - |
|  `runtimeSupport` | `"browser"` | `"server"` | `"both"` | - |
|  `requiresBridge` | `boolean` | - |
|  `bridgeId?` | `string` | - |
|  `isCore` | `boolean` | - |
|  `config?` | `Record`<`string`, `string`> | Engine-specific configuration (e.g. dsn, account, warehouse). |
