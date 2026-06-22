---
url: 'https://sqlrooms.org/api/utils/functions/isMacOS.md'
---
[@sqlrooms/utils](../index.md) / isMacOS

# Function: isMacOS()

> **isMacOS**(): `boolean`

Detects whether the current browser platform is macOS.

Uses User-Agent Client Hints when available and falls back to the legacy
navigator platform string. Returns false outside browser environments.

## Returns

`boolean`

True when the current platform appears to be macOS.
