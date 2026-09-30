---
url: https://sqlrooms.org/api/ai-config/variables/BlockAiRunContextItemSchema.md
---
[@sqlrooms/ai-config](../index.md) / BlockAiRunContextItemSchema

# Variable: BlockAiRunContextItemSchema

> `const` **BlockAiRunContextItemSchema**: `ZodObject`<[`BlockAiRunContextItem`](../type-aliases/BlockAiRunContextItem.md)>

AI run context item schema for a selected block inside a block document.

The item captures the document id, document block id, block type, optional
backing instance id, and optional panel id so agents can route edits to the
exact surface the user invoked.
