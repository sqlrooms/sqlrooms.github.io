---
url: https://sqlrooms.org/api/evals/functions/evaluateBehavioralChecks.md
---
[@sqlrooms/evals](../index.md) / evaluateBehavioralChecks

# Function: evaluateBehavioralChecks()

> **evaluateBehavioralChecks**(`checks`, `context`): `Promise`<`object`\[]>

Evaluates checks in declaration order and normalizes their results.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `checks` | readonly [`BehavioralCheck`](../type-aliases/BehavioralCheck.md)\[] |
| `context` | [`BehavioralCheckContext`](../type-aliases/BehavioralCheckContext.md) |

## Returns

`Promise`<`object`\[]>

## Throws

When check IDs are duplicated or a scenario expectation has no
matching check implementation.
