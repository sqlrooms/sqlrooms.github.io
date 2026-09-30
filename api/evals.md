---
url: https://sqlrooms.org/api/evals.md
---
# @sqlrooms/evals

Evaluator-neutral behavioral scenario, behavioral check, evidence, and
scripted-model primitives for SQLRooms.

## Type Aliases

* [BehavioralCheckResult](/api/evals/type-aliases/BehavioralCheckResult.md)
* [ObservedError](/api/evals/type-aliases/ObservedError.md)
* [ObservedMutation](/api/evals/type-aliases/ObservedMutation.md)
* [BehavioralCheckContext](/api/evals/type-aliases/BehavioralCheckContext.md)
* [BehavioralCheckEvaluation](/api/evals/type-aliases/BehavioralCheckEvaluation.md)
* [BehavioralCheck](/api/evals/type-aliases/BehavioralCheck.md)
* [BehavioralCheckOptions](/api/evals/type-aliases/BehavioralCheckOptions.md)
* [RunEvidence](/api/evals/type-aliases/RunEvidence.md)
* [JsonPrimitive](/api/evals/type-aliases/JsonPrimitive.md)
* [JsonObject](/api/evals/type-aliases/JsonObject.md)
* [JsonValue](/api/evals/type-aliases/JsonValue.md)
* [ScenarioDefinition](/api/evals/type-aliases/ScenarioDefinition.md)
* [ScriptedModelContent](/api/evals/type-aliases/ScriptedModelContent.md)
* [ScriptedModelExpectation](/api/evals/type-aliases/ScriptedModelExpectation.md)
* [ScriptedModelStep](/api/evals/type-aliases/ScriptedModelStep.md)
* [ScriptedLanguageModel](/api/evals/type-aliases/ScriptedLanguageModel.md)

## Variables

* [BehavioralCheckKindSchema](/api/evals/variables/BehavioralCheckKindSchema.md)
* [BehavioralCheckResultSchema](/api/evals/variables/BehavioralCheckResultSchema.md)
* [RUN\_EVIDENCE\_SCHEMA\_VERSION](/api/evals/variables/RUN_EVIDENCE_SCHEMA_VERSION.md)
* [RunEvidenceEventSchema](/api/evals/variables/RunEvidenceEventSchema.md)
* [RunEvidenceSchema](/api/evals/variables/RunEvidenceSchema.md)
* [JsonValueSchema](/api/evals/variables/JsonValueSchema.md)
* [JsonObjectSchema](/api/evals/variables/JsonObjectSchema.md)
* [ScenarioIdSchema](/api/evals/variables/ScenarioIdSchema.md)
* [ScenarioTurnSchema](/api/evals/variables/ScenarioTurnSchema.md)
* [ScenarioExpectationSchema](/api/evals/variables/ScenarioExpectationSchema.md)
* [ScenarioDefinitionSchema](/api/evals/variables/ScenarioDefinitionSchema.md)

## Functions

* [createDatabaseCheck](/api/evals/functions/createDatabaseCheck.md)
* [createWorkspaceStateCheck](/api/evals/functions/createWorkspaceStateCheck.md)
* [createAnswerGroundingCheck](/api/evals/functions/createAnswerGroundingCheck.md)
* [createErrorCheck](/api/evals/functions/createErrorCheck.md)
* [createPolicyCheck](/api/evals/functions/createPolicyCheck.md)
* [evaluateBehavioralChecks](/api/evals/functions/evaluateBehavioralChecks.md)
* [summarizeBehavioralCheckResults](/api/evals/functions/summarizeBehavioralCheckResults.md)
* [parseRunEvidence](/api/evals/functions/parseRunEvidence.md)
* [serializeRunEvidence](/api/evals/functions/serializeRunEvidence.md)
* [defineScenario](/api/evals/functions/defineScenario.md)
* [createScriptedLanguageModel](/api/evals/functions/createScriptedLanguageModel.md)
