---
url: 'https://sqlrooms.org/api/utils/functions/getCssColor.md'
---
[@sqlrooms/utils](../index.md) / getCssColor

# Function: getCssColor()

> **getCssColor**(`variableName`, `fallbackColor`): `string`

Safely gets a CSS variable and ensures it's in hex format

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `variableName` | `string` | CSS variable name (e.g. '--background') |
| `fallbackColor` | `string` | Fallback color if the variable isn't found |

## Returns

`string`

A color string in hex format
