---
url: /api/ai/type-aliases/AnalysisSessionSchema.md
---
[@sqlrooms/ai](../index.md) / AnalysisSessionSchema

# Type Alias: AnalysisSessionSchema

> **AnalysisSessionSchema** = `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `id` | `string` |
|  `name` | `string` |
|  `modelProvider` | `string` |
|  `model` | `string` |
|  `customModelName?` | `string` |
|  `baseUrl?` | `string` |
|  `analysisResults` | `object`\[] |
|  `createdAt?` | `Date` |
|  `uiMessages` | `object`\[] |
|  `toolAdditionalData?` | `Record`<`string`, `unknown`> |
|  `messagesRevision` | `number` |
|  `prompt` | `string` |
|  `isRunning` | `boolean` |
