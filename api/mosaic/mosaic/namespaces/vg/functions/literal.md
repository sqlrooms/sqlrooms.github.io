---
url: /api/mosaic/mosaic/namespaces/vg/functions/literal.md
---
[@sqlrooms/mosaic](../../../../index.md) / [vg](../index.md) / literal

# Function: literal()

> **literal**(`value`): `LiteralNode`

Return a SQL AST node for a literal value. The supported types are
null, string, number, boolean, Date, and RegExp. Otherwise, the
input value will be directly coerced to a string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The literal value. |

## Returns

`LiteralNode`
