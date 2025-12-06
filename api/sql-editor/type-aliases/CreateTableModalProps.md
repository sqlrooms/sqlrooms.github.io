---
url: /api/sql-editor/type-aliases/CreateTableModalProps.md
---
[@sqlrooms/sql-editor](../index.md) / CreateTableModalProps

# Type Alias: CreateTableModalProps

> **CreateTableModalProps**: `object`

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `query` | `string` | - |
|  `isOpen` | `boolean` | - |
|  `onClose` | () => `void` | - |
|  `editDataSource`? | `SqlQueryDataSource` | - |
|  `allowMultipleStatements`? | `boolean` | Allow multiple statements in the query. When true, preceding statements will be executed before the final SELECT is wrapped in CREATE TABLE/VIEW. |
|  `showSchemaSelection`? | `boolean` | Show schema/database selection UI. **Default** `false` |
|  `onAddOrUpdateSqlQuery`? | (`tableName`, `query`, `oldTableName`?) => `Promise`<`void`> | **Deprecated** Use createTableFromQuery directly instead. When not provided, the modal will call createTableFromQuery directly. |
|  `className`? | `string` | Additional class name for the dialog content. |
|  `initialValues`? | `CreateTableFormInitialValues` | Initial values for the form fields. |
