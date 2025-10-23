---
url: /api/utils/functions/genRandomStr.md
---
[@sqlrooms/utils](../index.md) / genRandomStr

# Function: genRandomStr()

> **genRandomStr**(`length`, `seed`?): `string`

Generates a random string of specified length with optional seed

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `length` | `number` | The length of the random string to generate |
| `seed`? | `string` | Seed will be ignored. |

## Returns

`string`

Random string containing uppercase letters, lowercase letters, and numbers

## Example

```ts
const random = genRandomStr(10); // e.g., "aB3kF9mN2x"
```
