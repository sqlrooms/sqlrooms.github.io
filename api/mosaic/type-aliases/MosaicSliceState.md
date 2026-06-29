---
url: 'https://sqlrooms.org/api/mosaic/type-aliases/MosaicSliceState.md'
---
[@sqlrooms/mosaic](../index.md) / MosaicSliceState

# Type Alias: MosaicSliceState

> **MosaicSliceState** = `object`

## Properties

### mosaic

> **mosaic**: `SliceFunctions` & `object`

#### Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `connection` | `MosaicConnection` | - |
| `config` | [`MosaicSliceConfig`](MosaicSliceConfig.md) | - |
| `clients` | `Record`<`string`, [`TrackedClient`](TrackedClient.md)> | Record of registered clients by id |
| `selections` | `Record`<`string`, `Selection`> | Named selections for cross-filtering (e.g., 'brush', 'hover') |
| `initialize()` | () => `Promise`<`void`> | - |
| `getSelection()` | (`name`, `type?`) => `Selection` | Get or create a named selection for cross-filtering |
| `createClient()` | (`options`) => `string` | Create a mosaic client and register it |
| `ensureClient()` | (`options`) => `void` | Ensure a client exists with given options (idempotent - creates or updates as needed) |
| `destroyClient()` | (`id`) => `void` | Disconnect and remove a client by id |
| `destroyAllClients()` | () => `void` | Disconnect all clients (useful for cleanup) |
