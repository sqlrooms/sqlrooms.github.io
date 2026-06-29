---
url: 'https://sqlrooms.org/api/vega/functions/createChartImageForMarkdownTool.md'
---
[@sqlrooms/vega](../index.md) / createChartImageForMarkdownTool

# Function: createChartImageForMarkdownTool()

> **createChartImageForMarkdownTool**<`S`>(`store`): `Tool`<{ `documentArtifactId`: `string`; `sourceToolCallId?`: `string`; `sqlQuery?`: `string`; `vegaLiteSpec?`: `string`; `format`: `"svg"` | `"png"`; `assetId?`: `string`; `alt`: `string`; `title?`: `string`; `width`: `number`; `height`: `number`; `pngScale`: `number`; `renderTheme`: `"light"` | `"dark"`; `background?`: `string`; }, { `success`: `false`; `details`: `string`; `documentArtifactId`: `string`; `error`: `string`; `assetId?`: `undefined`; `markdown?`: `undefined`; `mediaType?`: `undefined`; `encoding?`: `undefined`; `format?`: `undefined`; `renderTheme?`: `undefined`; `background?`: `undefined`; } | { `success`: `true`; `details`: `string`; `documentArtifactId`: `string`; `assetId`: `string`; `markdown`: `string`; `mediaType`: `"image/svg+xml"` | `"image/png"`; `encoding`: `"utf8"` | `"base64"`; `format`: `"svg"` | `"png"`; `renderTheme`: `"light"` | `"dark"`; `background`: `string`; `error?`: `undefined`; }>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `S` *extends* `ChartImageToolState` | `ChartImageToolState` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | `StoreLike`<`S`> |

## Returns

`Tool`<{ `documentArtifactId`: `string`; `sourceToolCallId?`: `string`; `sqlQuery?`: `string`; `vegaLiteSpec?`: `string`; `format`: `"svg"` | `"png"`; `assetId?`: `string`; `alt`: `string`; `title?`: `string`; `width`: `number`; `height`: `number`; `pngScale`: `number`; `renderTheme`: `"light"` | `"dark"`; `background?`: `string`; }, { `success`: `false`; `details`: `string`; `documentArtifactId`: `string`; `error`: `string`; `assetId?`: `undefined`; `markdown?`: `undefined`; `mediaType?`: `undefined`; `encoding?`: `undefined`; `format?`: `undefined`; `renderTheme?`: `undefined`; `background?`: `undefined`; } | { `success`: `true`; `details`: `string`; `documentArtifactId`: `string`; `assetId`: `string`; `markdown`: `string`; `mediaType`: `"image/svg+xml"` | `"image/png"`; `encoding`: `"utf8"` | `"base64"`; `format`: `"svg"` | `"png"`; `renderTheme`: `"light"` | `"dark"`; `background`: `string`; `error?`: `undefined`; }>
