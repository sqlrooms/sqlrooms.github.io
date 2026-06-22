---
url: 'https://sqlrooms.org/api/mosaic/type-aliases/MosaicDashboardAddPanelAction.md'
---
[@sqlrooms/mosaic](../index.md) / MosaicDashboardAddPanelAction

# Type Alias: MosaicDashboardAddPanelAction

> **MosaicDashboardAddPanelAction** = `object`

## Properties

### type

> **type**: `string`

***

### label

> **label**: `string`

***

### icon?

> `optional` **icon?**: `ComponentType`<{ `className?`: `string`; }>

***

### isEnabled?

> `optional` **isEnabled?**: (`context`) => `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`MosaicDashboardAddPanelActionContext`](MosaicDashboardAddPanelActionContext.md) |

#### Returns

`boolean`

***

### createPanel

> **createPanel**: (`context`) => [`MosaicDashboardPanelConfig`](MosaicDashboardPanelConfig.md) | `undefined`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`MosaicDashboardAddPanelActionContext`](MosaicDashboardAddPanelActionContext.md) |

#### Returns

[`MosaicDashboardPanelConfig`](MosaicDashboardPanelConfig.md) | `undefined`
