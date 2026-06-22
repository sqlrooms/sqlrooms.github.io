---
url: 'https://sqlrooms.org/api/cells/functions/resolveArtifactSchemaName.md'
---
[@sqlrooms/cells](../index.md) / resolveArtifactSchemaName

# Function: resolveArtifactSchemaName()

> **resolveArtifactSchemaName**(`artifact`): `string`

Resolves the schema name for an artifact runtime, falling back to a stable id-based name.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `artifact` | `Pick`<[`CellArtifactRuntime`](../type-aliases/CellArtifactRuntime.md), `"id"` | `"schemaName"`> |

## Returns

`string`
