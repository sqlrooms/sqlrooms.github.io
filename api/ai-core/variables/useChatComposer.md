---
url: https://sqlrooms.org/api/ai-core/variables/useChatComposer.md
---
[@sqlrooms/ai-core](../index.md) / useChatComposer

# Variable: useChatComposer

> `const` **useChatComposer**: () => [`ChatComposerState`](../interfaces/ChatComposerState.md) = `composerContext.useChatState`

Reads normalized composer state and actions.

Works anywhere under `<Chat>` — under `Chat.Root` it reads session-mode
state, under `Chat.LocalAgentRoot` it reads local-agent-mode state. This is
what lets a suggestions toggle and its list live in different parts of the
tree and still agree.

Requires published state: render under `Chat.Root`,
`Chat.LocalAgentRoot`, or [ChatComposerStateBoundary](ChatComposerStateBoundary.md). Throws
otherwise rather than guessing a mode, since a silent session-mode default
would reach for the AI slice in trees that may not have one.

## Returns

[`ChatComposerState`](../interfaces/ChatComposerState.md)
