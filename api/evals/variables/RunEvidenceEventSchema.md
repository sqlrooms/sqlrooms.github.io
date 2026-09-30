---
url: https://sqlrooms.org/api/evals/variables/RunEvidenceEventSchema.md
---
[@sqlrooms/evals](../index.md) / RunEvidenceEventSchema

# Variable: RunEvidenceEventSchema

> `const` **RunEvidenceEventSchema**: `ZodObject`<{ `sequence`: `ZodNumber`; `timestamp`: `ZodString`; `type`: `ZodEnum`<{ `error`: `"error"`; `model`: `"model"`; `tool`: `"tool"`; `nested-agent`: `"nested-agent"`; `approval`: `"approval"`; `mutation`: `"mutation"`; }>; `name`: `ZodOptional`<`ZodString`>; `data`: `ZodDefault`<`ZodType`<[`JsonObject`](../type-aliases/JsonObject.md), `unknown`, `$ZodTypeInternals`<[`JsonObject`](../type-aliases/JsonObject.md), `unknown`>>>; }, `$catchall`<`ZodType`<[`JsonValue`](../type-aliases/JsonValue.md), `unknown`, `$ZodTypeInternals`<[`JsonValue`](../type-aliases/JsonValue.md), `unknown`>>>>

Ordered event captured while a behavioral scenario runs.
