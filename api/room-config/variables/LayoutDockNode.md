---
url: 'https://sqlrooms.org/api/room-config/variables/LayoutDockNode.md'
---
[@sqlrooms/room-config](../index.md) / LayoutDockNode

# Variable: LayoutDockNode

> `const` **LayoutDockNode**: `z.ZodObject`<{ `defaultSize`: `z.ZodOptional`<`z.ZodUnion`\<readonly \[`z.ZodNumber`, `z.ZodString`]>>; `minSize`: `z.ZodOptional`<`z.ZodUnion`\<readonly \[`z.ZodNumber`, `z.ZodString`]>>; `maxSize`: `z.ZodOptional`<`z.ZodUnion`\<readonly \[`z.ZodNumber`, `z.ZodString`]>>; `collapsedSize`: `z.ZodOptional`<`z.ZodUnion`\<readonly \[`z.ZodNumber`, `z.ZodString`]>>; `collapsible`: `z.ZodOptional`<`z.ZodBoolean`>; `type`: `z.ZodLiteral`<`"dock"`>; `id`: `z.ZodString`; `panel`: `z.ZodOptional`<`z.ZodUnion`\<readonly \[`z.ZodString`, `z.ZodObject`<{ `key`: `z.ZodString`; `meta`: `z.ZodOptional`<`z.ZodRecord`<`z.ZodString`, `z.ZodUnknown`>>; }, `z.core.$strip`>]>>; `collapsed`: `z.ZodOptional`<`z.ZodBoolean`>; `root`: `z.ZodLazy`<`z.ZodType`<[`LayoutNode`](../type-aliases/LayoutNode.md), `unknown`, `z.core.$ZodTypeInternals`<[`LayoutNode`](../type-aliases/LayoutNode.md), `unknown`>>>; }, `z.core.$strip`>
