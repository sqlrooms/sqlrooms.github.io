---
url: /api/ai-config/type-aliases/AnalysisSessionSchema.md
---
[@sqlrooms/ai-config](../index.md) / AnalysisSessionSchema

# Type Alias: AnalysisSessionSchema

> **AnalysisSessionSchema** = `object`

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `id` | `string` | - |
|  `name` | `string` | - |
|  `modelProvider` | `string` | - |
|  `model` | `string` | - |
|  `customModelName?` | `string` | - |
|  `baseUrl?` | `string` | - |
|  `analysisResults` | `object`\[] | - |
|  `createdAt?` | `Date` | - |
|  `uiMessages` | `object`\[] | - |
|  `toolAdditionalData?` | `Record`<`string`, `unknown`> | - |
|  `messagesRevision` | `number` | Revision counter that increments when messages are deleted, used to force useChat reset |
|  `prompt` | `string` | Per-session analysis prompt text |
|  `isRunning` | `boolean` | Per-session flag indicating if analysis is running |
|  `lastOpenedAt?` | `number` | Last time the session was opened/selected (epoch ms) |
