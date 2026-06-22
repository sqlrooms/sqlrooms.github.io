---
url: 'https://sqlrooms.org/api/kepler/functions/migrateKeplerTabsToArtifacts.md'
---
[@sqlrooms/kepler](../index.md) / migrateKeplerTabsToArtifacts

# Function: migrateKeplerTabsToArtifacts()

> **migrateKeplerTabsToArtifacts**(`input`, `options?`): `object`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `unknown` |
| `options?` | [`KeplerTabsArtifactsMigrationOptions`](../type-aliases/KeplerTabsArtifactsMigrationOptions.md) |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `keplerConfig` | { `maps`: `object`\[]; } |
| `artifactsConfig` | { `artifactsById`: {\[`k`: `string`]: `object`; }; `artifactOrder`: `string`\[]; `currentArtifactId`: `string` | `undefined`; } |
| `hiddenArtifactIds` | `string`\[] |
