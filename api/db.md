---
url: https://sqlrooms.org/api/db.md
---
# @sqlrooms/db

DuckDB-centered orchestration for SQLRooms multi-database execution.

Most applications receive this slice through `createRoomShellSlice()`. Use
`createDbSlice()` directly when building a custom room store or connector host.

## Purpose

* Keep DuckDB as the core runtime for SQL execution DAG semantics.
* Register and route connector execution for external engines.
* Aggregate connector catalogs/schemas into one explorer view.
* Materialize non-DuckDB results into core DuckDB with a configurable policy.

## Basic setup

```ts
import {createDbSlice} from '@sqlrooms/db';
import {createBaseRoomSlice, createRoomStore} from '@sqlrooms/room-store';

const {roomStore} = createRoomStore((set, get, store) => ({
  ...createBaseRoomSlice()(set, get, store),
  ...createDbSlice()(set, get, store),
}));

await roomStore.getState().db.initialize();

const result = await roomStore.getState().db.connectors.runQuery({
  sql: 'select 42 as answer',
  queryType: 'arrow',
});
```

The core DuckDB connection is registered automatically. Existing DuckDB APIs,
including `useSql()` and `useDataTable()`, are re-exported from this package.

## Add an external connection

A direct connector runs in the current JavaScript runtime. A bridge delegates
execution to a server when a driver cannot run in the browser.

```ts
import {createHttpDbBridge} from '@sqlrooms/db';

const {db} = roomStore.getState();

db.connectors.registerBridge(createHttpDbBridge({id: 'server', baseUrl: '/'}));
db.connectors.registerConnection({
  id: 'warehouse',
  engineId: 'postgres',
  title: 'Warehouse',
  runtimeSupport: 'server',
  requiresBridge: true,
  bridgeId: 'server',
});

const result = await db.connectors.runQuery({
  connectionId: 'warehouse',
  sql: 'select * from orders',
  queryType: 'arrow',
  materialize: true,
  materializedName: 'orders',
});
```

Arrow results from external connections are materialized into core DuckDB by
default, allowing downstream SQLRooms features to query them through one local
execution graph. Set `materialize: false` when the caller will consume the
returned Arrow table directly.

Use `registerConnector(connectionId, connector)` instead of a bridge when the
connector implements `DbConnector` in the current runtime.

## Notes

* This package is intentionally additive and keeps `@sqlrooms/duckdb` APIs intact.
* Default materialization strategy is strict ephemeral attached database mode.
* `@sqlrooms/db/bridge` and `@sqlrooms/db/connectors/duckdb` are supported
  focused entry points for hosts that do not need the complete root export.

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
* [TableIdentity](/api/db/type-aliases/TableIdentity.md)
* [FullTableIdentity](/api/db/type-aliases/FullTableIdentity.md)
* [RawSqlTableReference](/api/db/type-aliases/RawSqlTableReference.md)
* [ResolveTableReferenceResult](/api/db/type-aliases/ResolveTableReferenceResult.md)
* [SplitSqlStatementsOptions](/api/db/type-aliases/SplitSqlStatementsOptions.md)
* [SeparatedStatements](/api/db/type-aliases/SeparatedStatements.md)
* [ColumnTypeCategory](/api/db/type-aliases/ColumnTypeCategory.md)
* [ColumnTypeLike](/api/db/type-aliases/ColumnTypeLike.md)
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
* [getTableIdentity](/api/db/functions/getTableIdentity.md)
* [getFullTableIdentity](/api/db/functions/getFullTableIdentity.md)
* [parseQualifiedSqlIdentifier](/api/db/functions/parseQualifiedSqlIdentifier.md)
* [parseTableIdentity](/api/db/functions/parseTableIdentity.md)
* [parseFullTableIdentity](/api/db/functions/parseFullTableIdentity.md)
* [parseTableIdentityToQualifiedName](/api/db/functions/parseTableIdentityToQualifiedName.md)
* [getUnqualifiedSqlIdentifier](/api/db/functions/getUnqualifiedSqlIdentifier.md)
* [getRawSqlTableReference](/api/db/functions/getRawSqlTableReference.md)
* [quoteParsedRawSqlTableReference](/api/db/functions/quoteParsedRawSqlTableReference.md)
* [~~quoteTableReference~~](/api/db/functions/quoteTableReference.md)
* [getTableDisplayName](/api/db/functions/getTableDisplayName.md)
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
* [getColumnTypeCategory](/api/db/functions/getColumnTypeCategory.md)
* [isColumnNumeric](/api/db/functions/isColumnNumeric.md)
* [isColumnTemporal](/api/db/functions/isColumnTemporal.md)
* [isColumnQuantitative](/api/db/functions/isColumnQuantitative.md)
* [isColumnCategorical](/api/db/functions/isColumnCategorical.md)
* [columnTypeCategoryToSelectorType](/api/db/functions/columnTypeCategoryToSelectorType.md)
* [createTypedRowAccessor](/api/db/functions/createTypedRowAccessor.md)
