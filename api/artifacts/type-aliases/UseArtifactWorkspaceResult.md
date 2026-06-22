---
url: 'https://sqlrooms.org/api/artifacts/type-aliases/UseArtifactWorkspaceResult.md'
---
[@sqlrooms/artifacts](../index.md) / UseArtifactWorkspaceResult

# Type Alias: UseArtifactWorkspaceResult

> **UseArtifactWorkspaceResult** = `object`

Tab-free artifact collection state and actions for one artifact surface.

## Properties

### artifactIds

> **artifactIds**: `string`\[]

***

### artifacts

> **artifacts**: [`ArtifactWorkspaceDescriptor`](ArtifactWorkspaceDescriptor.md)\[]

***

### selectedArtifactId?

> `optional` **selectedArtifactId?**: `string`

***

### selectedArtifact?

> `optional` **selectedArtifact?**: [`ArtifactMetadata`](ArtifactMetadata.md)

***

### artifactTypes

> **artifactTypes**: [`ArtifactTypeDefinitions`](ArtifactTypeDefinitions.md)<`any`>

***

### createArtifact

> **createArtifact**: (`type?`, `options?`) => `string` | `undefined`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type?` | `string` |
| `options?` | { `title?`: `string`; } |
| `options.title?` | `string` |

#### Returns

`string` | `undefined`

***

### deleteArtifact

> **deleteArtifact**: (`artifactId`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `artifactId` | `string` |

#### Returns

`void`

***

### renameArtifact

> **renameArtifact**: (`artifactId`, `title`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `artifactId` | `string` |
| `title` | `string` |

#### Returns

`void`

***

### selectArtifact

> **selectArtifact**: (`artifactId`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `artifactId` | `string` |

#### Returns

`void`
