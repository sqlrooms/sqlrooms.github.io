---
url: /api/room-shell/functions/isSpatialLoadFileOptions.md
---
[@sqlrooms/room-shell](../index.md) / isSpatialLoadFileOptions

# Function: isSpatialLoadFileOptions()

> **isSpatialLoadFileOptions**(`options`): `options is objectOutputType<{ schema: ZodOptional<ZodString>; select: ZodOptional<ZodArray<ZodString, "many">>; where: ZodOptional<ZodString>; view: ZodOptional<ZodBoolean>; temp: ZodOptional<ZodBoolean>; replace: ZodOptional<ZodBoolean> } & { options: ZodOptional<ZodUnion<[ZodArray<ZodString, "many">, ZodString, ZodRecord<ZodString, ZodUnknown>]>> } & { method: ZodLiteral<"st_read"> }, ZodUnknown, "strip">`

Type guard to check if options are spatial load file options

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> | The options to check |

## Returns

`options is objectOutputType<{ schema: ZodOptional<ZodString>; select: ZodOptional<ZodArray<ZodString, "many">>; where: ZodOptional<ZodString>; view: ZodOptional<ZodBoolean>; temp: ZodOptional<ZodBoolean>; replace: ZodOptional<ZodBoolean> } & { options: ZodOptional<ZodUnion<[ZodArray<ZodString, "many">, ZodString, ZodRecord<ZodString, ZodUnknown>]>> } & { method: ZodLiteral<"st_read"> }, ZodUnknown, "strip">`

True if options are spatial load file options
