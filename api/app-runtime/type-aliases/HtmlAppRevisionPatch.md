---
url: 'https://sqlrooms.org/api/app-runtime/type-aliases/HtmlAppRevisionPatch.md'
---
[@sqlrooms/app-runtime](../index.md) / HtmlAppRevisionPatch

# Type Alias: HtmlAppRevisionPatch

> **HtmlAppRevisionPatch** = `Partial`<`Pick`<[`HtmlAppState`](HtmlAppState.md), `"title"` | `"intent"` | `"files"` | `"entryHtmlPath"` | `"dependencies"` | `"requestedCapabilities"` | `"grantedCapabilities"` | `"diagnostics"`>>

Partial state update used to create an HTML app revision.

Omitted fields keep their current app value. Fields present with an explicit
`undefined` value can clear optional revision fields such as `intent`.
