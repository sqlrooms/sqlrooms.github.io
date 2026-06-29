---
url: 'https://sqlrooms.org/api/utils/functions/generateUniqueName.md'
---
[@sqlrooms/utils](../index.md) / generateUniqueName

# Function: generateUniqueName()

> **generateUniqueName**(`name`, `usedNames?`, `separator?`): `string`

Generates a unique name by appending a numeric suffix if the name already exists.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `name` | `string` | `undefined` | The base name to make unique |
| `usedNames?` | `string`\[] | `undefined` | Optional array of existing names to check against |
| `separator?` | `string` | `'_'` | - |

## Returns

`string`

A unique name, potentially with a numeric suffix

## Example

```ts
generateUniqueName("table", ["table"]) // returns "table_1"
generateUniqueName("table_1", ["table_1"]) // returns "table_2"
generateUniqueName("Notebook", ["Notebook 1"], " ") // returns "Notebook 2"
```
