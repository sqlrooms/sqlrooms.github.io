---
url: 'https://sqlrooms.org/api/sql-editor/interfaces/TableStructurePanelProps.md'
---
[@sqlrooms/sql-editor](../index.md) / TableStructurePanelProps

# ~~Interface: TableStructurePanelProps~~

## Deprecated

Use `SchemaExplorer` instead.

## Properties

### ~~className?~~

> `optional` **className?**: `string`

***

### ~~schema?~~

> `optional` **schema?**: `string` | ((`name`) => `boolean`)

The database schema to use. Defaults to '*'.
If '*' is provided, all tables will be shown.
If a function is provided, it will be used to filter the tables.
