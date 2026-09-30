---
url: https://sqlrooms.org/api/evals/type-aliases/BehavioralCheckContext.md
---
[@sqlrooms/evals](../index.md) / BehavioralCheckContext

# Type Alias: BehavioralCheckContext

> **BehavioralCheckContext** = `object`

Target-neutral material available to behavioral checks.

## Properties

### scenario

> **scenario**: [`ScenarioDefinition`](ScenarioDefinition.md)

***

### database?

> `optional` **database?**: [`JsonValue`](JsonValue.md)

***

### workspace?

> `optional` **workspace?**: [`JsonValue`](JsonValue.md)

***

### finalAnswer

> **finalAnswer**: `string`

***

### errors

> **errors**: readonly [`ObservedError`](ObservedError.md)\[]

***

### mutations

> **mutations**: readonly [`ObservedMutation`](ObservedMutation.md)\[]

***

### metadata

> **metadata**: [`JsonObject`](JsonObject.md)
