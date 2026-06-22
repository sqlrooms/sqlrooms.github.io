---
url: 'https://sqlrooms.org/api/ai-core/type-aliases/ToolRenderer.md'
---
[@sqlrooms/ai-core](../index.md) / ToolRenderer

# Type Alias: ToolRenderer\<TToolOrOutput, TInput>

> **ToolRenderer**<`TToolOrOutput`, `TInput`> = `TToolOrOutput` *extends* `Tool` ? `ComponentType`<[`ToolRendererProps`](ToolRendererProps.md)<`InferToolOutput`<`TToolOrOutput`>, `InferToolInput`<`TToolOrOutput`>>> : `ComponentType`<[`ToolRendererProps`](ToolRendererProps.md)<`TToolOrOutput`, `TInput`>>

A React component that renders the result of a tool call.

```ts
ToolRenderer<ReturnType<typeof myTool>>    // infers output/input from Tool
ToolRenderer<MyOutput, MyInput>            // explicit output/input
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TToolOrOutput` | `unknown` |
| `TInput` | `unknown` |
