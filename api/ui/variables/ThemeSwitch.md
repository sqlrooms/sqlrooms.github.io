---
url: /api/ui/variables/ThemeSwitch.md
---
[@sqlrooms/ui](../index.md) / ThemeSwitch

# Variable: ThemeSwitch

> `const` **ThemeSwitch**: `FC`<{ `className?`: `string`; }>

A theme toggle switch component that allows users to switch between light and dark themes.

This component provides a visually appealing switch with sun/moon icons that animate smoothly
during theme transitions. It integrates with the theme context to manage theme state.

Features:

* Smooth icon animations
* Accessible keyboard navigation
* Focus and hover states
* Customizable via className prop

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
