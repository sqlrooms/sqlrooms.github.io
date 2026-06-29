---
url: >-
  https://sqlrooms.org/api/app-runtime/type-aliases/RestoreHtmlAppRevisionMetadata.md
---
[@sqlrooms/app-runtime](../index.md) / RestoreHtmlAppRevisionMetadata

# Type Alias: RestoreHtmlAppRevisionMetadata

> **RestoreHtmlAppRevisionMetadata** = `Omit`<[`CommitHtmlAppRevisionMetadata`](CommitHtmlAppRevisionMetadata.md), `"source"` | `"parentRevisionId"` | `"clearRedo"`>

Metadata accepted when restoring an existing revision.

Restore operations always create a new revision with `source: "restore"`,
parent it to the revision that was active at restore time, and clear redo
history.
