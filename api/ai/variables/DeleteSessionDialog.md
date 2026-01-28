---
url: /api/ai/variables/DeleteSessionDialog.md
---
[@sqlrooms/ai](../index.md) / DeleteSessionDialog

# Variable: DeleteSessionDialog

> `const` **DeleteSessionDialog**: `React.FC`<`DeleteSessionDialogProps`>

Dialog component for confirming session deletion.
Displays a warning message and provides cancel/delete buttons.

## Example

```tsx
<DeleteSessionDialog
  isOpen={true}
  onClose={() => console.log("Dialog closed")}
  onDelete={() => console.log("Session deleted")}
/>
```
