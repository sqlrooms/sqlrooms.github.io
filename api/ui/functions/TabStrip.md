---
url: /api/ui/functions/TabStrip.md
---
[@sqlrooms/ui](../index.md) / TabStrip

# Function: TabStrip()

> **TabStrip**(`__namedParameters`): `Element`

A composable tab strip component with search dropdown and tab management.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`TabStripProps`](../interfaces/TabStripProps.md) |

## Returns

`Element`

## Examples

```ts
// Default layout
<TabStrip
  tabs={tabs}
  openTabs={openTabs}
  onClose={closeTab}
  onOpen={openTab}
  onCreate={createTab}
/>
```

```ts
// Custom layout with subcomponents
<TabStrip tabs={tabs} openTabs={openTabs} onClose={closeTab}>
  <TabStrip.Tabs className="flex-1" />
  <TabStrip.SearchDropdown />
  <TabStrip.NewButton />
</TabStrip>
```
