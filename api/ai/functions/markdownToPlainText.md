---
url: https://sqlrooms.org/api/ai/functions/markdownToPlainText.md
---
[@sqlrooms/ai](../index.md) / markdownToPlainText

# Function: markdownToPlainText()

> **markdownToPlainText**(`markdown`, `excludedTagNames?`): `string`

Extracts the sanitized text projection used by chat search. Subtrees rooted
at `excludedTagNames` become non-searchable boundaries so opaque custom
Markdown renderers cannot contribute text or join searchable text across
content they may replace or hide.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `markdown` | `string` |
| `excludedTagNames?` | readonly `string`\[] |

## Returns

`string`
