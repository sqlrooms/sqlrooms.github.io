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

* [BaseDuckDbConnectorOptions](/api/db/interfaces/BaseDuckDbConnectorOptions.md)
* [BaseDuckDbConnectorImpl](/api/db/interfaces/BaseDuckDbConnectorImpl.md)
* [QueryOptions](/api/db/interfaces/QueryOptions.md)
* [DuckDbConnector](/api/db/interfaces/DuckDbConnector.md)
* [TypedRowAccessor](/api/db/interfaces/TypedRowAccessor.md)

## Type Aliases

* [CreateDbSliceProps](/api/db/type-aliases/CreateDbSliceProps.md)
* [RuntimeSupport](/api/db/type-aliases/RuntimeSupport.md)
* [DbEngineId](/api/db/type-aliases/DbEngineId.md)
* [CoreMaterializationStrategy](/api/db/type-aliases/CoreMaterializationStrategy.md)
* [CoreMaterializationStrategy](/api/db/type-aliases/CoreMaterializationStrategy-1.md)
* [CoreMaterializationConfig](/api/db/type-aliases/CoreMaterializationConfig.md)
* [CoreMaterializationConfig](/api/db/type-aliases/CoreMaterializationConfig-1.md)
* [DbConnection](/api/db/type-aliases/DbConnection.md)
* [CatalogDatabase](/api/db/type-aliases/CatalogDatabase.md)
* [CatalogSchema](/api/db/type-aliases/CatalogSchema.md)
* [CatalogTable](/api/db/type-aliases/CatalogTable.md)
* [CatalogColumn](/api/db/type-aliases/CatalogColumn.md)
* [CatalogTableDetails](/api/db/type-aliases/CatalogTableDetails.md)
* [DbConnectorCapabilities](/api/db/type-aliases/DbConnectorCapabilities.md)
* [DbConnector](/api/db/type-aliases/DbConnector.md)
* [DbBridge](/api/db/type-aliases/DbBridge.md)
* [QueryExecutionRequest](/api/db/type-aliases/QueryExecutionRequest.md)
* [QueryExecutionResult](/api/db/type-aliases/QueryExecutionResult.md)
* [CatalogEntry](/api/db/type-aliases/CatalogEntry.md)
* [DbSliceConfig](/api/db/type-aliases/DbSliceConfig.md)
* [DbSliceState](/api/db/type-aliases/DbSliceState.md)
* [DbRootState](/api/db/type-aliases/DbRootState.md)
* [QueryHandle](/api/db/type-aliases/QueryHandle.md)
* [FunctionSuggestion](/api/db/type-aliases/FunctionSuggestion.md)
* [GroupedFunctionSuggestion](/api/db/type-aliases/GroupedFunctionSuggestion.md)
* [QualifiedTableName](/api/db/type-aliases/QualifiedTableName.md)
* [ResolveTableReferenceResult](/api/db/type-aliases/ResolveTableReferenceResult.md)
* [SeparatedStatements](/api/db/type-aliases/SeparatedStatements.md)
* [ColumnTypeCategory](/api/db/type-aliases/ColumnTypeCategory.md)
* [DbSchemaNode](/api/db/type-aliases/DbSchemaNode.md)
* [NodeObject](/api/db/type-aliases/NodeObject.md)
* [ColumnNodeObject](/api/db/type-aliases/ColumnNodeObject.md)
* [TableNodeObject](/api/db/type-aliases/TableNodeObject.md)
* [SchemaNodeObject](/api/db/type-aliases/SchemaNodeObject.md)
* [DatabaseNodeObject](/api/db/type-aliases/DatabaseNodeObject.md)
* [SchemaWithTables](/api/db/type-aliases/SchemaWithTables.md)
* [TableColumn](/api/db/type-aliases/TableColumn.md)
* [DataTable](/api/db/type-aliases/DataTable.md)

## Variables

* [RuntimeSupport](/api/db/variables/RuntimeSupport.md)
* [DbEngineId](/api/db/variables/DbEngineId.md)
* [DbConnection](/api/db/variables/DbConnection.md)
* [escapeVal](/api/db/variables/escapeVal.md)
* [escapeId](/api/db/variables/escapeId.md)
* [isNumericDuckType](/api/db/variables/isNumericDuckType.md)
* [getSqlErrorWithPointer](/api/db/variables/getSqlErrorWithPointer.md)
* [getFunctionDocumentation](/api/db/variables/getFunctionDocumentation.md)
* [getFunctionSuggestions](/api/db/variables/getFunctionSuggestions.md)

## Functions

* [createDbSlice](/api/db/functions/createDbSlice.md)
* [useStoreWithDb](/api/db/functions/useStoreWithDb.md)
* [createHttpDbBridge](/api/db/functions/createHttpDbBridge.md)
* [createCoreDuckDbConnection](/api/db/functions/createCoreDuckDbConnection.md)
* [isCoreDuckDbConnection](/api/db/functions/isCoreDuckDbConnection.md)
* [getCoreDuckDbConnectionId](/api/db/functions/getCoreDuckDbConnectionId.md)
* [useDataTable](/api/db/functions/useDataTable.md)
* [useSql](/api/db/functions/useSql.md)
* [createBaseDuckDbConnector](/api/db/functions/createBaseDuckDbConnector.md)
* [arrowTableToJson](/api/db/functions/arrowTableToJson.md)
* [isQualifiedTableName](/api/db/functions/isQualifiedTableName.md)
* [makeQualifiedTableName](/api/db/functions/makeQualifiedTableName.md)
* [parseQualifiedSqlIdentifier](/api/db/functions/parseQualifiedSqlIdentifier.md)
* [getUnqualifiedSqlIdentifier](/api/db/functions/getUnqualifiedSqlIdentifier.md)
* [quoteTableReference](/api/db/functions/quoteTableReference.md)
* [resolveTableReference](/api/db/functions/resolveTableReference.md)
* [getColValAsNumber](/api/db/functions/getColValAsNumber.md)
* [splitSqlStatements](/api/db/functions/splitSqlStatements.md)
* [sanitizeQuery](/api/db/functions/sanitizeQuery.md)
* [makeLimitQuery](/api/db/functions/makeLimitQuery.md)
* [separateLastStatement](/api/db/functions/separateLastStatement.md)
* [joinStatements](/api/db/functions/joinStatements.md)
* [load](/api/db/functions/load.md)
* [loadCSV](/api/db/functions/loadCSV.md)
* [loadJSON](/api/db/functions/loadJSON.md)
* [loadParquet](/api/db/functions/loadParquet.md)
* [loadSpatial](/api/db/functions/loadSpatial.md)
* [loadObjects](/api/db/functions/loadObjects.md)
* [sqlFrom](/api/db/functions/sqlFrom.md)
* [literalToSQL](/api/db/functions/literalToSQL.md)
* [createDbSchemaTrees](/api/db/functions/createDbSchemaTrees.md)
* [~~getAllTablesFromSchemaTrees~~](/api/db/functions/getAllTablesFromSchemaTrees.md)
* [findTableInSchemaTrees](/api/db/functions/findTableInSchemaTrees.md)
* [getDuckDbTypeCategory](/api/db/functions/getDuckDbTypeCategory.md)
* [getArrowColumnTypeCategory](/api/db/functions/getArrowColumnTypeCategory.md)
* [createTypedRowAccessor](/api/db/functions/createTypedRowAccessor.md)
