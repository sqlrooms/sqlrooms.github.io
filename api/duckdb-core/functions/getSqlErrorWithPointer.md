---
url: /api/duckdb-core/functions/getSqlErrorWithPointer.md
---
[@sqlrooms/duckdb-core](../index.md) / getSqlErrorWithPointer

# Function: getSqlErrorWithPointer()

> **getSqlErrorWithPointer**(`query`, `position`): `object`

Function given a query and position finds the line and column of the console.error();

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `string` | The query to parse |
| `position` | `number` | The position of the error |

## Returns

`object`

The line and column of the error

| Name | Type |
| ------ | ------ |
|  `line` | `number` |
|  `column` | `number` |
|  `lineText` | `string` |
|  `pointerLine` | `string` |
|  `formatted` | `string` |
