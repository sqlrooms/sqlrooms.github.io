---
url: /api/duckdb-node/functions/createNodeDuckDbConnector.md
---
[@sqlrooms/duckdb-node](../index.md) / createNodeDuckDbConnector

# Function: createNodeDuckDbConnector()

> **createNodeDuckDbConnector**(`options`): [`NodeDuckDbConnector`](../interfaces/NodeDuckDbConnector.md)

Creates a DuckDB connector for Node.js environments using @duckdb/node-api.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`NodeDuckDbConnectorOptions`](../interfaces/NodeDuckDbConnectorOptions.md) | Configuration options for the connector |

## Returns

[`NodeDuckDbConnector`](../interfaces/NodeDuckDbConnector.md)

A NodeDuckDbConnector instance

## Example

```typescript
const connector = createNodeDuckDbConnector({
  dbPath: ':memory:',
  initializationQuery: 'INSTALL json; LOAD json;'
});

await connector.initialize();
const result = await connector.query('SELECT 1 as value');
console.log(result.numRows); // 1
```
