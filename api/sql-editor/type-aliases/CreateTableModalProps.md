---
url: /api/sql-editor/type-aliases/CreateTableModalProps.md
---
[@sqlrooms/sql-editor](../index.md) / CreateTableModalProps

# Type Alias: CreateTableModalProps

> **CreateTableModalProps**: `object`

## Type declaration

| Name | Type |
| ------ | ------ |
|  `query` | `string` |
|  `isOpen` | `boolean` |
|  `onClose` | () => `void` |
|  `editDataSource`? | `SqlQueryDataSource` |
|  `onAddOrUpdateSqlQuery` | (`tableName`, `query`, `oldTableName`?) => `Promise`<`void`> |
