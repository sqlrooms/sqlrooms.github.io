---
url: https://sqlrooms.org/api/ai-core/variables/ChatSuggestionsStateBoundary.md
---
[@sqlrooms/ai-core](../index.md) / ChatSuggestionsStateBoundary

# Variable: ChatSuggestionsStateBoundary

> `const` **ChatSuggestionsStateBoundary**: `FC`<{ }> = `suggestionsContext.StateBoundary`

Wraps `children` so that [usePromptSuggestions](usePromptSuggestions.md) always has state to
read, mirroring [ChatComposerStateBoundary](ChatComposerStateBoundary.md). If an ancestor already
published suggestions state, `children` render unchanged; otherwise a
session-mode provider (and, since it depends on composer state, a composer
boundary above it) is rendered around them.
