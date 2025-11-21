---
url: /api/s3-browser/variables/S3FileOrDirectory.md
---
[@sqlrooms/s3-browser](../index.md) / S3FileOrDirectory

# Variable: S3FileOrDirectory

> `const` **S3FileOrDirectory**: `z.ZodUnion`\<readonly \[`z.ZodObject`<{ `key`: `z.ZodString`; `isDirectory`: `z.ZodLiteral`<`true`>; }, `z.core.$strip`>, `z.ZodObject`<{ `key`: `z.ZodString`; `isDirectory`: `z.ZodLiteral`<`false`>; `lastModified`: `z.ZodOptional`<`z.ZodDate`>; `size`: `z.ZodOptional`<`z.ZodNumber`>; `contentType`: `z.ZodOptional`<`z.ZodString`>; }, `z.core.$strip`>]>
