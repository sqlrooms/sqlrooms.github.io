---
url: 'https://sqlrooms.org/api/cells/functions/initializeInput.md'
---
[@sqlrooms/cells](../index.md) / initializeInput

# Function: initializeInput()

> **initializeInput**(`type`, `oldInput`): { `kind`: `"text"`; `varName`: `string`; `value`: `string`; } | { `kind`: `"slider"`; `varName`: `string`; `min`: `number`; `max`: `number`; `step`: `number`; `value`: `number`; } | { `kind`: `"dropdown"`; `varName`: `string`; `options`: `string`\[]; `value`: `string`; }

## Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `"text"` | `"slider"` | `"dropdown"` |
| `oldInput` | { `kind`: `"text"`; `varName`: `string`; `value`: `string`; } | { `kind`: `"slider"`; `varName`: `string`; `min`: `number`; `max`: `number`; `step`: `number`; `value`: `number`; } | { `kind`: `"dropdown"`; `varName`: `string`; `options`: `string`\[]; `value`: `string`; } |

## Returns

{ `kind`: `"text"`; `varName`: `string`; `value`: `string`; } | { `kind`: `"slider"`; `varName`: `string`; `min`: `number`; `max`: `number`; `step`: `number`; `value`: `number`; } | { `kind`: `"dropdown"`; `varName`: `string`; `options`: `string`\[]; `value`: `string`; }
