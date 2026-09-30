---
url: https://sqlrooms.org/api/duckdb-core/functions/getColValAsNumber.md
---
[@sqlrooms/duckdb-core](../index.md) / getColValAsNumber

# Function: getColValAsNumber()

> **getColValAsNumber**(`res`, `column?`, `index?`): `number`

Extracts a numeric value from an Arrow Table at the specified column and row index.
Converts scalar values to numbers, or unwraps and converts the first element
when the value is an array. Returns NaN for nullish values.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `res` | `Table` | `undefined` | The Arrow Table containing the data |
| `column` | `string` | `number` | `0` | The column name or index (0-based) to read from. Defaults to first column (0) |
| `index` | `number` | `0` | The row index (0-based) to read from. Defaults to first row (0) |

## Returns

`number`

The converted numeric value, or NaN if the value is nullish

## Example

```ts
const value = getColValAsNumber(table, "amount", 0)
```
