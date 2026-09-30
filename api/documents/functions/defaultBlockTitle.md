---
url: https://sqlrooms.org/api/documents/functions/defaultBlockTitle.md
---
[@sqlrooms/documents](../index.md) / defaultBlockTitle

# Function: defaultBlockTitle()

> **defaultBlockTitle**(`blockType`, `options?`): `string`

Returns a display title for a block type, preferring a non-empty explicit
title and then a host-provided block-type label.

Unknown types are title-cased, and an empty block type falls back to "Block".

## Parameters

| Parameter | Type |
| ------ | ------ |
| `blockType` | `string` |
| `options` | `DefaultBlockTitleOptions` |

## Returns

`string`
