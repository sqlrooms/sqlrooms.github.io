---
url: /api/recharts/interfaces/DefaultTooltipContentProps.md
---
[@sqlrooms/recharts](../index.md) / DefaultTooltipContentProps

# Interface: DefaultTooltipContentProps\<TValue, TName>

## Type Parameters

| Type Parameter |
| ------ |
| `TValue` *extends* `ValueType` |
| `TName` *extends* `NameType` |

## Properties

### separator?

> `optional` **separator**: `string`

***

### wrapperClassName?

> `optional` **wrapperClassName**: `string`

***

### labelClassName?

> `optional` **labelClassName**: `string`

***

### formatter?

> `optional` **formatter**: `Formatter`<`TValue`, `TName`>

***

### contentStyle?

> `optional` **contentStyle**: `CSSProperties`

***

### itemStyle?

> `optional` **itemStyle**: `CSSProperties`

***

### labelStyle?

> `optional` **labelStyle**: `CSSProperties`

***

### labelFormatter()?

> `optional` **labelFormatter**: (`label`, `payload`) => `ReactNode`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `label` | `any` |
| `payload` | `Payload`<`TValue`, `TName`>\[] |

#### Returns

`ReactNode`

***

### label?

> `optional` **label**: `any`

***

### payload?

> `optional` **payload**: `Payload`<`TValue`, `TName`>\[]

***

### itemSorter()?

> `optional` **itemSorter**: (`item`) => `string` | `number`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `Payload`<`TValue`, `TName`> |

#### Returns

`string` | `number`

***

### accessibilityLayer?

> `optional` **accessibilityLayer**: `boolean`
