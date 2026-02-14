---
url: /api/vega/interfaces/VegaExportActionProps.md
---
[@sqlrooms/vega](../index.md) / VegaExportActionProps

# Interface: VegaExportActionProps

## Properties

### pngScale?

> `optional` **pngScale**: `number`

PNG scale factor for high-DPI displays

#### Default

```ts
2
```

***

### getFilename()?

> `optional` **getFilename**: (`format`) => `string`

Custom filename generator

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `format` | `"svg"` | `"png"` | The export format ('png' or 'svg') |

#### Returns

`string`

The filename to use for the download

***

### className?

> `optional` **className**: `string`

Additional CSS classes for the trigger button
