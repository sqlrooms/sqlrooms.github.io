---
url: 'https://sqlrooms.org/api/webcontainer/type-aliases/WebContainerSliceState.md'
---
[@sqlrooms/webcontainer](../index.md) / WebContainerSliceState

# Type Alias: WebContainerSliceState

> **WebContainerSliceState** = `object`

## Properties

### webContainer

> **webContainer**: `object`

| Name | Type | Description |
| ------ | ------ | ------ |
| `config` | [`WebContainerSliceConfig`](WebContainerSliceConfig.md) | - |
| `instance` | `WebContainer` | `null` | - |
| `output` | `string` | - |
| `serverStatus` | { `type`: `"not-initialized"`; } | { `type`: `"initializing"`; } | { `type`: `"starting-dev"`; } | { `type`: `"install-deps"`; } | { `type`: `"ready"`; `url`: `string`; } | { `type`: `"error"`; `error`: `unknown`; } | - |
| `initialize()` | (`opts?`) => `Promise`<`void`> | - |
| `installDependencies()` | () => `Promise`<`number`> |  |
| `startDevServer()` | () => `Promise`<`void`> |  |
| `resolveProjectRoot()` | () => `Promise`<`string`> | - |
| `getFileContent()` | (`path`) => `Promise`<`string`> | Get the most recent content for a file. If the file is open, returns the in-memory (possibly unsaved) content. Otherwise, loads the content from the webcontainer FS. |
| `executeBashCommand()` | (`command`) => `Promise`<{ `exitCode`: `number`; `stdout`: `string`; `stderr`: `string`; `durationMs`: `number`; }> | - |
| `openFile()` | (`path`, `content?`) => `Promise`<`void`> | - |
| `closeFile()` | (`path`) => `void` | - |
| `setActiveFile()` | (`path`) => `void` | - |
| `updateFileContent()` | (`path`, `content`) => `void` | - |
| `saveAllOpenFiles()` | () => `Promise`<`void`> | - |
| `hasDirtyFiles()` | () => `boolean` | - |
| `applyFilesTree()` | (`args`) => `Promise`<`void`> | - |
| `runCommand()` | (`command`, `args?`, `opts?`) => `Promise`<{ `exitCode`: `number`; `stdout`: `string`; `stderr`: `string`; `durationMs`: `number`; }> | - |
| `probeCapabilities()` | (`commands?`) => `Promise`<`Record`<`string`, `boolean`>> | - |
| `capabilities` | `Record`<`string`, `boolean`> | - |
| `commandHistory` | `object`\[] | - |
| `lastCommandStatus` | { `type`: `"idle"`; } | { `type`: `"running"`; `command`: `string`; `args`: `string`\[]; `startedAt`: `number`; } | { `type`: `"finished"`; `command`: `string`; `args`: `string`\[]; `exitCode`: `number`; `durationMs`: `number`; } | - |
