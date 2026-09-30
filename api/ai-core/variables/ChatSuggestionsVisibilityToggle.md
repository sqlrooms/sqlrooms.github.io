---
url: https://sqlrooms.org/api/ai-core/variables/ChatSuggestionsVisibilityToggle.md
---
[@sqlrooms/ai-core](../index.md) / ChatSuggestionsVisibilityToggle

# Variable: ChatSuggestionsVisibilityToggle

> `const` **ChatSuggestionsVisibilityToggle**: `ForwardRefExoticComponent`<[`ChatSuggestionsVisibilityToggleProps`](../type-aliases/ChatSuggestionsVisibilityToggleProps.md) & `RefAttributes`<`HTMLButtonElement`>>

Toggles suggestions visibility on activation, exposing the current state as
`aria-pressed` so a host can style it without this component owning classes.

Can live anywhere under `<Chat>` — including outside the composer or the
list itself — and stays in sync, because visibility lives in the normalized
state rather than a container-scoped context.

Inside a controlled `Root`, writes through that root's `onOpenChange` rather
than the store it overrides. Note that such a root renders nothing while
hidden, so a toggle *inside* one can only ever close it and `aria-pressed`
is always `true` there — Dismiss says that more plainly. Render the
toggle outside the root for a control that can also re-open it.
