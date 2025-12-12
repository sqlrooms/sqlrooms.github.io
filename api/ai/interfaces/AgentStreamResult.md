---
url: /api/ai/interfaces/AgentStreamResult.md
---
[@sqlrooms/ai](../index.md) / AgentStreamResult

# Interface: AgentStreamResult

Type definition for agent stream result (from ai package)
Represents the return value of Agent.stream()

## Properties

### text

> **text**: `Promise`<`string`>

## Methods

### toUIMessageStream()

> **toUIMessageStream**(): `AsyncIterable`<[`UIMessageChunk`](UIMessageChunk.md)>

#### Returns

`AsyncIterable`<[`UIMessageChunk`](UIMessageChunk.md)>
