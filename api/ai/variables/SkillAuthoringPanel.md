---
url: 'https://sqlrooms.org/api/ai/variables/SkillAuthoringPanel.md'
---
[@sqlrooms/ai](../index.md) / SkillAuthoringPanel

# Variable: SkillAuthoringPanel

> `const` **SkillAuthoringPanel**: `React.FC`<[`SkillAuthoringPanelProps`](../type-aliases/SkillAuthoringPanelProps.md)>

Split-pane authoring surface: left is a local-agent `Chat` driving a
`SkillAuthoringAgent`, right is a live `SkillDraftPreview`. There is no
explicit Save button — the agent calls `saveSkill` once the draft is
complete, and the status pill in the footer communicates progress.

The top header is intentionally opt-in via `header?`. When the panel is
rendered inside a `Dialog` the host's `DialogTitle` should own titling;
when rendered standalone (for example, as a tab or an inline page) the
caller can pass `<DefaultSkillAuthoringPanelHeader />`.
