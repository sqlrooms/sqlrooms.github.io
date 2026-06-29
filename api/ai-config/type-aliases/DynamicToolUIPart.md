---
url: 'https://sqlrooms.org/api/ai-config/type-aliases/DynamicToolUIPart.md'
---
[@sqlrooms/ai-config](../index.md) / DynamicToolUIPart

# Type Alias: DynamicToolUIPart

> **DynamicToolUIPart** = { `type`: `"dynamic-tool"`; `toolName`: `string`; `toolCallId`: `string`; `state`: `"input-streaming"`; `input?`: `unknown`; } | { `type`: `"dynamic-tool"`; `toolName`: `string`; `toolCallId`: `string`; `state`: `"input-available"`; `input`: `unknown`; `callProviderMetadata?`: `unknown`; } | { `type`: `"dynamic-tool"`; `toolName`: `string`; `toolCallId`: `string`; `state`: `"output-available"`; `input`: `unknown`; `output`: `unknown`; `callProviderMetadata?`: `unknown`; `preliminary?`: `boolean`; } | { `type`: `"dynamic-tool"`; `toolName`: `string`; `toolCallId`: `string`; `state`: `"output-error"`; `input`: `unknown`; `errorText`: `string`; } | { `type`: `"dynamic-tool"`; `toolName`: `string`; `toolCallId`: `string`; `state`: `"approval-requested"`; `input`: `unknown`; `callProviderMetadata?`: `unknown`; `approval`: { `id`: `string`; `approved?`: `boolean`; `reason?`: `string`; }; } | { `type`: `"dynamic-tool"`; `toolName`: `string`; `toolCallId`: `string`; `state`: `"approval-responded"`; `input`: `unknown`; `callProviderMetadata?`: `unknown`; `approval`: { `id`: `string`; `approved`: `boolean`; `reason?`: `string`; }; } | { `type`: `"dynamic-tool"`; `toolName`: `string`; `toolCallId`: `string`; `state`: `"output-denied"`; `input`: `unknown`; `callProviderMetadata?`: `unknown`; `approval`: { `id`: `string`; `approved`: `boolean`; `reason?`: `string`; }; }
