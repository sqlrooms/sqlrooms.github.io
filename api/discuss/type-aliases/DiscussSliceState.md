---
url: /api/discuss/type-aliases/DiscussSliceState.md
---
[@sqlrooms/discuss](../index.md) / DiscussSliceState

# Type Alias: DiscussSliceState

> **DiscussSliceState**: `object`

## Type declaration

| Name | Type |
| ------ | ------ |
|  `discuss` | { `userId`: `string`; `config`: [`DiscussSliceConfig`](DiscussSliceConfig.md); `submitEdit`: (`text`) => `void`; `replyToItem`: `ReplyToItem` | `undefined`; `setReplyToItem`: (`replyToItem`) => `void`; `editingItem`: `EditingItem` | `undefined`; `setEditingItem`: (`editingItem`) => `void`; `itemToDelete`: `DeleteItem` | `undefined`; `setItemToDelete`: (`item`) => `void`; `highlightedDiscussionId`: `string` | `undefined`; `setHighlightedDiscussionId`: (`discussionId`) => `void`; `handleDeleteConfirm`: () => `void`; `setConfig`: (`config`) => `void`; `getReplyToUserId`: () => `string`; `getEditingItemText`: () => `string`; `addDiscussion`: (`text`, `anchorId`?) => `void`; `editDiscussion`: (`id`, `text`) => `void`; `removeDiscussion`: (`id`) => `void`; `addComment`: (`discussionId`, `text`, `parentId`?) => `void`; `editComment`: (`discussionId`, `commentId`, `text`) => `void`; `removeComment`: (`discussionId`, `commentId`) => `void`; } |
