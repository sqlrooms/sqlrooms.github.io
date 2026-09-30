---
url: https://sqlrooms.org/api/artifacts/type-aliases/ArtifactsSliceConfig.md
---
[@sqlrooms/artifacts](../index.md) / ArtifactsSliceConfig

# Type Alias: ArtifactsSliceConfig

> **ArtifactsSliceConfig** = `object`

Serializable artifacts slice state: the artifacts and their ordering.

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `artifactsById` | `Record`<`string`, { `id`: `string`; `type`: `string`; `title`: `string`; }> | - |
|  `artifactOrder` | `string`\[] | - |
|  `pinnedArtifactIds` | `string`\[] | Artifact IDs pinned in workspace navigation. |
|  `currentArtifactId?` | `string` | - |
