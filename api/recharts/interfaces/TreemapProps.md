---
url: /api/recharts/interfaces/TreemapProps.md
---
[@sqlrooms/recharts](../index.md) / TreemapProps

# Interface: TreemapProps

## Properties

### width?

> `optional` **width**: `number`

***

### height?

> `optional` **height**: `number`

***

### data?

> `optional` **data**: `any`\[]

***

### animationId?

> `optional` **animationId**: `number`

***

### style?

> `optional` **style**: `any`

***

### aspectRatio?

> `optional` **aspectRatio**: `number`

***

### content?

> `optional` **content**: `ReactElement`<`unknown`, `string` | `JSXElementConstructor`<`any`>>

***

### fill?

> `optional` **fill**: `string`

***

### stroke?

> `optional` **stroke**: `string`

***

### className?

> `optional` **className**: `string`

***

### nameKey?

> `optional` **nameKey**: `DataKey`<`any`>

***

### dataKey?

> `optional` **dataKey**: `DataKey`<`any`>

***

### children?

> `optional` **children**: `any`

***

### type?

> `optional` **type**: `"flat"` | `"nest"`

***

### colorPanel?

> `optional` **colorPanel**: \[]

***

### nestIndexContent?

> `optional` **nestIndexContent**: `ReactElement`<`unknown`, `string` | `JSXElementConstructor`<`any`>> | (`item`, `i`) => `any`

***

### onAnimationStart()?

> `optional` **onAnimationStart**: () => `void`

#### Returns

`void`

***

### onAnimationEnd()?

> `optional` **onAnimationEnd**: () => `void`

#### Returns

`void`

***

### onMouseEnter()?

> `optional` **onMouseEnter**: (`node`, `e`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | `TreemapNode` |
| `e` | `any` |

#### Returns

`void`

***

### onMouseLeave()?

> `optional` **onMouseLeave**: (`node`, `e`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | `TreemapNode` |
| `e` | `any` |

#### Returns

`void`

***

### onClick()?

> `optional` **onClick**: (`node`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | `TreemapNode` |

#### Returns

`void`

***

### isAnimationActive?

> `optional` **isAnimationActive**: `boolean`

***

### isUpdateAnimationActive?

> `optional` **isUpdateAnimationActive**: `boolean`

***

### animationBegin?

> `optional` **animationBegin**: `number`

***

### animationDuration?

> `optional` **animationDuration**: `number`

***

### animationEasing?

> `optional` **animationEasing**: `AnimationTiming`
