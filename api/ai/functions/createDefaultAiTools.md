---
url: 'https://sqlrooms.org/api/ai/functions/createDefaultAiTools.md'
---
[@sqlrooms/ai](../index.md) / createDefaultAiTools

# Function: createDefaultAiTools()

## Call Signature

> **createDefaultAiTools**(`store`, `options`): `object`

Default tools available to the AI assistant for data analysis.
Includes:

* query: Executes SQL queries against DuckDB
* list\_tables / read\_table\_schema: Discover and inspect database tables
* list\_commands / execute\_command: Bridge to room command registry

Pass `commands: false` to opt out of the command tools (e.g. in rooms
without a command registry).
Pass `tables: false` to opt out of the table discovery tools.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | `StoreApi`<`BaseRoomStoreState` & [`AiSliceState`](../type-aliases/AiSliceState.md) & `DuckDbSliceState`> |
| `options` | [`DefaultToolsOptions`](../type-aliases/DefaultToolsOptions.md) & `object` |

### Returns

`object`

| Name | Type |
| ------ | ------ |
| `query` | `QueryTool` |

## Call Signature

> **createDefaultAiTools**(`store`, `options`): `object` & `DefaultTableTools`

Default tools available to the AI assistant for data analysis.
Includes:

* query: Executes SQL queries against DuckDB
* list\_tables / read\_table\_schema: Discover and inspect database tables
* list\_commands / execute\_command: Bridge to room command registry

Pass `commands: false` to opt out of the command tools (e.g. in rooms
without a command registry).
Pass `tables: false` to opt out of the table discovery tools.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | `StoreApi`<`BaseRoomStoreState` & [`AiSliceState`](../type-aliases/AiSliceState.md) & `DuckDbSliceState`> |
| `options` | [`DefaultToolsOptions`](../type-aliases/DefaultToolsOptions.md) & `object` |

### Returns

`object` & `DefaultTableTools`

## Call Signature

> **createDefaultAiTools**(`store`, `options`): `object` & [`DefaultCommandTools`](../type-aliases/DefaultCommandTools.md)

Default tools available to the AI assistant for data analysis.
Includes:

* query: Executes SQL queries against DuckDB
* list\_tables / read\_table\_schema: Discover and inspect database tables
* list\_commands / execute\_command: Bridge to room command registry

Pass `commands: false` to opt out of the command tools (e.g. in rooms
without a command registry).
Pass `tables: false` to opt out of the table discovery tools.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | `StoreApi`<`BaseRoomStoreState` & [`AiSliceState`](../type-aliases/AiSliceState.md) & `DuckDbSliceState`> |
| `options` | [`DefaultToolsOptions`](../type-aliases/DefaultToolsOptions.md) & `object` |

### Returns

`object` & [`DefaultCommandTools`](../type-aliases/DefaultCommandTools.md)

## Call Signature

> **createDefaultAiTools**(`store`, `options?`): `object` & [`DefaultCommandTools`](../type-aliases/DefaultCommandTools.md) & `DefaultTableTools`

Default tools available to the AI assistant for data analysis.
Includes:

* query: Executes SQL queries against DuckDB
* list\_tables / read\_table\_schema: Discover and inspect database tables
* list\_commands / execute\_command: Bridge to room command registry

Pass `commands: false` to opt out of the command tools (e.g. in rooms
without a command registry).
Pass `tables: false` to opt out of the table discovery tools.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | `StoreApi`<`BaseRoomStoreState` & [`AiSliceState`](../type-aliases/AiSliceState.md) & `DuckDbSliceState`> |
| `options?` | [`DefaultToolsOptions`](../type-aliases/DefaultToolsOptions.md) |

### Returns

`object` & [`DefaultCommandTools`](../type-aliases/DefaultCommandTools.md) & `DefaultTableTools`
