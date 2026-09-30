---
url: https://sqlrooms.org/api/ai-core/interfaces/ChatComposerState.md
---
[@sqlrooms/ai-core](../index.md) / ChatComposerState

# Interface: ChatComposerState

Normalized composer state and actions, identical in shape across both chat
runtime modes.

Read via [useChatComposer](../variables/useChatComposer.md). This is the behavior layer: it carries no
DOM and no styling, and is the supported integration point for a prompt
input that is not textarea-shaped (see `Input`'s tsdoc for the
textarea-shaped contract that primitive is limited to).

## Properties

### mode

> **mode**: [`ChatComposerMode`](../type-aliases/ChatComposerMode.md)

Which runtime this state was sourced from.

***

### prompt

> **prompt**: `string`

The current prompt text. In session mode this reads from the active
session when one exists, and from the shared draft prompt otherwise, so
a suggestions list and the composer always agree before a session is
created.

***

### setPrompt

> **setPrompt**: (`value`) => `void`

Updates the prompt in whichever store currently backs it.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`void`

***

### send

> **send**: (`text?`) => `void`

Sends the current prompt, or `text` when provided instead. A no-op when
sending is not currently possible (see [canSend](#cansend)).

Registered pre-send vetoes are consulted first (see
[useRegisterBeforeSend](../functions/useRegisterBeforeSend.md)). In session mode a session is created if
none is active, after the vetoes pass.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text?` | `string` |

#### Returns

`void`

***

### cancel

> **cancel**: () => `void`

Cancels the in-flight run, if any. A no-op when nothing is running.

#### Returns

`void`

***

### canSend

> **canSend**: `boolean`

True when [send](#send) would currently do something: a model is
resolvable, the prompt is non-empty once trimmed or an attachment is
pending, and nothing is already running or summarizing.

***

### isRunning

> **isRunning**: `boolean`

True while a response is being generated.

***

### isBusy

> **isBusy**: `boolean`

True while the composer should present as busy for any reason —
currently running, or (session mode only) summarizing the conversation.

***

### needsApiKey

> **needsApiKey**: `boolean`

True when an API key must be supplied before sending can succeed.

Always `false` in local-agent mode, and in session mode when a
custom-model factory supplies its own credentials (see the slice's
`requiresApiKey`).

***

### sendBlocked

> **sendBlocked**: `boolean`

True while a surface has blocked sending outright (credential entry, say).
Already folded into [canSend](#cansend); read directly for controls that carry
their own text.
