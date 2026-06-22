---
url: 'https://sqlrooms.org/api/documents/type-aliases/BlockDocumentAgentPlanStep.md'
---
[@sqlrooms/documents](../index.md) / BlockDocumentAgentPlanStep

# Type Alias: BlockDocumentAgentPlanStep

> **BlockDocumentAgentPlanStep** = { `type`: `"create-block-document"`; `title?`: `string`; } | { `type`: `"append-blocks"`; `artifactId`: `string`; `blockCount`: `number`; } | { `type`: `"create-chart-block"`; `artifactId`: `string`; `tableName`: `string`; `selectionGroupId?`: `string`; } | { `type`: `"create-stateful-block"`; `artifactId`: `string`; `blockType`: `string`; `blockInstanceId?`: `string`; }
