---
url: 'https://sqlrooms.org/api/artifacts/type-aliases/UseArtifactWorkspaceOptions.md'
---
[@sqlrooms/artifacts](../index.md) / UseArtifactWorkspaceOptions

# Type Alias: UseArtifactWorkspaceOptions

> **UseArtifactWorkspaceOptions** = `object`

Options for `useArtifactWorkspace`.

## Properties

### types?

> `optional` **types?**: readonly `string`\[]

Optional artifact type allowlist managed by this workspace.

When omitted, the workspace manages every artifact type registered in the
room's artifacts slice.

***

### selectFallback?

> `optional` **selectFallback?**: [`ArtifactWorkspaceSelectFallback`](ArtifactWorkspaceSelectFallback.md)

Selection behavior when the persisted current artifact is missing or not
managed by this workspace.

Defaults to `first`, which selects the first managed artifact and clears
the current artifact when no managed artifact exists.
