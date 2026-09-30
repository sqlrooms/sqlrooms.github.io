---
url: https://sqlrooms.org/api/ai-core/variables/ChatSuggestionsItem.md
---
[@sqlrooms/ai-core](../index.md) / ChatSuggestionsItem

# Variable: ChatSuggestionsItem

> `const` **ChatSuggestionsItem**: `ForwardRefExoticComponent`<`Omit`<`ActionButtonProps`, `"onActivate"`> & `object` & `RefAttributes`<`HTMLButtonElement`>>

A single suggestion. Fills the composer's prompt with `text` on activation,
or sends it when `submit` is passed. Disabled whenever
[usePromptSuggestions](usePromptSuggestions.md)'s `isReadyToSend` is false, so suggestions and
the send control never disagree.

Carries no width, height, truncation, or tooltip — the host places, sizes,
and labels it.
