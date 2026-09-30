---
url: https://sqlrooms.org/api/evals/functions/parseRunEvidence.md
---
[@sqlrooms/evals](../index.md) / parseRunEvidence

# Function: parseRunEvidence()

> **parseRunEvidence**(`input`): `object`

Parses an object or serialized JSON run-evidence envelope.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `unknown` |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `schemaVersion` | `1` |
| `runId` | `string` |
| `scenario` | {\[`key`: `string`]: [`JsonValue`](../type-aliases/JsonValue.md); `id`: `string`; `version`: `number`; `repetition`: `number`; } |
| `target` | {\[`key`: `string`]: [`JsonValue`](../type-aliases/JsonValue.md); `type`: `string`; `profileName`: `string`; `profileVersion`: `number`; } |
| `repository?` | {\[`key`: `string`]: [`JsonValue`](../type-aliases/JsonValue.md); `commitSha`: `string`; `dirty`: `boolean`; `workflowUrl?`: `string`; } |
| `model` | {\[`key`: `string`]: [`JsonValue`](../type-aliases/JsonValue.md); `provider`: `string`; `modelId`: `string`; `configuredRevision?`: `string`; `upstreamProvider?`: `string`; `settings`: [`JsonObject`](../type-aliases/JsonObject.md); } |
| `timing` | {\[`key`: `string`]: [`JsonValue`](../type-aliases/JsonValue.md); `startedAt`: `string`; `endedAt`: `string`; `latencyMs`: `number`; } |
| `status` | `"error"` | `"passed"` | `"failed"` | `"cancelled"` |
| `promptTurns` | `object`\[] |
| `finalAnswer` | `string` |
| `events` | `object`\[] |
| `usage?` | {\[`key`: `string`]: [`JsonValue`](../type-aliases/JsonValue.md); `inputTokens?`: `number`; `outputTokens?`: `number`; `totalTokens?`: `number`; `costUsd?`: `number`; `grader?`: [`JsonObject`](../type-aliases/JsonObject.md); } |
| `finalState?` | [`JsonValue`](../type-aliases/JsonValue.md) |
| `checkResults` | `object`\[] |
| `metadata` | [`JsonObject`](../type-aliases/JsonObject.md) |
