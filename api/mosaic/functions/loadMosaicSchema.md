---
url: 'https://sqlrooms.org/api/mosaic/functions/loadMosaicSchema.md'
---
[@sqlrooms/mosaic](../index.md) / loadMosaicSchema

# Function: loadMosaicSchema()

> **loadMosaicSchema**(): `Promise`<`object` | `null`>

Lazily loads the Mosaic JSON schema for editor validation.
The schema is fetched from the UW IDL CDN and cached.

## Returns

`Promise`<`object` | `null`>

Promise that resolves to the Mosaic JSON schema, or null if loading failed
