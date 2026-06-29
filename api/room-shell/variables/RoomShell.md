---
url: 'https://sqlrooms.org/api/room-shell/variables/RoomShell.md'
---
[@sqlrooms/room-shell](../index.md) / RoomShell

# Variable: RoomShell

> `const` **RoomShell**: (`__namedParameters`) => `Element` & `object`

## Type Declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `DndProvider` | `FC`<{ }> | `RoomDndProvider` | - |
| `Sidebar` | `FC`<`PropsWithChildren`<{ `className?`: `string`; }>> | `RoomSidebar` | **Deprecated** Use SidebarContainer instead |
| `SidebarContainer` | `FC`<`PropsWithChildren`<{ `className?`: `string`; }>> | `SidebarContainer` | - |
| `SidebarButton` | `FC`<{ `className?`: `string`; `title`: `string`; `isSelected`: `boolean`; `isDisabled?`: `boolean`; `icon`: `ComponentType`<{ `className?`: `string`; }>; `onClick`: () => `void`; }> | `SidebarButton` | - |
| `SidebarButtons` | `FC`<{ `className?`: `string`; }> | `RoomShellSidebarButtons` | - |
| `TabButtons` | `FC`<{ `tabsId?`: `string`; `className?`: `string`; }> | `TabButtons` | - |
| `AreaPanelButtons` | `FC`<{ `tabsId?`: `string`; `className?`: `string`; }> | `AreaPanelButtons` | **Deprecated** Use TabButtons instead |
| `LayoutComposer` | `FC`<{ `className?`: `string`; `onTabCreate?`: (`tabsId`) => `void`; }> | `LayoutComposer` | - |
| `LoadingProgress` | `FC`<{ `className?`: `string`; }> | `LoadingProgress` | - |
| `CommandPalette` | (`__namedParameters`) => `Element` & `object` | `RoomShellCommandPalette` | - |
