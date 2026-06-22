---
url: 'https://sqlrooms.org/api/ai/functions/createSkillAuthoringAgent.md'
---
[@sqlrooms/ai](../index.md) / createSkillAuthoringAgent

# Function: createSkillAuthoringAgent()

> **createSkillAuthoringAgent**(`__namedParameters`): `ToolLoopAgent`<`never`, { `writeManifest`: `Tool`<{ `name`: `string`; `description`: `string`; `author?`: `string`; }, { `success`: `false`; `error`: `string`; `manifest?`: `undefined`; } | { `success`: `true`; `manifest`: { `name`: `string`; `description`: `string`; `author`: `string` | `undefined`; }; `error?`: `undefined`; }>; `writeInstructions`: `Tool`<{ `markdown`: `string`; }, { `success`: `false`; `error`: `string`; `length?`: `undefined`; } | { `success`: `true`; `length`: `number`; `error?`: `undefined`; }>; `saveSkill`: `Tool`<{ `rootId?`: `string`; }, { `success`: `false`; `error`: `string`; `ref?`: `undefined`; } | { `success`: `true`; `ref`: [`SkillRef`](../interfaces/SkillRef.md); `error?`: `undefined`; }>; }, `never`>

Build a `ToolLoopAgent` configured with the three authoring tools
(`writeManifest`, `writeInstructions`, `saveSkill`) and a system prompt
derived from `context`.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`CreateSkillAuthoringAgentOptions`](../interfaces/CreateSkillAuthoringAgentOptions.md) |

## Returns

`ToolLoopAgent`<`never`, { `writeManifest`: `Tool`<{ `name`: `string`; `description`: `string`; `author?`: `string`; }, { `success`: `false`; `error`: `string`; `manifest?`: `undefined`; } | { `success`: `true`; `manifest`: { `name`: `string`; `description`: `string`; `author`: `string` | `undefined`; }; `error?`: `undefined`; }>; `writeInstructions`: `Tool`<{ `markdown`: `string`; }, { `success`: `false`; `error`: `string`; `length?`: `undefined`; } | { `success`: `true`; `length`: `number`; `error?`: `undefined`; }>; `saveSkill`: `Tool`<{ `rootId?`: `string`; }, { `success`: `false`; `error`: `string`; `ref?`: `undefined`; } | { `success`: `true`; `ref`: [`SkillRef`](../interfaces/SkillRef.md); `error?`: `undefined`; }>; }, `never`>
