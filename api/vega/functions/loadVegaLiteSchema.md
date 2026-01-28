---
url: /api/vega/functions/loadVegaLiteSchema.md
---
[@sqlrooms/vega](../index.md) / loadVegaLiteSchema

# Function: loadVegaLiteSchema()

> **loadVegaLiteSchema**(): `Promise`<`object` | `null`>

Lazily loads the Vega-Lite JSON schema for Monaco editor validation.
The schema is fetched from the Vega GitHub Pages CDN and cached.

## Returns

`Promise`<`object` | `null`>

Promise that resolves to the Vega-Lite JSON schema, or null if loading failed
