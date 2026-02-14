---
url: /api/monaco-editor/functions/configureMonacoLoader.md
---
[@sqlrooms/monaco-editor](../index.md) / configureMonacoLoader

# Function: configureMonacoLoader()

> **configureMonacoLoader**(`options`): `void`

Configures the Monaco loader for bundling Monaco with your application.
Call this once at app startup to enable offline use across all editor components.

After calling this, all MonacoEditor components will automatically use the bundled version
without needing the `bundleMonaco` prop.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`MonacoLoaderOptions`](../interfaces/MonacoLoaderOptions.md) |

## Returns

`void`

## Example

```ts
import {configureMonacoLoader} from '@sqlrooms/monaco-editor';
import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';

configureMonacoLoader({
  monaco,
  workers: { default: editorWorker }
});
```
