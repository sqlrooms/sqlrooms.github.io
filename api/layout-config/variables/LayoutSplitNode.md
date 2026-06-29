---
url: 'https://sqlrooms.org/api/layout-config/variables/LayoutSplitNode.md'
---
[@sqlrooms/layout-config](../index.md) / LayoutSplitNode

# Variable: LayoutSplitNode

> `const` **LayoutSplitNode**: `ZodObject`<{ `defaultSize`: `ZodOptional`<`ZodUnion`\<readonly \[`ZodNumber`, `ZodString`]>>; `minSize`: `ZodOptional`<`ZodUnion`\<readonly \[`ZodNumber`, `ZodString`]>>; `maxSize`: `ZodOptional`<`ZodUnion`\<readonly \[`ZodNumber`, `ZodString`]>>; `collapsedSize`: `ZodOptional`<`ZodUnion`\<readonly \[`ZodNumber`, `ZodString`]>>; `collapsible`: `ZodOptional`<`ZodBoolean`>; `type`: `ZodLiteral`<`"split"`>; `id`: `ZodString`; `panel`: `ZodOptional`<`ZodUnion`\<readonly \[`ZodString`, `ZodObject`<{ `key`: `ZodString`; `meta`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodUnknown`>>; }, `$strip`>]>>; `direction`: `ZodEnum`<{ `row`: `"row"`; `column`: `"column"`; }>; `collapsed`: `ZodOptional`<`ZodBoolean`>; `resizable`: `ZodOptional`<`ZodDefault`<`ZodBoolean`>>; `children`: `ZodLazy`<`ZodArray`<`ZodType`<[`LayoutNode`](../type-aliases/LayoutNode.md), `unknown`, `$ZodTypeInternals`<[`LayoutNode`](../type-aliases/LayoutNode.md), `unknown`>>>>; }, `$strict`>
