---
url: /api/s3-browser/functions/listFilesAndDirectoriesWithPrefix.md
---
[@sqlrooms/s3-browser](../index.md) / listFilesAndDirectoriesWithPrefix

# Function: listFilesAndDirectoriesWithPrefix()

> **listFilesAndDirectoriesWithPrefix**(`S3`, `bucket`, `prefix`?): `Promise`<({ `key`: `string`; `isDirectory`: `true`; } | { `key`: `string`; `isDirectory`: `false`; `lastModified`: `Date`; `size`: `number`; `contentType`: `string`; })\[]>

## Parameters

| Parameter | Type |
| ------ | ------ |
| `S3` | `S3Client` |
| `bucket` | `string` |
| `prefix`? | `string` |

## Returns

`Promise`<({ `key`: `string`; `isDirectory`: `true`; } | { `key`: `string`; `isDirectory`: `false`; `lastModified`: `Date`; `size`: `number`; `contentType`: `string`; })\[]>
