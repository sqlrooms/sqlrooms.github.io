---
url: 'https://sqlrooms.org/api/mosaic/type-aliases/BaseAgentToolOptions.md'
---
[@sqlrooms/mosaic](../index.md) / BaseAgentToolOptions

# Type Alias: BaseAgentToolOptions\<TState>

> **BaseAgentToolOptions**<`TState`> = `object`

Common options for agent creation

## Type Parameters

| Type Parameter |
| ------ |
| `TState` |

## Properties

### store

> **store**: [`AiStore`](AiStore.md)<`TState`>

***

### getModel

> **getModel**: (`args`) => `LanguageModel`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `state`: `TState`; } |
| `args.state` | `TState` |

#### Returns

`LanguageModel`

***

### createDataTools?

> `optional` **createDataTools?**: (`args`) => `object`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `store`: [`AiStore`](AiStore.md)<`TState`>; } |
| `args.store` | [`AiStore`](AiStore.md)<`TState`> |

#### Returns

`object`

| Name | Type |
| ------ | ------ |
| `query` | `Tool` |
| `list_tables` | `Tool` |
| `read_table_schema` | `Tool` |

***

### runSubAgent

> **runSubAgent**: (`args`) => `Promise`<[`AgentRunResult`](AgentRunResult.md)>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `agent`: `ToolLoopAgent`<`any`, `any`, `any`>; `prompt`: `string`; `store`: [`AiStore`](AiStore.md)<`TState`>; `parentToolCallId`: `string`; `abortSignal?`: `AbortSignal`; } |
| `args.agent` | `ToolLoopAgent`<`any`, `any`, `any`> |
| `args.prompt` | `string` |
| `args.store` | [`AiStore`](AiStore.md)<`TState`> |
| `args.parentToolCallId` | `string` |
| `args.abortSignal?` | `AbortSignal` |

#### Returns

`Promise`<[`AgentRunResult`](AgentRunResult.md)>

***

### instructions?

> `optional` **instructions?**: `string`

***

### additionalInstructions?

> `optional` **additionalInstructions?**: `string`

Optional host/plugin instructions appended after the built-in agent prompt.
Use this when extending an agent with extra tools that need specialized
usage guidance while preserving the base workflow.

***

### chartToolsOptions?

> `optional` **chartToolsOptions?**: `ChartToolsOptions`
