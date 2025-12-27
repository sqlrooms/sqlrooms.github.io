---
url: /api/ui/functions/ThemeProvider.md
---
[@sqlrooms/ui](../index.md) / ThemeProvider

# Function: ThemeProvider()

> **ThemeProvider**(`__namedParameters`): `Element`

ThemeProvider component that manages and provides theme context to its children.
Handles system theme detection and persistence of theme preference.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `ThemeProviderProps` |

## Returns

`Element`

## Example

```tsx
// Basic usage with default settings
function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}

// Custom default theme and storage key
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="my-app-theme">
      <YourApp />
    </ThemeProvider>
  );
}
```
