---
url: /api/data-table/variables/DataTableModal.md
---
[@sqlrooms/data-table](../index.md) / DataTableModal

# Variable: DataTableModal

> `const` **DataTableModal**: `FC`<`object` & { `query`: `string` | `undefined`; } | { `arrowTable`: `arrow.Table` | `undefined`; }>

A modal component for displaying a table with data from a SQL query.

## Component

## Param

Component props

## Param

The title of the table

## Param

The SQL query to execute and display in the table

## Param

An object containing the modal's open state and close function

## Example

```tsx
import { useState } from 'react';
import { DataTableModal } from '@sqlrooms/data-table';

const MyComponent = () => {
  const tableModal = useDisclosure();
  return (
    <DataTableModal
      title="Users"
      query="SELECT * FROM users LIMIT 10"
      tableModal={tableModal}
    />
  );
};
```
