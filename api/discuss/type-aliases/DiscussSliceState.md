---
url: /api/discuss/type-aliases/DiscussSliceState.md
---
[@sqlrooms/discuss](../index.md) / DiscussSliceState

# Type Alias: DiscussSliceState

> **DiscussSliceState** = `object`

## Properties

### discuss

> **discuss**: `object`

| Name | Type | Description |
| ------ | ------ | ------ |
| `userId` | `string` | - |
| `config` | [`DiscussSliceConfig`](DiscussSliceConfig.md) | - |
| `submitEdit()` | (`text`) => `void` | Submit content based on current UI state (add discussion, reply to discussion/comment, or edit). This automatically handles state management and is the preferred way to submit content. |
| `replyToItem` | `ReplyToItem` | `undefined` | Current discussion or comment being replied to. Used by the form to determine context when submitting. |
| `setReplyToItem()` | (`replyToItem`) => `void` | Sets the discussion or comment being replied to. Will clear editing state if set. |
| `editingItem` | `EditingItem` | `undefined` | Current discussion or comment being edited. Used by the form to determine context when submitting. |
| `setEditingItem()` | (`editingItem`) => `void` | Sets the discussion or comment being edited. Will clear replyTo state if set. |
| `itemToDelete` | `DeleteItem` | `undefined` | Item currently targeted for deletion. Used by the delete confirmation dialog. |
| `setItemToDelete()` | (`item`) => `void` | Sets the discussion or comment to be deleted. Should be used before showing the confirmation dialog. |
| `highlightedDiscussionId` | `string` | `undefined` | Currently highlighted discussion. Used to visually highlight a discussion in the UI. |
| `setHighlightedDiscussionId()` | (`discussionId`) => `void` | Sets the highlighted discussion. |
| `handleDeleteConfirm()` | () => `void` | Handles the confirmation of a delete operation. Should be called after the user confirms deletion in the UI. |
| `setConfig()` | (`config`) => `void` | Sets the config for the discuss slice. |
| `getReplyToUserId()` | () => `string` | Helper function to get the user ID of the entity being replied to. Returns '' if no reply context is set, or the user ID if a valid reply context exists. |
| `getEditingItemText()` | () => `string` | Helper function to get the text of the item being edited. Returns '' if no editing context is set, or the text content if a valid editing context exists. |
| `addDiscussion()` | (`text`, `anchorId?`) => `void` | - |
| `editDiscussion()` | (`id`, `text`) => `void` | - |
| `removeDiscussion()` | (`id`) => `void` | - |
| `addComment()` | (`discussionId`, `text`, `parentId?`) => `void` | - |
| `editComment()` | (`discussionId`, `commentId`, `text`) => `void` | - |
| `removeComment()` | (`discussionId`, `commentId`) => `void` | - |
