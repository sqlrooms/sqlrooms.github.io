---
url: /api/ai/functions/DeleteSessionDialog.md
---
[@sqlrooms/ai](../index.md) / DeleteSessionDialog

# Function: DeleteSessionDialog()

> **DeleteSessionDialog**(`props`): `ReactNode` | `Promise`<`ReactNode`>

Dialog component for confirming session deletion.
Displays a warning message and provides cancel/delete buttons.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `DeleteSessionDialogProps` |

## Returns

`ReactNode` | `Promise`<`ReactNode`>

## Example

```tsx
<DeleteSessionDialog
  isOpen={true}
  onClose={() => console.log("Dialog closed")}
  onDelete={() => console.log("Session deleted")}
/>
```
