---
url: /api/s3-browser/variables/S3FileOrDirectory.md
---
[@sqlrooms/s3-browser](../index.md) / S3FileOrDirectory

# Variable: S3FileOrDirectory

> `const` **S3FileOrDirectory**: `ZodUnion`\<readonly \[`ZodObject`<{ `key`: `ZodString`; `isDirectory`: `ZodLiteral`<`true`>; }, `$strip`>, `ZodObject`<{ `key`: `ZodString`; `isDirectory`: `ZodLiteral`<`false`>; `lastModified`: `ZodOptional`<`ZodDate`>; `size`: `ZodOptional`<`ZodNumber`>; `contentType`: `ZodOptional`<`ZodString`>; }, `$strip`>]>
