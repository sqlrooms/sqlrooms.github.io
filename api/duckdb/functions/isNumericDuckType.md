---
url: /api/duckdb/functions/isNumericDuckType.md
---
[@sqlrooms/duckdb](../index.md) / isNumericDuckType

# Function: isNumericDuckType()

> **isNumericDuckType**(`type`): `boolean`

Checks if a DuckDB type string represents a numeric type.
Includes INTEGER, DECIMAL, FLOAT, REAL, and DOUBLE types.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The DuckDB type string to check |

## Returns

`boolean`

True if the type is numeric, false otherwise

## Example

```ts
isNumericDuckType('INTEGER') // Returns true
isNumericDuckType('VARCHAR') // Returns false
```
