---
url: https://sqlrooms.org/api/ai-core/variables/ChatComposerInput.md
---
[@sqlrooms/ai-core](../index.md) / ChatComposerInput

# Variable: ChatComposerInput

> `const` **ChatComposerInput**: `ForwardRefExoticComponent`<`Omit`<`Omit`<`DetailedHTMLProps`<`TextareaHTMLAttributes`<`HTMLTextAreaElement`>, `HTMLTextAreaElement`>, `"ref"`>, `"value"` | `"defaultValue"`> & `object` & `RefAttributes`<`HTMLTextAreaElement`>>

Binds the composer prompt to a text input and owns the Enter-to-send keymap
and auto-resize.

**Textarea-shaped contract.** Injects `value`, `onChange`, `onKeyDown`,
`placeholder`, and `disabled`, and mutates the element's inline `height`
when `autoResize` is on. Rich editors — contenteditable, editor-state
models, anything with its own keymap — should build on
[useChatComposer](useChatComposer.md) instead.

**The forwarded ref must reach the real DOM node,** or auto-resize silently
does nothing: with `asChild`, the child must forward its ref down to the
actual `<textarea>`.

**Host handlers are merged, not replaced.** A handler passed as a prop runs
before this component's own behavior for the same event; calling
`event.preventDefault()` suppresses that behavior. This is how a host takes
over the keymap, and why `onPaste` passes through untouched.
