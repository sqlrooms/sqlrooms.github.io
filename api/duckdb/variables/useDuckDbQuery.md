---
url: /api/duckdb/variables/useDuckDbQuery.md
---
[@sqlrooms/duckdb](../index.md) / useDuckDbQuery

# ~~Variable: useDuckDbQuery()~~

> `const` **useDuckDbQuery**: {<`Row`>(`options`): `object`; <`Schema`>(`zodSchema`, `options`): `object`; } = `useSql`

## Call Signature

> <`Row`>(`options`): `object`

A React hook for executing SQL queries with automatic state management.
Provides two ways to ensure type safety:

1. Using TypeScript types (compile-time safety only)
2. Using Zod schemas (both compile-time and runtime validation)

### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `Row` | The TypeScript type for each row in the result |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | { `query`: `string`; `enabled?`: `boolean`; } | Configuration object containing the query and execution control |
| `options.query` | `string` | - |
| `options.enabled?` | `boolean` | - |

### Returns

`object`

Object containing the query result, loading state, and any error

| Name | Type |
| ------ | ------ |
| `data` | [`UseSqlQueryResult`](../interfaces/UseSqlQueryResult.md)<`Row`> | `undefined` |
| `error` | `Error` | `null` |
| `isLoading` | `boolean` |

### Example

```typescript
// Option 1: Using TypeScript types (faster, no runtime validation)
interface User {
  id: number;
  name: string;
  email: string;
}

const {data, isLoading, error} = useSql<User>({
  query: 'SELECT id, name, email FROM users'
});

// Option 2: Using Zod schema (slower but with runtime validation)
const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  createdAt: z.string().transform(str => new Date(str)) // Transform string to Date
});

const {data: validatedData, isLoading, error} = useSql(
  userSchema,
  {query: 'SELECT id, name, email, created_at as createdAt FROM users'}
);
```

## Error Handling

```typescript
if (isLoading) return <div>Loading...</div>;
if (error) {
  // With Zod, you can catch validation errors specifically
  if (error instanceof z.ZodError) {
    return <div>Validation Error: {error.errors[0].message}</div>;
  }
  return <div>Error: {error.message}</div>;
}
if (!data) return null;
```

## Data Access Methods

There are several ways to access data with different performance characteristics:

### 1. Typed Row Access (getRow, rows(), toArray())

* Provides type safety and validation
* Converts data to JavaScript objects
* Slower for large datasets due to object creation and validation

```typescript
// Iterate through rows using the rows() iterator (recommended)
for (const user of data.rows()) {
  console.log(user.name, user.email);
}

// Traditional for loop with index access
for (let i = 0; i < data.length; i++) {
  const user = data.getRow(i);
  console.log(`User ${i}: ${user.name} (${user.email})`);
}

// Get all rows as an array
const allUsers = data.toArray();

// With Zod schema, transformed fields are available
for (const user of validatedData.rows()) {
  console.log(`Created: ${user.createdAt.toISOString()}`); // createdAt is a Date object
}
```

### 2. Direct Arrow Table Access

* Much faster for large datasets
* Columnar access is more efficient for analytics
* No type safety or validation

```typescript
// For performance-critical operations with large datasets:
const nameColumn = data.arrowTable.getChild('name');
const emailColumn = data.arrowTable.getChild('email');

// Fast columnar iteration (no object creation)
for (let i = 0; i < data.length; i++) {
  console.log(nameColumn.get(i), emailColumn.get(i));
}

// Note: For filtering data, it's most efficient to use SQL in your query
const { data } = useSql<User>({
  query: "SELECT * FROM users WHERE age > 30"
});
```

### 3. Using Flechette for Advanced Operations

For more advanced Arrow operations, consider using [Flechette](https://idl.uw.edu/flechette/),
a faster and lighter alternative to the standard Arrow JS implementation.

```typescript
// Example using Flechette with SQL query results
import { tableFromIPC } from '@uwdata/flechette';

// Convert Arrow table to Flechette table
const serializedData = data.arrowTable.serialize();
const flechetteTable = tableFromIPC(serializedData);

// Extract all columns into a { name: array, ... } object
const columns = flechetteTable.toColumns();

// Create a new table with a selected subset of columns
const subtable = flechetteTable.select(['name', 'email']);

// Convert to array of objects with customization options
const objects = flechetteTable.toArray({
  useDate: true,  // Convert timestamps to Date objects
  useMap: true    // Create Map objects for key-value pairs
});

// For large datasets, consider memory management
serializedData = null; // Allow garbage collection of the serialized data
```

Flechette provides several advantages:

* Better performance (1.3-1.6x faster value iteration, 7-11x faster row object extraction)
* Smaller footprint (~43k minified vs 163k for Arrow JS)
* Support for additional data types (including decimal-to-number conversion)
* More flexible data value conversion options

## Call Signature

> <`Schema`>(`zodSchema`, `options`): `object`

A React hook for executing SQL queries with automatic state management.
Provides two ways to ensure type safety:

1. Using TypeScript types (compile-time safety only)
2. Using Zod schemas (both compile-time and runtime validation)

### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `Schema` *extends* `ZodType`<`unknown`, `unknown`, `$ZodTypeInternals`<`unknown`, `unknown`>> | The Zod schema type that defines the shape and validation of each row |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zodSchema` | `Schema` | A Zod schema that defines the expected shape and validation rules for each row |
| `options` | { `query`: `string`; `enabled?`: `boolean`; } | Configuration object containing the query and execution control |
| `options.query` | `string` | - |
| `options.enabled?` | `boolean` | - |

### Returns

`object`

Object containing the query result, loading state, and any error

| Name | Type |
| ------ | ------ |
| `data` | [`UseSqlQueryResult`](../interfaces/UseSqlQueryResult.md)<`output`<`Schema`>> | `undefined` |
| `error` | `Error` | `null` |
| `isLoading` | `boolean` |

### Example

```typescript
// Option 1: Using TypeScript types (faster, no runtime validation)
interface User {
  id: number;
  name: string;
  email: string;
}

const {data, isLoading, error} = useSql<User>({
  query: 'SELECT id, name, email FROM users'
});

// Option 2: Using Zod schema (slower but with runtime validation)
const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  createdAt: z.string().transform(str => new Date(str)) // Transform string to Date
});

const {data: validatedData, isLoading, error} = useSql(
  userSchema,
  {query: 'SELECT id, name, email, created_at as createdAt FROM users'}
);
```

## Error Handling

```typescript
if (isLoading) return <div>Loading...</div>;
if (error) {
  // With Zod, you can catch validation errors specifically
  if (error instanceof z.ZodError) {
    return <div>Validation Error: {error.errors[0].message}</div>;
  }
  return <div>Error: {error.message}</div>;
}
if (!data) return null;
```

## Data Access Methods

There are several ways to access data with different performance characteristics:

### 1. Typed Row Access (getRow, rows(), toArray())

* Provides type safety and validation
* Converts data to JavaScript objects
* Slower for large datasets due to object creation and validation

```typescript
// Iterate through rows using the rows() iterator (recommended)
for (const user of data.rows()) {
  console.log(user.name, user.email);
}

// Traditional for loop with index access
for (let i = 0; i < data.length; i++) {
  const user = data.getRow(i);
  console.log(`User ${i}: ${user.name} (${user.email})`);
}

// Get all rows as an array
const allUsers = data.toArray();

// With Zod schema, transformed fields are available
for (const user of validatedData.rows()) {
  console.log(`Created: ${user.createdAt.toISOString()}`); // createdAt is a Date object
}
```

### 2. Direct Arrow Table Access

* Much faster for large datasets
* Columnar access is more efficient for analytics
* No type safety or validation

```typescript
// For performance-critical operations with large datasets:
const nameColumn = data.arrowTable.getChild('name');
const emailColumn = data.arrowTable.getChild('email');

// Fast columnar iteration (no object creation)
for (let i = 0; i < data.length; i++) {
  console.log(nameColumn.get(i), emailColumn.get(i));
}

// Note: For filtering data, it's most efficient to use SQL in your query
const { data } = useSql<User>({
  query: "SELECT * FROM users WHERE age > 30"
});
```

### 3. Using Flechette for Advanced Operations

For more advanced Arrow operations, consider using [Flechette](https://idl.uw.edu/flechette/),
a faster and lighter alternative to the standard Arrow JS implementation.

```typescript
// Example using Flechette with SQL query results
import { tableFromIPC } from '@uwdata/flechette';

// Convert Arrow table to Flechette table
const serializedData = data.arrowTable.serialize();
const flechetteTable = tableFromIPC(serializedData);

// Extract all columns into a { name: array, ... } object
const columns = flechetteTable.toColumns();

// Create a new table with a selected subset of columns
const subtable = flechetteTable.select(['name', 'email']);

// Convert to array of objects with customization options
const objects = flechetteTable.toArray({
  useDate: true,  // Convert timestamps to Date objects
  useMap: true    // Create Map objects for key-value pairs
});

// For large datasets, consider memory management
serializedData = null; // Allow garbage collection of the serialized data
```

Flechette provides several advantages:

* Better performance (1.3-1.6x faster value iteration, 7-11x faster row object extraction)
* Smaller footprint (~43k minified vs 163k for Arrow JS)
* Support for additional data types (including decimal-to-number conversion)
* More flexible data value conversion options

## Deprecated

Use useSql instead
