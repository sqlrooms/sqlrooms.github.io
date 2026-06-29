---
url: 'https://sqlrooms.org/api/layout/type-aliases/LayoutSliceState.md'
---
[@sqlrooms/layout](../index.md) / LayoutSliceState

# Type Alias: LayoutSliceState

> **LayoutSliceState** = `object`

## Properties

### layout

> **layout**: `object`

| Name | Type | Description |
| ------ | ------ | ------ |
| `initialize()?` | () => `Promise`<`void`> | - |
| `destroy()?` | () => `Promise`<`void`> | - |
| `config` | [`LayoutSliceConfig`](LayoutSliceConfig.md) | - |
| `panels` | [`Panels`](Panels.md) | - |
| `setConfig()` | (`layout`) => | - |
| `setLayout()` | (`layout`) => | - |
| `togglePanel()` | (`panel`, `show?`) => `void` | **Deprecated** Use setActiveTab / addTab / removeTab instead |
| `togglePanelPin()` | (`panel`) => `void` | **Deprecated** |
| `setActiveTab()` | (`tabsId`, `tabId`) => `void` | Set the active (visible) tab in a tabs node |
| `addTab()` | (`tabsId`, `tabIdOrNode`) => `void` | Add a tab to a tabs node |
| `removeTab()` | (`tabsId`, `tabId`) => `void` | Remove (close/hide) a tab from a tabs node |
| `deleteTab()` | (`tabsId`, `tabId`) => `void` | Permanently delete a tab from a tabs node |
| `reorderTabs()` | (`tabsId`, `tabIds`) => `void` | Reorder visible tabs within a tabs node |
| `setCollapsed()` | (`id`, `collapsed`) => `void` | Collapse or expand a collapsible node |
| `toggleCollapsed()` | (`id`) => `void` | Toggle collapse state of a collapsible node |
| `getTabs()` | (`tabsId`) => `string`\[] | Get the list of all tab IDs in a tabs node (both visible and hidden) |
| `getVisibleTabs()` | (`tabsId`) => `string`\[] | Get the list of visible tab IDs in a tabs node |
| `getHiddenTabs()` | (`tabsId`) => `string`\[] | Get the list of hidden tab IDs in a tabs node |
| `getActiveTab()` | (`tabsId`) => `string` | `undefined` | Get the active tab ID in a tabs node |
| `isCollapsed()` | (`id`) => `boolean` | Check if a node is currently collapsed |
| `registerPanel()` | (`panelId`, `info`) => `void` | Register a panel dynamically (adds to panels registry) |
| `unregisterPanel()` | (`panelId`) => `void` | Unregister a dynamically added panel |
| `addChildToSplit()` | (`splitId`, `panelId`) => `void` | Add a panel as a child of a named split node |
| `findAncestorOfType()` | (`nodeId`, `type`) => [`LayoutTabsNode`](LayoutTabsNode.md) | [`LayoutSplitNode`](LayoutSplitNode.md) | [`LayoutGridNode`](LayoutGridNode.md) | `undefined` | Find the nearest ancestor of a given type for a node |
