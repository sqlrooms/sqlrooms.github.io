---
url: 'https://sqlrooms.org/api/artifacts/type-aliases/ArtifactLifecycleContext.md'
---
[@sqlrooms/artifacts](../index.md) / ArtifactLifecycleContext

# Type Alias: ArtifactLifecycleContext\<TRoomState>

> **ArtifactLifecycleContext**<`TRoomState`> = `object`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRoomState` *extends* `BaseRoomStoreState` | `BaseRoomStoreState` |

## Properties

### artifactId

> **artifactId**: `string`

***

### artifact

> **artifact**: [`ArtifactMetadata`](ArtifactMetadata.md)

***

### store

> **store**: `StoreApi`<`TRoomState`>
