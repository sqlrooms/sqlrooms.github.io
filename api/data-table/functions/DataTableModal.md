---
url: /api/data-table/functions/DataTableModal.md
---
[@sqlrooms/data-table](../index.md) / DataTableModal

# Function: DataTableModal()

> **DataTableModal**(`props`): `ReactNode` | `Promise`<`ReactNode`>

A modal component for displaying a table with data from a SQL query.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | `object` & { `query`: `undefined` | `string`; } | { `arrowTable`: `undefined` | `Table`<`any`>; } | Component props |

## Returns

`ReactNode` | `Promise`<`ReactNode`>

## Component

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
