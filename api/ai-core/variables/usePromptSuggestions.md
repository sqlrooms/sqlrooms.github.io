---
url: https://sqlrooms.org/api/ai-core/variables/usePromptSuggestions.md
---
[@sqlrooms/ai-core](../index.md) / usePromptSuggestions

# Variable: usePromptSuggestions

> `const` **usePromptSuggestions**: () => [`ChatSuggestionsState`](../interfaces/ChatSuggestionsState.md) = `suggestionsContext.useChatState`

Reads normalized prompt-suggestions state and actions.

Works anywhere under `<Chat>` — under `Chat.Root` it reads session-mode
state, under `Chat.LocalAgentRoot` it reads local-agent-mode state — with
no required parent for the reading component itself. This is what lets a
suggestions list live in a popover or overlay while its toggle lives
elsewhere, such as the composer footer, and still stay in sync.

Requires published state: render under `Chat.Root`,
`Chat.LocalAgentRoot`, or [ChatSuggestionsStateBoundary](ChatSuggestionsStateBoundary.md). Throws
otherwise rather than guessing a mode, matching [useChatComposer](useChatComposer.md).

## Returns

[`ChatSuggestionsState`](../interfaces/ChatSuggestionsState.md)
