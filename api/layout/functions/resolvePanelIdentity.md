---
url: 'https://sqlrooms.org/api/layout/functions/resolvePanelIdentity.md'
---
[@sqlrooms/layout](../index.md) / resolvePanelIdentity

# Function: resolvePanelIdentity()

> **resolvePanelIdentity**(`node`): [`PanelIdentityResult`](../type-aliases/PanelIdentityResult.md)

Resolves the panel identity from a layout node.

For all object nodes (panel, dock, split, tabs):

* If panel exists (string): returns the string as panelId
* If panel exists (object): returns key as panelId and meta
* If panel is missing: returns null (nothing to render)

For string node keys, returns the key as panelId.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | [`LayoutNode`](../type-aliases/LayoutNode.md) |

## Returns

[`PanelIdentityResult`](../type-aliases/PanelIdentityResult.md)
