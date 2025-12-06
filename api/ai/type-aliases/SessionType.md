---
url: /api/ai/type-aliases/SessionType.md
---
[@sqlrooms/ai](../index.md) / SessionType

# Type Alias: SessionType

> **SessionType**: `object`

Represents a session in the AI system.

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `id` | `string` | Unique identifier for the session |
|  `name` | `string` | Display name of the session |
|  `modelProvider`? | `string` | Provider of the AI model (e.g., "openai") |
|  `model`? | `string` | Name of the AI model being used (e.g., "gpt-4o-mini") |

## Example

```typescript
const session: SessionType = {
  id: "session_123",
  name: "My Analysis Session",
  modelProvider: "openai",
  model: "gpt-4o-mini"
};
```
