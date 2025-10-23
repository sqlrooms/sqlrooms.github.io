---
url: /api/utils/functions/memoizeOnce.md
---
[@sqlrooms/utils](../index.md) / memoizeOnce

# Function: memoizeOnce()

> **memoizeOnce**<`TArgs`, `TReturn`>(`fn`): (...`args`) => `TReturn`

Creates a memoized version of a function that caches only the last result.
The cache is invalidated when any of the arguments change.

This is useful for expensive operations that are likely to be called
multiple times with the same arguments, like database queries or API calls.

## Type Parameters

| Type Parameter |
| ------ |
| `TArgs` *extends* readonly `unknown`\[] |
| `TReturn` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | (...`args`) => `TReturn` | The function to memoize |

## Returns

`Function`

A memoized version of the function

### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `TArgs` |

### Returns

`TReturn`

## Example

```ts
const expensiveQuery = async (userId: string, limit: number) => {
  return await database.query(`SELECT * FROM users WHERE id = ? LIMIT ?`, [userId, limit]);
};

const memoizedQuery = memoizeOnce(expensiveQuery);

// First call executes the function
const result1 = await memoizedQuery("123", 10);

// Second call with same arguments returns cached result
const result2 = await memoizedQuery("123", 10); // Uses cache

// Call with different arguments invalidates cache and executes function
const result3 = await memoizedQuery("456", 10); // Executes function
```
