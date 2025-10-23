---
url: /api/schema-tree/functions/TableSchemaTree.md
---
[@sqlrooms/schema-tree](../index.md) / TableSchemaTree

# Function: TableSchemaTree()

> **TableSchemaTree**(`props`): `ReactNode` | `Promise`<`ReactNode`>

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | { `className`: `string`; `schemaTrees`: `DbSchemaNode`\[]; `renderNode`: (`node`, `isOpen`) => `ReactNode`; `skipSingleDatabaseOrSchema`: `boolean`; } |
| `props.className`? | `string` |
| `props.schemaTrees` | `DbSchemaNode`\[] |
| `props.renderNode`? | (`node`, `isOpen`) => `ReactNode` |
| `props.skipSingleDatabaseOrSchema`? | `boolean` |

## Returns

`ReactNode` | `Promise`<`ReactNode`>
