---
url: https://sqlrooms.org/api/ai-core/type-aliases/ChatComposerInputProps.md
---
[@sqlrooms/ai-core](../index.md) / ChatComposerInputProps

# Type Alias: ChatComposerInputProps

> **ChatComposerInputProps** = `Omit`<`ComponentPropsWithoutRef`<`"textarea"`>, `"value"` | `"defaultValue"`> & `object`

Props for [Input](../variables/ChatComposerInput.md).

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `asChild?` | `boolean` | Render as the single child element instead of a `<textarea>`, via Radix's `Slot`. The child must forward its ref to a real DOM element. |
| `submitOnEnter?` | `boolean` | Send on Enter with no modifiers. Defaults to `true`. |
| `autoResize?` | `boolean` | Auto-grow to fit content. Defaults to `true`. |
| `onBeforeSend()?` | (`text`) => `boolean` | `void` | Synchronous pre-send veto, called with the text about to be sent, after the keymap guards pass. Return `false` to abort; any other value proceeds. A merged host `onKeyDown` can only run before or after this component's whole handler — it cannot interpose between "guards passed" and the send, which is where a pre-send hook belongs. |
