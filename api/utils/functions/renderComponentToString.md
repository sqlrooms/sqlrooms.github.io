---
url: 'https://sqlrooms.org/api/utils/functions/renderComponentToString.md'
---
[@sqlrooms/utils](../index.md) / renderComponentToString

# Function: renderComponentToString()

> **renderComponentToString**<`P`>(`Component`, `props`): `string`

Renders a React component to an HTML string
The root is properly unmounted to prevent memory leaks.

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

`string`
