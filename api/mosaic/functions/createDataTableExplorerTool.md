---
url: 'https://sqlrooms.org/api/mosaic/functions/createDataTableExplorerTool.md'
---
[@sqlrooms/mosaic](../index.md) / createDataTableExplorerTool

# Function: createDataTableExplorerTool()

> **createDataTableExplorerTool**(`__namedParameters`): `Tool`<{ `tableName?`: `string`; `title`: `string`; `intent?`: `string`; `reasoning`: `string`; }, { `llmResult`: { `success`: `boolean`; `details`: `string`; `data`: { `tableName?`: `string`; `title`: `string`; `intent?`: `string`; `reasoning`: `string`; } | { `tableName?`: `string`; `title`: `string`; `intent?`: `string`; `reasoning`: `string`; `dataTable`: { }; }; `errorMessage?`: `undefined`; }; } | { `llmResult`: { `success`: `boolean`; `errorMessage`: `string`; `details?`: `undefined`; `data?`: `undefined`; }; }>

Creates an AI tool for generating Data Table Explorer panels with schema and column statistics.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `CreateDataTableExplorerToolOptions` |

## Returns

`Tool`<{ `tableName?`: `string`; `title`: `string`; `intent?`: `string`; `reasoning`: `string`; }, { `llmResult`: { `success`: `boolean`; `details`: `string`; `data`: { `tableName?`: `string`; `title`: `string`; `intent?`: `string`; `reasoning`: `string`; } | { `tableName?`: `string`; `title`: `string`; `intent?`: `string`; `reasoning`: `string`; `dataTable`: { }; }; `errorMessage?`: `undefined`; }; } | { `llmResult`: { `success`: `boolean`; `errorMessage`: `string`; `details?`: `undefined`; `data?`: `undefined`; }; }>
