---
url: /api/cosmos/type-aliases/HoverState.md
---
[@sqlrooms/cosmos](../index.md) / HoverState

# Type Alias: HoverState

> **HoverState**: { `index`: `number`; `position`: \[`number`, `number`]; } | `null`

Represents the state of a hovered point in the graph.
When a point is hovered, contains its index and position coordinates.
When no point is hovered, the state is null.

## Type declaration

{ `index`: `number`; `position`: \[`number`, `number`]; }

| Name | Type | Description |
| ------ | ------ | ------ |
| `index` | `number` | The index of the hovered point in the graph data array |
| `position` | \[`number`, `number`] | The \[x, y] coordinates of the hovered point relative to the container |

`null`
