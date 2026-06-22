---
url: 'https://sqlrooms.org/api/ai/interfaces/CreateSkillAuthoringAgentOptions.md'
---
[@sqlrooms/ai](../index.md) / CreateSkillAuthoringAgentOptions

# Interface: CreateSkillAuthoringAgentOptions

## Properties

### model

> **model**: `LanguageModel`

Fully constructed language model. The factory does not handle credentials
or provider selection — the host passes the model ready to use.

***

### context

> **context**: [`SkillAuthoringContext`](SkillAuthoringContext.md)

Host-supplied capability surface.

***

### draftStore

> **draftStore**: [`SkillDraftStore`](../type-aliases/SkillDraftStore.md)

Per-session draft store (see `createSkillDraftStore`).

***

### onSave

> **onSave**: [`SaveSkillCallback`](../type-aliases/SaveSkillCallback.md)

Callback invoked by the `saveSkill` tool.

***

### stopSteps?

> `optional` **stopSteps?**: `number`

Maximum tool-loop steps. Defaults to `DEFAULT_SKILL_AUTHORING_STOP_STEPS`.

***

### temperature?

> `optional` **temperature?**: `number`

Sampling temperature. Defaults to `0.2` for focused scaffolding output.
