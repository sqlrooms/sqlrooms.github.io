---
url: 'https://sqlrooms.org/api/app-runtime/variables/HtmlAppRevision.md'
---
[@sqlrooms/app-runtime](../index.md) / HtmlAppRevision

# Variable: HtmlAppRevision

> `const` **HtmlAppRevision**: `ZodObject`<[`HtmlAppRevision`](../type-aliases/HtmlAppRevision.md)>

Persisted source-bearing snapshot for an HTML app.

Revisions store the source, title, intent, dependencies, and capability
grants needed to replay undo, redo, and restore operations without depending
on the live app state. Diagnostics are intentionally excluded because they
describe runtime observations that can be regenerated for the active source.
