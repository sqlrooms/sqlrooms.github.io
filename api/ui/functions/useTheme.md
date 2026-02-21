---
url: /api/ui/functions/useTheme.md
---
[@sqlrooms/ui](../index.md) / useTheme

# Function: useTheme()

> **useTheme**(): `ThemeProviderState`

Hook to access the current theme and theme setter function.
Must be used within a ThemeProvider component.

## Returns

`ThemeProviderState`

Object containing current theme and setTheme function

## Examples

```tsx
import { Button } from '@sqlrooms/ui';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </Button>
  );
}
```

```tsx
import { ThemeSwitch } from '@sqlrooms/ui';

function AppHeader() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="ml-auto">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
```

## Throws

If used outside of a ThemeProvider
