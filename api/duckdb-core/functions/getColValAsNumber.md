---
url: /api/duckdb-core/functions/getColValAsNumber.md
---
[@sqlrooms/duckdb-core](../index.md) / getColValAsNumber

# Function: getColValAsNumber()

> **getColValAsNumber**(`res`, `column`, `index`): `number`

Extracts a numeric value from an Arrow Table at the specified column and row index.
Handles both column name and index-based access. Converts BigInt values to numbers.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `res` | `Table` | `undefined` | The Arrow Table containing the data |
| `column` | `string` | `number` | `0` | The column name or index (0-based) to read from. Defaults to first column (0) |
| `index` | `number` | `0` | The row index (0-based) to read from. Defaults to first row (0) |

## Returns

`number`

The numeric value at the specified position, or NaN if the value is null/undefined

## Example

```ts
const value = getColValAsNumber(table, "amount", 0)
```
