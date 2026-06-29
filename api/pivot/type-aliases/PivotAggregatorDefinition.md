---
url: 'https://sqlrooms.org/api/pivot/type-aliases/PivotAggregatorDefinition.md'
---
[@sqlrooms/pivot](../index.md) / PivotAggregatorDefinition

# Type Alias: PivotAggregatorDefinition

> **PivotAggregatorDefinition** = `object`

## Properties

### name

> **name**: `string`

***

### numInputs

> **numInputs**: `number`

***

### kind

> **kind**: `PivotAggregatorKind`

***

### valueRequirement

> **valueRequirement**: `PivotValueRequirement`

***

### format

> **format**: (`value`) => `string`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

#### Returns

`string`

***

### buildSql

> **buildSql**: (`valueColumns`) => `string`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `valueColumns` | `string`\[] |

#### Returns

`string`
