---
url: /api/ai-core/functions/SessionControls.md
---
[@sqlrooms/ai-core](../index.md) / SessionControls

# Function: SessionControls()

> **SessionControls**(`props`): `ReactNode` | `Promise`<`ReactNode`>

Main component for managing AI sessions.
Uses TabStrip for session management with dropdown for switching sessions.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | { `className`: `string`; `children`: `ReactNode`; } |
| `props.className`? | `string` |
| `props.children`? | `ReactNode` |

## Returns

`ReactNode` | `Promise`<`ReactNode`>

## Example

```tsx
<SessionControls className="p-4 border-b">
  <Button>Custom Button</Button>
</SessionControls>
```
