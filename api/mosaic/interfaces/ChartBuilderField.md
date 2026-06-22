---
url: 'https://sqlrooms.org/api/mosaic/interfaces/ChartBuilderField.md'
---
[@sqlrooms/mosaic](../index.md) / ChartBuilderField

# Interface: ChartBuilderField

Describes a field selector in a chart builder UI

## Properties

### key

> **key**: `string`

Unique key for this field

***

### label

> **label**: `string`

Display label

***

### required?

> `optional` **required?**: `boolean`

Whether the field is required

***

### types?

> `optional` **types?**: `string`\[]

Filter columns by DuckDB type (e.g. 'INTEGER', 'VARCHAR', 'DOUBLE')

***

### description?

> `optional` **description?**: `string`

Optional helper text for AI or custom UIs

***

### multiple?

> `optional` **multiple?**: `boolean`

Whether this field accepts multiple values (array)
