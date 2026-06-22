---
url: 'https://sqlrooms.org/api/kepler/functions/createKeplerTheme.md'
---
[@sqlrooms/kepler](../index.md) / createKeplerTheme

# Function: createKeplerTheme()

> **createKeplerTheme**(`overrides?`): `DefaultTheme`

Create a custom Kepler theme by merging overrides into the base dark theme.
Use this to set modal z-indices, colors, or other theme values from the app level.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `overrides?` | [`KeplerThemeOverrides`](../type-aliases/KeplerThemeOverrides.md) |

## Returns

`DefaultTheme`

## Example

```ts
const myTheme = createKeplerTheme({ modalOverLayZ: 49 });
```
