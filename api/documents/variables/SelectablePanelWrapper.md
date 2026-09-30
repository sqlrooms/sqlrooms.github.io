---
url: https://sqlrooms.org/api/documents/variables/SelectablePanelWrapper.md
---
[@sqlrooms/documents](../index.md) / SelectablePanelWrapper

# Variable: SelectablePanelWrapper

> `const` **SelectablePanelWrapper**: `FC`<[`SelectablePanelWrapperProps`](../type-aliases/SelectablePanelWrapperProps.md)>

Wrapper component that makes a block/panel selectable.

Features:

* Visual outline when selected
* Click to select
* Click propagation prevention

## Example

```tsx
<SelectablePanelWrapper
  dashboardId={dashboardId}
  panelId={panel.id}
  panelType="vgplot"
  blockType="dashboard-panel"
>
  <ChartPanel />
</SelectablePanelWrapper>
```
