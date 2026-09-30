---
url: https://sqlrooms.org/api/ai-core/type-aliases/ChatComposerSendProps.md
---
[@sqlrooms/ai-core](../index.md) / ChatComposerSendProps

# Type Alias: ChatComposerSendProps

> **ChatComposerSendProps** = `Omit`<`ActionButtonProps`, `"onActivate"`> & `object`

Props for [Send](../variables/ChatComposerSend.md).

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `onBeforeSend()?` | (`text`) => `boolean` | `void` | Synchronous pre-send veto, called with the text about to be sent. Return `false` to abort; any other value proceeds. Preferred over calling `preventDefault()` on the click, which reads as an obscure idiom for "do not send". Synchronous, matching Input's seam. |
