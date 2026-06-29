---
url: 'https://sqlrooms.org/api/duckdb.md'
---
# @sqlrooms/duckdb

A powerful wrapper around DuckDB-WASM that provides React hooks and utilities for working with DuckDB in browser environments.

## Features

### React Integration & Type Safety

* **React Hooks**: Seamless integration with React applications via `useSql` and `useDataTable`
* **Runtime Validation**: Optional Zod schema validation for query results with type transformations
* **Typed Row Accessors**: Type-safe row access with validation and multiple iteration methods

### Data Management

* **File Operations**: Import data from various file formats (CSV, JSON, Parquet) with auto-detection
* **Arrow Integration**: Work directly with Apache Arrow tables for efficient columnar data processing
* **Schema Management**: Comprehensive database, schema, and table discovery and management
* **Qualified Table Names**: Full support for `database.schema.table` naming convention

### Performance & Operations

* **Query Deduplication**: Automatic deduplication of identical running queries to prevent duplicate execution
* **Query Cancellation**: Cancel running queries with full composability support via `QueryHandle` interface ([learn more](https://sqlrooms.org/query-cancellation))
* **Data Export**: Export query results to CSV files with pagination for large datasets
* **Batch Processing**: Handle large datasets efficiently with built-in pagination support

## Installation

```bash
npm install @sqlrooms/duckdb
```

## Basic Usage

### Using the SQL Hook

```tsx
import {useSql} from '@sqlrooms/duckdb';

function UserList() {
  // Basic usage with TypeScript types
  const {data, isLoading, error} = useSql<{id: number; name: string}>({
    query: 'SELECT id, name FROM users',
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  return (
    <ul>
      {Array.from(data.rows()).map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

For more information and examples on using the `useSql` hook, see the [useSql API documentation](/api/duckdb/functions/useSql).

### Monitoring WebSocket DuckDB Connections

`createWebSocketDuckDbConnector()` exposes the persistent WebSocket lifecycle
through `connectionStatus`, `subscribeConnectionStatus()`, and the optional
`onConnectionStatusChange` callback. Use this for live UI affordances such as
lost-connection dialogs. Call `reconnect()` to reopen the socket and rerun the
connector initialization SQL without destroying the connector instance.

```tsx
import {createWebSocketDuckDbConnector} from '@sqlrooms/duckdb';

const connector = createWebSocketDuckDbConnector({
  wsUrl: 'ws://localhost:4000',
  onConnectionStatusChange: (status) => {
    console.log('DuckDB WebSocket status:', status);
  },
});

const unsubscribe = connector.subscribeConnectionStatus((status) => {
  if (status === 'disconnected') {
    console.warn('DuckDB WebSocket disconnected');
  }
});

await connector.reconnect();
```

### Looking up Table Metadata

Use `useDataTable()` in React components or `db.findTable()` from the room
store. String references are parsed like SQL identifiers, so use quotes for
literal dots in table names.

```tsx
import {useDataTable} from '@sqlrooms/duckdb';

function TableColumns() {
  const table = useDataTable('"memory"."main"."earthquakes"');

  return (
    <ul>
      {table?.columns.map((column) => (
        <li key={column.name}>{column.name}</li>
      ))}
    </ul>
  );
}
```

### Using Zod for Runtime Validation

```tsx
import {useSql} from '@sqlrooms/duckdb';
import {z} from 'zod';

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  created_at: z.string().transform((str) => new Date(str)),
});

function ValidatedUserList() {
  const {data, isLoading, error} = useSql(userSchema, {
    query: 'SELECT id, name, email, created_at FROM users',
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    if (error instanceof z.ZodError) {
      return <div>Validation Error: {error.errors[0].message}</div>;
    }
    return <div>Error: {error.message}</div>;
  }
  if (!data) return null;

  return (
    <ul>
      {data.toArray().map((user) => (
        <li key={user.id}>
          {user.name} ({user.email}) - Joined:{' '}
          {user.created_at.toLocaleDateString()}
        </li>
      ))}
    </ul>
  );
}
```

### Accessing the Underlying Arrow Table and Schema

You can access the underlying Arrow table and schema of a `useSql()` query result. This is especially useful if you want to pass the data to a library that expect an Apache Arrow Table as input without additional data transformation:

```tsx
import {useSql} from '@sqlrooms/duckdb';

function ArrowTableSchemaExample() {
  const {data, isLoading, error} = useSql({
    query: 'SELECT id, name FROM users',
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || !data.arrowTable) return null;

  const {arrowTable} = data;
  const fields = arrowTable.schema.fields;
  const numRows = arrowTable.numRows;

  return (
    <table>
      <thead>
        <tr>
          {fields.map((field) => (
            <th key={field.name}>{field.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({length: numRows}).map((_, rowIdx) => (
          <tr key={rowIdx}>
            {fields.map((field, colIdx) => (
              <td key={field.name}>
                {String(arrowTable.getChildAt(colIdx)?.get(rowIdx) ?? '')}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

## Working with Tables

### Using the Store for Direct Database Operations

```tsx
import {useRoomStore} from './store';
import {Button} from '@sqlrooms/ui';

function DatabaseManager() {
  const createTableFromQuery = useRoomStore(
    (state) => state.db.createTableFromQuery,
  );
  const addTable = useRoomStore((state) => state.db.addTable);
  const dropTable = useRoomStore((state) => state.db.dropTable);
  const tables = useRoomStore((state) => state.db.tables);
  const refreshTableSchemas = useRoomStore(
    (state) => state.db.refreshTableSchemas,
  );

  // Create a table from a query
  const handleCreateTable = async () => {
    const result = await createTableFromQuery(
      'filtered_users',
      'SELECT * FROM users WHERE active = true',
    );
    console.log(`Created table with ${result.rowCount} rows`);
  };

  // Add a table from JavaScript objects
  const handleAddTable = async () => {
    const users = [
      {id: 1, name: 'Alice', email: 'alice@example.com'},
      {id: 2, name: 'Bob', email: 'bob@example.com'},
    ];
    await addTable('new_users', users);
  };

  // Drop a table
  const handleDropTable = async () => {
    await dropTable('old_table');
  };

  return (
    <div>
      <Button onClick={handleCreateTable}>Create Filtered Users Table</Button>
      <Button onClick={handleAddTable}>Add New Users Table</Button>
      <Button onClick={handleDropTable}>Drop Old Table</Button>
      <Button onClick={refreshTableSchemas}>Refresh Schemas</Button>

      <h3>Available Tables:</h3>
      <ul>
        {tables.map((table) => (
          <li key={table.table.toString()}>
            {table.table.toString()} ({table.columns.length} columns)
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Working with Qualified Table Names

```tsx
import {quoteTableReference, resolveTableReference} from '@sqlrooms/duckdb';
import {useRoomStore} from './store';
import {Button} from '@sqlrooms/ui';

function QualifiedTableOps() {
  const qualifyTableName = useRoomStore((state) => state.db.qualifyTableName);
  const createTableFromQuery = useRoomStore(
    (state) => state.db.createTableFromQuery,
  );
  const dropTable = useRoomStore((state) => state.db.dropTable);
  const checkTableExists = useRoomStore((state) => state.db.checkTableExists);

  const run = async () => {
    // Store-aware qualification knows which database is the default.
    const qualifiedTable = qualifyTableName({
      database: 'mydb',
      schema: 'public',
      table: 'users',
    });
    // toString() is the canonical portable table ID; toFullString() includes
    // the database when explicit catalog qualification is needed.
    const tableSql = quoteTableReference(qualifiedTable.toString());
    const resolved = resolveTableReference([{table: qualifiedTable}], 'users');

    await createTableFromQuery(qualifiedTable, 'SELECT * FROM source_table');
    console.log('Quoted table reference:', tableSql);
    console.log('Fully qualified reference:', qualifiedTable.toFullString());
    console.log('Resolved table:', resolved.table?.table.toString());
    const tableExists = await checkTableExists(qualifiedTable);
    console.log('Table exists after create:', tableExists);
    await dropTable(qualifiedTable);
  };

  return <Button onClick={() => void run()}>Run qualified table ops</Button>;
}
```

### Loading the Schema Catalog

Use `loadSchemaCatalog()` when you need the database/schema/table hierarchy,
including empty schemas and attached databases whose `main` schema has no
tables yet. The catalog filter receives typed entries for databases, schemas,
and tables, so schema visibility does not depend on fake table names.
Related option and filter types are exported for callers that wrap these
helpers in their own APIs.

```ts
import {
  defaultLoadSchemaCatalogFilter,
  loadSchemaCatalog,
} from '@sqlrooms/duckdb';

const catalog = await loadSchemaCatalog(connector, {
  filterFunction: (entry) =>
    entry.type === 'schema' && entry.schema === 'scratch'
      ? false
      : defaultLoadSchemaCatalogFilter(entry),
});
```

## Loading Data from Files

### Using Load Functions Directly

```tsx
import {loadCSV, loadJSON, loadParquet, loadObjects} from '@sqlrooms/duckdb';
import {useRoomStore} from './store';
import {Button} from '@sqlrooms/ui';

function DataLoader() {
  const getConnector = useRoomStore((state) => state.db.getConnector);

  const handleLoadCSV = async (file: File) => {
    const connector = await getConnector();

    // Generate SQL to load CSV file
    const sql = loadCSV('my_table', file.name, {
      auto_detect: true,
      replace: true,
    });

    // Execute the load operation
    await connector.query(sql).result;
  };

  const handleLoadObjects = async () => {
    const connector = await getConnector();
    const data = [
      {id: 1, name: 'Alice'},
      {id: 2, name: 'Bob'},
    ];

    // Generate SQL to load objects
    const sql = loadObjects('users', data, {replace: true});
    await connector.query(sql).result;
  };

  return (
    <div>
      <input
        type="file"
        accept=".csv"
        onChange={(e) => {
          if (e.target.files?.[0]) handleLoadCSV(e.target.files[0]);
        }}
      />
      <Button onClick={handleLoadObjects}>Load Sample Data</Button>
    </div>
  );
}
```

### Using the Connector Directly

```tsx
import * as arrow from 'apache-arrow';
import {useRoomStore} from './store';

function AdvancedDataLoader() {
  const getConnector = useRoomStore((state) => state.db.getConnector);

  const handleFileUpload = async (file: File) => {
    try {
      const connector = await getConnector();
      await connector.loadFile(file, 'uploaded_data', {
        method: 'auto', // Auto-detect file type
        replace: true,
        temp: false,
      });
    } catch (error) {
      console.error('Failed to load uploaded file:', error);
    }
  };

  const handleLoadArrowTable = async (arrowTable: arrow.Table) => {
    try {
      const connector = await getConnector();
      await connector.loadArrow(arrowTable, 'arrow_data');
    } catch (error) {
      console.error('Failed to load Arrow table:', error);
    }
  };

  return (
    <input
      type="file"
      accept=".csv,.json,.parquet"
      onChange={(e) => {
        if (e.target.files?.[0]) {
          void handleFileUpload(e.target.files[0]);
        }
      }}
    />
  );
}
```

## Exporting Data to CSV

```tsx
import {useExportToCsv} from '@sqlrooms/duckdb';
import {Button} from '@sqlrooms/ui';

function ExportButton() {
  const {exportToCsv} = useExportToCsv();

  const handleExport = async () => {
    await exportToCsv('SELECT * FROM users ORDER BY name', 'users_export.csv');
  };

  return <Button onClick={handleExport}>Export to CSV</Button>;
}
```

## Low-Level DuckDB Access

### Basic direct usage

```tsx
import {roomStore} from './store';

async function executeCustomQuery() {
  // Plain TS/JS usage: read connector from the store API directly.
  const connector = roomStore.getState().db.connector;

  // QueryHandle is promise-like – await it directly
  const result = await connector.query('SELECT COUNT(*) AS count FROM users');

  // Inspect Arrow table
  const count = result.getChildAt(0)?.get(0);
  console.log(`Total users: ${count}`);
}
```

### Cancellation examples

```tsx
import {roomStore} from './store';

async function cancelExample() {
  const connector = roomStore.getState().db.connector;

  // 1. Manual cancel via the handle
  const query = connector.query('SELECT * FROM large_table');
  setTimeout(() => query.cancel(), 2000); // cancel after 2 s
  await query; // throws if cancelled

  // 2. Composable cancellation – many queries, one controller
  const controller = new AbortController();
  const q1 = connector.query('SELECT 1', {signal: controller.signal});
  const q2 = connector.query('SELECT 2', {signal: controller.signal});
  controller.abort(); // cancels q1 & q2
  await Promise.allSettled([q1, q2]);
}
```

### Advanced operations with the Zustand store

```tsx
import {Button} from '@sqlrooms/ui';

function AdvancedOperations() {
  const executeSql = useRoomStore((s) => s.db.executeSql);
  const sqlSelectToJson = useRoomStore((s) => s.db.sqlSelectToJson);
  const checkTableExists = useRoomStore((s) => s.db.checkTableExists);

  const handleAdvancedQuery = async () => {
    // Cached execution with deduplication
    const query = await executeSql('SELECT * FROM users LIMIT 10');
    if (query) {
      const rows = await query; // await handle directly
      console.log('Query result:', rows);
    }

    // Parse SQL to JSON (analysis tool)
    const parsed = await sqlSelectToJson('SELECT id, name FROM users');
    console.log('Parsed query:', parsed);

    // Safety check before destructive operations
    const exists = await checkTableExists('users');
    console.log('Table exists:', exists);
  };

  return <Button onClick={handleAdvancedQuery}>Run Advanced Operations</Button>;
}
```

For more information, visit the SQLRooms documentation.

## Interfaces

* [WasmDuckDbConnectorOptions](/api/duckdb/interfaces/WasmDuckDbConnectorOptions.md)
* [WasmDuckDbConnector](/api/duckdb/interfaces/WasmDuckDbConnector.md)
* [WebSocketDuckDbConnectorOptions](/api/duckdb/interfaces/WebSocketDuckDbConnectorOptions.md)
* [WebSocketDuckDbConnector](/api/duckdb/interfaces/WebSocketDuckDbConnector.md)
* [CopyAsTsvResult](/api/duckdb/interfaces/CopyAsTsvResult.md)
* [CopyAsTsvOptions](/api/duckdb/interfaces/CopyAsTsvOptions.md)
* [UseCopyAsTsvReturn](/api/duckdb/interfaces/UseCopyAsTsvReturn.md)
* [UseExportToCsvReturn](/api/duckdb/interfaces/UseExportToCsvReturn.md)
* [UseSqlQueryResult](/api/duckdb/interfaces/UseSqlQueryResult.md)
* [BaseDuckDbConnectorOptions](/api/duckdb/interfaces/BaseDuckDbConnectorOptions.md)
* [BaseDuckDbConnectorImpl](/api/duckdb/interfaces/BaseDuckDbConnectorImpl.md)
* [QueryOptions](/api/duckdb/interfaces/QueryOptions.md)
* [DuckDbConnector](/api/duckdb/interfaces/DuckDbConnector.md)
* [TypedRowAccessor](/api/duckdb/interfaces/TypedRowAccessor.md)

## Type Aliases

* [DuckDbSliceState](/api/duckdb/type-aliases/DuckDbSliceState.md)
* [CreateDuckDbSliceProps](/api/duckdb/type-aliases/CreateDuckDbSliceProps.md)
* [WebSocketDuckDbConnectionStatus](/api/duckdb/type-aliases/WebSocketDuckDbConnectionStatus.md)
* [DuckDbConnectorType](/api/duckdb/type-aliases/DuckDbConnectorType.md)
* [~~DuckDbConnectorOptions~~](/api/duckdb/type-aliases/DuckDbConnectorOptions.md)
* [LoadTableSchemasFilterFunction](/api/duckdb/type-aliases/LoadTableSchemasFilterFunction.md)
* [LoadTableSchemasFilter](/api/duckdb/type-aliases/LoadTableSchemasFilter.md)
* [LoadTableSchemasOptions](/api/duckdb/type-aliases/LoadTableSchemasOptions.md)
* [SchemaCatalogFilterEntry](/api/duckdb/type-aliases/SchemaCatalogFilterEntry.md)
* [LoadSchemaCatalogFilterFunction](/api/duckdb/type-aliases/LoadSchemaCatalogFilterFunction.md)
* [LoadSchemaCatalogOptions](/api/duckdb/type-aliases/LoadSchemaCatalogOptions.md)
* [~~DuckDbQueryResult~~](/api/duckdb/type-aliases/DuckDbQueryResult.md)
* [QueryHandle](/api/duckdb/type-aliases/QueryHandle.md)
* [FunctionSuggestion](/api/duckdb/type-aliases/FunctionSuggestion.md)
* [GroupedFunctionSuggestion](/api/duckdb/type-aliases/GroupedFunctionSuggestion.md)
* [QualifiedTableName](/api/duckdb/type-aliases/QualifiedTableName.md)
* [ResolveTableReferenceResult](/api/duckdb/type-aliases/ResolveTableReferenceResult.md)
* [SeparatedStatements](/api/duckdb/type-aliases/SeparatedStatements.md)
* [ColumnTypeCategory](/api/duckdb/type-aliases/ColumnTypeCategory.md)
* [DbSchemaNode](/api/duckdb/type-aliases/DbSchemaNode.md)
* [NodeObject](/api/duckdb/type-aliases/NodeObject.md)
* [ColumnNodeObject](/api/duckdb/type-aliases/ColumnNodeObject.md)
* [TableNodeObject](/api/duckdb/type-aliases/TableNodeObject.md)
* [SchemaNodeObject](/api/duckdb/type-aliases/SchemaNodeObject.md)
* [DatabaseNodeObject](/api/duckdb/type-aliases/DatabaseNodeObject.md)
* [SchemaWithTables](/api/duckdb/type-aliases/SchemaWithTables.md)
* [TableColumn](/api/duckdb/type-aliases/TableColumn.md)
* [DataTable](/api/duckdb/type-aliases/DataTable.md)
* [SpatialLoadFileOptions](/api/duckdb/type-aliases/SpatialLoadFileOptions.md)
* [LoadFileOptions](/api/duckdb/type-aliases/LoadFileOptions.md)

## Variables

* [defaultLoadTableSchemasFilter](/api/duckdb/variables/defaultLoadTableSchemasFilter.md)
* [defaultLoadSchemaCatalogFilter](/api/duckdb/variables/defaultLoadSchemaCatalogFilter.md)
* [~~useDuckDbQuery~~](/api/duckdb/variables/useDuckDbQuery.md)
* [escapeVal](/api/duckdb/variables/escapeVal.md)
* [escapeId](/api/duckdb/variables/escapeId.md)
* [isNumericDuckType](/api/duckdb/variables/isNumericDuckType.md)
* [getSqlErrorWithPointer](/api/duckdb/variables/getSqlErrorWithPointer.md)
* [getFunctionDocumentation](/api/duckdb/variables/getFunctionDocumentation.md)
* [getFunctionSuggestions](/api/duckdb/variables/getFunctionSuggestions.md)
* [SpatialLoadFileOptions](/api/duckdb/variables/SpatialLoadFileOptions.md)
* [isSpatialLoadFileOptions](/api/duckdb/variables/isSpatialLoadFileOptions.md)
* [LoadFileOptions](/api/duckdb/variables/LoadFileOptions.md)

## Functions

* [createDefaultLoadTableSchemasFilter](/api/duckdb/functions/createDefaultLoadTableSchemasFilter.md)
* [createDuckDbSlice](/api/duckdb/functions/createDuckDbSlice.md)
* [createWasmDuckDbConnector](/api/duckdb/functions/createWasmDuckDbConnector.md)
* [createWebSocketDuckDbConnector](/api/duckdb/functions/createWebSocketDuckDbConnector.md)
* [createDuckDbConnector](/api/duckdb/functions/createDuckDbConnector.md)
* [isWasmDuckDbConnector](/api/duckdb/functions/isWasmDuckDbConnector.md)
* [loadSchemaCatalog](/api/duckdb/functions/loadSchemaCatalog.md)
* [useCopyAsTsv](/api/duckdb/functions/useCopyAsTsv.md)
* [useExportToCsv](/api/duckdb/functions/useExportToCsv.md)
* [useDataTable](/api/duckdb/functions/useDataTable.md)
* [useDuckDb](/api/duckdb/functions/useDuckDb.md)
* [useSql](/api/duckdb/functions/useSql.md)
* [createBaseDuckDbConnector](/api/duckdb/functions/createBaseDuckDbConnector.md)
* [arrowTableToJson](/api/duckdb/functions/arrowTableToJson.md)
* [isQualifiedTableName](/api/duckdb/functions/isQualifiedTableName.md)
* [makeQualifiedTableName](/api/duckdb/functions/makeQualifiedTableName.md)
* [parseQualifiedSqlIdentifier](/api/duckdb/functions/parseQualifiedSqlIdentifier.md)
* [getUnqualifiedSqlIdentifier](/api/duckdb/functions/getUnqualifiedSqlIdentifier.md)
* [quoteTableReference](/api/duckdb/functions/quoteTableReference.md)
* [resolveTableReference](/api/duckdb/functions/resolveTableReference.md)
* [getColValAsNumber](/api/duckdb/functions/getColValAsNumber.md)
* [splitSqlStatements](/api/duckdb/functions/splitSqlStatements.md)
* [sanitizeQuery](/api/duckdb/functions/sanitizeQuery.md)
* [makeLimitQuery](/api/duckdb/functions/makeLimitQuery.md)
* [separateLastStatement](/api/duckdb/functions/separateLastStatement.md)
* [joinStatements](/api/duckdb/functions/joinStatements.md)
* [load](/api/duckdb/functions/load.md)
* [loadCSV](/api/duckdb/functions/loadCSV.md)
* [loadJSON](/api/duckdb/functions/loadJSON.md)
* [loadParquet](/api/duckdb/functions/loadParquet.md)
* [loadSpatial](/api/duckdb/functions/loadSpatial.md)
* [loadObjects](/api/duckdb/functions/loadObjects.md)
* [sqlFrom](/api/duckdb/functions/sqlFrom.md)
* [literalToSQL](/api/duckdb/functions/literalToSQL.md)
* [createDbSchemaTrees](/api/duckdb/functions/createDbSchemaTrees.md)
* [~~getAllTablesFromSchemaTrees~~](/api/duckdb/functions/getAllTablesFromSchemaTrees.md)
* [findTableInSchemaTrees](/api/duckdb/functions/findTableInSchemaTrees.md)
* [getDuckDbTypeCategory](/api/duckdb/functions/getDuckDbTypeCategory.md)
* [getArrowColumnTypeCategory](/api/duckdb/functions/getArrowColumnTypeCategory.md)
* [createTypedRowAccessor](/api/duckdb/functions/createTypedRowAccessor.md)
