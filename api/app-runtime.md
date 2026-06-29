---
url: 'https://sqlrooms.org/api/app-runtime.md'
---
# @sqlrooms/app-runtime

`@sqlrooms/app-runtime` defines the iframe runtime bridge used by generated
HTML apps in SQLRooms. It owns the protocol between a sandboxed app iframe and
the SQLRooms host; it does not own project authoring, bundling, or WebContainer
startup.

## Runtime Scope

The first supported app surface is the `html-app` stateful block. The same
bridge contract can also be reused by artifact shells and WebContainer previews,
but the block remains the durable v1 state model.

The app-facing API is intentionally small:

```js
const result = await window.sqlrooms.query(
  'select region, sum(revenue) as revenue from sales group by region',
);
console.log(result.rows);
```

TypeScript apps may use the client entrypoint:

```ts
import {createAppClient} from '@sqlrooms/app-runtime/client';

const app = createAppClient();
const result = await app.query('select * from sales limit 100');
```

## Threat Model

Generated apps are treated as untrusted code. They run in a sandboxed iframe and
must not receive direct access to DuckDB connectors, the room store, filesystem
APIs, host DOM nodes, command execution, or mutation-capable host services.

The host grants explicit capabilities and handles every request. The initial
capability set is deliberately narrow:

* read-only `query`
* optional table/schema discovery
* optional initial data payloads

The v1 runtime explicitly excludes:

* write queries
* filesystem access
* host DOM access
* room store mutation
* command execution
* network access as an app-runtime capability

Read-only query handling starts with `state.db.sqlSelectToJson` as the SQL
classification gate. Hosts should additionally enforce single-statement input,
row limits, timeout handling, and JSON-serializable result bounds before data
crosses into the iframe.

## Relation To WebContainer

`@sqlrooms/webcontainer` answers how a generated project is authored, edited,
built, and served. `@sqlrooms/app-runtime` answers what a rendered app can ask
the SQLRooms host to do.

WebContainer previews can attach the same host bridge to their preview iframe,
and generated Vite apps can import the client entrypoint or use an injected
`window.sqlrooms` global. WebContainer should not grow its own separate data
bridge.

Revision history follows the same boundary. The v1 revision model belongs to
persisted `html-app` runtime state and does not migrate or version legacy
WebContainer app project records such as `appProject.config.appsByArtifactId`.
Those projects can be migrated to `html-app` state later, but they should not
drive the shared runtime history API.

## HTML App Blocks

The `html-app` block stores a small source file map instead of one opaque HTML
string:

```ts
{
  "/index.html": "<!doctype html>...",
  "/src/app.js": "..."
}
```

`entryHtmlPath` points at the HTML file rendered through `iframe.srcdoc`; the
default is `/index.html`. The host injects the app-runtime prelude before user
scripts run, so generated apps can call:

`HtmlAppState.intent` can store the durable natural-language objective for a
generated or edited app. Prefer this over storing raw model input in app state.

```js
const {rows, columns, truncated} = await window.sqlrooms.query(
  'select category, count(*) as n from events group by category',
);
```

`queryRows(sql)` is available when an app only needs the plain object rows.

Dependencies are persisted as structured package/version entries:

```ts
[
  {
    package: 'd3',
    version: '7.9.0',
    entry: 'dist/d3.min.js',
    kind: 'script',
    global: 'd3',
  },
];
```

The v1 resolver turns these into jsDelivr URLs at render time. Persisted state
keeps the structured entries so a future resolver can use import maps, bundling,
local caching, or another dependency policy without rewriting app state.

## Revision History

`html-app` state persists source revisions alongside the current source:

```ts
type HtmlAppRevision = {
  id: string;
  name: string;
  description?: string;
  sourcePrompt?: string;
  source: 'assistant' | 'user' | 'restore' | 'system';
  sessionId?: string;
  toolCallId?: string;
  commitGroupId?: string;
  parentRevisionId?: string;
  createdAt: number;
  title: string;
  intent?: string;
  files: Record<string, string>;
  entryHtmlPath: string;
  requestedCapabilities?: AppCapability[];
  grantedCapabilities?: AppCapability[];
  dependencies: HtmlAppDependency[];
};
```

Persisted `HtmlAppState` includes `revisions`, `activeRevisionId`, and
`redoRevisionIds`. Older app states parse with empty history by default, so
hosts can adopt revision-aware writes without a separate storage migration.
Diagnostics are not stored in revisions because they describe current runtime
observations and can be regenerated after restore or preview.

Query results are JSON-serializable:

```ts
type QueryResult = {
  rows: Record<string, unknown>[];
  columns: {name: string; type?: string}[];
  rowCount: number;
  truncated: boolean;
  executionMs?: number;
};
```

The host enforces read-only `SELECT` parsing, a single statement, row limits,
and request timeouts before returning data to the iframe.

## Later Capability Boundaries

The v1 bridge intentionally stops at bounded JSON query results. The following
capabilities should remain out of the runtime until the read-only query path has
proven useful and each addition has an explicit capability contract:

* `queryArrow()` or streaming query results
* selected artifact or block context reads
* command invocation through SQLRooms command registries
* generated asset save/export
* mutation or write queries with user confirmation
* dependency bundling, import maps, or local dependency caching

Those features should reuse the same request/response and diagnostic protocol
rather than adding a second app-to-host channel.

## Classes

* [AppRuntimeError](/api/app-runtime/classes/AppRuntimeError.md)

## Type Aliases

* [AppRuntimeClient](/api/app-runtime/type-aliases/AppRuntimeClient.md)
* [CreateAppClientOptions](/api/app-runtime/type-aliases/CreateAppClientOptions.md)
* [AppRuntimeHost](/api/app-runtime/type-aliases/AppRuntimeHost.md)
* [AppRuntimeHostHandlers](/api/app-runtime/type-aliases/AppRuntimeHostHandlers.md)
* [CreateBridgeHostOptions](/api/app-runtime/type-aliases/CreateBridgeHostOptions.md)
* [CreateDiagnosticPreludeScriptOptions](/api/app-runtime/type-aliases/CreateDiagnosticPreludeScriptOptions.md)
* [HtmlAppDependency](/api/app-runtime/type-aliases/HtmlAppDependency.md)
* [HtmlAppSourceFileMap](/api/app-runtime/type-aliases/HtmlAppSourceFileMap.md)
* [HtmlAppRevisionSource](/api/app-runtime/type-aliases/HtmlAppRevisionSource.md)
* [HtmlAppRevision](/api/app-runtime/type-aliases/HtmlAppRevision.md)
* [HtmlAppState](/api/app-runtime/type-aliases/HtmlAppState.md)
* [HtmlAppRevisionPatch](/api/app-runtime/type-aliases/HtmlAppRevisionPatch.md)
* [CommitHtmlAppRevisionMetadata](/api/app-runtime/type-aliases/CommitHtmlAppRevisionMetadata.md)
* [RestoreHtmlAppRevisionMetadata](/api/app-runtime/type-aliases/RestoreHtmlAppRevisionMetadata.md)
* [HtmlAppRevisionNavigationState](/api/app-runtime/type-aliases/HtmlAppRevisionNavigationState.md)
* [HtmlAppRuntimeConfig](/api/app-runtime/type-aliases/HtmlAppRuntimeConfig.md)
* [HtmlAppRuntimeSliceState](/api/app-runtime/type-aliases/HtmlAppRuntimeSliceState.md)
* [HtmlAppRuntimeQueryState](/api/app-runtime/type-aliases/HtmlAppRuntimeQueryState.md)
* [CreateHtmlAppRuntimeSliceOptions](/api/app-runtime/type-aliases/CreateHtmlAppRuntimeSliceOptions.md)
* [HtmlAppBlockProps](/api/app-runtime/type-aliases/HtmlAppBlockProps.md)
* [CreateHtmlAppBlockDefinitionOptions](/api/app-runtime/type-aliases/CreateHtmlAppBlockDefinitionOptions.md)
* [AppCapability](/api/app-runtime/type-aliases/AppCapability.md)
* [AppDiagnosticLevel](/api/app-runtime/type-aliases/AppDiagnosticLevel.md)
* [AppDiagnosticSource](/api/app-runtime/type-aliases/AppDiagnosticSource.md)
* [AppDiagnostic](/api/app-runtime/type-aliases/AppDiagnostic.md)
* [QueryRequest](/api/app-runtime/type-aliases/QueryRequest.md)
* [QueryColumn](/api/app-runtime/type-aliases/QueryColumn.md)
* [QueryResult](/api/app-runtime/type-aliases/QueryResult.md)
* [RuntimeErrorCode](/api/app-runtime/type-aliases/RuntimeErrorCode.md)
* [RuntimeErrorPayload](/api/app-runtime/type-aliases/RuntimeErrorPayload.md)
* [RuntimeRequestMethod](/api/app-runtime/type-aliases/RuntimeRequestMethod.md)
* [RuntimeRequestMessage](/api/app-runtime/type-aliases/RuntimeRequestMessage.md)
* [RuntimeResponseMessage](/api/app-runtime/type-aliases/RuntimeResponseMessage.md)
* [RuntimeDiagnosticMessage](/api/app-runtime/type-aliases/RuntimeDiagnosticMessage.md)
* [RuntimeMessage](/api/app-runtime/type-aliases/RuntimeMessage.md)

## Variables

* [HTML\_APP\_BLOCK\_TYPE](/api/app-runtime/variables/HTML_APP_BLOCK_TYPE.md)
* [HtmlAppDependency](/api/app-runtime/variables/HtmlAppDependency.md)
* [HtmlAppSourceFileMap](/api/app-runtime/variables/HtmlAppSourceFileMap.md)
* [HtmlAppRevisionSource](/api/app-runtime/variables/HtmlAppRevisionSource.md)
* [HtmlAppRevision](/api/app-runtime/variables/HtmlAppRevision.md)
* [HtmlAppState](/api/app-runtime/variables/HtmlAppState.md)
* [HtmlAppRuntimeConfig](/api/app-runtime/variables/HtmlAppRuntimeConfig.md)
* [HtmlAppBlock](/api/app-runtime/variables/HtmlAppBlock.md)
* [APP\_RUNTIME\_PROTOCOL\_VERSION](/api/app-runtime/variables/APP_RUNTIME_PROTOCOL_VERSION.md)
* [APP\_RUNTIME\_MESSAGE\_TYPE](/api/app-runtime/variables/APP_RUNTIME_MESSAGE_TYPE.md)
* [AppCapability](/api/app-runtime/variables/AppCapability.md)
* [AppDiagnosticLevel](/api/app-runtime/variables/AppDiagnosticLevel.md)
* [AppDiagnosticSource](/api/app-runtime/variables/AppDiagnosticSource.md)
* [AppDiagnostic](/api/app-runtime/variables/AppDiagnostic.md)
* [QueryRequest](/api/app-runtime/variables/QueryRequest.md)
* [QueryColumn](/api/app-runtime/variables/QueryColumn.md)
* [QueryResult](/api/app-runtime/variables/QueryResult.md)
* [RuntimeErrorCode](/api/app-runtime/variables/RuntimeErrorCode.md)
* [RuntimeErrorPayload](/api/app-runtime/variables/RuntimeErrorPayload.md)
* [RuntimeRequestMethod](/api/app-runtime/variables/RuntimeRequestMethod.md)
* [RuntimeRequestMessage](/api/app-runtime/variables/RuntimeRequestMessage.md)
* [RuntimeResponseMessage](/api/app-runtime/variables/RuntimeResponseMessage.md)
* [RuntimeDiagnosticMessage](/api/app-runtime/variables/RuntimeDiagnosticMessage.md)
* [RuntimeMessage](/api/app-runtime/variables/RuntimeMessage.md)

## Functions

* [createAppClient](/api/app-runtime/functions/createAppClient.md)
* [installGlobalClient](/api/app-runtime/functions/installGlobalClient.md)
* [createBridgeHost](/api/app-runtime/functions/createBridgeHost.md)
* [createDiagnosticPreludeScript](/api/app-runtime/functions/createDiagnosticPreludeScript.md)
* [createHtmlAppRuntimeSlice](/api/app-runtime/functions/createHtmlAppRuntimeSlice.md)
* [commitHtmlAppRevisionState](/api/app-runtime/functions/commitHtmlAppRevisionState.md)
* [restoreHtmlAppRevisionState](/api/app-runtime/functions/restoreHtmlAppRevisionState.md)
* [undoHtmlAppRevisionState](/api/app-runtime/functions/undoHtmlAppRevisionState.md)
* [redoHtmlAppRevisionState](/api/app-runtime/functions/redoHtmlAppRevisionState.md)
* [getCurrentHtmlAppRevision](/api/app-runtime/functions/getCurrentHtmlAppRevision.md)
* [getHtmlAppRevisionList](/api/app-runtime/functions/getHtmlAppRevisionList.md)
* [getHtmlAppRevisionNavigationState](/api/app-runtime/functions/getHtmlAppRevisionNavigationState.md)
* [createHtmlAppBlockDefinition](/api/app-runtime/functions/createHtmlAppBlockDefinition.md)
* [createDefaultHtmlAppFiles](/api/app-runtime/functions/createDefaultHtmlAppFiles.md)
* [resolveHtmlAppDependencyUrl](/api/app-runtime/functions/resolveHtmlAppDependencyUrl.md)
* [createHtmlAppSrcDoc](/api/app-runtime/functions/createHtmlAppSrcDoc.md)
* [executeReadonlyQuery](/api/app-runtime/functions/executeReadonlyQuery.md)
* [createRuntimeRequest](/api/app-runtime/functions/createRuntimeRequest.md)
* [createRuntimeResponse](/api/app-runtime/functions/createRuntimeResponse.md)
* [createRuntimeErrorResponse](/api/app-runtime/functions/createRuntimeErrorResponse.md)
* [createRuntimeDiagnostic](/api/app-runtime/functions/createRuntimeDiagnostic.md)

## References

### AppCapabilityType

Renames and re-exports [AppCapability](/api/app-runtime/variables/AppCapability.md)

***

### AppDiagnosticType

Renames and re-exports [AppDiagnostic](/api/app-runtime/variables/AppDiagnostic.md)

***

### AppDiagnosticLevelType

Renames and re-exports [AppDiagnosticLevel](/api/app-runtime/variables/AppDiagnosticLevel.md)

***

### AppDiagnosticSourceType

Renames and re-exports [AppDiagnosticSource](/api/app-runtime/variables/AppDiagnosticSource.md)

***

### QueryColumnType

Renames and re-exports [QueryColumn](/api/app-runtime/variables/QueryColumn.md)

***

### QueryRequestType

Renames and re-exports [QueryRequest](/api/app-runtime/variables/QueryRequest.md)

***

### QueryResultType

Renames and re-exports [QueryResult](/api/app-runtime/variables/QueryResult.md)

***

### RuntimeDiagnosticMessageType

Renames and re-exports [RuntimeDiagnosticMessage](/api/app-runtime/variables/RuntimeDiagnosticMessage.md)

***

### RuntimeErrorCodeType

Renames and re-exports [RuntimeErrorCode](/api/app-runtime/variables/RuntimeErrorCode.md)

***

### RuntimeErrorPayloadType

Renames and re-exports [RuntimeErrorPayload](/api/app-runtime/variables/RuntimeErrorPayload.md)

***

### RuntimeMessageType

Renames and re-exports [RuntimeMessage](/api/app-runtime/variables/RuntimeMessage.md)

***

### RuntimeRequestMessageType

Renames and re-exports [RuntimeRequestMessage](/api/app-runtime/variables/RuntimeRequestMessage.md)

***

### RuntimeRequestMethodType

Renames and re-exports [RuntimeRequestMethod](/api/app-runtime/variables/RuntimeRequestMethod.md)

***

### RuntimeResponseMessageType

Renames and re-exports [RuntimeResponseMessage](/api/app-runtime/variables/RuntimeResponseMessage.md)

***

### HtmlAppDependencyType

Renames and re-exports [HtmlAppDependency](/api/app-runtime/variables/HtmlAppDependency.md)

***

### HtmlAppRevisionType

Renames and re-exports [HtmlAppRevision](/api/app-runtime/variables/HtmlAppRevision.md)

***

### HtmlAppRevisionSourceType

Renames and re-exports [HtmlAppRevisionSource](/api/app-runtime/variables/HtmlAppRevisionSource.md)

***

### HtmlAppRuntimeConfigType

Renames and re-exports [HtmlAppRuntimeConfig](/api/app-runtime/variables/HtmlAppRuntimeConfig.md)

***

### HtmlAppSourceFileMapType

Renames and re-exports [HtmlAppSourceFileMap](/api/app-runtime/variables/HtmlAppSourceFileMap.md)

***

### HtmlAppStateType

Renames and re-exports [HtmlAppState](/api/app-runtime/variables/HtmlAppState.md)
