---
url: /api/ui/functions/ThemeSwitch.md
---
[@sqlrooms/ui](../index.md) / ThemeSwitch

# Function: ThemeSwitch()

> **ThemeSwitch**(`props`): `ReactNode` | `Promise`<`ReactNode`>

A theme toggle switch component that allows users to switch between light and dark themes.

This component provides a visually appealing switch with sun/moon icons that animate smoothly
during theme transitions. It integrates with the theme context to manage theme state.

Features:

* Smooth icon animations
* Accessible keyboard navigation
* Focus and hover states
* Customizable via className prop

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | { `className`: `string`; } | - |
| `props.className`? | `string` | Optional CSS class name for styling the switch container |

## Returns

`ReactNode` | `Promise`<`ReactNode`>

## Component

## Example

```tsx
// Basic usage
<ThemeSwitch />

// With custom styling
<ThemeSwitch className="my-custom-class" />

// Within a theme provider
import { ThemeProvider } from '../theme/theme-provider';

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitch />
    </ThemeProvider>
  );
}
```
