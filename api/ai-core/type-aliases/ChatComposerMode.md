---
url: https://sqlrooms.org/api/ai-core/type-aliases/ChatComposerMode.md
---
[@sqlrooms/ai-core](../index.md) / ChatComposerMode

# Type Alias: ChatComposerMode

> **ChatComposerMode** = `"session"` | `"local-agent"`

Which chat runtime a piece of normalized chat state was sourced from:
`'session'` reads the AI slice, `'local-agent'` reads
LocalAgentChatRuntime and never touches the slice.
