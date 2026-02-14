---
url: /api/duckdb/interfaces/WebSocketDuckDbConnectorOptions.md
---
[@sqlrooms/duckdb](../index.md) / WebSocketDuckDbConnectorOptions

# Interface: WebSocketDuckDbConnectorOptions

Options for the WebSocket DuckDB connector.

## Properties

### wsUrl?

> `optional` **wsUrl**: `string`

WebSocket endpoint of the DuckDB server.

***

### initializationQuery?

> `optional` **initializationQuery**: `string`

SQL to run after initialization

***

### onNotification()?

> `optional` **onNotification**: (`payload`) => `void`

Optional handler for server notifications `{ type: 'notify', payload }`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `payload` | `any` |

#### Returns

`void`

***

### subscribeChannels?

> `optional` **subscribeChannels**: `string`\[]

Optional list of channels to subscribe to upon (re)connect

***

### authToken?

> `optional` **authToken**: `string`

Optional bearer token to authenticate with the server
