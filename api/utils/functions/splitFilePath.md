---
url: /api/utils/functions/splitFilePath.md
---
[@sqlrooms/utils](../index.md) / splitFilePath

# Function: splitFilePath()

> **splitFilePath**(`filePath`): `object`

Splits a file path into its directory, name, and extension components.
Preserves the original path separator style (Windows backslashes or Unix forward slashes).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filePath` | `string` | The full file path to split |

## Returns

`object`

An object containing the directory path, file name (without extension), extension, and full filename

| Name | Type |
| ------ | ------ |
|  `dir` | `string` |
|  `name` | `string` |
|  `ext` | `string` |
|  `filename` | `string` |

## Example

```ts
splitFilePath("path/to/file.txt") // returns { dir: "path/to", name: "file", ext: "txt", filename: "file.txt" }
splitFilePath("C:\\Users\\file.txt") // returns { dir: "C:\\Users", name: "file", ext: "txt", filename: "file.txt" }
```
