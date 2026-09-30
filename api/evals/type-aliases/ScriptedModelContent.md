---
url: https://sqlrooms.org/api/evals/type-aliases/ScriptedModelContent.md
---
[@sqlrooms/evals](../index.md) / ScriptedModelContent

# Type Alias: ScriptedModelContent

> **ScriptedModelContent** = { `type`: `"text"`; `text`: `string`; } | { `type`: `"tool-call"`; `toolName`: `string`; `input`: [`JsonObject`](JsonObject.md); `toolCallId?`: `string`; }

One text or tool-call output emitted by a scripted model step.
