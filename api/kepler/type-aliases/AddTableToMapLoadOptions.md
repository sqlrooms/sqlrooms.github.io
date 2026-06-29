---
url: 'https://sqlrooms.org/api/kepler/type-aliases/AddTableToMapLoadOptions.md'
---
[@sqlrooms/kepler](../index.md) / AddTableToMapLoadOptions

# Type Alias: AddTableToMapLoadOptions

> **AddTableToMapLoadOptions** = `object`

## Properties

### datasetId?

> `optional` **datasetId?**: `string`

Load the table under an explicit Kepler dataset id.

Normal callers should omit this so the table-selection policy decides the
id. Restore uses it to satisfy already-saved layer/filter dataIds.
