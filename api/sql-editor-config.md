---
url: /api/sql-editor-config.md
---
# @sqlrooms/sql-editor-config

A central configuration and type definitions package that maintains base SQL editor configuration schemas and Zod schema definitions for SQLRooms. It provides TypeScript types and interfaces along with essential constants and utilities used for managing SQL editor state.

## Features

* 📝 **SQL Editor Configuration**: Define and manage room SQL editor configuration schemas.
* 🔍 **Type Safety**: Strong TypeScript typing for SQL editor configuration objects.
* ✅ **Validation**: Zod schemas for runtime validation of SQL editor configurations.

## Installation

```bash
npm install @sqlrooms/sql-editor-config
# or
yarn add @sqlrooms/sql-editor-config
```

## Basic Usage

### Working with SQL Editor Configuration

```tsx
import {
  SqlEditorSliceConfig,
  createDefaultSqlEditorConfig,
} from '@sqlrooms/sql-editor-config';

// Create a new SQL editor configuration
const sqlEditorConfig: SqlEditorSliceConfig = createDefaultSqlEditorConfig();

// This can be part of a bigger room configuration
interface RoomConfig {
  // ... other properties
  sqlEditor: SqlEditorSliceConfig['sqlEditor'];
}
```

## Advanced Features

* **Schema Extensions**: Extend base schemas for custom room types
* **Configuration Validation**: Validate configurations at runtime
* **Serialization**: Convert configurations to/from JSON for storage

For more information, visit the SQLRooms documentation.

```
```

## Type Aliases

* [SqlEditorSliceConfig](type-aliases/SqlEditorSliceConfig.md)

## Variables

* [SqlEditorSliceConfig](variables/SqlEditorSliceConfig.md)

## Functions

* [createDefaultSqlEditorConfig](functions/createDefaultSqlEditorConfig.md)
