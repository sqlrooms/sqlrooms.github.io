---
url: https://sqlrooms.org/api/ai/variables/QueryControls.md
---
[@sqlrooms/ai](../index.md) / QueryControls

# Variable: QueryControls

> `const` **QueryControls**: `FC`<`QueryControlsProps`>

Renders the shared AI query composer controls.

Composed from useChatComposer and the composer primitives, so it
works under both `Chat.Root` (session mode) and `Chat.LocalAgentRoot`
(local-agent mode) — and, via ChatComposerStateBoundary, with no
`<Chat>` ancestor at all. Session-only chrome (context selectors, the
context-usage indicator, the inline API-key mode, and the summarizing
overlay) lives in the session branch and never reaches for the AI slice in
local-agent mode.
