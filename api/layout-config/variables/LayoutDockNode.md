---
url: 'https://sqlrooms.org/api/layout-config/variables/LayoutDockNode.md'
---
[@sqlrooms/layout-config](../index.md) / LayoutDockNode

# Variable: LayoutDockNode

> `const` **LayoutDockNode**: `ZodObject`<{ `defaultSize`: `ZodOptional`<`ZodUnion`\<readonly \[`ZodNumber`, `ZodString`]>>; `minSize`: `ZodOptional`<`ZodUnion`\<readonly \[`ZodNumber`, `ZodString`]>>; `maxSize`: `ZodOptional`<`ZodUnion`\<readonly \[`ZodNumber`, `ZodString`]>>; `collapsedSize`: `ZodOptional`<`ZodUnion`\<readonly \[`ZodNumber`, `ZodString`]>>; `collapsible`: `ZodOptional`<`ZodBoolean`>; `type`: `ZodLiteral`<`"dock"`>; `id`: `ZodString`; `panel`: `ZodOptional`<`ZodUnion`\<readonly \[`ZodString`, `ZodObject`<{ `key`: `ZodString`; `meta`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodUnknown`>>; }, `$strip`>]>>; `collapsed`: `ZodOptional`<`ZodBoolean`>; `root`: `ZodLazy`<`ZodType`<[`LayoutNode`](../type-aliases/LayoutNode.md), `unknown`, `$ZodTypeInternals`<[`LayoutNode`](../type-aliases/LayoutNode.md), `unknown`>>>; }, `$strip`>
