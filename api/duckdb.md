---
url: 'https://sqlrooms.org/api/duckdb.md'
---
# @sqlrooms/duckdb

A powerful wrapper around DuckDB-WASM that provides React hooks and utilities for working with DuckDB in browser environments.

## Features

### React Integration & Type Safety

* **React Hooks**: Seamless integration with React applications via `useSql`
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
import {makeQualifiedTableName} from '@sqlrooms/duckdb';
import {useRoomStore} from './store';
import {Button} from '@sqlrooms/ui';

function QualifiedTableOps() {
  const createTableFromQuery = useRoomStore(
    (state) => state.db.createTableFromQuery,
  );
  const dropTable = useRoomStore((state) => state.db.dropTable);
  const checkTableExists = useRoomStore((state) => state.db.checkTableExists);

  const run = async () => {
    // Support for database.schema.table naming
    const qualifiedTable = makeQualifiedTableName({
      database: 'mydb',
      schema: 'public',
      table: 'users',
    });

    await createTableFromQuery(qualifiedTable, 'SELECT * FROM source_table');
    const tableExists = await checkTableExists(qualifiedTable);
    console.log('Table exists after create:', tableExists);
    await dropTable(qualifiedTable);
  };

  return <Button onClick={() => void run()}>Run qualified table ops</Button>;
}
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

## Enumerations

* [DuckDBAccessMode](enumerations/DuckDBAccessMode.md)

## Interfaces

* [DuckDBConfig](interfaces/DuckDBConfig.md)
* [DuckDBBundles](interfaces/DuckDBBundles.md)
* [WasmDuckDbConnector](interfaces/WasmDuckDbConnector.md)
* [WebSocketDuckDbConnectorOptions](interfaces/WebSocketDuckDbConnectorOptions.md)
* [WebSocketDuckDbConnector](interfaces/WebSocketDuckDbConnector.md)
* [UseSqlQueryResult](interfaces/UseSqlQueryResult.md)
* [BaseDuckDbConnectorOptions](interfaces/BaseDuckDbConnectorOptions.md)
* [BaseDuckDbConnectorImpl](interfaces/BaseDuckDbConnectorImpl.md)
* [QueryOptions](interfaces/QueryOptions.md)
* [DuckDbConnector](interfaces/DuckDbConnector.md)
* [TypedRowAccessor](interfaces/TypedRowAccessor.md)

## Type Aliases

* [SchemaAndDatabase](type-aliases/SchemaAndDatabase.md)
* [DuckDbSliceState](type-aliases/DuckDbSliceState.md)
* [CreateDuckDbSliceProps](type-aliases/CreateDuckDbSliceProps.md)
* [DuckDbConnectorType](type-aliases/DuckDbConnectorType.md)
* [~~DuckDbConnectorOptions~~](type-aliases/DuckDbConnectorOptions.md)
* [~~DuckDbQueryResult~~](type-aliases/DuckDbQueryResult.md)
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
* [SpatialLoadFileOptions](type-aliases/SpatialLoadFileOptions.md)
* [LoadFileOptions](type-aliases/LoadFileOptions.md)

## Variables

* [~~useDuckDbQuery~~](variables/useDuckDbQuery.md)
* [escapeVal](variables/escapeVal.md)
* [escapeId](variables/escapeId.md)
* [isNumericDuckType](variables/isNumericDuckType.md)
* [getSqlErrorWithPointer](variables/getSqlErrorWithPointer.md)
* [SpatialLoadFileOptions](variables/SpatialLoadFileOptions.md)
* [isSpatialLoadFileOptions](variables/isSpatialLoadFileOptions.md)
* [LoadFileOptions](variables/LoadFileOptions.md)

## Functions

* [createDuckDbSlice](functions/createDuckDbSlice.md)
* [useStoreWithDuckDb](functions/useStoreWithDuckDb.md)
* [createWasmDuckDbConnector](functions/createWasmDuckDbConnector.md)
* [createWebSocketDuckDbConnector](functions/createWebSocketDuckDbConnector.md)
* [createDuckDbConnector](functions/createDuckDbConnector.md)
* [isWasmDuckDbConnector](functions/isWasmDuckDbConnector.md)
* [useExportToCsv](functions/useExportToCsv.md)
* [useDuckDb](functions/useDuckDb.md)
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
