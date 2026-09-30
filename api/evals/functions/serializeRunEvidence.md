---
url: https://sqlrooms.org/api/evals/functions/serializeRunEvidence.md
---
[@sqlrooms/evals](../index.md) / serializeRunEvidence

# Function: serializeRunEvidence()

> **serializeRunEvidence**(`evidence`): `string`

Serializes validated run evidence for storage in runner metadata.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `evidence` | {\[`key`: `string`]: [`JsonValue`](../type-aliases/JsonValue.md); `schemaVersion`: `1`; `runId`: `string`; `scenario`: {\[`key`: `string`]: [`JsonValue`](../type-aliases/JsonValue.md); `id`: `string`; `version`: `number`; `repetition`: `number`; }; `target`: {\[`key`: `string`]: [`JsonValue`](../type-aliases/JsonValue.md); `type`: `string`; `profileName`: `string`; `profileVersion`: `number`; }; `repository?`: {\[`key`: `string`]: [`JsonValue`](../type-aliases/JsonValue.md); `commitSha`: `string`; `dirty`: `boolean`; `workflowUrl?`: `string`; }; `model`: {\[`key`: `string`]: [`JsonValue`](../type-aliases/JsonValue.md); `provider`: `string`; `modelId`: `string`; `configuredRevision?`: `string`; `upstreamProvider?`: `string`; `settings`: [`JsonObject`](../type-aliases/JsonObject.md); }; `timing`: {\[`key`: `string`]: [`JsonValue`](../type-aliases/JsonValue.md); `startedAt`: `string`; `endedAt`: `string`; `latencyMs`: `number`; }; `status`: `"error"` | `"passed"` | `"failed"` | `"cancelled"`; `promptTurns`: `object`\[]; `finalAnswer`: `string`; `events`: `object`\[]; `usage?`: {\[`key`: `string`]: [`JsonValue`](../type-aliases/JsonValue.md); `inputTokens?`: `number`; `outputTokens?`: `number`; `totalTokens?`: `number`; `costUsd?`: `number`; `grader?`: [`JsonObject`](../type-aliases/JsonObject.md); }; `finalState?`: [`JsonValue`](../type-aliases/JsonValue.md); `checkResults`: `object`\[]; `metadata`: [`JsonObject`](../type-aliases/JsonObject.md); } |
| `evidence.schemaVersion` | `1` |
| `evidence.runId` | `string` |
| `evidence.scenario` | {\[`key`: `string`]: [`JsonValue`](../type-aliases/JsonValue.md); `id`: `string`; `version`: `number`; `repetition`: `number`; } |
| `evidence.scenario.id` | `string` |
| `evidence.scenario.version` | `number` |
| `evidence.scenario.repetition` | `number` |
| `evidence.target` | {\[`key`: `string`]: [`JsonValue`](../type-aliases/JsonValue.md); `type`: `string`; `profileName`: `string`; `profileVersion`: `number`; } |
| `evidence.target.type` | `string` |
| `evidence.target.profileName` | `string` |
| `evidence.target.profileVersion` | `number` |
| `evidence.repository?` | {\[`key`: `string`]: [`JsonValue`](../type-aliases/JsonValue.md); `commitSha`: `string`; `dirty`: `boolean`; `workflowUrl?`: `string`; } |
| `evidence.repository.commitSha` | `string` |
| `evidence.repository.dirty` | `boolean` |
| `evidence.repository.workflowUrl?` | `string` |
| `evidence.model` | {\[`key`: `string`]: [`JsonValue`](../type-aliases/JsonValue.md); `provider`: `string`; `modelId`: `string`; `configuredRevision?`: `string`; `upstreamProvider?`: `string`; `settings`: [`JsonObject`](../type-aliases/JsonObject.md); } |
| `evidence.model.provider` | `string` |
| `evidence.model.modelId` | `string` |
| `evidence.model.configuredRevision?` | `string` |
| `evidence.model.upstreamProvider?` | `string` |
| `evidence.model.settings` | [`JsonObject`](../type-aliases/JsonObject.md) |
| `evidence.timing` | {\[`key`: `string`]: [`JsonValue`](../type-aliases/JsonValue.md); `startedAt`: `string`; `endedAt`: `string`; `latencyMs`: `number`; } |
| `evidence.timing.startedAt` | `string` |
| `evidence.timing.endedAt` | `string` |
| `evidence.timing.latencyMs` | `number` |
| `evidence.status` | `"error"` | `"passed"` | `"failed"` | `"cancelled"` |
| `evidence.promptTurns` | `object`\[] |
| `evidence.finalAnswer` | `string` |
| `evidence.events` | `object`\[] |
| `evidence.usage?` | {\[`key`: `string`]: [`JsonValue`](../type-aliases/JsonValue.md); `inputTokens?`: `number`; `outputTokens?`: `number`; `totalTokens?`: `number`; `costUsd?`: `number`; `grader?`: [`JsonObject`](../type-aliases/JsonObject.md); } |
| `evidence.usage.inputTokens?` | `number` |
| `evidence.usage.outputTokens?` | `number` |
| `evidence.usage.totalTokens?` | `number` |
| `evidence.usage.costUsd?` | `number` |
| `evidence.usage.grader?` | [`JsonObject`](../type-aliases/JsonObject.md) |
| `evidence.finalState?` | [`JsonValue`](../type-aliases/JsonValue.md) |
| `evidence.checkResults` | `object`\[] |
| `evidence.metadata` | [`JsonObject`](../type-aliases/JsonObject.md) |

## Returns

`string`
