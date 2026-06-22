---
url: 'https://sqlrooms.org/api/duckdb-core.md'
---
# @sqlrooms/duckdb-core

## Interfaces

* [BaseDuckDbConnectorOptions](/api/duckdb-core/interfaces/BaseDuckDbConnectorOptions.md)
* [BaseDuckDbConnectorImpl](/api/duckdb-core/interfaces/BaseDuckDbConnectorImpl.md)
* [QueryOptions](/api/duckdb-core/interfaces/QueryOptions.md)
* [DuckDbConnector](/api/duckdb-core/interfaces/DuckDbConnector.md)
* [TypedRowAccessor](/api/duckdb-core/interfaces/TypedRowAccessor.md)

## Type Aliases

* [QueryHandle](/api/duckdb-core/type-aliases/QueryHandle.md)
* [FunctionSuggestion](/api/duckdb-core/type-aliases/FunctionSuggestion.md)
* [GroupedFunctionSuggestion](/api/duckdb-core/type-aliases/GroupedFunctionSuggestion.md)
* [QualifiedTableName](/api/duckdb-core/type-aliases/QualifiedTableName.md)
* [ResolveTableReferenceResult](/api/duckdb-core/type-aliases/ResolveTableReferenceResult.md)
* [SeparatedStatements](/api/duckdb-core/type-aliases/SeparatedStatements.md)
* [ColumnTypeCategory](/api/duckdb-core/type-aliases/ColumnTypeCategory.md)
* [DbSchemaNode](/api/duckdb-core/type-aliases/DbSchemaNode.md)
* [NodeObject](/api/duckdb-core/type-aliases/NodeObject.md)
* [ColumnNodeObject](/api/duckdb-core/type-aliases/ColumnNodeObject.md)
* [TableNodeObject](/api/duckdb-core/type-aliases/TableNodeObject.md)
* [SchemaNodeObject](/api/duckdb-core/type-aliases/SchemaNodeObject.md)
* [DatabaseNodeObject](/api/duckdb-core/type-aliases/DatabaseNodeObject.md)
* [SchemaWithTables](/api/duckdb-core/type-aliases/SchemaWithTables.md)
* [TableColumn](/api/duckdb-core/type-aliases/TableColumn.md)
* [DataTable](/api/duckdb-core/type-aliases/DataTable.md)

## Functions

* [createBaseDuckDbConnector](/api/duckdb-core/functions/createBaseDuckDbConnector.md)
* [arrowTableToJson](/api/duckdb-core/functions/arrowTableToJson.md)
* [isQualifiedTableName](/api/duckdb-core/functions/isQualifiedTableName.md)
* [makeQualifiedTableName](/api/duckdb-core/functions/makeQualifiedTableName.md)
* [parseQualifiedSqlIdentifier](/api/duckdb-core/functions/parseQualifiedSqlIdentifier.md)
* [getUnqualifiedSqlIdentifier](/api/duckdb-core/functions/getUnqualifiedSqlIdentifier.md)
* [quoteTableReference](/api/duckdb-core/functions/quoteTableReference.md)
* [resolveTableReference](/api/duckdb-core/functions/resolveTableReference.md)
* [escapeVal](/api/duckdb-core/functions/escapeVal.md)
* [escapeId](/api/duckdb-core/functions/escapeId.md)
* [isNumericDuckType](/api/duckdb-core/functions/isNumericDuckType.md)
* [getColValAsNumber](/api/duckdb-core/functions/getColValAsNumber.md)
* [getSqlErrorWithPointer](/api/duckdb-core/functions/getSqlErrorWithPointer.md)
* [splitSqlStatements](/api/duckdb-core/functions/splitSqlStatements.md)
* [sanitizeQuery](/api/duckdb-core/functions/sanitizeQuery.md)
* [makeLimitQuery](/api/duckdb-core/functions/makeLimitQuery.md)
* [separateLastStatement](/api/duckdb-core/functions/separateLastStatement.md)
* [joinStatements](/api/duckdb-core/functions/joinStatements.md)
* [getFunctionDocumentation](/api/duckdb-core/functions/getFunctionDocumentation.md)
* [getFunctionSuggestions](/api/duckdb-core/functions/getFunctionSuggestions.md)
* [load](/api/duckdb-core/functions/load.md)
* [loadCSV](/api/duckdb-core/functions/loadCSV.md)
* [loadJSON](/api/duckdb-core/functions/loadJSON.md)
* [loadParquet](/api/duckdb-core/functions/loadParquet.md)
* [loadSpatial](/api/duckdb-core/functions/loadSpatial.md)
* [loadObjects](/api/duckdb-core/functions/loadObjects.md)
* [sqlFrom](/api/duckdb-core/functions/sqlFrom.md)
* [literalToSQL](/api/duckdb-core/functions/literalToSQL.md)
* [createDbSchemaTrees](/api/duckdb-core/functions/createDbSchemaTrees.md)
* [~~getAllTablesFromSchemaTrees~~](/api/duckdb-core/functions/getAllTablesFromSchemaTrees.md)
* [findTableInSchemaTrees](/api/duckdb-core/functions/findTableInSchemaTrees.md)
* [getDuckDbTypeCategory](/api/duckdb-core/functions/getDuckDbTypeCategory.md)
* [getArrowColumnTypeCategory](/api/duckdb-core/functions/getArrowColumnTypeCategory.md)
* [createTypedRowAccessor](/api/duckdb-core/functions/createTypedRowAccessor.md)
