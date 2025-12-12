---
url: /api/monaco-editor/functions/getCssColor.md
---
[@sqlrooms/monaco-editor](../index.md) / getCssColor

# Function: getCssColor()

> **getCssColor**(`variableName`, `fallbackColor`): `string`

Safely gets a CSS variable and ensures it's in a format Monaco can use

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `variableName` | `string` | CSS variable name (e.g. '--background') |
| `fallbackColor` | `string` | Fallback color if the variable isn't found |

## Returns

`string`

A color string in a format Monaco can use (typically hex)
