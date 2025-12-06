---
url: /api/monaco-editor/functions/ensureMonacoLoaderConfigured.md
---
[@sqlrooms/monaco-editor](../index.md) / ensureMonacoLoaderConfigured

# Function: ensureMonacoLoaderConfigured()

> **ensureMonacoLoaderConfigured**(): `Promise`<`void`>

**`Internal`**

Dynamically imports and configures Monaco for bundling (SSR-safe).

This is an advanced utility that most users don't need.
Use `configureMonacoLoader()` at app startup instead for better control.

This function:

* Only runs on the client side (checks typeof window)
* Dynamically imports monaco-editor to avoid SSR issues in Next.js
* Automatically configures the loader with the imported Monaco instance

When to use:

* You need Monaco bundled but can't call configureMonacoLoader at app startup
* You're working in an environment where top-level imports of monaco-editor fail

When NOT to use:

* For normal bundling, use `configureMonacoLoader()` at app startup
* For CDN loading, just use the component - no configuration needed

## Returns

`Promise`<`void`>
