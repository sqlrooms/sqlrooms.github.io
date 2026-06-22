---
url: 'https://sqlrooms.org/api/mosaic/variables/MOSAIC_DASHBOARD_PANEL.md'
---
[@sqlrooms/mosaic](../index.md) / MOSAIC\_DASHBOARD\_PANEL

# Variable: MOSAIC\_DASHBOARD\_PANEL

> `const` **MOSAIC\_DASHBOARD\_PANEL**: `"mosaic-dashboard-panel"` = `'mosaic-dashboard-panel'`

Panel key used for function-form panel definitions registered by
`MosaicDashboardPanels`. Individual dashboard panels are represented as
`LayoutPanelNode` entries whose `panel` property carries
`{ key: MOSAIC_DASHBOARD_PANEL, meta: { dashboardId, panelId } }`.
