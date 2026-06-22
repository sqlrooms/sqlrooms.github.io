---
url: 'https://sqlrooms.org/api/canvas/functions/createCanvasSlice.md'
---
[@sqlrooms/canvas](../index.md) / createCanvasSlice

# Function: createCanvasSlice()

> **createCanvasSlice**(`props?`): `StateCreator`<[`CanvasSliceState`](../type-aliases/CanvasSliceState.md)>

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | { `config?`: `Partial`<{ `artifacts`: `Record`<`string`, { `id`: `string`; `nodes`: `Record`<`string`, { `id`: `string`; `position`: { `x`: `number`; `y`: `number`; }; `width`: `number`; `height`: `number`; `data`: `Record`<`string`, `any`>; }>; `meta`: { `viewport`: { `x`: `number`; `y`: `number`; `zoom`: `number`; }; `nodeOrder`: `string`\[]; }; }>; }>; } |
| `props.config?` | `Partial`<{ `artifacts`: `Record`<`string`, { `id`: `string`; `nodes`: `Record`<`string`, { `id`: `string`; `position`: { `x`: `number`; `y`: `number`; }; `width`: `number`; `height`: `number`; `data`: `Record`<`string`, `any`>; }>; `meta`: { `viewport`: { `x`: `number`; `y`: `number`; `zoom`: `number`; }; `nodeOrder`: `string`\[]; }; }>; }> |

## Returns

`StateCreator`<[`CanvasSliceState`](../type-aliases/CanvasSliceState.md)>
