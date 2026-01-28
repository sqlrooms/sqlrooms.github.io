---
url: /api/ui/interfaces/TabStripProps.md
---
[@sqlrooms/ui](../index.md) / TabStripProps

# Interface: TabStripProps

## Properties

### className?

> `optional` **className**: `string`

***

### tabsListClassName?

> `optional` **tabsListClassName**: `string`

***

### children?

> `optional` **children**: `ReactNode`

***

### tabs

> **tabs**: [`TabDescriptor`](TabDescriptor.md)\[]

All available tabs.

***

### openTabs?

> `optional` **openTabs**: `string`\[]

IDs of tabs that are currently open.

***

### selectedTabId?

> `optional` **selectedTabId**: `string` | `null`

ID of the currently selected tab.

***

### preventCloseLastTab?

> `optional` **preventCloseLastTab**: `boolean`

If true, hides the close button when only one tab remains open.

***

### onClose()?

> `optional` **onClose**: (`tabId`) => `void`

Called when a tab is closed (hidden, can be reopened).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tabId` | `string` |

#### Returns

`void`

***

### onOpenTabsChange()?

> `optional` **onOpenTabsChange**: (`tabIds`) => `void`

Called when the list of open tabs changes (open from dropdown or reorder).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tabIds` | `string`\[] |

#### Returns

`void`

***

### onSelect()?

> `optional` **onSelect**: (`tabId`) => `void`

Called when a tab is selected.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tabId` | `string` |

#### Returns

`void`

***

### onCreate()?

> `optional` **onCreate**: () => `void`

Called when a new tab should be created.

#### Returns

`void`

***

### onRename()?

> `optional` **onRename**: (`tabId`, `newName`) => `void`

Called when a tab is renamed inline.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tabId` | `string` |
| `newName` | `string` |

#### Returns

`void`

***

### renderTabMenu()?

> `optional` **renderTabMenu**: (`tab`) => `ReactNode`

Render function for the tab's dropdown menu. Use TabStrip.MenuItem and TabStrip.MenuSeparator.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tab` | [`TabDescriptor`](TabDescriptor.md) |

#### Returns

`ReactNode`

***

### renderSearchItemActions()?

> `optional` **renderSearchItemActions**: (`tab`) => `ReactNode`

Render function for search dropdown item actions. Use TabStrip.SearchItemAction.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tab` | [`TabDescriptor`](TabDescriptor.md) |

#### Returns

`ReactNode`

***

### renderTabLabel()?

> `optional` **renderTabLabel**: (`tab`) => `ReactNode`

Render function for custom tab content. Receives the tab and returns the content to display.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tab` | [`TabDescriptor`](TabDescriptor.md) |

#### Returns

`ReactNode`
