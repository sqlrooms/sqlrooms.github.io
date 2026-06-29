---
url: 'https://sqlrooms.org/api/mosaic/classes/DataPointLimitError.md'
---
[@sqlrooms/mosaic](../index.md) / DataPointLimitError

# Class: DataPointLimitError

Custom error class for data point limit exceeded.

## Extends

* `Error`

## Constructors

### Constructor

> **new DataPointLimitError**(`rowCount`, `limit`): `DataPointLimitError`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rowCount` | `number` |
| `limit` | `number` |

#### Returns

`DataPointLimitError`

#### Overrides

`Error.constructor`

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
|  `rowCount` | `readonly` | `number` |
|  `limit` | `readonly` | `number` |
