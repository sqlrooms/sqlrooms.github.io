---
url: https://sqlrooms.org/api/ai-core/variables/ChatComposerStateBoundary.md
---
[@sqlrooms/ai-core](../index.md) / ChatComposerStateBoundary

# Variable: ChatComposerStateBoundary

> `const` **ChatComposerStateBoundary**: `FC`<{ }>

Wraps `children` so that [useChatComposer](useChatComposer.md) always has state to read.

If an ancestor already published composer state (`Chat.Root` or
`Chat.LocalAgentRoot`), `children` render unchanged. Otherwise a
session-mode provider is rendered around them, so a composer used without a
`<Chat>` ancestor still works.
