---
url: 'https://sqlrooms.org/api/pivot/functions/dropPivotRelations.md'
---
[@sqlrooms/pivot](../index.md) / dropPivotRelations

# Function: dropPivotRelations()

> **dropPivotRelations**(`args`): `Promise`<`void`>

## Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `connector`: `DuckDbConnector`; `relations?`: { `cells?`: `string`; `rowTotals?`: `string`; `colTotals?`: `string`; `grandTotal?`: `string`; `export?`: `string`; }; } |
| `args.connector` | `DuckDbConnector` |
| `args.relations?` | { `cells?`: `string`; `rowTotals?`: `string`; `colTotals?`: `string`; `grandTotal?`: `string`; `export?`: `string`; } |
| `args.relations.cells?` | `string` |
| `args.relations.rowTotals?` | `string` |
| `args.relations.colTotals?` | `string` |
| `args.relations.grandTotal?` | `string` |
| `args.relations.export?` | `string` |

## Returns

`Promise`<`void`>
