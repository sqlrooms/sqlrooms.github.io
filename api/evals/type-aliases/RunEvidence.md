---
url: https://sqlrooms.org/api/evals/type-aliases/RunEvidence.md
---
[@sqlrooms/evals](../index.md) / RunEvidence

# Type Alias: RunEvidence

> **RunEvidence** = `object`

Parsed run-evidence envelope.

## Type Declaration

## Index Signature

\[`key`: `string`]: [`JsonValue`](JsonValue.md)

| Name | Type |
| ------ | ------ |
|  `schemaVersion` | `1` |
|  `runId` | `string` |
|  `scenario` | {\[`key`: `string`]: [`JsonValue`](JsonValue.md); `id`: `string`; `version`: `number`; `repetition`: `number`; } |
|  `target` | {\[`key`: `string`]: [`JsonValue`](JsonValue.md); `type`: `string`; `profileName`: `string`; `profileVersion`: `number`; } |
|  `repository?` | {\[`key`: `string`]: [`JsonValue`](JsonValue.md); `commitSha`: `string`; `dirty`: `boolean`; `workflowUrl?`: `string`; } |
|  `model` | {\[`key`: `string`]: [`JsonValue`](JsonValue.md); `provider`: `string`; `modelId`: `string`; `configuredRevision?`: `string`; `upstreamProvider?`: `string`; `settings`: [`JsonObject`](JsonObject.md); } |
|  `timing` | {\[`key`: `string`]: [`JsonValue`](JsonValue.md); `startedAt`: `string`; `endedAt`: `string`; `latencyMs`: `number`; } |
|  `status` | `"error"` | `"passed"` | `"failed"` | `"cancelled"` |
|  `promptTurns` | `object`\[] |
|  `finalAnswer` | `string` |
|  `events` | `object`\[] |
|  `usage?` | {\[`key`: `string`]: [`JsonValue`](JsonValue.md); `inputTokens?`: `number`; `outputTokens?`: `number`; `totalTokens?`: `number`; `costUsd?`: `number`; `grader?`: [`JsonObject`](JsonObject.md); } |
|  `finalState?` | [`JsonValue`](JsonValue.md) |
|  `checkResults` | `object`\[] |
|  `metadata` | [`JsonObject`](JsonObject.md) |
