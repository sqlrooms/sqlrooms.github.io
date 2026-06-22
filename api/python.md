---
url: 'https://sqlrooms.org/api/python.md'
---
# @sqlrooms/python

Python runtime and block primitives for SQLRooms worksheets and block documents.

This package provides:

* persisted Python block state schemas for code, inputs, outputs, requirements,
  execution policy, and bounded last-result summaries
* `createPythonSlice()` for durable block state and runtime result updates
* a Pyodide worker runtime adapter with SQLRooms host-query bridge support
* `PythonBlock` and `createPythonBlockDefinition()` for embeddable
  worksheet/document blocks
* `createPythonBlockCommands()` for command-backed create, update, run, and
  clear operations

If no runtime adapter is configured, running a block records a bounded error
result instead of executing hidden Python.

## Store setup

```tsx
import {
  createPythonSlice,
  PythonSliceConfig,
  type PythonSliceState,
} from '@sqlrooms/python/block';

type RoomState = PythonSliceState;

const sliceConfigSchemas = {
  python: PythonSliceConfig,
};

const storeSlices = {
  ...createPythonSlice()(set, get, store),
};
```

## Runtime adapters

Adapters implement a small execution interface:

```ts
const adapter = {
  id: 'pyodide',
  status: async () => ({state: 'ready'}),
  execute: async (request, host) => ({
    executionId: request.executionId,
    status: 'success',
    stdout: '',
    stderr: '',
    outputs: [{type: 'json', name: 'result', value: 42}],
    durationMs: 5,
  }),
};
```

Pass the adapter to `createPythonSlice({runtimeAdapter: adapter})`.

The bundled Pyodide adapter captures the global `result` value, or the final
expression value when no `result` global is assigned. It returns JSON, text,
HTML, and Vega-Lite outputs when Python objects expose common rich-display
methods such as `_repr_mimebundle_()`, `_repr_html_()`, or Altair `to_dict()`.
HTML and Vega-Lite previews are rendered in sandboxed iframes by
`PythonBlock`.

When user code imports `altair`, the Pyodide worker installs Altair on demand
through `micropip`. The SQLRooms bridge exposes `sqlrooms.query()` and
`sqlrooms.query_df()` as pandas DataFrames, so query results can be passed
directly to libraries such as Altair. Use `sqlrooms.query_records()` for plain
row records and `sqlrooms.query_raw()` when column metadata or `rowCount` is
needed.

## Export paths

* `@sqlrooms/python/runtime` exports runtime contracts and the Pyodide adapter.
* `@sqlrooms/python/block` exports the React block, Zustand slice, commands,
  and block-facing state schemas.
* `@sqlrooms/python` is the curated root entrypoint.

## Worksheet commands

Use `createPythonBlockCommands({commandNamespace: 'worksheet'})` alongside the
worksheet block-document commands to expose:

* `worksheet.add-python-block`
* `worksheet.update-python-block-code`
* `worksheet.run-python-block`
* `worksheet.clear-python-block-result`

## Type Aliases

* [CreatePyodidePythonRuntimeAdapterOptions](/api/python/type-aliases/CreatePyodidePythonRuntimeAdapterOptions.md)
* [PythonBlockRenderProps](/api/python/type-aliases/PythonBlockRenderProps.md)
* [PythonBlockProps](/api/python/type-aliases/PythonBlockProps.md)
* [CreatePythonBlockDefinitionOptions](/api/python/type-aliases/CreatePythonBlockDefinitionOptions.md)
* [PythonBlockCommandSuffix](/api/python/type-aliases/PythonBlockCommandSuffix.md)
* [CreatePythonBlockCommandsOptions](/api/python/type-aliases/CreatePythonBlockCommandsOptions.md)
* [EnsurePythonBlockOptions](/api/python/type-aliases/EnsurePythonBlockOptions.md)
* [PythonBlockRuntimeState](/api/python/type-aliases/PythonBlockRuntimeState.md)
* [PythonSliceState](/api/python/type-aliases/PythonSliceState.md)
* [CreatePythonSliceOptions](/api/python/type-aliases/CreatePythonSliceOptions.md)
* [PythonRuntimeAdapterKind](/api/python/type-aliases/PythonRuntimeAdapterKind.md)
* [PythonExecutionStatus](/api/python/type-aliases/PythonExecutionStatus.md)
* [PythonInput](/api/python/type-aliases/PythonInput.md)
* [PythonOutputDeclaration](/api/python/type-aliases/PythonOutputDeclaration.md)
* [PythonRequirementSpec](/api/python/type-aliases/PythonRequirementSpec.md)
* [PythonExecutionPolicy](/api/python/type-aliases/PythonExecutionPolicy.md)
* [PythonRuntimeSpec](/api/python/type-aliases/PythonRuntimeSpec.md)
* [PythonExecutionOutput](/api/python/type-aliases/PythonExecutionOutput.md)
* [PythonExecutionError](/api/python/type-aliases/PythonExecutionError.md)
* [PythonResultSummary](/api/python/type-aliases/PythonResultSummary.md)
* [PythonBlockState](/api/python/type-aliases/PythonBlockState.md)
* [PythonSliceConfig](/api/python/type-aliases/PythonSliceConfig.md)
* [PythonExecutionRequest](/api/python/type-aliases/PythonExecutionRequest.md)
* [PythonExecutionResult](/api/python/type-aliases/PythonExecutionResult.md)
* [PythonRuntimeCapability](/api/python/type-aliases/PythonRuntimeCapability.md)
* [PythonTabularInput](/api/python/type-aliases/PythonTabularInput.md)
* [PythonTabularOutput](/api/python/type-aliases/PythonTabularOutput.md)
* [ReadonlySqlRequest](/api/python/type-aliases/ReadonlySqlRequest.md)
* [PythonSchemaRequest](/api/python/type-aliases/PythonSchemaRequest.md)
* [PythonSchemaSummary](/api/python/type-aliases/PythonSchemaSummary.md)
* [PythonTableInputSpec](/api/python/type-aliases/PythonTableInputSpec.md)
* [PythonTableOutputSpec](/api/python/type-aliases/PythonTableOutputSpec.md)
* [PythonAssetOutput](/api/python/type-aliases/PythonAssetOutput.md)
* [PythonResolvedPackageSpec](/api/python/type-aliases/PythonResolvedPackageSpec.md)
* [PythonRuntimeHost](/api/python/type-aliases/PythonRuntimeHost.md)
* [PythonRuntimeAdapter](/api/python/type-aliases/PythonRuntimeAdapter.md)

## Variables

* [PythonBlock](/api/python/variables/PythonBlock.md)
* [PYTHON\_BLOCK\_TYPE](/api/python/variables/PYTHON_BLOCK_TYPE.md)
* [PYTHON\_BLOCK\_COMMAND\_SUFFIXES](/api/python/variables/PYTHON_BLOCK_COMMAND_SUFFIXES.md)
* [PythonRuntimeAdapterKind](/api/python/variables/PythonRuntimeAdapterKind.md)
* [PythonExecutionStatus](/api/python/variables/PythonExecutionStatus.md)
* [PythonInput](/api/python/variables/PythonInput.md)
* [PythonOutputDeclaration](/api/python/variables/PythonOutputDeclaration.md)
* [PythonRequirementSpec](/api/python/variables/PythonRequirementSpec.md)
* [PythonExecutionPolicy](/api/python/variables/PythonExecutionPolicy.md)
* [PythonRuntimeSpec](/api/python/variables/PythonRuntimeSpec.md)
* [PythonExecutionOutput](/api/python/variables/PythonExecutionOutput.md)
* [PythonExecutionError](/api/python/variables/PythonExecutionError.md)
* [PythonResultSummary](/api/python/variables/PythonResultSummary.md)
* [PythonBlockState](/api/python/variables/PythonBlockState.md)
* [PythonSliceConfig](/api/python/variables/PythonSliceConfig.md)

## Functions

* [createPyodidePythonRuntimeAdapter](/api/python/functions/createPyodidePythonRuntimeAdapter.md)
* [createPythonBlockDefinition](/api/python/functions/createPythonBlockDefinition.md)
* [createPythonBlockCommands](/api/python/functions/createPythonBlockCommands.md)
* [createPythonSlice](/api/python/functions/createPythonSlice.md)
* [useStoreWithPython](/api/python/functions/useStoreWithPython.md)

## References

### PythonExecutionPolicyType

Renames and re-exports [PythonExecutionPolicy](/api/python/variables/PythonExecutionPolicy.md)

***

### PythonInputType

Renames and re-exports [PythonInput](/api/python/variables/PythonInput.md)

***

### PythonOutputDeclarationType

Renames and re-exports [PythonOutputDeclaration](/api/python/variables/PythonOutputDeclaration.md)

***

### PythonResultSummaryType

Renames and re-exports [PythonResultSummary](/api/python/variables/PythonResultSummary.md)

***

### PythonRuntimeSpecType

Renames and re-exports [PythonRuntimeSpec](/api/python/variables/PythonRuntimeSpec.md)

***

### PythonSliceConfigType

Renames and re-exports [PythonSliceConfig](/api/python/variables/PythonSliceConfig.md)

***

### PythonBlockStateType

Renames and re-exports [PythonBlockState](/api/python/variables/PythonBlockState.md)

***

### PythonExecutionErrorType

Renames and re-exports [PythonExecutionError](/api/python/variables/PythonExecutionError.md)

***

### PythonExecutionOutputType

Renames and re-exports [PythonExecutionOutput](/api/python/variables/PythonExecutionOutput.md)

***

### PythonExecutionStatusType

Renames and re-exports [PythonExecutionStatus](/api/python/variables/PythonExecutionStatus.md)

***

### PythonRequirementSpecType

Renames and re-exports [PythonRequirementSpec](/api/python/variables/PythonRequirementSpec.md)

***

### PythonRuntimeAdapterKindType

Renames and re-exports [PythonRuntimeAdapterKind](/api/python/variables/PythonRuntimeAdapterKind.md)
