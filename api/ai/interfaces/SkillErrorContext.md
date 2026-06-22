---
url: 'https://sqlrooms.org/api/ai/interfaces/SkillErrorContext.md'
---
[@sqlrooms/ai](../index.md) / SkillErrorContext

# Interface: SkillErrorContext

## Properties

### ref?

> `optional` **ref?**: `object`

The ref involved, when applicable.

| Name | Type |
| ------ | ------ |
| `rootId` | `string` |
| `id` | `string` |

***

### rootId?

> `optional` **rootId?**: `string`

The root involved, when applicable.

***

### issues?

> `optional` **issues?**: `object`\[]

Zod issue list for manifest validation failures.

| Name | Type |
| ------ | ------ |
| `path` | (`string` | `number`)\[] |
| `message` | `string` |
| `code?` | `string` |

***

### extras?

> `optional` **extras?**: `Record`<`string`, `JsonValue`>

Free-form additional context — must be JSON-serializable.
