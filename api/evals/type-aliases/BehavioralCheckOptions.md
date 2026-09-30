---
url: https://sqlrooms.org/api/evals/type-aliases/BehavioralCheckOptions.md
---
[@sqlrooms/evals](../index.md) / BehavioralCheckOptions

# Type Alias: BehavioralCheckOptions\<TValue>

> **BehavioralCheckOptions**<`TValue`> = `object`

Definition for a behavioral check over one part of the run context.

## Type Parameters

| Type Parameter |
| ------ |
| `TValue` |

## Properties

### id

> **id**: `string`

## Methods

### evaluate()

> **evaluate**(`value`, `context`): [`BehavioralCheckEvaluation`](BehavioralCheckEvaluation.md) | `Promise`<[`BehavioralCheckEvaluation`](BehavioralCheckEvaluation.md)>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `TValue` |
| `context` | [`BehavioralCheckContext`](BehavioralCheckContext.md) |

#### Returns

[`BehavioralCheckEvaluation`](BehavioralCheckEvaluation.md) | `Promise`<[`BehavioralCheckEvaluation`](BehavioralCheckEvaluation.md)>
