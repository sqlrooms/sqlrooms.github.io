---
url: https://sqlrooms.org/api/ai-core/variables/ChatSuggestionsDismiss.md
---
[@sqlrooms/ai-core](../index.md) / ChatSuggestionsDismiss

# Variable: ChatSuggestionsDismiss

> `const` **ChatSuggestionsDismiss**: `ForwardRefExoticComponent`<[`ChatSuggestionsDismissProps`](../type-aliases/ChatSuggestionsDismissProps.md) & `RefAttributes`<`HTMLButtonElement`>>

Hides suggestions on activation, unconditionally — unlike
VisibilityToggle, this never re-shows them.

Inside a controlled `Root`, reports through its `onOpenChange` rather than
writing the store that root overrides.
