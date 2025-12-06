---
url: /api/duckdb/functions/getColValAsNumber.md
---
[@sqlrooms/duckdb](../index.md) / getColValAsNumber

# Function: getColValAsNumber()

> **getColValAsNumber**(`res`, `column`?, `index`?): `number`

Extracts a numeric value from an Arrow Table at the specified column and row index.
Handles both column name and index-based access. Converts BigInt values to numbers.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `res` | `Table` | The Arrow Table containing the data |
| `column`? | `string` | `number` | The column name or index (0-based) to read from. Defaults to first column (0) |
| `index`? | `number` | The row index (0-based) to read from. Defaults to first row (0) |

## Returns

`number`

The numeric value at the specified position, or NaN if the value is null/undefined

## Example

```ts
const value = getColValAsNumber(table, "amount", 0)
```
