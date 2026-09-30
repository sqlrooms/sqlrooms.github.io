---
url: https://sqlrooms.org/api/ai-core/variables/ChatComposerSend.md
---
[@sqlrooms/ai-core](../index.md) / ChatComposerSend

# Variable: ChatComposerSend

> `const` **ChatComposerSend**: `ForwardRefExoticComponent`<`Omit`<`ActionButtonProps`, `"onActivate"`> & `object` & `RefAttributes`<`HTMLButtonElement`>>

Sends the current prompt on activation.

**Self-hiding:** renders `null` while a run is in flight — use Stop
for that state. Disabled whenever [useChatComposer](useChatComposer.md)'s `canSend` is
false.
