---
url: 'https://sqlrooms.org/api/cells/type-aliases/SqlRunCallbacks.md'
---
[@sqlrooms/cells](../index.md) / SqlRunCallbacks

# Type Alias: SqlRunCallbacks

> **SqlRunCallbacks** = `object`

## Properties

### onStart?

> `optional` **onStart?**: () => `void`

#### Returns

`void`

***

### onSuccess?

> `optional` **onSuccess?**: (`result`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `result` | [`SqlRunResult`](SqlRunResult.md) |

#### Returns

`void`

***

### onError?

> `optional` **onError?**: (`message`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

#### Returns

`void`

***

### onFinally?

> `optional` **onFinally?**: () => `void`

#### Returns

`void`
