---
url: 'https://sqlrooms.org/api/mosaic/type-aliases/WorksheetAiAdapter.md'
---
[@sqlrooms/mosaic](../index.md) / WorksheetAiAdapter

# Type Alias: WorksheetAiAdapter

> **WorksheetAiAdapter** = `object`

Worksheet adapter for managing worksheet artifacts (block documents).
Worksheets are collections of blocks, not panels.
Worksheet adapter manages its own state internally via the store.

## Properties

### addDataTableExplorerBlock

> **addDataTableExplorerBlock**: (`worksheetId`, `title`, `tableName`, `intent?`) => `string`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `worksheetId` | `string` |
| `title` | `string` |
| `tableName` | `string` |
| `intent?` | `string` |

#### Returns

`string`

## Methods

### setCurrentWorksheet()

> **setCurrentWorksheet**(`worksheetId`): `void`

Set the current active worksheet

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `worksheetId` | `string` |

#### Returns

`void`

***

### ensureWorksheet()

> **ensureWorksheet**(`worksheetId`): `void`

Ensure worksheet's block document exists

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `worksheetId` | `string` |

#### Returns

`void`

***

### getBlocks()

> **getBlocks**(`worksheetId`): `BlockDocumentNode`\[] | `undefined`

Get worksheet's blocks

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `worksheetId` | `string` |

#### Returns

`BlockDocumentNode`\[] | `undefined`

***

### addBlock()

> **addBlock**(`worksheetId`, `block`): `string`

Add a block to the worksheet

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `worksheetId` | `string` |
| `block` | { `type`: `z.ZodLiteral`<`"heading"`>; `level`: `z.ZodUnion`\<readonly \[`z.ZodLiteral`<`1`>, `z.ZodLiteral`<`2`>, `z.ZodLiteral`<`3`>]>; `text`: `z.ZodString`; `id`: `z.ZodString`; `intent?`: `z.ZodOptional`<`z.ZodString`>; } | { `type`: `z.ZodLiteral`<`"paragraph"`>; `text`: `z.ZodString`; `id`: `z.ZodString`; `intent?`: `z.ZodOptional`<`z.ZodString`>; } | { `type`: `z.ZodLiteral`<`"list"`>; `ordered?`: `z.ZodOptional`<`z.ZodBoolean`>; `items`: `z.ZodArray`<`z.ZodString`>; `id`: `z.ZodString`; `intent?`: `z.ZodOptional`<`z.ZodString`>; } | { `type`: `z.ZodLiteral`<`"todo"`>; `checked`: `z.ZodBoolean`; `text`: `z.ZodString`; `id`: `z.ZodString`; `intent?`: `z.ZodOptional`<`z.ZodString`>; } | { `type`: `z.ZodLiteral`<`"image"`>; `assetId`: `z.ZodString`; `caption?`: `z.ZodOptional`<`z.ZodString`>; `id`: `z.ZodString`; `intent?`: `z.ZodOptional`<`z.ZodString`>; } | { `type`: `z.ZodLiteral`<`"chartImage"`>; `assetId`: `z.ZodString`; `caption?`: `z.ZodOptional`<`z.ZodString`>; `id`: `z.ZodString`; `intent?`: `z.ZodOptional`<`z.ZodString`>; } | { `type`: `z.ZodLiteral`<`"chart"`>; `tableName`: `z.ZodString`; `config`: `z.ZodUnknown`; `selectionGroupId?`: `z.ZodOptional`<`z.ZodString`>; `caption?`: `z.ZodOptional`<`z.ZodString`>; `id`: `z.ZodString`; `intent?`: `z.ZodOptional`<`z.ZodString`>; } | { `type`: `z.ZodLiteral`<`"statefulBlock"`>; `blockType`: `z.ZodString`; `blockInstanceId`: `z.ZodString`; `ownership?`: `z.ZodOptional`<`z.ZodEnum`<{ `owned`: `"owned"`; `shared`: `"shared"`; `external`: `"external"`; }>>; `title?`: `z.ZodOptional`<`z.ZodString`>; `caption?`: `z.ZodOptional`<`z.ZodString`>; `height?`: `z.ZodOptional`<`z.ZodNumber`>; `id`: `z.ZodString`; `intent?`: `z.ZodOptional`<`z.ZodString`>; } |

#### Returns

`string`

***

### addDashboardBlock()

> **addDashboardBlock**(`worksheetId`, `title`, `tableName`, `intent?`): `AddDashboardBlockResult`

Add a dashboard block to the worksheet

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `worksheetId` | `string` |
| `title` | `string` |
| `tableName` | `string` |
| `intent?` | `string` |

#### Returns

`AddDashboardBlockResult`
