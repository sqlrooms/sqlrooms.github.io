---
url: /api/ai/type-aliases/ToolUIPart.md
---
[@sqlrooms/ai](../index.md) / ToolUIPart

# Type Alias: ToolUIPart

> **ToolUIPart** = { `type`: `string`; `toolCallId`: `string`; `state`: `"input-streaming"`; `input?`: `unknown`; `providerExecuted?`: `boolean`; } | { `type`: `string`; `toolCallId`: `string`; `state`: `"input-available"`; `input`: `unknown`; `providerExecuted?`: `boolean`; `callProviderMetadata?`: `unknown`; } | { `type`: `string`; `toolCallId`: `string`; `state`: `"output-available"`; `input`: `unknown`; `output`: `unknown`; `providerExecuted?`: `boolean`; `callProviderMetadata?`: `unknown`; `preliminary?`: `boolean`; } | { `type`: `string`; `toolCallId`: `string`; `state`: `"output-error"`; `input?`: `unknown`; `rawInput?`: `unknown`; `errorText`: `string`; `providerExecuted?`: `boolean`; `callProviderMetadata?`: `unknown`; }
