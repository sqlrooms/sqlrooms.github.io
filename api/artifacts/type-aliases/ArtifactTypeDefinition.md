---
url: 'https://sqlrooms.org/api/artifacts/type-aliases/ArtifactTypeDefinition.md'
---
[@sqlrooms/artifacts](../index.md) / ArtifactTypeDefinition

# Type Alias: ArtifactTypeDefinition\<TRoomState>

> **ArtifactTypeDefinition**<`TRoomState`> = `object`

Runtime definition for one artifact type.

Artifact type definitions are app configuration, not persisted room state.
They connect durable artifact metadata to UI presentation, panel rendering,
and artifact-specific backing state such as notebook cells, canvas documents,
dashboards, or generated apps.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRoomState` *extends* `BaseRoomStoreState` | `BaseRoomStoreState` |

## Properties

### label

> **label**: `string`

Human-readable type label used in create menus and fallback titles.

***

### defaultTitle?

> `optional` **defaultTitle?**: `string`

Default title assigned when `createArtifact` or `ensureArtifact` omits one.

***

### icon?

> `optional` **icon?**: `ComponentType`<{ `className?`: `string`; }>

Icon shown in artifact tabs, menus, and search results.

***

### component?

> `optional` **component?**: `RoomPanelComponent`

Layout panel component used when this artifact is opened as a tab.

***

### canCreate?

> `optional` **canCreate?**: `boolean`

Whether users and commands may create new artifacts of this type.

Defaults to `true`. Set to `false` for read-only renderers such as
compatibility placeholders for disabled or unavailable feature modules.

***

### onCreate?

> `optional` **onCreate?**: (`context`) => `void`

Runs after `createArtifact` creates a brand-new artifact registry entry.

Use this for first-time setup, such as creating the matching dashboard,
canvas, notebook, or pivot state. The artifact already exists in the
artifacts registry when this hook runs.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`ArtifactLifecycleContext`](ArtifactLifecycleContext.md)<`TRoomState`> |

#### Returns

`void`

***

### onEnsure?

> `optional` **onEnsure?**: (`context`) => `void`

Runs after `ensureArtifact` has reconciled an artifact registry entry.

This hook must be idempotent. It may run for an existing artifact, during
layout/tab synchronization, or while repairing persisted state. Use it to
ensure backing state exists and matches the artifact metadata without
resetting user content or applying one-time creation defaults repeatedly.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`ArtifactLifecycleContext`](ArtifactLifecycleContext.md)<`TRoomState`> |

#### Returns

`void`

***

### onRename?

> `optional` **onRename?**: (`context`) => `void`

Runs after `renameArtifact` changes an artifact title.

Use this to mirror the new title into artifact-specific persisted state.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`ArtifactRenameLifecycleContext`](ArtifactRenameLifecycleContext.md)<`TRoomState`> |

#### Returns

`void`

***

### onClose?

> `optional` **onClose?**: (`context`) => `void`

Runs when an artifact tab is closed or when the artifact is deleted.

Close is non-destructive: the artifact registry entry and persisted backing
state remain. Use this hook for transient cleanup such as evicting runtime
caches, retained chart instances, or temporary selections.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`ArtifactLifecycleContext`](ArtifactLifecycleContext.md)<`TRoomState`> |

#### Returns

`void`

***

### onDelete?

> `optional` **onDelete?**: (`context`) => `void`

Runs when `deleteArtifact` permanently removes an artifact.

Use this to delete artifact-specific persisted state. `deleteArtifact` also
runs `onClose` before `onDelete`, so this hook does not need to repeat
transient runtime cleanup already handled by `onClose`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`ArtifactLifecycleContext`](ArtifactLifecycleContext.md)<`TRoomState`> |

#### Returns

`void`
