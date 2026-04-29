---
url: 'https://sqlrooms.org/api/artifacts.md'
---
# @sqlrooms/artifacts

`@sqlrooms/artifacts` provides a room-store slice and React/layout helpers for
workspace artifacts such as dashboards, notebooks, canvas documents, pivot
tables, and apps.

Artifacts are durable workspace entries. Artifact tabs are the layout/UI adapter
for opening, closing, renaming, reordering, searching, and deleting those
entries.

## Usage

```tsx
import {
  ArtifactTabs,
  ArtifactsSliceConfig,
  createArtifactPanelDefinition,
  createArtifactsSlice,
  defineArtifactTypes,
} from '@sqlrooms/artifacts';

const artifactTypes = defineArtifactTypes({
  notebook: {
    label: 'Notebook',
    defaultTitle: 'Notebook',
    icon: FileTextIcon,
    component: NotebookPanel,
    onCreate: ({artifactId, store}) => {
      store.getState().notebook.ensureArtifact(artifactId);
    },
    onEnsure: ({artifactId, store}) => {
      store.getState().notebook.ensureArtifact(artifactId);
    },
    onDelete: ({artifactId, store}) => {
      store.getState().notebook.removeArtifact(artifactId);
    },
  },
});

const store = createRoomStore<RoomState>(
  persistSliceConfigs(
    {
      name: 'my-room',
      sliceConfigSchemas: {
        artifacts: ArtifactsSliceConfig,
      },
    },
    (set, get, store) => ({
      ...createArtifactsSlice<RoomState>({artifactTypes})(set, get, store),
      layout: {
        panels: {
          artifact: createArtifactPanelDefinition(artifactTypes, store),
        },
      },
    }),
  ),
);
```

```tsx
<ArtifactTabs types={['notebook']} panelKey="artifact">
  <ArtifactTabs.SearchDropdown />
  <ArtifactTabs.Tabs />
  <ArtifactTabs.NewButton artifactType="notebook" />
</ArtifactTabs>
```

Use `ArtifactTabs.useActions()` from custom subcomponents when you need access
to the tab adapter actions, and use `overlay` for dialogs or other elements that
need that context without being rendered inside the tab strip.

## Slice API

Config uses artifact terminology throughout:

* `artifacts.config.artifactsById`

* `artifacts.config.artifactOrder`

* `artifacts.config.currentArtifactId`

* `artifacts.createArtifact({type, title?, id?})`

* `artifacts.ensureArtifact(id, {type, title?})`

* `artifacts.renameArtifact(id, title)`

* `artifacts.closeArtifact(id)`

* `artifacts.deleteArtifact(id)`

* `artifacts.setCurrentArtifact(id?)`

* `artifacts.setArtifactOrder(order)`

* `artifacts.getArtifact(id)`

`closeArtifact` is non-destructive. It runs close lifecycle cleanup, while the
tab adapter hides the layout tab so it can be reopened from search.

`deleteArtifact` is destructive. It runs close and delete lifecycle hooks, then
removes the artifact registry entry.

## Artifact Tabs

* `useArtifactTabs({tabsId?, types?, panelKey?})` returns TabStrip-compatible
  descriptors, open tab ids, selected id, and handlers.
* `ArtifactTabs` is a compound component over `TabStrip` and
  `TabsLayout.TabContent`.
* `ArtifactTabs.useActions()` exposes the current tab adapter actions to custom
  subcomponents rendered under `ArtifactTabs`.
* `createArtifactLayoutNode(artifactId, panelKey?)` creates a stable layout
  panel node for an artifact.
* `createArtifactPanelDefinition(artifactTypes, store)` resolves artifact panel
  titles, icons, and components from the runtime type registry.

Type definitions are runtime configuration and are not persisted.

## Type Aliases

* [ArtifactLifecycleContext](type-aliases/ArtifactLifecycleContext.md)
* [ArtifactRenameLifecycleContext](type-aliases/ArtifactRenameLifecycleContext.md)
* [ArtifactTypeDefinition](type-aliases/ArtifactTypeDefinition.md)
* [ArtifactTypeDefinitions](type-aliases/ArtifactTypeDefinitions.md)
* [ArtifactsSliceState](type-aliases/ArtifactsSliceState.md)
* [CreateArtifactsSliceProps](type-aliases/CreateArtifactsSliceProps.md)
* [RoomStateWithArtifacts](type-aliases/RoomStateWithArtifacts.md)
* [RoomStateWithArtifactsAndLayout](type-aliases/RoomStateWithArtifactsAndLayout.md)
* [ArtifactType](type-aliases/ArtifactType.md)
* [ArtifactMetadata](type-aliases/ArtifactMetadata.md)
* [ArtifactsSliceConfig](type-aliases/ArtifactsSliceConfig.md)
* [ArtifactTabDescriptor](type-aliases/ArtifactTabDescriptor.md)
* [UseArtifactTabsOptions](type-aliases/UseArtifactTabsOptions.md)
* [UseArtifactTabsResult](type-aliases/UseArtifactTabsResult.md)
* [ArtifactTabsProps](type-aliases/ArtifactTabsProps.md)

## Variables

* [ArtifactType](variables/ArtifactType.md)
* [ArtifactMetadata](variables/ArtifactMetadata.md)
* [ArtifactsSliceConfig](variables/ArtifactsSliceConfig.md)
* [ArtifactTabs](variables/ArtifactTabs.md)

## Functions

* [defineArtifactTypes](functions/defineArtifactTypes.md)
* [createArtifactsSlice](functions/createArtifactsSlice.md)
* [useStoreWithArtifacts](functions/useStoreWithArtifacts.md)
* [useStoreWithArtifactsAndLayout](functions/useStoreWithArtifactsAndLayout.md)
* [createArtifactLayoutNode](functions/createArtifactLayoutNode.md)
* [createArtifactPanelDefinition](functions/createArtifactPanelDefinition.md)
* [useArtifactTabs](functions/useArtifactTabs.md)

## References

### ArtifactMetadataType

Renames and re-exports [ArtifactMetadata](variables/ArtifactMetadata.md)

***

### ArtifactsSliceConfigType

Renames and re-exports [ArtifactsSliceConfig](variables/ArtifactsSliceConfig.md)

***

### ArtifactTypeType

Renames and re-exports [ArtifactType](variables/ArtifactType.md)
