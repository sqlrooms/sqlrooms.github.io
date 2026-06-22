---
url: 'https://sqlrooms.org/api/ai-core/type-aliases/ChatTurnViewProps.md'
---
[@sqlrooms/ai-core](../index.md) / ChatTurnViewProps

# Type Alias: ChatTurnViewProps

> **ChatTurnViewProps** = `object`

## Properties

### ~~analysisResult?~~

> `optional` **analysisResult?**: `AnalysisResultSchema`

#### Deprecated

Prefer `chatTurn`; this accepts the legacy derived result shape.

***

### chatTurn?

> `optional` **chatTurn?**: [`ChatTurn`](ChatTurn.md)

***

### customMarkdownComponents?

> `optional` **customMarkdownComponents?**: `Partial`<`Components`>

***

### hoistedRenderers?

> `optional` **hoistedRenderers?**: `string`\[]

***

### ErrorMessageComponent?

> `optional` **ErrorMessageComponent?**: `React.ComponentType`<[`ErrorMessageComponentProps`](ErrorMessageComponentProps.md)>
