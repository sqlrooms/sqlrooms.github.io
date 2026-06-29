---
url: 'https://sqlrooms.org/api/kepler/type-aliases/AddTableToMapParams.md'
---
[@sqlrooms/kepler](../index.md) / AddTableToMapParams

# Type Alias: AddTableToMapParams

> **AddTableToMapParams** = `object`

## Properties

### mapId

> **mapId**: `string`

***

### tableName

> **tableName**: `string`

Table reference to load. This can also be an existing/saved Kepler dataset
id when the table-selection policy can resolve it back to a table.

***

### options?

> `optional` **options?**: `AddDataToMapPayload`\[`"options"`]

***

### config?

> `optional` **config?**: `AddDataToMapPayload`\[`"config"`]

***

### datasetId?

> `optional` **datasetId?**: `string`

Explicit Kepler dataset id to write into `datasets.info.id`.

Most callers should omit this so `tableSelection.getDatasetIdForTable`
controls new ids. Restore passes it to preserve saved layer/filter dataIds.
