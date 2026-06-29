---
url: 'https://sqlrooms.org/api/artifacts/functions/createArtifactLayoutNode.md'
---
[@sqlrooms/artifacts](../index.md) / createArtifactLayoutNode

# Function: createArtifactLayoutNode()

> **createArtifactLayoutNode**(`artifactId`, `panelKey?`): `object`

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `artifactId` | `string` | `undefined` |
| `panelKey` | `string` | `DEFAULT_ARTIFACT_PANEL_KEY` |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `defaultSize?` | `string` | `number` |
| `minSize?` | `string` | `number` |
| `maxSize?` | `string` | `number` |
| `collapsedSize?` | `string` | `number` |
| `collapsible?` | `boolean` |
| `type` | `"panel"` |
| `id` | `string` |
| `panel?` | `string` | { `key`: `string`; `meta?`: `Record`<`string`, `unknown`>; } |
| `title?` | `string` |
| `collapsed?` | `boolean` |
