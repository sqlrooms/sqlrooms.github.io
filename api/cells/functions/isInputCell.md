---
url: 'https://sqlrooms.org/api/cells/functions/isInputCell.md'
---
[@sqlrooms/cells](../index.md) / isInputCell

# Function: isInputCell()

> **isInputCell**(`cell`): cell is { id: string; type: "input"; data: { title: string; input: { kind: "text"; varName: string; value: string } | { kind: "slider"; varName: string; min: number; max: number; step: number; value: number } | { kind: "dropdown"; varName: string; options: string\[]; value: string } } }

## Parameters

| Parameter | Type |
| ------ | ------ |
| `cell` | [`Cell`](../type-aliases/Cell.md) |

## Returns

cell is { id: string; type: "input"; data: { title: string; input: { kind: "text"; varName: string; value: string } | { kind: "slider"; varName: string; min: number; max: number; step: number; value: number } | { kind: "dropdown"; varName: string; options: string\[]; value: string } } }
