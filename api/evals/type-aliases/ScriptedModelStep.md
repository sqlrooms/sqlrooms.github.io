---
url: https://sqlrooms.org/api/evals/type-aliases/ScriptedModelStep.md
---
[@sqlrooms/evals](../index.md) / ScriptedModelStep

# Type Alias: ScriptedModelStep

> **ScriptedModelStep** = `object`

One deterministic response in a scripted AI SDK model.

## Properties

### content

> **content**: readonly [`ScriptedModelContent`](ScriptedModelContent.md)\[]

***

### finishReason?

> `optional` **finishReason?**: `LanguageModelV3FinishReason`\[`"unified"`]

***

### expectation?

> `optional` **expectation?**: [`ScriptedModelExpectation`](ScriptedModelExpectation.md)

***

### usage?

> `optional` **usage?**: `Partial`<{ `inputTokens`: `number`; `outputTokens`: `number`; }>
