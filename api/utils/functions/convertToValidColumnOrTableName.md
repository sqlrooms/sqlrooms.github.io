---
url: /api/utils/functions/convertToValidColumnOrTableName.md
---
[@sqlrooms/utils](../index.md) / convertToValidColumnOrTableName

# Function: convertToValidColumnOrTableName()

> **convertToValidColumnOrTableName**(`filename`): `string`

Converts a filename into a valid column or table name for database use.

* Removes file extension
* Replaces invalid characters with underscores
* Ensures the name starts with a letter or underscore
* Truncates to max length of 63 characters

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filename` | `string` | The original filename to convert |

## Returns

`string`

A valid table/column name

## Example

```ts
convertToValidColumnOrTableName("my-file.csv") // returns "my_file"
convertToValidColumnOrTableName("123data.csv") // returns "_123data"
```
