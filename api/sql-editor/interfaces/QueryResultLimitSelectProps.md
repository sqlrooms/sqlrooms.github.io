---
url: /api/sql-editor/interfaces/QueryResultLimitSelectProps.md
---
[@sqlrooms/sql-editor](../index.md) / QueryResultLimitSelectProps

# Interface: QueryResultLimitSelectProps

## Properties

### value

> **value**: `number`

Current limit value

***

### onChange()

> **onChange**: (`limit`) => `void`

Callback when limit changes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `limit` | `number` |

#### Returns

`void`

***

### options?

> `optional` **options**: `number`\[]

Available limit options

#### Default

```ts
[100, 500, 1000, 5000, 10000]
```

***

### className?

> `optional` **className**: `string`

Custom class name
