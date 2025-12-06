---
url: /api/duckdb/type-aliases/DuckDbConnectorOptions.md
---
[@sqlrooms/duckdb](../index.md) / DuckDbConnectorOptions

# Type Alias: ~~DuckDbConnectorOptions~~

> **DuckDbConnectorOptions**: `object` & `WasmDuckDbConnectorOptions` | { `type`: `"ws"`; `wsUrl`: `string`; `initializationQuery`: `string`; }

Options for creating a DuckDB connector instance.

## Type declaration

`object` & `WasmDuckDbConnectorOptions`

{ `type`: `"ws"`; `wsUrl`: `string`; `initializationQuery`: `string`; }

| Name | Type | Description |
| ------ | ------ | ------ |
| `type` | `"ws"` | - |
| `wsUrl`? | `string` | WebSocket server URL |
| `initializationQuery`? | `string` | SQL to run after connection |

## Deprecated

Use `createWasmDuckDbConnector` or `createWebSocketDuckDbConnector` instead.
