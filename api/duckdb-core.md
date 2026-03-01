---
url: 'https://sqlrooms.org/api/duckdb-core.md'
---
# @sqlrooms/duckdb-core

## Interfaces

* [BaseDuckDbConnectorOptions](interfaces/BaseDuckDbConnectorOptions.md)
* [BaseDuckDbConnectorImpl](interfaces/BaseDuckDbConnectorImpl.md)
* [QueryOptions](interfaces/QueryOptions.md)
* [DuckDbConnector](interfaces/DuckDbConnector.md)
* [TypedRowAccessor](interfaces/TypedRowAccessor.md)

## Type Aliases

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

## Functions

* [createBaseDuckDbConnector](functions/createBaseDuckDbConnector.md)
* [arrowTableToJson](functions/arrowTableToJson.md)
* [isQualifiedTableName](functions/isQualifiedTableName.md)
* [makeQualifiedTableName](functions/makeQualifiedTableName.md)
* [escapeVal](functions/escapeVal.md)
* [escapeId](functions/escapeId.md)
* [isNumericDuckType](functions/isNumericDuckType.md)
* [getColValAsNumber](functions/getColValAsNumber.md)
* [getSqlErrorWithPointer](functions/getSqlErrorWithPointer.md)
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
