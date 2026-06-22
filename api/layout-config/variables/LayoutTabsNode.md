---
url: 'https://sqlrooms.org/api/layout-config/variables/LayoutTabsNode.md'
---
[@sqlrooms/layout-config](../index.md) / LayoutTabsNode

# Variable: LayoutTabsNode

> `const` **LayoutTabsNode**: `ZodObject`<{ `defaultSize`: `ZodOptional`<`ZodUnion`\<readonly \[`ZodNumber`, `ZodString`]>>; `minSize`: `ZodOptional`<`ZodUnion`\<readonly \[`ZodNumber`, `ZodString`]>>; `maxSize`: `ZodOptional`<`ZodUnion`\<readonly \[`ZodNumber`, `ZodString`]>>; `collapsedSize`: `ZodOptional`<`ZodUnion`\<readonly \[`ZodNumber`, `ZodString`]>>; `collapsible`: `ZodOptional`<`ZodBoolean`>; `type`: `ZodLiteral`<`"tabs"`>; `id`: `ZodString`; `panel`: `ZodOptional`<`ZodUnion`\<readonly \[`ZodString`, `ZodObject`<{ `key`: `ZodString`; `meta`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodUnknown`>>; }, `$strip`>]>>; `activeTabIndex`: `ZodNumber`; `collapsed`: `ZodOptional`<`ZodBoolean`>; `hideTabStrip`: `ZodOptional`<`ZodBoolean`>; `closedChildren`: `ZodOptional`<`ZodArray`<`ZodString`>>; `hiddenChildren`: `ZodOptional`<`ZodArray`<`ZodString`>>; `children`: `ZodLazy`<`ZodArray`<`ZodType`<[`LayoutNode`](../type-aliases/LayoutNode.md), `unknown`, `$ZodTypeInternals`<[`LayoutNode`](../type-aliases/LayoutNode.md), `unknown`>>>>; }, `$strict`>
