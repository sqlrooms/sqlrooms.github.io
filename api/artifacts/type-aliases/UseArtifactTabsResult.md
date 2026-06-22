---
url: 'https://sqlrooms.org/api/artifacts/type-aliases/UseArtifactTabsResult.md'
---
[@sqlrooms/artifacts](../index.md) / UseArtifactTabsResult

# Type Alias: UseArtifactTabsResult

> **UseArtifactTabsResult** = `object`

## Properties

### tabsId?

> `optional` **tabsId?**: `string`

***

### tabs

> **tabs**: [`ArtifactTabDescriptor`](ArtifactTabDescriptor.md)\[]

***

### openTabs

> **openTabs**: `string`\[]

***

### selectedTabId?

> `optional` **selectedTabId?**: `string`

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

### openArtifact

> **openArtifact**: (`artifactId`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `artifactId` | `string` |

#### Returns

`void`

***

### closeArtifact

> **closeArtifact**: (`artifactId`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `artifactId` | `string` |

#### Returns

`void`

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

### reorderArtifacts

> **reorderArtifacts**: (`openArtifactIds`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `openArtifactIds` | `string`\[] |

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

***

### handleOpenTabsChange

> **handleOpenTabsChange**: (`openArtifactIds`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `openArtifactIds` | `string`\[] |

#### Returns

`void`
