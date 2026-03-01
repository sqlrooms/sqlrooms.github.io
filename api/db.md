---
url: 'https://sqlrooms.org/api/db.md'
---
# @sqlrooms/db

DuckDB-centered orchestration layer for SQLRooms multi-database execution.

## Purpose

* Keep DuckDB as the core runtime for SQL execution DAG semantics.
* Register and route connector execution for external engines.
* Aggregate connector catalogs/schemas into one explorer view.
* Materialize non-DuckDB results into core DuckDB with a configurable policy.

## Notes

* This package is intentionally additive and keeps `@sqlrooms/duckdb` APIs intact.
* Default materialization strategy is strict ephemeral attached database mode.

## Interfaces

* [BaseDuckDbConnectorOptions](interfaces/BaseDuckDbConnectorOptions.md)
* [BaseDuckDbConnectorImpl](interfaces/BaseDuckDbConnectorImpl.md)
* [QueryOptions](interfaces/QueryOptions.md)
* [DuckDbConnector](interfaces/DuckDbConnector.md)
* [TypedRowAccessor](interfaces/TypedRowAccessor.md)

## Type Aliases

* [RuntimeSupport](type-aliases/RuntimeSupport.md)
* [RuntimeSupport](type-aliases/RuntimeSupport-1.md)
* [DbEngineId](type-aliases/DbEngineId.md)
* [DbEngineId](type-aliases/DbEngineId-1.md)
* [CoreMaterializationStrategy](type-aliases/CoreMaterializationStrategy.md)
* [CoreMaterializationStrategy](type-aliases/CoreMaterializationStrategy-1.md)
* [CoreMaterializationConfig](type-aliases/CoreMaterializationConfig.md)
* [CoreMaterializationConfig](type-aliases/CoreMaterializationConfig-1.md)
* [DbConnection](type-aliases/DbConnection.md)
* [DbConnection](type-aliases/DbConnection-1.md)
* [CatalogDatabase](type-aliases/CatalogDatabase.md)
* [CatalogSchema](type-aliases/CatalogSchema.md)
* [CatalogTable](type-aliases/CatalogTable.md)
* [CatalogColumn](type-aliases/CatalogColumn.md)
* [CatalogTableDetails](type-aliases/CatalogTableDetails.md)
* [DbConnectorCapabilities](type-aliases/DbConnectorCapabilities.md)
* [DbConnector](type-aliases/DbConnector.md)
* [DbBridge](type-aliases/DbBridge.md)
* [QueryExecutionRequest](type-aliases/QueryExecutionRequest.md)
* [QueryExecutionResult](type-aliases/QueryExecutionResult.md)
* [CatalogEntry](type-aliases/CatalogEntry.md)
* [DbSliceConfig](type-aliases/DbSliceConfig.md)
* [DbSliceState](type-aliases/DbSliceState.md)
* [DbRootState](type-aliases/DbRootState.md)
* [QueryHandle](type-aliases/QueryHandle.md)
* [QualifiedTableName](type-aliases/QualifiedTableName.md)
* [SeparatedStatements](type-aliases/SeparatedStatements.md)
* [ColumnTypeCategory](type-aliases/ColumnTypeCategory.md)
* [DbSchemaNode](type-aliases/DbSchemaNode.md)
* [NodeObject](type-aliases/NodeObject.md)
* [ColumnNodeObject](type-aliases/ColumnNodeObject.md)
* [TableNodeObject](type-aliases/TableNodeObject.md)
* [SchemaNodeObject](type-aliases/SchemaNodeObject.md)
* [DatabaseNodeObject](type-aliases/DatabaseNodeObject.md)
* [TableColumn](type-aliases/TableColumn.md)
* [DataTable](type-aliases/DataTable.md)

## Variables

* [escapeVal](variables/escapeVal.md)
* [escapeId](variables/escapeId.md)
* [isNumericDuckType](variables/isNumericDuckType.md)
* [getSqlErrorWithPointer](variables/getSqlErrorWithPointer.md)

## Functions

* [createDbSlice](functions/createDbSlice.md)
* [useStoreWithDb](functions/useStoreWithDb.md)
* [createHttpDbBridge](functions/createHttpDbBridge.md)
* [createCoreDuckDbConnection](functions/createCoreDuckDbConnection.md)
* [isCoreDuckDbConnection](functions/isCoreDuckDbConnection.md)
* [getCoreDuckDbConnectionId](functions/getCoreDuckDbConnectionId.md)
* [useSql](functions/useSql.md)
* [createBaseDuckDbConnector](functions/createBaseDuckDbConnector.md)
* [arrowTableToJson](functions/arrowTableToJson.md)
* [isQualifiedTableName](functions/isQualifiedTableName.md)
* [makeQualifiedTableName](functions/makeQualifiedTableName.md)
* [getColValAsNumber](functions/getColValAsNumber.md)
* [splitSqlStatements](functions/splitSqlStatements.md)
* [sanitizeQuery](functions/sanitizeQuery.md)
* [makeLimitQuery](functions/makeLimitQuery.md)
* [separateLastStatement](functions/separateLastStatement.md)
* [joinStatements](functions/joinStatements.md)
* [load](functions/load.md)
* [loadCSV](functions/loadCSV.md)
* [loadJSON](functions/loadJSON.md)
* [loadParquet](functions/loadParquet.md)
* [loadSpatial](functions/loadSpatial.md)
* [loadObjects](functions/loadObjects.md)
* [sqlFrom](functions/sqlFrom.md)
* [literalToSQL](functions/literalToSQL.md)
* [createDbSchemaTrees](functions/createDbSchemaTrees.md)
* [getDuckDbTypeCategory](functions/getDuckDbTypeCategory.md)
* [getArrowColumnTypeCategory](functions/getArrowColumnTypeCategory.md)
* [createTypedRowAccessor](functions/createTypedRowAccessor.md)
