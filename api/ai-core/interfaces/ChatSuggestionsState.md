---
url: https://sqlrooms.org/api/ai-core/interfaces/ChatSuggestionsState.md
---
[@sqlrooms/ai-core](../index.md) / ChatSuggestionsState

# Interface: ChatSuggestionsState

Normalized prompt-suggestions state and actions, identical in shape across
both chat runtime modes.

Read via [usePromptSuggestions](../variables/usePromptSuggestions.md). This is the behavior layer: no DOM,
no styling. `send` and `isReadyToSend` reuse the composer's own send action
and readiness signals, so a suggestion and the send control never disagree.

## Properties

### mode

> **mode**: [`ChatComposerMode`](../type-aliases/ChatComposerMode.md)

Which runtime this state was sourced from.

***

### visible

> **visible**: `boolean`

Whether suggestions are currently visible.

***

### setVisible

> **setVisible**: (`visible`) => `void`

Sets visibility directly.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `visible` | `boolean` |

#### Returns

`void`

***

### toggle

> **toggle**: () => `void`

Flips visibility.

#### Returns

`void`

***

### items

> **items**: readonly `string`\[]

Runtime-supplied suggestion strings, possibly empty. Session mode has no
concept of runtime-supplied suggestions and always reports an empty
array; local-agent mode reports the root's `initialSuggestions`.

***

### isSessionEmpty

> **isSessionEmpty**: `boolean`

True when the chat has no messages and no in-progress prompt, in both
modes — including a draft typed before any session exists. Branch on this
instead of a `when`-style prop.

***

### fill

> **fill**: (`text`) => `void`

Writes `text` into the prompt without sending it.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

#### Returns

`void`

***

### send

> **send**: (`text`) => `void`

Sends `text` immediately, subject to [isReadyToSend](#isreadytosend). Routed through
the composer's `send`, so pre-send vetoes apply.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

#### Returns

`void`

***

### isReadyToSend

> **isReadyToSend**: `boolean`

True when an item's own text could be sent: a model is resolvable
(session mode) and nothing is running or summarizing. Built from the same
signals as [useChatComposer](../variables/useChatComposer.md)'s `canSend`, minus its non-empty-prompt
requirement, which is the wrong question for an item supplying its own
text.

Built on `sendBlocked`, not `needsApiKey`: the latter is also true for apps
needing no browser key (remote `chatEndPoint`, no ai-settings slice).
