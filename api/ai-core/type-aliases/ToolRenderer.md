---
url: https://sqlrooms.org/api/ai-core/type-aliases/ToolRenderer.md
---
[@sqlrooms/ai-core](../index.md) / ToolRenderer

# Type Alias: ToolRenderer\<TToolOrOutput, TInput>

> **ToolRenderer**<`TToolOrOutput`, `TInput`> = `ToolRendererComponent`<`TToolOrOutput`, `TInput`> & `object`

A React component that renders the result of a tool call.

```ts
ToolRenderer<ReturnType<typeof myTool>>    // infers output/input from Tool
ToolRenderer<MyOutput, MyInput>            // explicit output/input
```

Dispatcher tools that only sometimes produce UI (e.g. `executeApi`) may
attach an optional static `shouldHoist` predicate. When it returns false,
ChatTurnView keeps the call in the activity timeline and does not emit an
empty hoisted slot in the turn body.

## Type Declaration

| Name | Type |
| ------ | ------ |
| `shouldHoist?` | [`ToolRendererShouldHoist`](ToolRendererShouldHoist.md) |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TToolOrOutput` | `unknown` |
| `TInput` | `unknown` |
