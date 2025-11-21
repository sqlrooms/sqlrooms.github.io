---
url: /api/canvas/functions/createCanvasSlice.md
---
[@sqlrooms/canvas](../index.md) / createCanvasSlice

# Function: createCanvasSlice()

> **createCanvasSlice**(`props`): `StateCreator`<[`CanvasSliceState`](../type-aliases/CanvasSliceState.md)>

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | { `config`: `Partial`<{ `viewport`: { `x`: `number`; `y`: `number`; `zoom`: `number`; }; `nodes`: `object`\[]; `edges`: `object`\[]; }>; `ai`: `Partial`<`AiSliceOptions`>; } |
| `props.config`? | `Partial`<{ `viewport`: { `x`: `number`; `y`: `number`; `zoom`: `number`; }; `nodes`: `object`\[]; `edges`: `object`\[]; }> |
| `props.ai`? | `Partial`<`AiSliceOptions`> |

## Returns

`StateCreator`<[`CanvasSliceState`](../type-aliases/CanvasSliceState.md)>
