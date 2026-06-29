---
url: 'https://sqlrooms.org/api/layout/variables/LayoutSplitNode.md'
---
[@sqlrooms/layout](../index.md) / LayoutSplitNode

# Variable: LayoutSplitNode

> `const` **LayoutSplitNode**: `z.ZodObject`<{ `defaultSize`: `z.ZodOptional`<`z.ZodUnion`\<readonly \[`z.ZodNumber`, `z.ZodString`]>>; `minSize`: `z.ZodOptional`<`z.ZodUnion`\<readonly \[`z.ZodNumber`, `z.ZodString`]>>; `maxSize`: `z.ZodOptional`<`z.ZodUnion`\<readonly \[`z.ZodNumber`, `z.ZodString`]>>; `collapsedSize`: `z.ZodOptional`<`z.ZodUnion`\<readonly \[`z.ZodNumber`, `z.ZodString`]>>; `collapsible`: `z.ZodOptional`<`z.ZodBoolean`>; `type`: `z.ZodLiteral`<`"split"`>; `id`: `z.ZodString`; `panel`: `z.ZodOptional`<`z.ZodUnion`\<readonly \[`z.ZodString`, `z.ZodObject`<{ `key`: `z.ZodString`; `meta`: `z.ZodOptional`<`z.ZodRecord`<`z.ZodString`, `z.ZodUnknown`>>; }, `z.core.$strip`>]>>; `direction`: `z.ZodEnum`<{ `row`: `"row"`; `column`: `"column"`; }>; `collapsed`: `z.ZodOptional`<`z.ZodBoolean`>; `resizable`: `z.ZodOptional`<`z.ZodDefault`<`z.ZodBoolean`>>; `children`: `z.ZodLazy`<`z.ZodArray`<`z.ZodType`<[`LayoutNode`](../type-aliases/LayoutNode.md), `unknown`, `z.core.$ZodTypeInternals`<[`LayoutNode`](../type-aliases/LayoutNode.md), `unknown`>>>>; }, `z.core.$strict`>
