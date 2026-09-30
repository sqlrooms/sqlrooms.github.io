---
url: https://sqlrooms.org/api/mcp/type-aliases/RoomCapabilityPolicy.md
---
[@sqlrooms/mcp](../index.md) / RoomCapabilityPolicy

# Type Alias: RoomCapabilityPolicy

> **RoomCapabilityPolicy** = `object`

Optional host policy invoked after validation and before execution.

## Properties

### authorize?

> `optional` **authorize?**: (`options`) => [`RoomCapabilityPolicyDecision`](RoomCapabilityPolicyDecision.md) | `Promise`<[`RoomCapabilityPolicyDecision`](RoomCapabilityPolicyDecision.md)>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | { `capability`: [`RoomCapabilityDescriptor`](RoomCapabilityDescriptor.md); `input`: `unknown`; `context`: [`RoomCapabilityContext`](RoomCapabilityContext.md); } |
| `options.capability` | [`RoomCapabilityDescriptor`](RoomCapabilityDescriptor.md) |
| `options.input` | `unknown` |
| `options.context` | [`RoomCapabilityContext`](RoomCapabilityContext.md) |

#### Returns

[`RoomCapabilityPolicyDecision`](RoomCapabilityPolicyDecision.md) | `Promise`<[`RoomCapabilityPolicyDecision`](RoomCapabilityPolicyDecision.md)>
