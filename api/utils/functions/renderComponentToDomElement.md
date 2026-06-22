---
url: 'https://sqlrooms.org/api/utils/functions/renderComponentToDomElement.md'
---
[@sqlrooms/utils](../index.md) / renderComponentToDomElement

# Function: renderComponentToDomElement()

> **renderComponentToDomElement**<`P`>(`Component`, `props`): `object`

Renders a React component to a DOM element with cleanup support
Returns an object with the rendered DOM node and a destroy callback.
The destroy callback must be called to unmount the React root and prevent memory leaks.

## Type Parameters

| Type Parameter |
| ------ |
| `P` *extends* `object` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `Component` | `ComponentType`<`P`> |
| `props` | `P` |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `dom` | `HTMLDivElement` |
| `destroy()` | () => `void` |
