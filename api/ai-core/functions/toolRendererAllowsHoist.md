---
url: https://sqlrooms.org/api/ai-core/functions/toolRendererAllowsHoist.md
---
[@sqlrooms/ai-core](../index.md) / toolRendererAllowsHoist

# Function: toolRendererAllowsHoist()

> **toolRendererAllowsHoist**(`renderer`, `args`): `boolean`

Whether a registered renderer wants this particular call hoisted into the
turn body. Defaults to true when no `shouldHoist` predicate is attached.

Dispatcher tools (e.g. `executeApi`) attach `shouldHoist` so calls that
render nothing are kept in the activity timeline instead of emitting empty
hoisted slots that add flex gap spacing.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `renderer` | [`ToolRenderer`](../type-aliases/ToolRenderer.md)<`any`> | `undefined` |
| `args` | { `output`: `unknown`; `input`: `unknown`; `state`: `"approval-requested"` | `"error"` | `"pending"` | `"success"`; } |
| `args.output` | `unknown` |
| `args.input` | `unknown` |
| `args.state` | `"approval-requested"` | `"error"` | `"pending"` | `"success"` |

## Returns

`boolean`
