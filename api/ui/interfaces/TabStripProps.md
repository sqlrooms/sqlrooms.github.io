---
url: 'https://sqlrooms.org/api/ui/interfaces/TabStripProps.md'
---
[@sqlrooms/ui](../index.md) / TabStripProps

# Interface: TabStripProps

## Properties

### className?

> `optional` **className?**: `string`

***

### tabsListClassName?

> `optional` **tabsListClassName?**: `string`

***

### children?

> `optional` **children?**: `ReactNode`

***

### tabs

> **tabs**: [`TabDescriptor`](TabDescriptor.md)\[]

All available tabs.

***

### openTabs?

> `optional` **openTabs?**: `string`\[]

IDs of tabs that are currently open.

***

### selectedTabId?

> `optional` **selectedTabId?**: `string` | `null`

ID of the currently selected tab.

***

### preventCloseLastTab?

> `optional` **preventCloseLastTab?**: `boolean`

If true, hides the close button when only one tab remains open.

***

### closeable?

> `optional` **closeable?**: `boolean`

Whether tabs can be closed. Defaults to true.

***

### onClose?

> `optional` **onClose?**: (`tabId`) => `void`

Called when a tab is closed (hidden, can be reopened).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tabId` | `string` |

#### Returns

`void`

***

### onOpenTabsChange?

> `optional` **onOpenTabsChange?**: (`tabIds`) => `void`

Called when the list of open tabs changes (open from dropdown or reorder).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tabIds` | `string`\[] |

#### Returns

`void`

***

### onSelect?

> `optional` **onSelect?**: (`tabId`) => `void`

Called when a tab is selected.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tabId` | `string` |

#### Returns

`void`

***

### onActivate?

> `optional` **onActivate?**: (`tabId`) => `void`

Called when a tab trigger is clicked, including the already-selected tab.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tabId` | `string` |

#### Returns

`void`

***

### onCreate?

> `optional` **onCreate?**: () => `void`

Called when a new tab should be created.

#### Returns

`void`

***

### onRename?

> `optional` **onRename?**: (`tabId`, `newName`) => `void`

Called when a tab is renamed inline.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tabId` | `string` |
| `newName` | `string` |

#### Returns

`void`

***

### renderTabMenu?

> `optional` **renderTabMenu?**: (`tab`) => `ReactNode`

Render function for the tab's dropdown menu. Use TabStrip.MenuItem and TabStrip.MenuSeparator.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tab` | [`TabDescriptor`](TabDescriptor.md) |

#### Returns

`ReactNode`

***

### renderSearchItemActions?

> `optional` **renderSearchItemActions?**: (`tab`) => `ReactNode`

Render function for search dropdown item actions. Use TabStrip.SearchItemAction.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tab` | [`TabDescriptor`](TabDescriptor.md) |

#### Returns

`ReactNode`

***

### renderSearchItemLabel?

> `optional` **renderSearchItemLabel?**: (`tab`) => `ReactNode`

Render function for custom search dropdown item labels.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tab` | [`TabDescriptor`](TabDescriptor.md) |

#### Returns

`ReactNode`

***

### renderTabLabel?

> `optional` **renderTabLabel?**: (`tab`) => `ReactNode`

Render function for custom tab content. Receives the tab and returns the content to display.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tab` | [`TabDescriptor`](TabDescriptor.md) |

#### Returns

`ReactNode`

***

### fontSize?

> `optional` **fontSize?**: `FontSize`<`string` | `number`>

Font size applied to tab labels, inline editing, and TabStrip subcomponents.

***

### dndMode?

> `optional` **dndMode?**: [`TabStripDndMode`](../type-aliases/TabStripDndMode.md)

Whether this tab strip owns its dnd context or participates in a shared parent context.

***

### dndScopeId?

> `optional` **dndScopeId?**: `string`

Unique scope for shared dnd tab ids. Defaults to a generated component id.

***

### getTabDragData?

> `optional` **getTabDragData?**: (`tab`) => [`TabStripDragData`](../type-aliases/TabStripDragData.md) | `undefined`

Extra drag payload attached to tab drags; may intentionally override `kind`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tab` | [`TabDescriptor`](TabDescriptor.md) |

#### Returns

[`TabStripDragData`](../type-aliases/TabStripDragData.md) | `undefined`
