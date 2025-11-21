---
url: /api/kepler/type-aliases/KeplerS3BrowserProps.md
---
[@sqlrooms/kepler](../index.md) / KeplerS3BrowserProps

# Type Alias: KeplerS3BrowserProps

> **KeplerS3BrowserProps**: `object`

## Type declaration

| Name | Type |
| ------ | ------ |
|  `listS3Files` | (`args`) => `Promise`<`S3FileOrDirectory`\[]> |
|  `loadS3Files` | (`args`) => `Promise`<`void`> |
|  `s3Browser` | `S3BrowserState`\[`"s3Browser"`] |
|  `saveS3Credential` | (`s3Config`) => `Promise`<`void`> |
|  `loadS3Credentials` | () => `Promise`<`S3Credential`\[]> |
|  `deleteS3Credential` | (`id`) => `Promise`<`void`> |
