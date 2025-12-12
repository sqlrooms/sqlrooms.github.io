---
url: /api/ai/functions/convertToAiSDKTools.md
---
[@sqlrooms/ai](../index.md) / convertToAiSDKTools

# Function: convertToAiSDKTools()

> **convertToAiSDKTools**(`tools`, `onToolCompleted?`): `ToolSet`

Converts OpenAssistant tools to Vercel AI SDK tools with onToolCompleted handler

## Parameters

| Parameter | Type |
| ------ | ------ |
| `tools` | `Record`<`string`, `OpenAssistantTool`> |
| `onToolCompleted?` | (`toolCallId`, `additionalData`) => `void` |

## Returns

`ToolSet`
