---
url: https://sqlrooms.org/api/evals/type-aliases/BehavioralCheck.md
---
[@sqlrooms/evals](../index.md) / BehavioralCheck

# Type Alias: BehavioralCheck

> **BehavioralCheck** = `object`

An evaluator-neutral behavioral check.

## Properties

### id

> `readonly` **id**: `string`

***

### kind

> `readonly` **kind**: `z.infer`<*typeof* [`BehavioralCheckKindSchema`](../variables/BehavioralCheckKindSchema.md)>

## Methods

### evaluate()

> **evaluate**(`context`): [`BehavioralCheckEvaluation`](BehavioralCheckEvaluation.md) | `Promise`<[`BehavioralCheckEvaluation`](BehavioralCheckEvaluation.md)>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`BehavioralCheckContext`](BehavioralCheckContext.md) |

#### Returns

[`BehavioralCheckEvaluation`](BehavioralCheckEvaluation.md) | `Promise`<[`BehavioralCheckEvaluation`](BehavioralCheckEvaluation.md)>
