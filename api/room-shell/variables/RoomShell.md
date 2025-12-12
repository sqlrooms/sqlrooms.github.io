---
url: /api/room-shell/variables/RoomShell.md
---
[@sqlrooms/room-shell](../index.md) / RoomShell

# Variable: RoomShell

> `const` **RoomShell**: (`__namedParameters`) => `Element` & `object`

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Sidebar` | `FC`<`PropsWithChildren`<{ `className?`: `string`; }>> | `RoomSidebar` |
| `SidebarButton` | `FC`<{ `className?`: `string`; `title`: `string`; `isSelected`: `boolean`; `isDisabled?`: `boolean`; `icon`: `ComponentType`<{ `className?`: `string`; }>; `onClick`: () => `void`; }> | `SidebarButton` |
| `SidebarButtons` | `FC`<{ `className?`: `string`; }> | `RoomShellSidebarButtons` |
| `LayoutComposer` | `FC`<{ `className?`: `string`; `tileClassName?`: `string`; }> | `LayoutComposer` |
| `LoadingProgress` | `FC`<{ `className?`: `string`; }> | `LoadingProgress` |
