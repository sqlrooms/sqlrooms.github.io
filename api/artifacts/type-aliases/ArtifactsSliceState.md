---
url: 'https://sqlrooms.org/api/artifacts/type-aliases/ArtifactsSliceState.md'
---
[@sqlrooms/artifacts](../index.md) / ArtifactsSliceState

# Type Alias: ArtifactsSliceState

> **ArtifactsSliceState** = `object`

## Properties

### artifacts

> **artifacts**: `SliceFunctions` & `object`

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `config` | [`ArtifactsSliceConfig`](ArtifactsSliceConfig.md) |
| `artifactTypes` | [`ArtifactTypeDefinitions`](ArtifactTypeDefinitions.md)<`any`> |
| `setConfig()` | (`config`) => `void` |
| `createArtifact()` | (`artifact`) => `string` |
| `ensureArtifact()` | (`id`, `artifact`) => `void` |
| `renameArtifact()` | (`id`, `title`) => `void` |
| `closeArtifact()` | (`id`) => `void` |
| `deleteArtifact()` | (`id`) => `void` |
| `setCurrentArtifact()` | (`id?`) => `void` |
| `setArtifactOrder()` | (`artifactOrder`) => `void` |
| `getArtifact()` | (`id`) => [`ArtifactMetadata`](ArtifactMetadata.md) | `undefined` |
