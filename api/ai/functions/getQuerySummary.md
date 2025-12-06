---
url: /api/ai/functions/getQuerySummary.md
---
[@sqlrooms/ai](../index.md) / getQuerySummary

# Function: getQuerySummary()

> **getQuerySummary**(`connector`, `sqlQuery`): `Promise`<`null` | `Record`<`string`, `unknown`>\[]>

Generates summary statistics for a SQL query result

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `connector` | `DuckDbConnector` | DuckDB connection instance |
| `sqlQuery` | `string` | SQL SELECT query to analyze |

## Returns

`Promise`<`null` | `Record`<`string`, `unknown`>\[]>

Summary statistics as JSON object, or null if the query is not a SELECT statement or if summary generation fails
