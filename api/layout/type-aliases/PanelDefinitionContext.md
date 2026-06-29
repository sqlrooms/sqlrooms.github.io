---
url: 'https://sqlrooms.org/api/layout/type-aliases/PanelDefinitionContext.md'
---
[@sqlrooms/layout](../index.md) / PanelDefinitionContext

# Type Alias: PanelDefinitionContext

> **PanelDefinitionContext** = `object`

Context passed to function-form panel definitions.

`panelId` is the direct panel key from the node's `panel` property.
`meta` is the optional metadata object from `panel: { key, meta }`.
`layoutNode` is only available at render time — non-render callers
(command palette, sidebar buttons, etc.) pass `undefined`.

## Properties

### panelId

> **panelId**: `string`

***

### meta?

> `optional` **meta?**: `Record`<`string`, `unknown`>

***

### layoutNode?

> `optional` **layoutNode?**: [`LayoutNodeContextValue`](LayoutNodeContextValue.md)

The current layout node context, available only at render time.
