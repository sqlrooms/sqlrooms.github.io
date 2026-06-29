---
url: 'https://sqlrooms.org/api/ai/type-aliases/DefaultCommandTools.md'
---
[@sqlrooms/ai](../index.md) / DefaultCommandTools

# Type Alias: DefaultCommandTools

> **DefaultCommandTools** = `object`

The typed shape returned by [createCommandTools](../functions/createCommandTools.md) when using the default tool names.
Consumed by [createDefaultAiTools](../functions/createDefaultAiTools.md) to give its return type literal string keys.

## Properties

### search\_commands

> **search\_commands**: `Tool`<[`SearchCommandsToolParameters`](SearchCommandsToolParameters.md), [`SearchCommandsToolLlmResult`](SearchCommandsToolLlmResult.md)>

***

### get\_command

> **get\_command**: `Tool`<[`GetCommandToolParameters`](GetCommandToolParameters.md), [`GetCommandToolLlmResult`](GetCommandToolLlmResult.md)>

***

### list\_commands

> **list\_commands**: `Tool`<[`ListCommandsToolParameters`](ListCommandsToolParameters.md), [`ListCommandsToolLlmResult`](ListCommandsToolLlmResult.md)>

***

### execute\_command

> **execute\_command**: `Tool`<[`ExecuteCommandToolParameters`](ExecuteCommandToolParameters.md), [`ExecuteCommandToolLlmResult`](ExecuteCommandToolLlmResult.md)>
