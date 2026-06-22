---
url: 'https://sqlrooms.org/api/ai/classes/ToolAbortError.md'
---
[@sqlrooms/ai](../index.md) / ToolAbortError

# Class: ToolAbortError

Custom error class for operation abort errors.
This allows for type-safe error handling when operations are cancelled by the user.

Tools should throw this error when they detect an abort signal,
and error handlers can check for this specific error type to provide
appropriate user feedback.

## Examples

```ts
if (abortSignal?.aborted) {
  throw new ToolAbortError('Operation was aborted');
}
```

```ts
try {
  await someTool.execute(params, { abortSignal });
} catch (error) {
  if (error instanceof ToolAbortError) {
    console.log('User cancelled the operation');
  }
}
```

## Extends

* `Error`

## Constructors

### Constructor

> **new ToolAbortError**(`message?`, `snapshot?`): `ToolAbortError`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |
| `snapshot?` | `AgentProgressSnapshot` |

#### Returns

`ToolAbortError`

#### Overrides

`Error.constructor`

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
|  `progressSnapshot?` | `readonly` | `AgentProgressSnapshot` |
