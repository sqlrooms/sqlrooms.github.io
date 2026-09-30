---
url: >-
  https://sqlrooms.org/api/app-runtime/type-aliases/CreateHtmlAppRevisionCommandsOptions.md
---
[@sqlrooms/app-runtime](../index.md) / CreateHtmlAppRevisionCommandsOptions

# Type Alias: CreateHtmlAppRevisionCommandsOptions\<TRoomState>

> **CreateHtmlAppRevisionCommandsOptions**<`TRoomState`> = `object`

## Type Parameters

| Type Parameter |
| ------ |
| `TRoomState` *extends* `BaseRoomStoreState` |

## Properties

### resolveCurrentAppId?

> `optional` **resolveCurrentAppId?**: (`state`, `context`) => `string` | `undefined`

Resolve the host-selected or invocation-scoped HTML app id, when any.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `TRoomState` |
| `context` | `RoomCommandExecutionContext`<`TRoomState`> |

#### Returns

`string` | `undefined`

***

### getHtmlAppIds

> **getHtmlAppIds**: (`state`) => `string`\[]

Return all HTML app ids known to the host.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `TRoomState` |

#### Returns

`string`\[]

***

### getHtmlAppState

> **getHtmlAppState**: (`state`, `appId`) => [`HtmlAppState`](HtmlAppState.md) | `undefined`

Return an HTML app by id.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `TRoomState` |
| `appId` | `string` |

#### Returns

[`HtmlAppState`](HtmlAppState.md) | `undefined`

***

### renameHtmlApp

> **renameHtmlApp**: (`state`, `appId`, `title`) => `void`

Rename an HTML app without committing source files.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `TRoomState` |
| `appId` | `string` |
| `title` | `string` |

#### Returns

`void`

***

### commitHtmlAppRevision

> **commitHtmlAppRevision**: (`state`, `appId`, `patch`, `metadata?`) => [`HtmlAppRevision`](HtmlAppRevision.md) | `undefined`

Commit a durable HTML app revision.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `TRoomState` |
| `appId` | `string` |
| `patch` | [`HtmlAppRevisionPatch`](HtmlAppRevisionPatch.md) |
| `metadata?` | [`CommitHtmlAppRevisionMetadata`](CommitHtmlAppRevisionMetadata.md) |

#### Returns

[`HtmlAppRevision`](HtmlAppRevision.md) | `undefined`

***

### restoreHtmlAppRevision

> **restoreHtmlAppRevision**: (`state`, `appId`, `revisionId`, `metadata?`) => [`HtmlAppRevision`](HtmlAppRevision.md) | `undefined`

Restore a durable HTML app revision by id.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `TRoomState` |
| `appId` | `string` |
| `revisionId` | `string` |
| `metadata?` | [`RestoreHtmlAppRevisionMetadata`](RestoreHtmlAppRevisionMetadata.md) |

#### Returns

[`HtmlAppRevision`](HtmlAppRevision.md) | `undefined`

***

### undoHtmlAppRevision

> **undoHtmlAppRevision**: (`state`, `appId`) => [`HtmlAppRevision`](HtmlAppRevision.md) | `undefined`

Move backward through HTML app revisions.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `TRoomState` |
| `appId` | `string` |

#### Returns

[`HtmlAppRevision`](HtmlAppRevision.md) | `undefined`

***

### redoHtmlAppRevision

> **redoHtmlAppRevision**: (`state`, `appId`) => [`HtmlAppRevision`](HtmlAppRevision.md) | `undefined`

Move forward through undone HTML app revisions.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `TRoomState` |
| `appId` | `string` |

#### Returns

[`HtmlAppRevision`](HtmlAppRevision.md) | `undefined`

***

### ambiguousTargetMessage?

> `optional` **ambiguousTargetMessage?**: `string`

Error message used when no app id can be chosen unambiguously.
