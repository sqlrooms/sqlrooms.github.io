---
url: 'https://sqlrooms.org/api/mosaic/type-aliases/DatabaseAiAdapter.md'
---
[@sqlrooms/mosaic](../index.md) / DatabaseAiAdapter

# Type Alias: DatabaseAiAdapter

> **DatabaseAiAdapter** = `object`

Database-specific AI adapter interface.
Provides access to tables and database queries for AI tools.

## Properties

### getTables

> **getTables**: () => `DataTable`\[]

Get all available tables

#### Returns

`DataTable`\[]

## Methods

### findTable()

> **findTable**(`tableName`): `DataTable` | `undefined`

Find table by name, returns undefined if not found

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tableName` | `string` | `QualifiedTableName` |

#### Returns

`DataTable` | `undefined`
