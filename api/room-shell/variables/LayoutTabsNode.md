---
url: 'https://sqlrooms.org/api/room-shell/variables/LayoutTabsNode.md'
---
[@sqlrooms/room-shell](../index.md) / LayoutTabsNode

# Variable: LayoutTabsNode

> `const` **LayoutTabsNode**: `z.ZodObject`<{ `defaultSize`: `z.ZodOptional`<`z.ZodUnion`\<readonly \[`z.ZodNumber`, `z.ZodString`]>>; `minSize`: `z.ZodOptional`<`z.ZodUnion`\<readonly \[`z.ZodNumber`, `z.ZodString`]>>; `maxSize`: `z.ZodOptional`<`z.ZodUnion`\<readonly \[`z.ZodNumber`, `z.ZodString`]>>; `collapsedSize`: `z.ZodOptional`<`z.ZodUnion`\<readonly \[`z.ZodNumber`, `z.ZodString`]>>; `collapsible`: `z.ZodOptional`<`z.ZodBoolean`>; `type`: `z.ZodLiteral`<`"tabs"`>; `id`: `z.ZodString`; `panel`: `z.ZodOptional`<`z.ZodUnion`\<readonly \[`z.ZodString`, `z.ZodObject`<{ `key`: `z.ZodString`; `meta`: `z.ZodOptional`<`z.ZodRecord`<`z.ZodString`, `z.ZodUnknown`>>; }, `z.core.$strip`>]>>; `activeTabIndex`: `z.ZodNumber`; `collapsed`: `z.ZodOptional`<`z.ZodBoolean`>; `hideTabStrip`: `z.ZodOptional`<`z.ZodBoolean`>; `closedChildren`: `z.ZodOptional`<`z.ZodArray`<`z.ZodString`>>; `hiddenChildren`: `z.ZodOptional`<`z.ZodArray`<`z.ZodString`>>; `children`: `z.ZodLazy`<`z.ZodArray`<`z.ZodType`<[`LayoutNode`](../type-aliases/LayoutNode.md), `unknown`, `z.core.$ZodTypeInternals`<[`LayoutNode`](../type-aliases/LayoutNode.md), `unknown`>>>>; }, `z.core.$strict`>
