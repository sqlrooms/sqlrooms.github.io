---
url: 'https://sqlrooms.org/api/vega/type-aliases/VegaChartToolOptions.md'
---
[@sqlrooms/vega](../index.md) / VegaChartToolOptions

# Type Alias: VegaChartToolOptions

> **VegaChartToolOptions** = `object`

Options for creating a VegaChart tool

## Properties

### description?

> `optional` **description?**: `string`

Custom description for the tool

***

### validateSql?

> `optional` **validateSql?**: (`sqlQuery`, `abortSignal?`) => `Promise`<{ `valid`: `true`; } | { `valid`: `false`; `error`: `string`; }>

Optional callback to validate the SQL query before rendering the chart.
When provided, the tool will execute this function to catch SQL errors
or empty results early, so the LLM can fix the query and retry.

The function receives the SQL query string and an optional AbortSignal,
and should return `{valid: true}` or `{valid: false, error: string}`.

For performance, implementations should use `LIMIT 1` or equivalent.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sqlQuery` | `string` |
| `abortSignal?` | `AbortSignal` |

#### Returns

`Promise`<{ `valid`: `true`; } | { `valid`: `false`; `error`: `string`; }>
