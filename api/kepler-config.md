---
url: 'https://sqlrooms.org/api/kepler-config.md'
---
# @sqlrooms/kepler-config

Zod schemas for persisted Kepler slice state used by `@sqlrooms/kepler`.

## Installation

```bash
npm install @sqlrooms/kepler-config
```

## Exports

* `KeplerMapSchema`
* `KeplerSliceConfig`
* `migrateKeplerTabsToArtifacts`

`KeplerSliceConfig` is the top-level container schema for persisted Kepler map
state. Use `KeplerMapSchema` when constructing or validating each individual map
object inside that container (for example: layers, datasource bindings, and
viewport settings).

## Usage

Use these schemas when validating or persisting Kepler state:

```ts
import {KeplerSliceConfig} from '@sqlrooms/kepler-config';

const parsed = KeplerSliceConfig.parse(rawKeplerConfig);
```

## Artifact Tabs Migration

Use `migrateKeplerTabsToArtifacts` when moving an app from Kepler-owned map tabs
(`maps`, `openTabs`, `currentMapId`) to `@sqlrooms/artifacts` tabs.

```ts
import {migrateKeplerTabsToArtifacts} from '@sqlrooms/kepler-config';

const migrated = migrateKeplerTabsToArtifacts(rawKeplerConfig, {
  artifactType: 'kepler-map',
});

// Persist these into their corresponding slices:
migrated.keplerConfig;
migrated.artifactsConfig;

// Apply these ids to your layout tabs node's hiddenChildren if you need to
// preserve tabs that were closed under the old Kepler tab model.
migrated.hiddenArtifactIds;
```

Example with SQLRooms persistence:

```ts
import {KeplerSliceConfig} from '@sqlrooms/kepler-config';
import {createRoomStore, persistSliceConfigs} from '@sqlrooms/room-shell';

const persistence = {
  name: 'my-app-storage',
  sliceConfigSchemas: {
    kepler: KeplerSliceConfig,
  },
};

createRoomStore(
  persistSliceConfigs(persistence, (set, get, store) => ({
    // ...your slices here
  })),
);
```

## Related package

* `@sqlrooms/kepler` for runtime Kepler slice and React components

## Type Aliases

* [KeplerMapSchema](type-aliases/KeplerMapSchema.md)
* [KeplerSliceConfig](type-aliases/KeplerSliceConfig.md)
* [KeplerTabsArtifactsMigrationOptions](type-aliases/KeplerTabsArtifactsMigrationOptions.md)

## Variables

* [KeplerMapSchema](variables/KeplerMapSchema.md)
* [KeplerSliceConfig](variables/KeplerSliceConfig.md)

## Functions

* [migrateKeplerTabsToArtifacts](functions/migrateKeplerTabsToArtifacts.md)
