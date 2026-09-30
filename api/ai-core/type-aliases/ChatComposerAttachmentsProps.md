---
url: https://sqlrooms.org/api/ai-core/type-aliases/ChatComposerAttachmentsProps.md
---
[@sqlrooms/ai-core](../index.md) / ChatComposerAttachmentsProps

# Type Alias: ChatComposerAttachmentsProps

> **ChatComposerAttachmentsProps** = `object`

Configuration for the opt-in composer attachment picker.

By default it accepts up to four files, limits images to 1 MiB each and in
aggregate, and limits plain-text or Markdown files to 128 KiB each and in
aggregate.
Unsupported, oversized, or excess files are rejected and reported through
[onError](#onerror).

## Properties

### className?

> `optional` **className?**: `string`

***

### imageAccept?

> `optional` **imageAccept?**: `string`

Native file-input accept value for the image choice.

***

### textAccept?

> `optional` **textAccept?**: `string`

Native file-input accept value for the text or Markdown choice.

***

### maxFiles?

> `optional` **maxFiles?**: `number`

Maximum number of files waiting in the composer.

***

### maxFileSize?

> `optional` **maxFileSize?**: `number`

Maximum image size in bytes.

***

### maxTotalImageFileSize?

> `optional` **maxTotalImageFileSize?**: `number`

Maximum combined size of pending image files in bytes.

***

### maxTextFileSize?

> `optional` **maxTextFileSize?**: `number`

Maximum text or Markdown size in bytes.

***

### maxTotalTextFileSize?

> `optional` **maxTotalTextFileSize?**: `number`

Maximum combined size of pending text and Markdown files in bytes.

***

### onError?

> `optional` **onError?**: (`message`) => `void`

Called when one or more selected files cannot be attached.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

#### Returns

`void`
