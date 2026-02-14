---
url: /api/data-table/type-aliases/DataTableModalProps.md
---
[@sqlrooms/data-table](../index.md) / DataTableModalProps

# Type Alias: DataTableModalProps

> **DataTableModalProps** = `object` & { `query`: `string` | `undefined`; `arrowTable?`: `never`; } | { `arrowTable`: `arrow.Table` | `undefined`; `query?`: `never`; }

A modal component for displaying a table with data from a SQL query.

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `className?` | `string` | - |
| `title` | `string` | `undefined` | - |
| `tableModal` | `Pick`<`UseDisclosureReturnValue`, `"isOpen"` | `"onClose"`> | - |
| `formatValue?` | [`ArrowDataTableValueFormatter`](ArrowDataTableValueFormatter.md) | Optional custom value formatter for binary/geometry data |

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
