---
url: /api/kepler/type-aliases/KeplerS3BrowserProps.md
---
[@sqlrooms/kepler](../index.md) / KeplerS3BrowserProps

# Type Alias: KeplerS3BrowserProps

> **KeplerS3BrowserProps** = `object`

## Properties

### listS3Files()

> **listS3Files**: (`args`) => `Promise`<`S3FileOrDirectory`\[]>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `s3Config`: `S3Config`; `prefix`: `string`; } |
| `args.s3Config` | `S3Config` |
| `args.prefix` | `string` |

#### Returns

`Promise`<`S3FileOrDirectory`\[]>

***

### loadS3Files()

> **loadS3Files**: (`args`) => `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `s3Config`: `S3Config`; `prefix`: `string`; `files`: `string`\[]; } |
| `args.s3Config` | `S3Config` |
| `args.prefix` | `string` |
| `args.files` | `string`\[] |

#### Returns

`Promise`<`void`>

***

### s3Browser

> **s3Browser**: `S3BrowserState`\[`"s3Browser"`]

***

### saveS3Credentials()

> **saveS3Credentials**: (`s3Config`) => `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `s3Config` | `S3Config` |

#### Returns

`Promise`<`void`>

***

### loadS3Credentials()

> **loadS3Credentials**: () => `Promise`<`S3Credentials`\[]>

#### Returns

`Promise`<`S3Credentials`\[]>

***

### deleteS3Credentials()

> **deleteS3Credentials**: (`id`) => `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`<`void`>
