---
url: 'https://sqlrooms.org/api/ai-core/type-aliases/ToolRenderers.md'
---
[@sqlrooms/ai-core](../index.md) / ToolRenderers

# Type Alias: ToolRenderers\<TTools>

> **ToolRenderers**<`TTools`> = `{ [K in keyof TTools]?: ToolRenderer<TTools[K]> }`

Typed renderer map for a given `ToolSet`.
Keys constrained to tool names; values typed via `ToolRenderer<TTools[K]>`.

## Type Parameters

| Type Parameter |
| ------ |
| `TTools` *extends* `ToolSet` |
