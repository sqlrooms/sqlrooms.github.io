---
url: 'https://sqlrooms.org/api/ai/type-aliases/SkillAuthoringPanelProps.md'
---
[@sqlrooms/ai](../index.md) / SkillAuthoringPanelProps

# Type Alias: SkillAuthoringPanelProps

> **SkillAuthoringPanelProps** = `object`

## Properties

### agent

> **agent**: `ToolLoopAgent`<`any`, `any`, `any`>

The authoring agent. Typically produced by
`createSkillAuthoringAgent` and held by the host for the lifetime of the
wizard.

***

### draftStore

> **draftStore**: [`SkillDraftStore`](SkillDraftStore.md)

The draft store shared between the agent's tools and the preview pane.

***

### onCancel

> **onCancel**: () => `void`

Fired when the user clicks Cancel or Done. The host decides what to close.

#### Returns

`void`

***

### onSave?

> `optional` **onSave?**: (`draft`) => `Promise`<`unknown`>

When provided, a Save button is shown in the footer once the draft has
name, description, and instructions filled in. The panel drives the status
pill; the host owns the actual write logic.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `draft` | [`SkillDraft`](../interfaces/SkillDraft.md) |

#### Returns

`Promise`<`unknown`>

***

### initialSuggestions?

> `optional` **initialSuggestions?**: `string`\[]

Optional chips shown on an empty chat.

***

### header?

> `optional` **header?**: `ReactNode`

Optional header rendered above the split pane. Omit when the host is
already providing titling (for example, a `Dialog` with its own
`DialogTitle`) to avoid duplicate headings. Callers that render this
panel outside a dialog can pass `<DefaultSkillAuthoringPanelHeader />`
or any custom node.

***

### className?

> `optional` **className?**: `string`
