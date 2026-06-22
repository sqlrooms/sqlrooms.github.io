---
url: 'https://sqlrooms.org/api/mosaic/functions/useSelectedOrFirstTable.md'
---
[@sqlrooms/mosaic](../index.md) / useSelectedOrFirstTable

# Function: useSelectedOrFirstTable()

> **useSelectedOrFirstTable**(`dashboardId`): `DataTable` | `undefined`

Returns the last selected table for a dashboard if it exists,
otherwise falls back to the first table with columns.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dashboardId` | `string` | The dashboard ID |

## Returns

`DataTable` | `undefined`

The selected table, or the first table, or undefined if no tables exist
