---
url: 'https://sqlrooms.org/api/ai/variables/ModelSelector.md'
---
[@sqlrooms/ai](../index.md) / ModelSelector

# Variable: ModelSelector

> `const` **ModelSelector**: `React.FC`<`ModelSelectorProps`>

Select control for choosing the active AI model for the current session.

Supports duplicate model names across providers by using an encoded,
provider-qualified select key internally while persisting separate
`modelProvider` and `model` values in state.
