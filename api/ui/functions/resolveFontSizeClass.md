---
url: /api/ui/functions/resolveFontSizeClass.md
---
[@sqlrooms/ui](../index.md) / resolveFontSizeClass

# Function: resolveFontSizeClass()

> **resolveFontSizeClass**(`token`): `string`

Resolves a font-size token or Tailwind class to a concrete Tailwind class.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | `string` | `undefined` | A bare token ("xs", "sm", …) or a full Tailwind class ("text-xs", "text-2xl", …) |

## Returns

`string`

A Tailwind text-size class string

## Example

```ts
resolveFontSizeClass('sm');         // "text-sm"
resolveFontSizeClass('text-4xl');   // "text-4xl"
resolveFontSizeClass(undefined);    // "text-xs"
```
