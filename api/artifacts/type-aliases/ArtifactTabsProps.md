---
url: 'https://sqlrooms.org/api/artifacts/type-aliases/ArtifactTabsProps.md'
---
[@sqlrooms/artifacts](../index.md) / ArtifactTabsProps

# Type Alias: ArtifactTabsProps

> **ArtifactTabsProps** = `Omit`<`TabStripProps`, `"tabs"` | `"openTabs"` | `"selectedTabId"` | `"onOpenTabsChange"` | `"onSelect"` | `"onClose"` | `"onCreate"` | `"onRename"` | `"renderTabMenu"` | `"renderSearchItemActions"`> & [`UseArtifactTabsOptions`](UseArtifactTabsOptions.md) & `object`

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `renderTabMenu()?` | (`tab`, `actions`) => `React.ReactNode` | - |
| `renderSearchItemActions()?` | (`tab`, `actions`) => `React.ReactNode` | - |
| `onActivateArtifact()?` | (`artifactId`) => `void` | Called when an artifact tab is activated by the user, including clicks on the already-selected tab. Use this for transient UI that should dismiss whenever the user returns attention to an artifact tab. |
| `onSelectArtifact()?` | (`artifactId`) => `void` | Called when artifact selection changes through the tab strip. |
| `emptyContent?` | `React.ReactNode` | - |
| `content?` | `React.ReactNode` | - |
| `forceMountContent?` | `boolean` | Keep visible artifact tab panels mounted and hide inactive panels. Ignored when a custom `content` renderer is provided. |
| `overlay?` | `React.ReactNode` | ((`actions`) => `React.ReactNode`) | - |
