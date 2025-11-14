---
url: /api/ai-core/functions/SessionTitle.md
---
[@sqlrooms/ai-core](../index.md) / SessionTitle

# Function: SessionTitle()

> **SessionTitle**(`props`): `ReactNode` | `Promise`<`ReactNode`>

Component that displays the current session name as an editable text field.
Shows the model name if available and a placeholder if no session is selected.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `SessionTitleProps` |

## Returns

`ReactNode` | `Promise`<`ReactNode`>

## Example

```tsx
<SessionTitle className="my-custom-class" />
```
