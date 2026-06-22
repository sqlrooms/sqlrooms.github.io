---
url: 'https://sqlrooms.org/api/mosaic/type-aliases/ExtraWorksheetAiToolsFactory.md'
---
[@sqlrooms/mosaic](../index.md) / ExtraWorksheetAiToolsFactory

# Type Alias: ExtraWorksheetAiToolsFactory

> **ExtraWorksheetAiToolsFactory** = (`params`) => `Record`<`string`, `Tool`>

Factory function for creating additional worksheet AI tools.
Allows hosts to register custom tools that extend the worksheet agent's capabilities.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ExtraWorksheetAiToolsParams`](ExtraWorksheetAiToolsParams.md) |

## Returns

`Record`<`string`, `Tool`>
